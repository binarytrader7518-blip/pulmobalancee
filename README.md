# Pulmo Balance: static site for Vercel

Plain static HTML/CSS/JS (no build step). Deploy this folder as the project root.

## Deploy
1. Push this folder to a GitHub repo (repo root = this folder) and import it in Vercel, or run `npx vercel --prod` here.
2. Make sure the production domain is **pulmobalancee.vercel.app** (all canonicals, the sitemap and IndexNow use it).
3. After the deploy, check:
   - https://pulmobalancee.vercel.app/key.txt returns `2ded561c3792ffdf937d92bf630120c5`
   - https://pulmobalancee.vercel.app/order loads (noindex)
   - https://pulmobalancee.vercel.app/go/6 gives a 302 redirect to the affiliate checkout
   - https://pulmobalancee.vercel.app/go/9 returns 404, so it can't be used as an open redirect

## Order routing
- Every purchase button points to `/order?package=2|3|6`. The `BUY NOW` buttons on that page go to `/go/2`, `/go/3` and `/go/6`.
- `vercel.json` defines these routes as fixed server-side 302 redirects to the one affiliate URL you supplied: https://lungreborn.com/b/order-now.php?aff_id=9230
- There are no URL parameters for the redirect target, so it is not an open redirect. To give a package its own link, edit that package's `destination` in `vercel.json`.
- The seller does not sell a single bottle, so there is no `/go/1`.

## IndexNow
- Key: `2ded561c3792ffdf937d92bf630120c5`, served as /key.txt.
- `node scripts/indexnow.mjs --all` submits every URL in the sitemap. `--git-diff HEAD~1` submits only changed pages. Add `--dry-run` to preview without sending.
- `.github/workflows/indexnow.yml` runs automatically after each successful Vercel production deploy.
- An accepted submission (HTTP 200 or 202) means the URL was received. It does not mean the page is indexed.

## Bing Webmaster Tools checklist
1. Add the site at https://www.bing.com/webmasters. You can import it from Google Search Console, or verify with the XML file or meta tag Bing gives you. Add that file to the root, or the meta tag to index.html, then redeploy.
2. Submit the sitemap: https://pulmobalancee.vercel.app/sitemap.xml
3. Paste the URL list below into URL Submission.
4. Spot-check the homepage and /price.html with URL Inspection.
5. Check the IndexNow reports, crawl errors and Search Performance every week.

## IndexNow manual submission URLs
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2F&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fproduct-overview.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fhow-it-works.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fbenefits.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Ffocus-areas%2Findex.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Freviews.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fblog%2Findex.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Ffaq.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Faffiliate-disclosure.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Falternatives.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fblog%2Fbreathing-exercises-daily-routine.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fblog%2Findoor-air-quality-at-home.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fblog%2Fmullein-traditional-use-and-research.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fblog%2Fquercetin-and-pine-bark-antioxidants.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fblog%2Fseasonal-changes-airway-comfort.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fblog%2Fsleep-and-breathing-habits.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fdisclaimer.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Ffocus-areas%2Fairway-clarity.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Ffocus-areas%2Fantioxidant-defense.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Ffocus-areas%2Frespiratory-resilience.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Ffocus-areas%2Fseasonal-comfort.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fprice.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fprivacy-policy.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fproduct-review.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fpros-and-cons.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fterms.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
https://api.indexnow.org/indexnow?url=https%3A%2F%2Fpulmobalancee.vercel.app%2Fwhere-to-buy.html&key=2ded561c3792ffdf937d92bf630120c5&keyLocation=https%3A%2F%2Fpulmobalancee.vercel.app%2Fkey.txt
