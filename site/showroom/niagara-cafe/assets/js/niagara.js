(function () {
  var yearNodes = document.querySelectorAll("[data-year]");
  var navToggles = document.querySelectorAll("[data-menu-toggle]");
  var pageNavLinks = document.querySelectorAll(".nav a, .niagara-nav a");
  var galleryRoot = document.querySelector("[data-lightbox-gallery]");
  var lightbox = document.getElementById("gallery-lightbox");
  var lightboxImage = document.getElementById("gallery-lightbox-image");
  var lightboxCaption = document.getElementById("gallery-lightbox-caption");
  var closeButton = lightbox ? lightbox.querySelector(".gallery-lightbox-close") : null;
  var prevButton = lightbox ? lightbox.querySelector(".gallery-lightbox-prev") : null;
  var nextButton = lightbox ? lightbox.querySelector(".gallery-lightbox-next") : null;
  var contactForms = document.querySelectorAll("[data-contact-form]");

  yearNodes.forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  Array.prototype.forEach.call(pageNavLinks, function (link) {
    var href = link.getAttribute("href");

    if (!href || href.charAt(0) === "#" || href.indexOf("http") === 0) {
      return;
    }

    if (window.location.pathname.split("/").pop() === href) {
      link.classList.add("is-current");
    }

    link.addEventListener("click", function () {
      var mainNav = document.getElementById("main-nav");
      var toggle = document.getElementById("nav-toggle");
      if (!mainNav || !toggle) return;
      if (window.innerWidth > 767) return;
      if (!mainNav.classList.contains("in")) return;
      toggle.click();
    });
  });

  navToggles.forEach(function (button) {
    var targetId = button.getAttribute("aria-controls");
    var nav = document.getElementById(targetId);

    if (!nav) {
      return;
    }

    button.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  if (galleryRoot && lightbox && lightboxImage && lightboxCaption && closeButton && prevButton && nextButton) {
    var shotButtons = Array.prototype.slice.call(galleryRoot.querySelectorAll(".gallery-shot"));
    var currentIndex = 0;

    if (!shotButtons.length) {
      return;
    }

    function renderShot(index) {
      var button = shotButtons[index];
      var shot = button ? button.querySelector("img") : null;

      if (!shot) {
        return;
      }

      currentIndex = index;
      lightboxImage.src = shot.src;
      lightboxImage.alt = shot.alt;
      lightboxCaption.textContent = "";
    }

    function openLightbox(index) {
      renderShot(index);
      lightbox.hidden = false;
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    function step(direction) {
      var nextIndex = (currentIndex + direction + shotButtons.length) % shotButtons.length;
      renderShot(nextIndex);
    }

    shotButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        openLightbox(index);
      });
    });

    lightbox.setAttribute("aria-hidden", "true");
    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", function () { step(-1); });
    nextButton.addEventListener("click", function () { step(1); });
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (lightbox.hidden) {
        return;
      }

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        step(-1);
      }

      if (event.key === "ArrowRight") {
        step(1);
      }
    });
  }

  Array.prototype.forEach.call(contactForms, function (form) {
    var lang = form.getAttribute("data-lang") === "en" ? "en" : "fr";
    var status = form.querySelector("[data-contact-status]");
    var questionNode = form.querySelector("[data-captcha-question]");
    var refreshButton = form.querySelector("[data-captcha-refresh]");
    var answerField = form.querySelector('input[name="captcha"]');
    var expectedAnswer = null;

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function nextCaptcha() {
      var a = Math.floor(Math.random() * 8) + 2;
      var b = Math.floor(Math.random() * 8) + 1;
      expectedAnswer = String(a + b);
      if (questionNode) {
        questionNode.textContent = lang === "en" ? ("What is " + a + " + " + b + " ?") : ("Combien font " + a + " + " + b + " ?");
      }
      if (answerField) answerField.value = "";
    }

    nextCaptcha();
    if (refreshButton) refreshButton.addEventListener("click", nextCaptcha);

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var honeypot = form.querySelector('input[name="company"]');
      if (honeypot && honeypot.value) {
        setStatus(lang === "en" ? "Unable to prepare the email." : "Impossible de préparer l’envoi.");
        return;
      }

      if (!answerField || answerField.value.trim() !== expectedAnswer) {
        setStatus(lang === "en" ? "Incorrect captcha answer." : "Réponse captcha incorrecte.");
        nextCaptcha();
        return;
      }

      var name = (form.querySelector('input[name="name"]') || {}).value || "";
      var email = (form.querySelector('input[name="email"]') || {}).value || "";
      var phone = (form.querySelector('input[name="phone"]') || {}).value || "";
      var subject = (form.querySelector('input[name="subject"]') || {}).value || "";
      var message = (form.querySelector('textarea[name="message"]') || {}).value || "";
      var consent = form.querySelector('input[name="consent"]');

      if (consent && !consent.checked) {
        setStatus(lang === "en" ? "Please accept the consent box." : "Merci de valider la case de consentement.");
        return;
      }

      var mailSubject = (lang === "en" ? "[Website] " : "[Site] ") + subject;
      var body = [
        (lang === "en" ? "Name: " : "Nom : ") + name,
        "Email: " + email,
        (lang === "en" ? "Phone: " : "Téléphone : ") + phone,
        "",
        (lang === "en" ? "Message:" : "Message :"),
        message
      ].join("\n");

      window.location.href = "mailto:contact@niagara-cafe.fr?subject=" + encodeURIComponent(mailSubject) + "&body=" + encodeURIComponent(body);
      setStatus(lang === "en" ? "Your email app should open to send the message." : "Votre application email devrait s’ouvrir pour envoyer le message.");
      nextCaptcha();
    });
  });
})();
