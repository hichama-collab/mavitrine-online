(function () {
  "use strict";

  var header = document.querySelector(".header-area");
  var nav = document.querySelector(".main-nav .nav");
  var menuTrigger = document.querySelector(".menu-trigger");
  var showroomMeta = document.querySelector('meta[name="mvo-showroom-base"]');
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll('.main-nav .nav a[href^="#"]')
  );
  var yearNode = document.getElementById("current-year");

  // SHOWROOM_DEFAULT_BASE: default local/VPS structure when the showroom lives in ./showroom/
  var SHOWROOM_DEFAULT_BASE = "./showroom/";

  function getConfiguredShowroomBase() {
    if (!showroomMeta) {
      return "";
    }

    return (showroomMeta.getAttribute("content") || "").trim();
  }

  function getShowroomBase() {
    var configuredBase = getConfiguredShowroomBase();

    if (configuredBase) {
      return configuredBase;
    }

    return SHOWROOM_DEFAULT_BASE;
  }

  function buildShowroomUrl(path) {
    var base = getShowroomBase();
    var normalizedBase = base.charAt(base.length - 1) === "/" ? base : base + "/";
    var normalizedPath = path.replace(/^\/+/, "");
    return normalizedBase + normalizedPath;
  }

  function hydrateShowroomLinks() {
    var links = document.querySelectorAll("[data-showroom-link]");

    links.forEach(function (link) {
      var path = link.getAttribute("data-showroom-link") || "index.html";
      link.setAttribute("href", buildShowroomUrl(path));
    });
  }

  function syncHeaderState() {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  function closeMenu() {
    if (!nav || !menuTrigger) {
      return;
    }

    nav.classList.remove("is-open");
    menuTrigger.classList.remove("active");
  }

  function setupMenu() {
    if (!nav || !menuTrigger) {
      return;
    }

    menuTrigger.addEventListener("click", function () {
      menuTrigger.classList.toggle("active");
      nav.classList.toggle("is-open");
    });

    navAnchors.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  function setupActiveSections() {
    if (!("IntersectionObserver" in window) || !navAnchors.length) {
      return;
    }

    var sectionMap = navAnchors
      .map(function (link) {
        var id = link.getAttribute("href");
        var section = id ? document.querySelector(id) : null;
        return section ? { link: link, section: section } : null;
      })
      .filter(Boolean);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          sectionMap.forEach(function (item) {
            item.link.classList.toggle("active", item.section === entry.target);
          });
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.1
      }
    );

    sectionMap.forEach(function (item) {
      observer.observe(item.section);
    });
  }

  function setYear() {
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  }

  hydrateShowroomLinks();
  setupMenu();
  setupActiveSections();
  setYear();
  syncHeaderState();

  window.addEventListener("scroll", syncHeaderState, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      closeMenu();
    }
  });
})();
