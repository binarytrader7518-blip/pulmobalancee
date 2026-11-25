#!/usr/bin/env node
// IndexNow submitter for the Pulmo Balance site.
// Usage:
//   node scripts/indexnow.mjs --all                 submit every URL in sitemap.xml
//   node scripts/indexnow.mjs --git-diff HEAD~1     submit only pages whose HTML changed (added/modified/deleted)
//   add --dry-run to print without sending
import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "pulmobalancee.vercel.app";
const ORIGIN = `https://${HOST}`;
const KEY = readFileSync(join(ROOT, "key.txt"), "utf8").trim();
const KEY_LOCATION = `${ORIGIN}/key.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const args = process.argv.slice(2);
const dry = args.includes("--dry-run");

const sitemap = readFileSync(join(ROOT, "sitemap.xml"), "utf8");
const canonical = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const fileToUrl = f => {
  f = f.replace(/^\.?\/?/, "");
  if (f === "index.html") return `${ORIGIN}/`;
  return `${ORIGIN}/${f}`;
};

let urls = [];
if (args.includes("--all")) urls = canonical;
else {
  const i = args.indexOf("--git-diff");
  const ref = i >= 0 ? args[i + 1] : "HEAD~1";
  const out = execSync(`git diff --name-status ${ref} -- '*.html'`, { cwd: ROOT, encoding: "utf8" });
  for (const line of out.split("\n").filter(Boolean)) {
    const [status, file] = line.split(/\s+/);
    const u = fileToUrl(file);
    // modified/added pages must be canonical sitemap URLs; deleted pages are submitted so engines recrawl the 404
    if (status === "D" || canonical.includes(u)) urls.push(u);
  }
}
urls = [...new Set(urls)];
if (!urls.length) { console.log("IndexNow: nothing to submit."); process.exit(0); }

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };
console.log(`IndexNow: ${urls.length} URL(s)`, dry ? "(dry run)" : "");
urls.forEach(u => console.log("  " + u));
if (dry) process.exit(0);

for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body) });
    console.log(`IndexNow response: HTTP ${res.status}`);
    if (res.status === 200 || res.status === 202) { console.log("Accepted (received for processing; this is not the same as indexed)."); process.exit(0); }
    if ([400, 403, 422].includes(res.status)) { console.error(await res.text()); process.exit(1); } // not retryable
  } catch (e) { console.error(`Attempt ${attempt} failed: ${e.message}`); }
  await new Promise(r => setTimeout(r, attempt * 5000));
}
process.exit(1);
