/* Laundro-Hub — small site behaviours (no dependencies) */
(function () {
  'use strict';

  // ----- Mobile menu -----
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('[data-nav-toggle]');
  if (header && toggle) {
    var setOpen = function (open) {
      header.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(!header.classList.contains('menu-open'));
    });
    header.querySelectorAll('.mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('menu-open')) { setOpen(false); toggle.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1100) setOpen(false);
    });
  }

  // ----- Contact form (front-end only) -----
  // TODO: connect to a form backend (e.g. Formspree, Netlify Forms, or your own endpoint).
  var form = document.querySelector('[data-contact-form]');
  var success = document.querySelector('[data-form-success]');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.hidden = true;
      success.hidden = false;
      success.querySelector('h3').focus();
    });
    var again = success.querySelector('[data-form-reset]');
    if (again) {
      again.addEventListener('click', function () {
        form.reset();
        success.hidden = true;
        form.hidden = false;
      });
    }
  }

  // ----- Footer year -----
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
