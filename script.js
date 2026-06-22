(function () {
  'use strict';

  var LANG_KEY = 'portfolio_lang';

  function setLanguage(lang) {
    var enEls = document.querySelectorAll('.lang-en');
    var esEls = document.querySelectorAll('.lang-es');
    var btn   = document.getElementById('lang-toggle');

    enEls.forEach(function (el) { el.style.display = (lang === 'en') ? '' : 'none'; });
    esEls.forEach(function (el) { el.style.display = (lang === 'es') ? '' : 'none'; });

    if (btn) {
      btn.textContent    = (lang === 'en') ? 'ES' : 'EN';
      btn.dataset.current = lang;
    }

    document.documentElement.lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = 'en';
    try { saved = localStorage.getItem(LANG_KEY) || 'en'; } catch (e) {}
    setLanguage(saved);

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = btn.dataset.current || 'en';
        setLanguage(current === 'en' ? 'es' : 'en');
      });
    }
  });
})();
