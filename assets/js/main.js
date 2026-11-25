/* Pulmo Balance site script: navigation, reveals, 3D tilt, sticky bar,
   informational toast, promotional modal and order-page package selection.
   Everything degrades gracefully without JavaScript. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function store(kind) { try { return window[kind]; } catch (e) { return null; } }
  var LS = store("localStorage"), SS = store("sessionStorage");
  function get(s, k) { try { return s ? s.getItem(k) : null; } catch (e) { return null; } }
  function set(s, k, v) { try { if (s) s.setItem(k, v); } catch (e) {} }

  // outbound purchase-click hook (no personal data; only pushes to an existing dataLayer)
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-track]");
    if (a && window.dataLayer && window.dataLayer.push) {
      window.dataLayer.push({ event: "purchase_click", placement: a.getAttribute("data-track"), href: a.getAttribute("href") });
    }
  });

  // mobile navigation
  var btn = document.querySelector(".menu-btn"), links = document.getElementById("nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) { btn.click(); btn.focus(); }
    });
  }

  // scroll reveal
  var rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    rev.forEach(function (el) { io.observe(el); });
  } else { rev.forEach(function (el) { el.classList.add("in"); }); }

  // pointer-driven 3D tilt on the hero bottle
  var stage = document.querySelector("[data-tilt]");
  if (stage && !reduce && window.matchMedia("(pointer:fine)").matches) {
    var wrap = stage.querySelector(".bottle-wrap");
    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      wrap.style.transform = "rotateY(" + (x * 16).toFixed(2) + "deg) rotateX(" + (-y * 12).toFixed(2) + "deg) translateZ(30px)";
    });
    stage.addEventListener("pointerleave", function () { wrap.style.transform = ""; });
  }

  // order page: highlight requested package (?package=2|3|6)
  var params = new URLSearchParams(location.search);
  var pk = params.get("package");
  if (pk && /^(2|3|6)$/.test(pk)) {
    var card = document.querySelector('[data-package="' + pk + '"]');
    if (card) { card.classList.add("selected"); setTimeout(function () { card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); }, 300); }
  }

  // sticky 6-bottle offer bar
  var bar = document.getElementById("sticky-bar");
  var modalOpen = false;
  if (bar) {
    var closed = get(SS, "pb_bar_closed") === "1";
    var onScroll = function () {
      if (closed) return;
      bar.classList.toggle("show", window.scrollY > 700 && !modalOpen);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    bar.querySelector(".sticky-x").addEventListener("click", function () {
      closed = true; set(SS, "pb_bar_closed", "1"); bar.classList.remove("show");
    });
  }

  // centered promotional modal (once per 24h after dismissal)
  var modal = document.getElementById("promo-modal");
  var lastFocus = null;
  function focusables() { return modal.querySelectorAll('a[href],button:not([disabled])'); }
  function openModal() {
    if (!modal || document.hidden) return;
    modalOpen = true; lastFocus = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add("open"); });
    document.body.classList.add("no-scroll");
    if (bar) bar.classList.remove("show");
    hideToast();
    setTimeout(function () { var f = focusables(); if (f.length) f[0].focus(); }, 60);
  }
  function closeModal() {
    if (!modalOpen) return;
    modalOpen = false;
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    set(LS, "pb_modal_until", String(Date.now() + 24 * 3600 * 1000));
    set(SS, "pb_modal_seen", "1");
    setTimeout(function () { modal.hidden = true; }, reduce ? 0 : 380);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (modal) {
    modal.querySelector(".modal-x").addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    modal.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); closeModal(); }
      if (e.key === "Tab") {
        var f = focusables(), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    modal.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { set(LS, "pb_modal_until", String(Date.now() + 24 * 3600 * 1000)); }); });
    var until = parseInt(get(LS, "pb_modal_until") || "0", 10);
    var allowed = !(until > Date.now()) && get(SS, "pb_modal_seen") !== "1" && !document.body.hasAttribute("data-no-modal");
    if (allowed) {
      var start = function () { setTimeout(openModal, 6500); };
      if (document.readyState === "complete") start(); else window.addEventListener("load", start);
    }
  }

  // bottom-left informational toast (never overlaps the modal)
  var toast = document.getElementById("info-toast");
  var tTimer = null, cycle = null, idx = 0, toastOff = get(SS, "pb_toast_off") === "1";
  function hideToast() { if (toast) toast.classList.remove("show"); }
  function showToast() {
    if (!toast || toastOff || modalOpen || document.hidden) return schedule();
    var msgs = toast.querySelectorAll("template");
    if (!msgs.length) return;
    toast.querySelector("p").innerHTML = msgs[idx % msgs.length].innerHTML;
    idx++;
    toast.classList.add("show");
    clearTimeout(tTimer);
    tTimer = setTimeout(function () { hideToast(); schedule(); }, 6000);
  }
  function schedule() { clearTimeout(cycle); if (!toastOff) cycle = setTimeout(showToast, 18000 + Math.random() * 8000); }
  if (toast) {
    toast.querySelector(".toast-x").addEventListener("click", function () { toastOff = true; set(SS, "pb_toast_off", "1"); hideToast(); clearTimeout(cycle); });
    setTimeout(showToast, 5000);
  }
})();
