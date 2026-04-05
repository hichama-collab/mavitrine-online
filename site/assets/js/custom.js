(function () {
  "use strict";

  var content = window.MVO_SITE_CONTENT;
  var header = document.querySelector(".header-area");
  var nav = document.getElementById("nav-list");
  var menuTrigger = document.querySelector(".menu-trigger");
  var showroomMeta = document.querySelector('meta[name="mvo-showroom-base"]');
  var yearNode = document.getElementById("current-year");
  var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang-button"));
  var currentLang = getInitialLang();
  var SHOWROOM_DEFAULT_BASE = "./showroom/";

  if (!content) {
    return;
  }

  function getInitialLang() {
    var queryLang = new URLSearchParams(window.location.search).get("lang");
    if (queryLang === "en" || queryLang === "fr") {
      window.localStorage.setItem("mvo-lang", queryLang);
      return queryLang;
    }
    var stored = window.localStorage.getItem("mvo-lang");
    return stored === "en" ? "en" : "fr";
  }

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
    var normalizedPath = String(path || "index.html").replace(/^\/+/, "");
    return normalizedBase + normalizedPath + "?lang=" + currentLang;
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
  }

  function setupLanguageButtons() {
    langButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var nextLang = button.getAttribute("data-lang");
        if (!nextLang || nextLang === currentLang) {
          return;
        }
        currentLang = nextLang;
        window.localStorage.setItem("mvo-lang", currentLang);
        render();
        closeMenu();
      });
    });
  }

  function setMeta(lang) {
    var meta = content.meta[lang];
    if (!meta) {
      return;
    }

    document.title = meta.title;
    document.documentElement.setAttribute("lang", lang);

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", meta.description);
    }

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", meta.title);
    }

    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", meta.description);
    }

    var twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", meta.title);
    }

    var twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", meta.description);
    }

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale && meta.locale) {
      ogLocale.setAttribute("content", meta.locale);
    }
  }

  function renderNav(page) {
    var html = page.nav
      .map(function (item) {
        var href = item.showroom ? buildShowroomUrl(item.path) : item.href;
        var attrs = item.showroom ? ' data-showroom-link="' + item.path + '"' : "";
        return '<li><a href="' + href + '"' + attrs + ">" + item.label + "</a></li>";
      })
      .join("");

    nav.innerHTML = html;
  }

  function renderHero(page) {
    var hero = page.hero;
    document.getElementById("hero-copy").innerHTML =
      '<span class="hero-eyebrow">' + hero.eyebrow + "</span>" +
      "<h1>" + hero.title + "</h1>" +
      "<p>" + hero.text + "</p>" +
      '<div class="hero-actions">' +
      '<a class="button button-primary" href="#contact">' + hero.ctaPrimary + "</a>" +
      '<a class="button button-secondary" href="' + buildShowroomUrl("index.html") + '">' + hero.ctaSecondary + "</a>" +
      "</div>" +
      '<div class="hero-points">' +
      hero.points
        .map(function (point) {
          return '<div class="hero-point"><i class="fa fa-check"></i><span>' + point + "</span></div>";
        })
        .join("") +
      "</div>";

    document.getElementById("hero-visual-grid").innerHTML = hero.heroCards
      .map(function (card) {
        return (
          '<article class="hero-mini-card">' +
          '<img src="' + card.image + '" alt="' + card.title + '">' +
          '<div class="hero-mini-copy"><strong>' + card.title + "</strong><span>" + card.copy + "</span></div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderProblem(page) {
    document.getElementById("problem-grid").innerHTML = page.problem.cards
      .map(function (card) {
        return '<article class="problem-card"><h2>' + card[0] + "</h2><p>" + card[1] + "</p></article>";
      })
      .join("");
  }

  function renderHeading(targetId, section) {
    document.getElementById(targetId).innerHTML =
      '<span class="section-kicker">' + section.kicker + "</span>" +
      "<h2>" + section.title + "</h2>" +
      "<p>" + section.text + "</p>";
  }

  function renderSectors(page) {
    renderHeading("sectors-heading", page.sectors);
    document.getElementById("sector-grid").innerHTML = page.sectors.cards
      .map(function (card) {
        return '<article class="sector-card"><h3>' + card[0] + "</h3><p>" + card[1] + "</p></article>";
      })
      .join("");
    document.getElementById("sectors-cta").textContent = page.sectors.cta;
  }

  function renderBenefits(page) {
    renderHeading("benefits-heading", page.benefits);
    document.getElementById("benefit-grid").innerHTML = page.benefits.items
      .map(function (item) {
        return '<article class="benefit-card"><h3>' + item[0] + "</h3><p>" + item[1] + "</p></article>";
      })
      .join("");
  }

  function renderStyles(page) {
    var section = page.stylesSection;
    renderHeading("styles-heading", section);
    document.getElementById("styles-grid").innerHTML = content.styles
      .map(function (style) {
        return (
          '<article class="style-card">' +
          '<div class="style-media">' +
          '<div class="style-screen"><img src="' + style.desktop + '" alt="' + style.name[currentLang] + '"></div>' +
          '<div class="style-phone"><img src="' + style.mobile + '" alt="' + style.name[currentLang] + ' mobile"></div>' +
          "</div>" +
          '<div class="style-content">' +
          '<div class="style-top"><span class="style-label">' + style.label[currentLang] + "</span></div>" +
          "<h3>" + style.name[currentLang] + "</h3>" +
          "<p>" + style.description[currentLang] + "</p>" +
          '<div class="style-tags">' +
          style.tags[currentLang]
            .map(function (tag) {
              return "<span>" + tag + "</span>";
            })
            .join("") +
          "</div>" +
          '<div class="style-actions">' +
          '<a class="button button-primary" href="' + buildShowroomUrl(style.demo) + '">' + section.demo + "</a>" +
          '<a class="button button-secondary" href="' + buildShowroomUrl(style.brief) + '">' + section.brief + "</a>" +
          '<a class="button button-secondary" href="#contact">' + section.choose + "</a>" +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
    document.getElementById("styles-cta").textContent = section.sectionCta;
  }

  function renderShowroomCallout(page) {
    var section = page.showroom;
    document.getElementById("showroom-callout").innerHTML =
      '<div><span class="section-kicker">' + section.kicker + "</span><h2>" + section.title + "</h2><p>" + section.text + "</p><small>" + section.note + "</small></div>" +
      '<div class="showroom-actions">' +
      '<a class="button button-primary" href="' + buildShowroomUrl("index.html") + '">' + section.cta + "</a>" +
      '<a class="button button-ghost" href="#contact">' + page.contact.primaryCta + "</a>" +
      "</div>";
  }

  function renderExample(page) {
    var section = page.example;
    renderHeading("example-heading", section);
    document.getElementById("example-showcase").innerHTML =
      '<article class="example-card">' +
      '<div class="example-media">' +
      '<div class="example-screen">' +
      '<img src="assets/images/examples/niagara/banner.jpg" alt="' + section.label + ' homepage">' +
      "</div>" +
      '<div class="example-phone">' +
      '<img src="assets/images/examples/niagara/privatisation.jpg" alt="' + section.label + ' mobile view">' +
      "</div>" +
      "</div>" +
      '<div class="example-content">' +
      '<span class="style-label">' + section.label + "</span>" +
      "<h3>" + section.lead + "</h3>" +
      '<ul class="example-points">' +
      section.points.map(function (point) { return "<li>" + point + "</li>"; }).join("") +
      "</ul>" +
      '<div class="example-stats">' +
      section.stats.map(function (item) {
        return '<div class="example-stat"><strong>' + item[0] + '</strong><span>' + item[1] + "</span></div>";
      }).join("") +
      "</div>" +
      '<div class="style-actions">' +
      '<a class="button button-primary" href="' + buildShowroomUrl("index.html") + '">' + section.ctaPrimary + "</a>" +
      '<a class="button button-secondary" href="#contact">' + section.ctaSecondary + "</a>" +
      "</div>" +
      "</div>" +
      "</article>";
  }

  function renderContent(page) {
    renderHeading("content-heading", page.content);
    document.getElementById("content-panel-title").textContent = page.content.panelTitle;
    document.getElementById("content-panel-items").innerHTML = page.content.panelItems
      .map(function (item) {
        return "<span>" + item + "</span>";
      })
      .join("");
    document.getElementById("content-result-title").textContent = page.content.resultTitle;
    document.getElementById("content-result-rows").innerHTML = page.content.resultRows
      .map(function (row) {
        return '<div class="content-result-row"><strong>' + row[0] + "</strong><span>" + row[1] + "</span></div>";
      })
      .join("");
  }

  function renderSocial(page) {
    renderHeading("social-heading", page.social);
    document.getElementById("social-grid").innerHTML =
      buildSocialCard({
        platform: "Instagram",
        title: page.social.instagramTitle,
        points: page.social.instagramPoints,
        image: "assets/images/social/instagram-preview.png"
      }) +
      buildSocialCard({
        platform: "Facebook",
        title: page.social.facebookTitle,
        points: page.social.facebookPoints,
        image: "assets/images/social/facebook-preview.png"
      });
    document.getElementById("social-cta").textContent = page.social.cta;
  }

  function buildSocialCard(card) {
    return (
      '<article class="social-card">' +
      "<div>" +
      '<span class="section-chip">' + card.platform + "</span>" +
      "<h3>" + card.title + "</h3>" +
      '<ul class="social-list">' +
      card.points
        .map(function (point) {
          return "<li>" + point + "</li>";
        })
        .join("") +
      "</ul>" +
      "</div>" +
      '<div class="social-phone"><img src="' + card.image + '" alt="' + card.platform + ' preview"></div>' +
      "</article>"
    );
  }

  function renderProcess(page) {
    renderHeading("process-heading", page.process);
    document.getElementById("process-grid").innerHTML = page.process.steps
      .map(function (step, index) {
        return (
          '<article class="process-card">' +
          '<span class="process-index">0' + (index + 1) + "</span>" +
          "<h3>" + step[0] + "</h3>" +
          "<p>" + step[1] + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderPricing(page) {
    renderHeading("pricing-heading", page.pricing);
    document.getElementById("pricing-grid").innerHTML = page.pricing.cards
      .map(function (card) {
        return (
          '<article class="pricing-card">' +
          "<h3>" + card.title + "</h3>" +
          '<span class="pricing-price">' + card.price + "</span>" +
          "<p>" + card.text + "</p>" +
          '<ul class="pricing-points">' +
          card.points
            .map(function (point) {
              return "<li>" + point + "</li>";
            })
            .join("") +
          "</ul>" +
          '<a class="button button-primary" href="#contact">' + card.cta + "</a>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderProof(page) {
    renderHeading("proof-heading", page.proof);
    document.getElementById("proof-grid").innerHTML = page.proof.cards
      .map(function (card) {
        return '<article class="proof-card"><h3>' + card[0] + "</h3><p>" + card[1] + "</p></article>";
      })
      .join("");
  }

  function renderAdmin(page) {
    var section = page.admin;
    document.getElementById("admin-proof").innerHTML =
      '<div class="admin-proof-copy">' +
      '<span class="section-kicker">' + section.kicker + "</span>" +
      "<h2>" + section.title + "</h2>" +
      "<p>" + section.text + "</p>" +
      '<p class="admin-proof-note">' + section.footer + "</p>" +
      "</div>" +
      '<div class="admin-proof-card">' +
      '<div class="admin-proof-head">' +
      '<span class="section-chip section-chip-dark">' + section.badge + "</span>" +
      "<strong>" + section.cardTitle + "</strong>" +
      "</div>" +
      '<div class="admin-proof-toolbar">' +
      section.toolbar.map(function (item) { return "<span>" + item + "</span>"; }).join("") +
      "</div>" +
      '<div class="admin-proof-grid">' +
      section.fields.map(function (field) {
        return '<label><span>' + field[0] + '</span><em>' + field[1] + "</em></label>";
      }).join("") +
      "</div>" +
      "</div>";
  }

  function renderContact(page) {
    var section = page.contact;
    document.getElementById("contact-copy").innerHTML =
      '<span class="section-kicker">' + section.kicker + "</span>" +
      "<h2>" + section.title + "</h2>" +
      "<p>" + section.text + "</p>" +
      '<h3 style="margin-top:22px;">' + section.actionsTitle + "</h3>" +
      '<ul class="contact-list">' +
      section.actions
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("") +
      "</ul>";

    document.getElementById("contact-primary-cta").textContent = section.primaryCta;
  }

  function renderFooter(page) {
    document.getElementById("footer-note").textContent = page.contact.footerNote;
    document.getElementById("footer-nav-title").textContent = page.footer.navTitle;
    document.getElementById("footer-contact-title").textContent = page.footer.contactTitle;
    document.getElementById("footer-social-title").textContent = page.footer.socialTitle;
    document.getElementById("footer-legal-link").textContent = page.footer.legal;

    document.getElementById("footer-nav-links").innerHTML = page.nav
      .map(function (item) {
        var href = item.showroom ? buildShowroomUrl(item.path) : item.href;
        return '<a href="' + href + '">' + item.label + "</a>";
      })
      .join("");

    document.getElementById("footer-social-links").innerHTML = page.footer.socials
      .map(function (item, index) {
        if (index === 2) {
          return '<a href="' + buildShowroomUrl("index.html") + '">' + item + "</a>";
        }
        return '<a href="#contact">' + item + "</a>";
      })
      .join("");
  }

  function updateLangButtons() {
    langButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang") === currentLang);
    });
  }

  function setupActiveSections() {
    var navAnchors = Array.prototype.slice
      .call(document.querySelectorAll('.main-nav .nav a[href^="#"]'))
      .filter(function (anchor) {
        return !!document.querySelector(anchor.getAttribute("href"));
      });

    if (!("IntersectionObserver" in window) || !navAnchors.length) {
      return;
    }

    var sectionMap = navAnchors.map(function (link) {
      return { link: link, section: document.querySelector(link.getAttribute("href")) };
    });

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
      item.link.addEventListener("click", closeMenu);
    });
  }

  function setYear() {
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  }

  function render() {
    var page = content.languages[currentLang];
    if (!page) {
      return;
    }

    setMeta(currentLang);
    renderNav(page);
    renderHero(page);
    renderProblem(page);
    renderSectors(page);
    renderBenefits(page);
    renderStyles(page);
    renderShowroomCallout(page);
    renderExample(page);
    renderContent(page);
    renderAdmin(page);
    renderSocial(page);
    renderProcess(page);
    renderPricing(page);
    renderProof(page);
    renderContact(page);
    renderFooter(page);
    updateLangButtons();
    setupActiveSections();
    syncHeaderState();
  }

  render();
  setupMenu();
  setupLanguageButtons();
  setYear();

  window.addEventListener("scroll", syncHeaderState, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      closeMenu();
    }
  });
})();
