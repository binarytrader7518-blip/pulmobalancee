/* Pulmo Balance site script: nav, reveal, 3D tilt, sticky bar, promo modal, info toast. */
(function () {
  "use strict";
  var d = document, root = d.documentElement;
  root.classList.remove("no-js");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function store(kind) { try { var s = window[kind]; var k = "__t"; s.setItem(k, "1"); s.removeItem(k); return s; } catch (e) { return null; } }
  var LS = store("localStorage"), SS = store("sessionStorage");
  function get(s, k) { try { return s ? s.getItem(k) : null; } catch (e) { return null; } }
  function set(s, k, v) { try { if (s) s.setItem(k, v); } catch (e) {} }

  /* mobile nav */
  var btn = d.querySelector(".menu-btn"), links = d.getElementById("nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape" && links.classList.contains("open")) { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); } });
  }

  /* reveal on scroll */
  var rev = d.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    rev.forEach(function (el) { io.observe(el); });
  } else { rev.forEach(function (el) { el.classList.add("in"); }); }

  /* hero 3D tilt + ingredient parallax */
  var stage = d.querySelector(".stage");
  if (stage && !reduce && window.matchMedia("(pointer:fine)").matches) {
    var b3 = stage.querySelector(".bottle-3d"), ings = stage.querySelectorAll(".ing"), raf = 0;
    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        if (b3) b3.style.transform = "rotateY(" + (x * 16).toFixed(2) + "deg) rotateX(" + (-y * 10).toFixed(2) + "deg)";
        ings.forEach(function (el) { var depth = parseFloat(el.getAttribute("data-depth") || "1"); el.style.transform = "translate(" + (x * -22 * depth).toFixed(1) + "px," + (y * -18 * depth).toFixed(1) + "px)"; });
      });
    });
    stage.addEventListener("pointerleave", function () { if (b3) b3.style.transform = ""; ings.forEach(function (el) { el.style.transform = ""; }); });
  }

  /* external product image fallback */
  d.querySelectorAll("img[data-fallback]").forEach(function (img) {
    function swap() { var m = d.createElement("div"); m.className = "mono"; m.setAttribute("role", "img"); m.setAttribute("aria-label", img.getAttribute("alt") || "Product image"); m.textContent = img.getAttribute("data-fallback"); img.replaceWith(m); }
    if (img.complete && img.naturalWidth === 0) swap(); else img.addEventListener("error", swap, { once: true });
  });

  /* order page: preselect package from ?package= */
  var og = d.querySelector(".order-grid");
  if (og) {
    var m = /[?&]package=(2|3|6)\b/.exec(location.search);
    var pick = m ? m[1] : "6", card = og.querySelector('[data-pack="' + pick + '"]');
    if (card) { card.classList.add("selected"); var h = card.querySelector("h3"); if (h && m) { card.setAttribute("tabindex", "-1"); } }
  }

  /* sticky buy bar */
  var bar = d.querySelector(".sticky-buy");
  if (bar && !get(SS, "pb_bar_closed")) {
    var trig = d.querySelector("[data-sticky-after]") || d.querySelector("main > :first-child");
    var shown = false;
    function onScroll() {
      var lim = trig ? trig.getBoundingClientRect().bottom : 400;
      var nearEnd = (window.innerHeight + window.scrollY) > (d.body.scrollHeight - 520);
      var want = lim < 0 && !nearEnd;
      if (want !== shown) { shown = want; bar.classList.toggle("show", want); d.body.classList.toggle("has-sticky", want); }
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    var bx = bar.querySelector(".x");
    if (bx) bx.addEventListener("click", function () { bar.remove(); d.body.classList.remove("has-sticky"); set(SS, "pb_bar_closed", "1"); });
  }

  /* promo modal (centered) */
  var modal = d.getElementById("promo-modal"), lastFocus = null, modalOpen = false;
  var COOLDOWN = 24 * 60 * 60 * 1000;
  function modalAllowed() {
    if (!modal) return false;
    var t = parseInt(get(LS, "pb_modal_seen") || "0", 10);
    if (t && Date.now() - t < COOLDOWN) return false;
    if (get(SS, "pb_modal_seen")) return false;
    return true;
  }
  function focusables() { return modal.querySelectorAll('a[href],button:not([disabled])'); }
  function trap(e) {
    if (e.key === "Escape") { e.preventDefault(); closeModal(); return; }
    if (e.key !== "Tab") return;
    var f = focusables(), first = f[0], last = f[f.length - 1];
    if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function openModal() {
    if (!modalAllowed() || modalOpen) return;
    hideToast();
    lastFocus = d.activeElement; modalOpen = true;
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add("open"); });
    d.body.classList.add("modal-lock");
    modal.setAttribute("aria-hidden", "false");
    d.addEventListener("keydown", trap);
    setTimeout(function () { var c = modal.querySelector(".close"); if (c) c.focus(); }, 60);
    set(LS, "pb_modal_seen", String(Date.now())); set(SS, "pb_modal_seen", "1");
  }
  function closeModal() {
    if (!modalOpen) return;
    modalOpen = false;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    d.body.classList.remove("modal-lock");
    d.removeEventListener("keydown", trap);
    setTimeout(function () { modal.hidden = true; }, reduce ? 0 : 320);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    scheduleToast(6000);
  }
  if (modal) {
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    modal.querySelectorAll("[data-close]").forEach(function (b) { b.addEventListener("click", closeModal); });
  }

  /* informational toast (bottom-left) */
  var toast = d.getElementById("info-toast"), tTimer = 0, hTimer = 0, tIndex = 0, tStopped = !!get(SS, "pb_toast_closed");
  var MSGS = window.PB_TOAST || [];
  function hideToast() { if (toast) toast.classList.remove("show"); clearTimeout(hTimer); }
  function showToast() {
    if (!toast || tStopped || modalOpen || !MSGS.length) return;
    var msg = MSGS[tIndex % MSGS.length]; tIndex++;
    toast.querySelector(".msg").innerHTML = msg;
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add("show"); });
    hTimer = setTimeout(function () { toast.classList.remove("show"); scheduleToast(18000 + Math.random() * 8000); }, 6000);
  }
  function scheduleToast(ms) { if (!toast || tStopped) return; clearTimeout(tTimer); tTimer = setTimeout(showToast, ms); }
  if (toast) {
    toast.querySelector(".close").addEventListener("click", function () { tStopped = true; hideToast(); clearTimeout(tTimer); set(SS, "pb_toast_closed", "1"); });
  }

  function start() {
    if (modal && modalAllowed()) { setTimeout(openModal, 6000); }
    else scheduleToast(5000);
  }
  if (d.readyState === "complete") start(); else window.addEventListener("load", start);
})();
