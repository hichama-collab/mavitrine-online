(function () {
  var BRAND = {
    brand: "Ma Vitrine Online",
    owner: "Hicham AIFOUT",
    address: "10 Av. Pierre 1er de Serbie, 75116 Paris",
    phoneDisplay: "+33 6 11 09 76 55",
    phoneHref: "+33611097655",
    email: "contact@mavitrineonline.fr"
  };

  var PERSON_ROLES = [
    "Fondateur - Ma Vitrine Online",
    "Direction - Ma Vitrine Online",
    "Pilotage - Ma Vitrine Online",
    "Coordination - Ma Vitrine Online",
    "Accompagnement - Ma Vitrine Online"
  ];

  var PRESETS = {
    "Lounge-1.0.0": {
      model: "Model 1",
      style: "Atmosphere",
      showcaseTitle: "Une ambiance calme pour cafe, brunch ou adresse premium.",
      showcaseText: "Ce style fonctionne tres bien pour un lieu qui mise sur les photos, les respirations et un message haut de gamme sans surcharge visuelle.",
      positioning: "Grand hero, mise en scene editoriale, sensation de lieu soigne et mature.",
      modulesText: "Accueil immersif, carte courte, galerie photo, prise de contact rapide et reseaux sociaux.",
      useCase: "Ideal pour coffee shop, brunch, cave a manger ou petit restaurant de quartier tres image.",
      replace: {
        "Lounge Cafe": BRAND.brand,
        "Lounge": BRAND.brand
      },
      patches: [
        { selector: ".intro-header__overline", mode: "text", value: "Showroom" },
        { selector: ".intro-header__big-type", mode: "html", value: "Ma Vitrine<br>Online" },
        { selector: ".intro-block-content__text", mode: "text", value: "Une base apaisante pour presenter une adresse, raconter l'ambiance et installer une vraie sensation de qualite." },
        { selector: ".header-contact__num", mode: "text", value: "Choisir ce style" },
        { selector: ".header-contact__num", mode: "attr", attr: "href", value: "#mvo-contact" },
        { selector: ".intro-block-content__social a", mode: "text", values: ["FB", "IG", "WEB", "DEMO"] }
      ]
    },
    "burgerking-main": {
      model: "Model 2",
      style: "Pop Express",
      showcaseTitle: "Un style energique pour restauration rapide, burger ou carte courte.",
      showcaseText: "La structure est directe, lisible et pensee pour pousser les clics vers la carte, la commande ou la reservation.",
      positioning: "Visuels forts, promesses claires, rythme commercial et boutons tres visibles.",
      modulesText: "Hero carrousel, offres phares, modules de conversion, carte rapide et page contact.",
      useCase: "Ideal pour burger, tacos, street-food, pizzeria rapide ou concept de livraison.",
      replace: {
        "Burger King": BRAND.brand
      },
      hide: [".feature", ".menu", ".team", ".blog"],
      patches: [
        { selector: ".navbar-brand", mode: "html", value: "Ma <span>Vitrine</span> Online" },
        { selector: ".carousel-text h1", mode: "html", values: [
          "Une vitrine qui donne<br><span>envie d'entrer</span>",
          "Un style pense pour<br><span>la carte courte</span>",
          "Une base faite pour<br><span>convertir vite</span>"
        ]},
        { selector: ".carousel-text p", mode: "text", values: [
          "Une page d'accueil tres lisible pour mettre en avant un concept, une promesse et deux actions claires.",
          "Ce template rassure vite le visiteur avec un discours simple, des visuels forts et une hierarchie commerciale nette.",
          "Parfait pour un restaurant qui veut presenter ses offres, ses horaires et ses liens de commande sans friction."
        ]},
        { selector: ".carousel-btn .btn:first-child", mode: "text", value: "Voir les modules" },
        { selector: ".carousel-btn .btn:last-child", mode: "text", value: "Parler du projet" }
      ]
    },
    "delicious-master": {
      model: "Model 3",
      style: "Editorial Food",
      showcaseTitle: "Une base magazine pour concept food, brunch ou lieu qui veut raconter une histoire.",
      showcaseText: "La navigation et la mise en page donnent tout de suite une sensation de contenu riche, d'univers de marque et d'inspiration.",
      positioning: "Beaucoup de place pour le storytelling, les actualites, les photos et les blocs inspiration.",
      modulesText: "Hero editorial, selections, blocs contenu, articles, pages dediees et sections galerie.",
      useCase: "Ideal pour brunch, traiteur, concept food, epicerie fine ou restaurant avec actualites regulieres.",
      replace: {
        "Delicious": BRAND.brand
      },
      hide: [".top-catagory-area", ".best-receipe-area", ".small-receipe-area", ".quote-subscribe-adds"],
      patches: [
        { selector: ".hero-slides-content h2", mode: "text", values: [
          "Un style editorial pour vendre une ambiance",
          "Une vitrine qui laisse respirer le contenu",
          "Un bon choix pour raconter un concept"
        ]},
        { selector: ".hero-slides-content p", mode: "text", value: "Cette base est pratique pour mettre en avant une histoire, des visuels, des actualites et un vrai ton de marque autour du lieu." },
        { selector: ".hero-slides-content a", mode: "text", value: "Voir la demo" }
      ]
    },
    "feane-1.0.0": {
      model: "Model 4",
      style: "Street Kitchen",
      showcaseTitle: "Un style dynamique pour restaurant urbain, livraison ou click and collect.",
      showcaseText: "Le hero est immediat, les appels a l'action sont visibles et la structure convient tres bien a une carte simple avec offres fortes.",
      positioning: "Template efficace, mobile-friendly et tres direct pour aller vite a l'essentiel.",
      modulesText: "Hero carrousel, presentation, offres, avis, reservation et rappels visuels de commande.",
      useCase: "Ideal pour fast casual, smash burger, street-food, dark kitchen ou petit reseau de points de vente.",
      replace: {
        "Feane": BRAND.brand
      },
      hide: [".offer_section", ".food_section", ".book_section", ".client_section"],
      patches: [
        { selector: ".navbar-brand span", mode: "text", value: BRAND.brand },
        { selector: ".detail-box h1", mode: "text", value: "Restaurant, bar ou brunch" },
        { selector: ".detail-box p", mode: "text", value: "Une base moderne pour presenter l'essentiel: concept, promesse, points forts, liens de commande et prise de contact." },
        { selector: ".detail-box .btn1", mode: "text", value: "Voir la demo" }
      ]
    },
    "feliciano-master": {
      model: "Model 5",
      style: "Signature",
      showcaseTitle: "Une vitrine haut de gamme pour restaurant, bistrot chic ou adresse evenementielle.",
      showcaseText: "Le ton est plus premium, avec un hero ample, beaucoup de verticalite et un rendu ideal pour une offre plus statutaire.",
      positioning: "Visuels larges, atmosphere elegante, sections tres utiles pour raconter l'adresse et son niveau de service.",
      modulesText: "Hero plein ecran, presentation du lieu, carte, chiffres de confiance, temoignages et contact.",
      useCase: "Ideal pour restaurant signature, lieu de reception, rooftop, cave haut de gamme ou grande brasserie.",
      replace: {
        "Feliciano": BRAND.brand
      },
      patches: [
        { selector: ".navbar-brand", mode: "text", value: BRAND.brand },
        { selector: ".slider-item .subheading", mode: "text", value: BRAND.brand },
        { selector: ".slider-item h1", mode: "text", values: [
          "Un style premium pour marquer les esprits",
          "Une base elegante et rassurante",
          "Un site concu pour valoriser l'adresse"
        ]}
      ]
    },
    "gourmet-master": {
      model: "Model 6",
      style: "Maison",
      showcaseTitle: "Un template raffine, lumineux et tres lisible pour restaurant ou maison de famille.",
      showcaseText: "La navigation reste classique mais l'ensemble donne une image serieuse, propre et assez chaleureuse pour beaucoup de concepts.",
      positioning: "Belle respiration, photos larges, hero sobre et sections simples a personnaliser.",
      modulesText: "Hero, presentation, specialites, galerie, equipe, actualites et contact.",
      useCase: "Ideal pour brasserie, restaurant familial, cave, cuisine maison ou table de quartier.",
      replace: {
        "Gourmet": BRAND.brand
      },
      patches: [
        { selector: ".navbar-brand", mode: "text", value: BRAND.brand },
        { selector: ".slider-item h1", mode: "text", values: [
          "Un style clair pour restaurant ou brasserie",
          "Une experience simple, elegante et utile"
        ]},
        { selector: ".slider-item .btn", mode: "text", value: "Voir les modules" }
      ]
    },
    "grandcoffee-master": {
      model: "Model 7",
      style: "Coffee & Brunch",
      showcaseTitle: "Une base accessible pour cafe, coffee shop, brunch ou salon de the.",
      showcaseText: "Le rendu est chaleureux et tres accueillant, avec une logique de lecture simple et des sections faciles a vendre a un prospect.",
      positioning: "Grand hero, message simple, galerie facile a comprendre et navigation rassurante.",
      modulesText: "Accueil, concept, galerie, services, horaires, contact et ancrages visuels pour reseaux sociaux.",
      useCase: "Ideal pour cafe de quartier, coffee shop, brunch du week-end ou adresse de passage.",
      replace: {
        "Grand Coffee": BRAND.brand,
        "Grandcoffee": BRAND.brand
      },
      patches: [
        { selector: ".outstanding_text", mode: "text", value: "Template" },
        { selector: ".coffee_text", mode: "text", value: BRAND.brand },
        { selector: ".there_text", mode: "text", value: "Une base conviviale pour mettre en avant l'ambiance, les horaires, les photos du lieu et les services essentiels." },
        { selector: ".learnmore_bt a", mode: "text", value: "Voir la demo" }
      ]
    },
    "pato-master": {
      model: "Model 8",
      style: "Night & Chic",
      showcaseTitle: "Une ambiance sombre et chic pour bar, cocktails, restaurant du soir ou privatisation.",
      showcaseText: "C'est un bon point de depart pour un lieu qui veut etre plus selectif, plus nocturne et plus visuel dans sa presentation.",
      positioning: "Beaucoup d'impact sur le hero, un ton tres premium et une forte perception d'experience.",
      modulesText: "Hero plein ecran, sections menu, reservation, galerie, experience et contact.",
      useCase: "Ideal pour bar a cocktails, restaurant lounge, speakeasy, lieu de fete ou salle privatisable.",
      replace: {
        "Pato Place": BRAND.brand,
        "Pato": BRAND.brand
      },
      patches: [
        { selector: ".caption1-slide1", mode: "text", value: "Template" },
        { selector: ".caption2-slide1", mode: "text", value: BRAND.brand },
        { selector: ".wrap-btn-slide1 a", mode: "text", value: "Voir les modules" }
      ]
    },
    "restaurant-1.0.0": {
      model: "Model 9",
      style: "Premium Landing",
      showcaseTitle: "Une landing page complete pour concept ambitieux, groupe ou futur reseau multi-sites.",
      showcaseText: "Cette base est plus corporate et tres modulaire. Elle convient bien quand on veut rassurer, structurer et montrer beaucoup d'informations proprement.",
      positioning: "Sections nombreuses, argumentaire solide, FAQ, blocs equipe et vraie logique de conversion.",
      modulesText: "Hero, chiffres, services, testimonials, livraison, equipe, FAQ et contact complet.",
      useCase: "Ideal pour groupe, franchise, grosse brasserie, chaine de restauration ou projet qui veut faire tres professionnel.",
      replace: {},
      patches: [
        { selector: "header .navbar-start > a", mode: "text", value: BRAND.brand },
        { selector: "h1 span", mode: "html", value: "Une vitrine claire.<br>Un style qui rassure." },
        { selector: ".bg-base-200 span", mode: "text", value: "Showroom de templates restaurants" },
        { selector: ".text-base-content\\/80.max-w-3xl", mode: "text", value: "Une landing page tres solide pour presenter un concept, installer la confiance et guider le visiteur vers l'action." },
        { selector: ".btn.btn-primary.btn-gradient.btn-lg", mode: "text", value: "Voir la demo" },
        { selector: "section#about-us h2", mode: "text", value: "Pourquoi ce style fonctionne" },
        { selector: "section#about-us p.text-base-content\\/80.text-xl", mode: "text", value: "Cette version convient quand il faut expliquer un positionnement, des services, des points forts et des preuves de confiance avec beaucoup de clarte." }
      ]
    },
    "templatemo_507_victory": {
      model: "Model 10",
      style: "Brasserie Classique",
      showcaseTitle: "Une structure directe et rassurante pour restaurant traditionnel, pizzeria ou brasserie.",
      showcaseText: "Tout est centre sur l'essentiel: hero, promesse, bloc de contact et navigation simple. C'est facile a vendre et facile a personnaliser.",
      positioning: "Template pragmatique, rapide a comprendre et tres efficace pour un besoin classique.",
      modulesText: "Hero simple, blocs categories, reservation, carte, contact et footer clair.",
      useCase: "Ideal pour brasserie, restaurant traditionnel, pizzeria, grill ou lieu qui veut aller a l'essentiel.",
      replace: {
        "Victory": BRAND.brand
      },
      hide: [".services", ".featured-food"],
      patches: [
        { selector: ".navbar-brand", mode: "text", value: BRAND.brand },
        { selector: ".banner h4", mode: "text", value: "Un template neutre pour presenter un futur site" },
        { selector: ".banner h2", mode: "text", value: "Restaurant, bar ou brasserie" },
        { selector: ".banner p", mode: "text", value: "Une base simple, rassurante et facile a adapter avec la vraie carte, les vraies photos et les bons liens de reservation." },
        { selector: ".banner .primary-button a", mode: "text", value: "Voir les modules" },
        { selector: ".cook-content h4", mode: "text", value: "Une base facile a vendre" },
        { selector: ".cook-content .contact-content span", mode: "text", value: "Cette structure peut accueillir :" },
        { selector: ".cook-content .contact-content h6", mode: "text", value: "Accueil, carte, reservation, privatisation" },
        { selector: ".cook-content .primary-white-button a", mode: "text", value: "Choisir ce style" }
      ]
    },
    "yummy-red-1.0.0": {
      model: "Model 11",
      style: "Moderne Lumineux",
      showcaseTitle: "Une base claire et contemporaine pour restaurant, traiteur, cantine premium ou brunch.",
      showcaseText: "Le rendu est propre, lumineux et tres rassurant. C'est un style simple a projeter pour beaucoup de concepts differents.",
      positioning: "Navigation moderne, hero lisible, sections nombreuses et bonne tenue mobile.",
      modulesText: "Hero, presentation, menu, evenements, equipe, galerie et reservation.",
      useCase: "Ideal pour restaurant familial, traiteur, cantine premium, brunch ou cuisine saine.",
      replace: {
        "Yummy": BRAND.brand
      },
      hide: ["#menu", "#events", "#chefs", "#book-a-table", "#gallery"],
      patches: [
        { selector: ".sitename", mode: "text", value: BRAND.brand },
        { selector: "#hero h1", mode: "html", value: "Un site clair pour<br>restaurant ou brunch" },
        { selector: "#hero p", mode: "text", value: "Une base lumineuse pour presenter un concept, mettre en avant les points forts et guider vers la prise de contact." },
        { selector: ".btn-get-started", mode: "text", values: ["Voir la demo", "Voir les modules"] },
        { selector: ".btn-watch-video span", mode: "text", value: "Retour catalogue" },
        { selector: ".btn-watch-video", mode: "attr", attr: "href", value: "../index.html" }
      ]
    },
    "cabinet-sante-premium": {
      model: "Model 12",
      style: "Sante Premium",
      showcaseTitle: "Une direction premium pour cabinet medical, clinique privee ou centre de sante.",
      showcaseText: "Le rendu installe tout de suite une image serieuse et rassurante, avec une vraie sensation de structure et de niveau de service.",
      positioning: "Grand hero, hierarchie tres nette, blocs specialites et presentation de l'equipe.",
      modulesText: "Hero, expertises, chiffres de confiance, prise de contact, equipe et blocs d'information.",
      useCase: "Ideal pour clinique privee, centre pluridisciplinaire, cabinet medical ou activite de sante premium.",
      replace: {
        "Clinic": BRAND.brand,
        "+1 (555) 911-2468": BRAND.phoneDisplay,
        "Call Emergency: (555) 123-4567": "Appel prioritaire : " + BRAND.phoneDisplay,
        "Learn More About Us": "Voir le brief",
        "Patients Served": "Patients suivis",
        "Years of Excellence": "Ans d'expertise",
        "Explore Cardiology": "Voir le pole",
        "Explore Neurology": "Voir le pole",
        "Find Location": "Voir l'adresse"
      },
      hide: ["#navmenu > ul > li:nth-child(6)", "#navmenu > ul > li:nth-child(7)", ".credits", "footer"],
      patches: [
        { selector: "#navmenu > ul > li > a", mode: "text", values: ["Accueil", "Cabinet", "Poles", "Prestations", "Equipe", "Ressources", "Options", "Contact"] },
        { selector: ".badge-item span", mode: "text", values: ["Cabinet reconnu", "Reponse rapide", "4.9/5 avis"] },
        { selector: "#hero h1", mode: "html", value: "Un site sante qui inspire confiance<br>avant le premier rendez-vous" },
        { selector: ".hero-description", mode: "text", value: "Une direction premium pour clinique privee, centre pluridisciplinaire ou cabinet medical qui doit rassurer des la premiere visite." },
        { selector: ".hero-stats .stat-item p", mode: "text", values: ["Ans d'expertise", "Patients suivis", "Practiciens presentes"] },
        { selector: ".hero-actions .btn", mode: "text", values: ["Voir le brief", "Parler du projet"] },
        { selector: ".emergency-info small", mode: "text", value: "Contact prioritaire" },
        { selector: ".emergency-info strong", mode: "text", value: BRAND.phoneDisplay },
        { selector: ".section-heading", mode: "text", value: "Une structure faite pour rassurer vite" },
        { selector: ".stats-grid .stat-label", mode: "text", values: ["Patients suivis", "Ans d'expertise", "Equipe medicale"] },
        { selector: ".floating-card .card-text h4", mode: "text", value: "Reponse prioritaire" },
        { selector: ".floating-card .card-text p", mode: "text", value: "Contact, horaires et parcours visibles" },
        { selector: ".experience-badge .text", mode: "text", value: "Image statutaire" },
        { selector: "#featured-departments .section-title h2", mode: "text", value: "Poles et specialites" },
        { selector: "#featured-departments .section-title p", mode: "text", value: "Le visiteur comprend rapidement les expertises, les points forts et la qualite de prise en charge." },
        { selector: "#featured-departments .specialty-label", mode: "text", values: ["Parcours patient", "Expertise coordonnee"] },
        { selector: "#featured-departments .specialty-card h3", mode: "text", values: ["Consultations et suivi medical", "Specialites et orientation"] },
        { selector: "#featured-departments .department-highlight h4", mode: "text", values: ["Consultations specialisees", "Suivi familial", "Examens et prevention"] },
        { selector: "#featured-departments .highlight-cta", mode: "text", value: "Voir le detail" },
        { selector: ".specialty-link", mode: "text", values: ["Voir le pole", "Voir le pole"] },
        { selector: "#featured-services .section-title h2", mode: "text", value: "Services mis en avant" },
        { selector: "#featured-services .service-details h2", mode: "text", value: "Une presence sante plus lisible, mobile et rassurante" },
        { selector: ".service-badge span", mode: "text", value: "Prise de rendez-vous" },
        { selector: ".main-cta", mode: "text", value: "Voir les modules" },
        { selector: ".services-sidebar .service-info h4", mode: "text", values: ["Consultations et bilans", "Parcours de soins", "Informations pratiques"] },
        { selector: ".services-sidebar .service-link", mode: "text", value: "Voir le bloc" },
        { selector: ".specialties-grid .specialty-content h5", mode: "text", values: ["Specialites", "Horaires et acces", "Avis et confiance", "Equipe presentee"] },
        { selector: ".specialties-grid .specialty-content span", mode: "text", values: ["Blocs adaptables au cabinet", "Infos visibles des l'arrivee", "Reassurance et preuves sociales", "Profils et competences mises en avant"] },
        { selector: "#find-a-doctor .section-title h2", mode: "text", value: "Presentation de l'equipe" },
        { selector: ".search-title", mode: "text", value: "Le visiteur comprend qui fait quoi en quelques secondes" },
        { selector: "#find-a-doctor .btn-secondary", mode: "text", value: "Voir le detail" },
        { selector: "#find-a-doctor .btn-primary", mode: "text", values: ["Voir le profil", "Voir le profil", "Voir le profil", "Voir le profil", "Voir le profil", "Voir le profil", "Voir le fonctionnement"] }
      ]
    },
    "centre-medical-confiance": {
      model: "Model 13",
      style: "Centre Medical",
      showcaseTitle: "Une base corporate et rassurante pour centre de sante, maison medicale ou cabinet pluridisciplinaire.",
      showcaseText: "Le style met en avant l'organisation, la lisibilite et la prise de contact rapide, avec un rendu tres facile a vendre.",
      positioning: "Hero direct, sections nombreuses, logique de service et vraie sensation de structure.",
      modulesText: "Hero, presentation, services, formulaires neutralises, equipe, actualites et preuve sociale.",
      useCase: "Ideal pour centre de sante, cabinet medical, maison pluridisciplinaire ou reseau de praticiens.",
      replace: {
        "Medinova": BRAND.brand,
        "Welcome To Medinova": "Centre de sante premium",
        "Best Healthcare Solution In Your City": "Un site medical net, mobile et immediatement rassurant",
        "Best Medical Care For Yourself and Your Family": "Une presence serieuse pour centre de sante, cabinet ou maison medicale",
        "Excellent Medical Services": "Prestations et informations utiles",
        "Emergency Care": "Prise de rendez-vous",
        "Operation & Surgery": "Specialites visibles",
        "Outdoor Checkup": "Parcours de soins",
        "Ambulance Service": "Acces et horaires",
        "Medicine & Pharmacy": "Equipe presentee",
        "Blood Testing": "Questions frequentes",
        "Medical Packages": "Parcours et formules",
        "Awesome Medical Programs": "Des blocs qui aident a se projeter",
        "Pregnancy Care": "Parcours prevention",
        "Health Checkup": "Bilan complet",
        "Dental Care": "Suivi dentaire",
        "Find Doctor": "Voir le brief",
        "Read More": "Voir les modules",
        "Book An Appointment": "Demander un rappel",
        "Make An Appointment": "Envoyer la demande",
        "Department 1": "Pole 1",
        "Department 2": "Pole 2",
        "Department 3": "Pole 3",
        "Doctor 1": "Specialite 1",
        "Doctor 2": "Specialite 2",
        "Doctor 3": "Specialite 3",
        "Your Name": "Votre nom",
        "Your Email": "Votre email",
        "Date": "Date souhaitee",
        "Time": "Horaire souhaite",
        "Emergency Medical Treatment": "Informations essentielles visibles",
        "Highly Experienced Doctors": "Equipe et specialites bien presentees",
        "Highest Success Rate": "Reassurance et preuve sociale",
        "Telephone Service": "Contact rapide",
        "Our Doctors": "L'equipe",
        "Qualified Healthcare Professionals": "Des profils presentes de facon rassurante",
        "Find A Healthcare Professionals": "Trouver la bonne specialite",
        "Patients Say About Our Services": "Ce que le site doit transmettre",
        "Our Latest Medical Blog Posts": "Actualites, conseils et informations utiles",
        "Choose Department": "Choisir un pole",
        "Select Doctor": "Choisir une specialite",
        "Apply Now": "Voir le detail"
      },
      hide: ["footer"],
      patches: [
        { selector: ".navbar-nav > a.nav-item", mode: "text", values: ["Accueil", "Cabinet", "Prestations", "Parcours", "Contact"] },
        { selector: ".nav-item.dropdown > a", mode: "text", value: "Ressources" },
        { selector: ".hero-header .btn", mode: "text", values: ["Voir le brief", "Parler du projet"] },
        { selector: ".col-lg-6.mb-5.mb-lg-0 .btn", mode: "text", values: ["Voir le brief", "Voir les modules"] },
        { selector: ".bg-white.text-center.rounded.p-5 h1", mode: "text", value: "Demander un rappel" },
        { selector: ".bg-white.text-center.rounded.p-5 button", mode: "text", value: "Envoyer la demande" },
        { selector: ".container-fluid.bg-primary.my-5.py-5 h5.d-inline-block", mode: "text", values: ["Contact", "Orientation"] },
        { selector: ".container-fluid.bg-primary.my-5.py-5 h1.display-4", mode: "text", values: ["Une prise de contact simple et rassurante", "Demander un rappel", "Trouver la bonne specialite"] },
        { selector: "select.form-select option[selected]", mode: "text", values: ["Choisir un pole", "Choisir une specialite", "Choisir un pole"] },
        { selector: ".input-group .btn", mode: "text", value: "Voir le bloc" },
        { selector: ".team-carousel h6", mode: "text", value: "Coordination medicale" }
      ]
    },
    "esthetique-signature": {
      model: "Model 14",
      style: "Esthetique Signature",
      showcaseTitle: "Une direction haut de gamme pour institut, esthetique medicale ou clinique skin care.",
      showcaseText: "Le rendu donne une vraie sensation de niveau, de douceur visuelle et de prise en charge premium sans tomber dans le template cheap.",
      positioning: "Visuels forts, message premium, structure souple pour prestations, equipe et contact.",
      modulesText: "Hero, promesse, protocoles, chiffres de confiance, equipe, formulaire et avis.",
      useCase: "Ideal pour institut premium, laser, medecine esthetique, esthetique du visage ou centre anti-age.",
      replace: {
        "Plasery": BRAND.brand,
        "Welcome to Plasery": "Institut signature",
        "Change Your Life Permanantly": "Une vitrine esthetique haut de gamme qui donne envie de prendre rendez-vous",
        "We will make you attractive": "Pense pour esthetique, laser, skincare premium ou medecine esthetique",
        "The Leading Plastic Surgery Clinic": "Une direction premium pour institut, esthetique medicale ou clinique skin care",
        "Important Facts": "Reperes de confiance",
        "Explore Our Plastic Surgery Treatment": "Prestations, protocoles et parcours signature",
        "Face Retouching": "Diagnostic peau",
        "Mommy Makeover": "Soins visage experts",
        "Breast Implants": "Protocoles anti-age",
        "Body Procedures": "Silhouette et fermete",
        "Liposaction": "Laser et correction",
        "Lips Surgery": "Parcours signature",
        "Meet Our Surgical Specialists": "L'equipe et l'expertise",
        "What Our Clients Say!": "Ce rendu inspire confiance",
        "Quick Links": "Liens utiles"
      },
      hide: [".d-none.d-lg-flex.w-25", ".container-fluid.copyright", "footer"],
      patches: [
        { selector: ".navbar-nav > a.nav-item", mode: "text", values: ["Accueil", "Cabinet", "Prestations", "Contact"] },
        { selector: ".nav-item.dropdown > a", mode: "text", value: "Ressources" },
        { selector: ".d-none.d-lg-block.w-25.text-end .btn", mode: "text", value: "Voir le brief" },
        { selector: ".hero-header .btn-primary", mode: "text", value: "Voir le concept" },
        { selector: ".hero-header h5.font-weight-normal", mode: "text", value: "Voir le brief" },
        { selector: ".row.g-4.mb-4 h5.mb-0", mode: "text", values: ["Equipe experte", "Protocoles haut de gamme"] },
        { selector: ".appointment-text h1.display-4", mode: "text", value: BRAND.phoneDisplay },
        { selector: ".appointment-text .btn", mode: "text", value: "Demander le brief" },
        { selector: ".appointment-form h1", mode: "text", value: "Parler du projet" },
        { selector: ".appointment-form .btn-primary", mode: "text", value: "Envoyer la demande" }
      ]
    },
    "dentaire-statutaire": {
      model: "Model 15",
      style: "Dentaire Statutaire",
      showcaseTitle: "Une direction rassurante et tres statutaire pour cabinet dentaire, implantologie ou esthetique du sourire.",
      showcaseText: "Le hero est simple, l'ensemble respire la confiance et les sections permettent de projeter vite un vrai cabinet premium.",
      positioning: "Grand bandeau, lecture classique, blocs d'arguments et prise de contact directe.",
      modulesText: "Hero, horaires, soins, preuves de confiance, equipe, avantages et formulaire.",
      useCase: "Ideal pour dentiste premium, implantologie, orthodontie adulte ou cabinet qui veut une image serieuse.",
      replace: {
        "Dentist": BRAND.brand
      },
      hide: [".menu-has-children", "section.blog-area", "footer"],
      patches: [
        { selector: ".nav-menu > li > a", mode: "text", values: ["Accueil", "Cabinet", "Soins", "Horaires", "Ressources", "Tarifs", "Infos", "Contact"] },
        { selector: ".banner-content h6", mode: "text", value: "Une presence qui rassure des la premiere seconde" },
        { selector: ".banner-content h1", mode: "text", value: "Cabinet dentaire haut de gamme" },
        { selector: ".banner-content p", mode: "text", value: "Une base statutaire pour presenter expertise, soins, horaires et prise de contact avec un rendu net et credible." },
        { selector: ".banner-content .primary-btn", mode: "text", value: "Voir le brief" },
        { selector: ".open-hour-area h1", mode: "text", value: "Horaires et acces" },
        { selector: ".open-hour-area p", mode: "text", value: "Un bloc simple pour afficher disponibilites, standard et urgences avec une lecture tres claire." },
        { selector: ".open-hour-area .open-btn", mode: "text", value: "Cabinet ouvert" },
        { selector: ".service-area .header-text h1", mode: "text", value: "Soins mis en avant" },
        { selector: ".service-area .header-text p", mode: "text", value: "Quatre exemples de blocs a personnaliser pour presenter les soins les plus recherches du cabinet." },
        { selector: ".single-service h4", mode: "text", values: ["Implants et chirurgie", "Alignement discret", "Esthetique du sourire", "Urgences et suivi"] },
        { selector: ".single-service p", mode: "text", values: ["Bloc ideal pour rassurer sur l'expertise et la precision du geste.", "Un module parfait pour expliquer une solution moderne et lisible.", "Permet de valoriser les resultats, les cas traites et les specialites.", "Tres utile pour afficher un contact rapide et les delais de prise en charge."] },
        { selector: ".home-about-right h1", mode: "html", value: "Un cabinet qui donne confiance<br>avant meme l'appel" },
        { selector: ".home-about-right > p", mode: "text", value: "Cette direction fonctionne bien pour un cabinet dentaire qui veut paraitre plus structure, plus rassurant et plus haut de gamme sans surcharger le discours." },
        { selector: ".home-about-right .single-services h4", mode: "text", values: ["Approche statutaire", "Prise en charge fluide"] },
        { selector: ".testomial-area .title h1", mode: "text", value: "Avis patients et confiance" },
        { selector: ".team-area .title h1", mode: "text", value: "Le cabinet en image" },
        { selector: ".feature-area .title h1", mode: "text", value: "Ce style inspire confiance" },
        { selector: ".single-feature h4", mode: "text", values: ["Urgences organisees", "Conseil expert", "Imagerie numerique", "Plan de traitement", "Suivi sur mesure", "Pedagogie patient"] },
        { selector: ".appoinment-right h1", mode: "html", value: "Demander un<br>rappel" },
        { selector: ".appoinment-form button", mode: "text", value: "Envoyer la demande" }
      ]
    },
    "cabinet-dentaire-lumineux": {
      model: "Model 16",
      style: "Dentaire Lumineux",
      showcaseTitle: "Une vitrine lumineuse et tres lisible pour cabinet dentaire moderne ou specialiste du sourire.",
      showcaseText: "Le rendu est plus doux, plus accessible et tres efficace pour afficher les soins, l'equipe, les horaires et la prise de contact sur mobile.",
      positioning: "Grand slider, sections tres claires, tonalite rassurante et bonne tenue visuelle.",
      modulesText: "Hero, presentation, soins, equipe, avis, CTA, exemples de parcours et formulaire.",
      useCase: "Ideal pour dentiste de quartier premium, orthodontie, esthetique dentaire ou cabinet familial.",
      replace: {
        "Dentista": BRAND.brand,
        "Our Clinic Services": "Soins et prestations",
        "Dental Implants": "Implants et reconstruction",
        "Cosmetic Dentistry": "Esthetique du sourire",
        "Dental Care": "Suivi et prevention",
        "Teeth Whitening": "Blanchiment et eclat",
        "Dental Calculus": "Hygiene et detartrage",
        "Periondontics": "Parodontologie",
        "Clip & Braces": "Aligneurs et correction",
        "Root Canel": "Endodontie",
        "We promised to take care our patients and we delivered.": "Un cabinet qui donne confiance avant meme l'appel",
        "Our Qualified Doctors": "Les visages du cabinet",
        "Our Patients Says About Us": "Avis patients",
        "We Provide Free Dental Care Consultation": "Une prise de contact simple et immediate",
        "Our Pricing": "Exemples de parcours",
        "Basic": "Consultation",
        "Standard": "Prevention",
        "Premium": "Smile Design",
        "Platinum": "Implants",
        "Get Offer": "Voir le detail"
      },
      hide: ["section.ftco-section.bg-light", "footer"],
      patches: [
        { selector: ".navbar-nav .nav-link", mode: "text", values: ["Accueil", "Cabinet", "Equipe", "Soins", "Tarifs", "Conseils", "Contact"] },
        { selector: ".home-slider h1", mode: "html", values: ["Un cabinet dentaire<br>qui inspire confiance", "Une direction claire pour<br>mettre en valeur le sourire"] },
        { selector: ".home-slider .subheading", mode: "text", values: ["Une base rassurante pour afficher soins, equipe et contact sans friction.", "Le visiteur comprend vite le niveau du cabinet et la qualite de prise en charge."] },
        { selector: ".home-slider .btn", mode: "text", values: ["Voir le brief", "Voir le brief"] },
        { selector: ".wrap-about .subheading", mode: "text", value: "Cabinet signature" },
        { selector: ".wrap-about h2", mode: "text", value: "Une presence moderne, fluide et rassurante pour un cabinet dentaire" },
        { selector: ".consultation h3.mb-4", mode: "text", values: ["Soins dentaires", "Premier echange", "Equipe medicale"] },
        { selector: ".consultation p", mode: "text", values: ["Une entree simple pour mettre en avant les soins les plus recherches.", "Le formulaire showroom montre comment capter une demande rapidement.", "Un bloc utile pour valoriser les praticiens, specialites et disponibilites."] },
        { selector: ".consultation .btn-custom", mode: "text", values: ["Voir les soins", "Voir l'equipe"] },
        { selector: ".staff .text h3", mode: "text", values: ["Dr. Sofia Rahal", "Dr. Mehdi Bennani", "Dr. Lina Saidi", "Dr. Yanis Messaoudi"] },
        { selector: ".staff .position", mode: "text", value: "Chirurgien-dentiste" },
        { selector: ".ftco-intro .btn", mode: "text", value: "Demander le brief" }
      ]
    },
    "studio-creative": {
      model: "Model 17",
      style: "Studio Creatif",
      showcaseTitle: "Une vitrine impactante pour studio photo, agence visuelle, architecture ou marque qui vit par l'image.",
      showcaseText: "Le style assume une lecture plus creative, avec beaucoup de place pour les visuels, la preuve sociale et des offres faciles a comprendre.",
      positioning: "Hero tres lisible, sections modules, galerie category-driven et CTA nets.",
      modulesText: "Hero, process, offres, galerie, modules, FAQ et gros call-to-action final.",
      useCase: "Ideal pour studio visuel, architecture, immobilier, contenu premium, beauty brand ou direction artistique.",
      replace: {
        "Clickr": BRAND.brand,
        "ClickR": BRAND.brand,
        "CLICKR": BRAND.brand,
        "Designer, co-Founder at Nirvana Tech": "Direction - Ma Vitrine Online",
        "Designer": "Direction artistique",
        "Senior Developer": "Coordination digitale",
        "Our Packages": "Exemples d'offres",
        "High quality images": "Hero et sections clefs",
        "Single Revision": "1 aller-retour design",
        "10 Products per order": "Jusqu'a 5 blocs de contenu",
        "Not providing softcopy": "Livraison showroom",
        "Free return shipment": "Adaptation au secteur",
        "5 Revisions": "2 aller-retours",
        "25 Products per order": "Jusqu'a 8 blocs de contenu",
        "Provides softcopy & PSD": "Contenus adaptes au metier",
        "3 Revisions": "3 aller-retours",
        "50 Products per order": "Jusqu'a 12 blocs de contenu",
        "Provides softcopy": "Version desktop et mobile",
        "Choose plan": "Voir l'offre",
        "View portfolio": "Voir la direction",
        "Pricing": "Voir l'offre",
        "Over 1,00,000 Photos Shot": "Galerie de direction visuelle",
        "Our Services": "Modules mis en avant"
      },
      hide: ["section.py-6", "section.py-0.pt-7"],
      patches: [
        { selector: ".navbar-nav .nav-link", mode: "text", values: ["Accueil", "Process", "Modules", "Offres", "FAQ"] },
        { selector: "#header h1", mode: "html", value: "Un site vitrine impactant<br>pour studio, agence visuelle ou marque image" },
        { selector: "#header p.text-700", mode: "text", value: "Une base expressive pour montrer des visuels forts, installer une posture premium et generer des prises de contact." },
        { selector: "#header .btn", mode: "text", value: "Voir le brief" },
        { selector: "#howitworks h1", mode: "text", value: "Vous choisissez la direction, nous adaptons le site" },
        { selector: "#howitworks h5", mode: "text", values: ["On cadre le positionnement", "On adapte les contenus", "On publie une vitrine prete a montrer"] },
        { selector: "#howitworks .col-12.col-md-4 p", mode: "text", values: ["Nous reprenons votre activite, vos cibles et votre niveau de gamme pour choisir le bon ton.", "Nous remplaçons ensuite les contenus, visuels, offres et preuves sociales pour coller a votre metier.", "Le rendu final reste lisible, mobile, premium et facile a partager a un prospect ou partenaire."] },
        { selector: ".carousel-item h2", mode: "text", values: ["Un style qui fait tout de suite plus serieux, plus premium et plus presentable.", "La structure aide a vendre une expertise, un portfolio ou une activite tres visuelle.", "Une bonne option quand l'image, la direction artistique et la credibilite comptent vraiment."] },
        { selector: "#packages h5.my-4", mode: "text", values: ["Landing Essentielle", "Vitrine Signature", "Showcase Premium"] },
        { selector: "#packages h6.fs--1", mode: "text", values: ["/ projet", "/ projet", "/ projet"] },
        { selector: ".clickr-tabs .nav-link", mode: "text", values: ["Architecture", "Immobilier", "Beauty", "Retail", "Luxe", "Produit"] },
        { selector: "#services h2.card-title", mode: "text", values: ["Hero et portfolio", "Pages de preuve"] },
        { selector: "#services p.card-text", mode: "text", values: ["Un bloc fort pour vendre l'univers visuel, les references et la promesse du studio ou de la marque.", "Un second module utile pour mettre en avant cas clients, methodologie, specialites et contacts cles."] },
        { selector: "#faqs h3", mode: "text", values: ["Quel niveau de personnalisation est prevu ?", "Comment integrez-vous mes contenus ?", "Le site est-il adapte au mobile ?", "Peut-on partir d'un style existant ?", "Peut-on relier reseaux et contact ?", "Le site peut-il evoluer ensuite ?"] },
        { selector: "#faqs p", mode: "text", values: ["Le template sert de direction visuelle. Nous retravaillons ensuite textes, modules, visuels et details pour coller au metier.", "Nous integrons vos visuels, votre message, vos prestations et vos points forts dans une structure deja rassurante.", "Oui, le rendu final est pense pour se montrer facilement sur telephone, tablette et ordinateur.", "Oui. C'est meme l'interet du showroom : partir d'une base forte puis l'adapter proprement.", "Oui, nous prevoyons toujours un contact simple et une coherence avec Instagram, Facebook ou WhatsApp selon le besoin.", "Oui. La structure est prevue pour accueillir de nouveaux blocs, pages ou ajustements dans le temps."] },
        { selector: ".col-xxl-9.py-5.text-center h1", mode: "html", value: "Un rendu premium<br>qui se montre facilement" },
        { selector: ".col-xxl-9.py-5.text-center .btn", mode: "text", value: "Parler du projet" }
      ]
    },
    "cabinet-conseil-impact": {
      model: "Model 18",
      style: "Conseil Impact",
      showcaseTitle: "Une direction statutaire pour cabinet de conseil, expertise B2B ou activite de service a forte valeur.",
      showcaseText: "Le rendu rassure vite, pose une posture plus premium et aide a presenter des services, des preuves et une prise de contact tres lisible.",
      positioning: "Hero tres net, arguments visibles, bons reperes de confiance et sections faciles a transformer en offre sur mesure.",
      modulesText: "Hero, promesse, preuves de confiance, niveaux d'accompagnement, cas d'usage, avis et call-to-action final.",
      useCase: "Ideal pour cabinet de conseil, audit, recrutement executif, immobilier B2B, formation premium ou activite qui doit faire plus credible rapidement.",
      replace: {
        "LaslesVPN": BRAND.brand,
        "Users": "Missions",
        "Locations": "Secteurs",
        "Server": "Pages",
        "Powerfull online protection.": "Promesse visible des l'arrivee.",
        "Internet without borders.": "Expertise et offre comprises en quelques secondes.",
        "Supercharged VPN": "Arguments et preuves de confiance bien structures.",
        "No specific time limits.": "Contact simple, net et adapte au mobile.",
        "We Provide Many Features You Can Use": "Un site conseil qui structure vraiment la prise de contact",
        "You can explore the features that we provide with fun and have their own functions each feature.": "Le visiteur comprend rapidement ce que vous faites, pour qui, et comment vous contacter.",
        "Choose Your Plan": "Trois profondeurs de site pour cadrer le besoin",
        "Let's choose the package that is best for you and explore it happily and cheerfully.": "Chaque niveau montre une facon differente d'organiser le message, les pages et la conversion selon le niveau de gamme vise.",
        "Free Plan": "Landing Essentielle",
        "Standard Plan": "Vitrine Signature",
        "Premium Plan": "Showcase Premium",
        "Unlimited Bandwitch": "Hero et proposition de valeur",
        "Encrypted Connection": "Preuves de confiance",
        "No Traffic Logs": "Blocs expertise",
        "Works on All Devices": "Version mobile",
        "Connect Anyware ": "Pages services ",
        "Get New Features ": "Ajouts evolutifs ",
        "Huge Global Network of Fast VPN ": "Une structure qui tient aussi sur plusieurs pages",
        "See LaslesVPN everywhere to make it easier for you when you move locations.": "Cette direction peut accueillir une home, des pages services, des cas clients et un contact tres bien structure.",
        "Trusted by Thousands of Happy Customer ": "Un rendu qui renforce la perception de niveau",
        "These are the stories of our customers who have joined us with great pleasure when using this crazy feature.": "Le prospect comprend tout de suite qu'il a affaire a une activite serieuse, claire et bien positionnee.",
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best": "Le style donne tout de suite une impression plus premium, plus claire et plus credible a l'activite.",
        "Product": "Sections",
        "Engage": "Navigation",
        "Earn Money": "Actions",
        "Download": "Voir les modules",
        "Countries ": "Contact ",
        "Blog ": "Ressources ",
        "LaslesVPN ? ": "Le brief ",
        "Tutorials ": "Process ",
        "About Us ": "Positionnement ",
        "Privacy Policy ": "Mentions ",
        "Terms of Service ": "Contact ",
        "Affiliate ": "Demander le brief ",
        "Become Partner ": "Parler du projet ",
        "About": "Cabinet",
        "Feature": "Modules",
        "Pricing": "Offres",
        "Testimonial": "Avis",
        "Sign In": "Voir le brief",
        "Sign Up": "Parler du projet",
        "Get Started": "Voir le brief",
        "iezh Robert": "Camille Rahal",
        "Warsaw": "Paris",
        "Poland": "France",
        "ThemeWagon": BRAND.brand
      },
      hide: ["img[src*='amazon.png']", "img[src*='netflix.png']", "img[src*='reddit.png']", "img[src*='discord.png']", "img[src*='spotify.png']"],
      patches: [
        { selector: "h1.text-3xl", mode: "html", value: "Un site conseil qui donne<br>une posture plus credible" },
        { selector: "p.text-black-500.mt-4.mb-6", mode: "text", value: "Une direction ideale pour cabinet de conseil, activite B2B ou expertise qui doit inspirer confiance avant le premier echange." },
        { selector: "#pricing p.text-2xl.text-black-600.text-center.mb-4", mode: "text", values: ["Sur devis", "Sur devis", "Sur devis"] },
        { selector: "div.bg-white-300 ul li", mode: "text", values: ["Voir les modules", "Offres", "Secteurs", "Pages cles", "Contact", "Ressources", "Le brief", "FAQ", "Process", "Positionnement", "Mentions", "Contact", "Demander le brief", "Parler du projet"] },
        { selector: "h5.text-black-600.text-xl.sm\\:text-2xl.lg\\:text-3xl.leading-relaxed.font-medium", mode: "html", value: "Adapter ce style<br>au bon niveau de gamme" },
        { selector: "div.flex.flex-col.text-left.w-10\\/12.sm\\:w-7\\/12.lg\\:w-5\\/12.mb-6.sm\\:mb-0 p", mode: "text", value: "Nous remplacons ensuite le contenu de demo par votre vrai positionnement, vos preuves et vos appels a l'action." },
        { selector: "div.row-span-2.sm\\:col-span-4 p.mb-4", mode: "html", value: "<strong class=\"font-medium\">Ma Vitrine Online</strong> propose ici une direction statutaire pour valoriser une activite de conseil, ses offres et sa prise de contact." },
        { selector: "div.row-span-2.sm\\:col-span-4 p.text-gray-400:last-of-type", mode: "text", value: "Adaptation showroom 2026 par Ma Vitrine Online." }
      ]
    },
    "studio-media-impact": {
      model: "Model 19",
      style: "Studio Media",
      showcaseTitle: "Une base image-first pour studio video, podcast, contenu social, immobilier premium ou activite portee par le visuel.",
      showcaseText: "Le template cree tout de suite un effet de vitrine vivante, avec de l'impact, des modules faciles a montrer et une vraie place pour les formats.",
      positioning: "Grand hero, univers visuel fort, blocs portfolio, formats editoriaux et footer oriente contact.",
      modulesText: "Hero, categories de formats, reels/video, selections editoriales, bloc contact, reseaux et call-to-action final.",
      useCase: "Ideal pour studio photo-video, podcast marque, immobilier premium, agence contenu, beauty brand ou activite qui vend par l'image.",
      replace: {
        "Home": "Accueil",
        "Audio Song": "Formats",
        "Video song": "Portfolio",
        "Videos Songs": "Realisations",
        "Upcomeing": "Options editoriales",
        "See More": "Voir les modules",
        "Play Now": "Voir le module",
        "Follow Us": "Rester visible",
        "Subscribe": "Voir le brief",
        "Enter Your Email": "Votre email",
        "TIC Transport": "Video",
        "Packaging": "Photos"
      },
      hide: [".search_icon"],
      patches: [
        { selector: ".nav-link", mode: "text", values: ["Accueil", "Formats", "Portfolio"] },
        { selector: ".banner_taital", mode: "html", values: [
          "Un site image-first<br>pour studio media",
          "Un rendu qui valorise<br>les formats visuels",
          "Une direction faite pour<br>etre montree facilement"
        ]},
        { selector: ".play_bt a", mode: "text", value: "Voir le brief" },
        { selector: ".audio_taital", mode: "text", values: ["Formats mis en avant", "Realisations visuelles", "Options editoriales"] },
        { selector: ".audio_text", mode: "text", values: [
          "Cette section montre comment presenter des formats, des prestations et des exemples de contenus de facon lisible et premium.",
          "Le template fonctionne bien pour valoriser des realisations, des campagnes, des tournages ou des capsules a forte dimension visuelle."
        ]},
        { selector: ".many_text", mode: "text", values: [
          "Podcast de marque",
          "Interview dirigeant",
          "Capsule reseaux sociaux",
          "Reportage terrain",
          "Serie photo premium",
          "Film manifeste",
          "Video recrutement",
          "Story produit",
          "Format immobilier",
          "Video institutionnelle",
          "Portrait expert",
          "Making-of equipe",
          "Avant / apres",
          "Script courte duree",
          "Mise en scene produit",
          "Shooting hero",
          "Campagne visuelle",
          "Pack social ads",
          "Serie reels",
          "Bibliotheque contenus"
        ]},
        { selector: ".videos_text", mode: "html", values: [
          "Page hero et<br>positionnement<br>visuel",
          "Portfolio marque<br>et realisations<br>signature",
          "Formats reels<br>et contenus<br>sociaux",
          "Bloc photo / video<br>pour mettre en avant<br>les references",
          "Direction editoriale<br>pour studio ou<br>agence contenu",
          "Mise en avant<br>des cas clients<br>phares",
          "Preuves sociales<br>et retours clients<br>visibles",
          "Call-to-action<br>bien place pour<br>declencher le contact",
          "Landing campagne<br>pour lancement ou<br>offre premium",
          "Page expertise<br>pour video, photo<br>ou podcast",
          "Selection de formats<br>selon le besoin<br>du client",
          "Version mobile<br>pour montrer le site<br>partout",
          "Bloc references<br>et univers de marque<br>immediat",
          "Page image<br>pour activite haut<br>de gamme",
          "Rythme visuel<br>concu pour Instagram<br>et showroom",
          "Structure modulaire<br>facile a adapter<br>au metier"
        ]},
        { selector: ".playnow_bt a", mode: "text", value: "Voir le module" },
        { selector: ".follow_text", mode: "text", value: "Une image coherente entre site et reseaux" },
        { selector: ".mail_text", mode: "attr", attr: "placeholder", value: "Votre email" },
        { selector: ".padding_15", mode: "text", values: [BRAND.phoneDisplay, BRAND.email] }
      ]
    },
    "gestion-patrimoine-premium": {
      model: "Model 20",
      style: "Patrimoine Premium",
      showcaseTitle: "Une direction patrimoniale haut de gamme pour gestion de patrimoine, family office, conseil financier ou cabinet qui doit faire tres serieux.",
      showcaseText: "Le rendu est tres statutaire, tres rassurant et fonctionne bien pour presenter une expertise, des offres, des FAQ et un contact sans friction.",
      positioning: "Hero frontal, sections d'arguments, offres bien cadrees, FAQ, avis et footer corporate propre.",
      modulesText: "Hero, presentation, points forts, process, avis, offres, FAQ et call-to-action final.",
      useCase: "Ideal pour gestion de patrimoine, family office, cabinet financier, expert-comptable premium ou conseil independant a forte confiance.",
      replace: {
        "PMS Investment Services": BRAND.brand,
        "PMS": BRAND.brand,
        "About": "Cabinet",
        "Services": "Services",
        "Blog": "Ressources",
        "Testimonials": "Avis",
        "Pricing": "Offres",
        "Contact": "Contact",
        "Schedule a Consultation": "Voir le brief",
        "Learn More": "Voir les modules",
        "Who We Are": "Une presence patrimoniale qui installe le niveau",
        "At PMS Investment Services, we understand that your wealth deserves a careful and strategic approach. With over two decades of experience in portfolio management, we've built our reputation on delivering exceptional results for high-net-worth individuals and institutional clients.": "Ce style convient tres bien a une activite patrimoniale qui doit inspirer confiance des la premiere lecture, avec un discours pose, structure et facile a montrer.",
        "Our team of seasoned investment professionals combines deep market knowledge with cutting-edge analytical tools to create personalized investment strategies that align with your financial goals and risk tolerance.": "La hierarchie des blocs permet de presenter une expertise, des offres, des modalites de contact et des informations utiles avec une image tres serieuse.",
        "Years Experience": "Jours de cadrage",
        "Assets Under Management": "Pages clefs",
        "Satisfied Clients": "Blocs adaptables",
        "Why Choose Our PMS?": "Pourquoi cette direction fonctionne",
        "We offer more than just investment management – we provide a comprehensive wealth management experience.": "Le visiteur comprend vite le niveau de gamme, les services proposes et la facon de prendre contact.",
        "Risk Management": "Posture statutaire",
        "Advanced risk assessment and mitigation strategies to protect your wealth while maximizing growth potential.": "Le ton, la typo et l'organisation donnent une impression de maitrise et de niveau des les premieres secondes.",
        "Performance Excellence": "Structure lisible",
        "Consistent outperformance through disciplined investment processes and market expertise.": "La promesse, les offres et les points de confiance restent tres faciles a parcourir sur mobile comme sur desktop.",
        "Personalized Service": "Contact fluide",
        "Dedicated relationship managers providing personalized attention and regular portfolio reviews.": "Le parcours de prise de contact est direct, rassurant et facile a adapter a votre facon de travailler.",
        "Our Investment Philosophy": "Ce que le visiteur regarde en premier",
        "We believe in transparency, integrity, and dedication to your financial success.": "Dans ce type de secteur, le site doit inspirer la confiance, montrer l'expertise et clarifier le cadre en quelques secondes.",
        "Research-Driven Approach": "Expertise visible",
        "Comprehensive fundamental and technical analysis guides every investment decision.": "Un bloc tres utile pour mettre en avant la specialite, la methode et le niveau d'accompagnement.",
        "Long-term Value Creation": "Offre bien cadree",
        "Focus on sustainable growth and wealth preservation over market cycles.": "L'utilisateur comprend rapidement les niveaux d'accompagnement, les services et les points forts.",
        "Diversification Strategy": "Pages et blocs utiles",
        "Balanced portfolios across asset classes, sectors, and geographies.": "Le template peut accueillir une home, une page services, une FAQ et un contact sans perdre en lisibilite.",
        "Transparent Communication": "Prise de contact rassurante",
        "Regular reporting and open dialogue about portfolio performance and strategy.": "Le call-to-action reste visible sans casser l'image premium de l'ensemble.",
        "How It Works": "Comment nous adaptons ce style",
        "Our streamlined process ensures a smooth onboarding and ongoing management experience.": "Le showroom sert de base. Nous retravaillons ensuite les contenus, les preuves et les pages pour coller a l'activite.",
        "Initial Consultation": "Choix du style",
        "Understand your financial goals, risk tolerance, and investment preferences.": "On valide la bonne direction visuelle selon le niveau de gamme, la cible et le ton a tenir.",
        "Strategy Development": "Adaptation du contenu",
        "Create a customized investment strategy tailored to your specific needs.": "On remplace la demo par vos services, vos informations utiles, vos arguments et vos reperes de contact.",
        "Portfolio Implementation": "Mise en ligne",
        "Execute the investment strategy with careful attention to timing and allocation.": "Le site final est livre dans une version presentable, mobile et credible.",
        "Ongoing Management": "Suivi et evolutions",
        "Regular monitoring, rebalancing, and reporting to ensure optimal performance.": "Le modele peut ensuite evoluer avec de nouveaux blocs, ajustements ou pages supplementaires.",
        "Client Success Stories": "La perception cote client",
        "Hear from our satisfied clients about their investment journey with us.": "Les temoignages montrent ici comment rassurer vite avec quelques preuves sociales bien placees.",
        "\"Working with PMS has transformed my investment strategy. Their expertise is unparalleled, and the returns have exceeded my expectations consistently.\"": "\"Le rendu fait tout de suite plus haut de gamme et plus solide. On sent une vraie structure et un meilleur niveau de presentation.\"",
        "\"The personalized attention and transparent communication make all the difference. I feel confident about my financial future.\"": "\"Le prospect comprend mieux l'offre, les points forts et la facon de prendre contact. C'est net et rassurant.\"",
        "\"Their risk management approach protected my portfolio during market volatility while still delivering strong returns.\"": "\"La base est ideale pour afficher une expertise patrimoniale avec une image serieuse, moderne et facile a montrer.\"",
        "Rajesh Kumar": "Camille Durand",
        "Priya Sharma": "Nora Benali",
        "Amit Patel": "Julien Morel",
        "Business Owner": "Dirigeant",
        "Senior Executive": "Associee",
        "Entrepreneur": "Profession liberale",
        "Plans & Fees Overview": "Exemples de cadrage",
        "Transparent pricing structure designed to align our success with yours.": "Ces trois blocs montrent comment le meme style peut servir une landing concise, une vitrine complete ou une version plus premium.",
        "Essential": "Landing Essentielle",
        "For growing portfolios": "Pour une presentation concise",
        "2.5%": "Sur devis",
        "Annual management fee": "Cadrage selon le besoin",
        "Minimum investment: ₹25 Lakhs": "Hero et proposition de valeur",
        "Quarterly portfolio reviews": "Page presentation",
        "Online portfolio access": "Blocs services",
        "Email support": "Contact visible",
        "Premium": "Vitrine Signature",
        "For serious investors": "Pour un site plus complet",
        "2.0%": "Sur devis",
        "Minimum investment: ₹50 Lakhs": "Hero et preuves de confiance",
        "Monthly portfolio reviews": "Pages services",
        "Dedicated relationship manager": "Sections expertise",
        "Priority phone support": "Version mobile",
        "Tax optimization strategies": "Mise a jour possible",
        "Elite": "Showcase Premium",
        "For high net worth individuals": "Pour un rendu plus statutaire",
        "1.5%": "Sur devis",
        "Minimum investment: ₹1 Crore": "Showcase premium complet",
        "Weekly portfolio monitoring": "Pages et rubriques avancees",
        "Senior portfolio manager": "Parcours de contact",
        "24/7 concierge support": "Ressources et FAQ",
        "Estate planning assistance": "Multilingue si besoin",
        "Alternative investments access": "Base evolutive",
        "Get Started": "Voir le brief",
        "Most Popular": "Le plus polyvalent",
        "Frequently Asked Questions": "Questions frequentes",
        "Get answers to common questions about our portfolio management services.": "La FAQ montre ici comment clarifier vite les points qui freinent la prise de contact.",
        "What is the minimum investment amount?": "Que peut-on personnaliser ?",
        "Our minimum investment varies by plan: ₹25 Lakhs for Essential, ₹50 Lakhs for Premium, and ₹1 Crore for Elite. This ensures we can provide the level of personalized service and diversification that our clients deserve.": "Le style sert de base visuelle. Nous adaptons ensuite les textes, les offres, les pages et les informations utiles selon votre activite.",
        "How often will I receive portfolio updates?": "Le site est-il adapte au mobile ?",
        "Update frequency depends on your plan: Quarterly for Essential, Monthly for Premium, and Weekly monitoring for Elite clients. All clients have 24/7 online access to their portfolio performance and can request updates anytime.": "Oui. Le rendu showroom est pense pour etre montre facilement sur telephone, tablette et ordinateur.",
        "What types of investments do you focus on?": "Peut-on ajouter des pages ensuite ?",
        "We invest across a diversified range of asset classes including equities, fixed income, commodities, and alternative investments. Our approach is tailored to each client's risk profile and investment objectives.": "Oui. La structure permet d'ajouter de nouvelles pages, services, rubriques ou contenus selon l'evolution du besoin.",
        "How do you ensure the security of my investments?": "Peut-on relier contact et reseaux ?",
        "We are registered with SEBI and follow all regulatory guidelines. Your investments are held in your name with qualified custodians, and we maintain comprehensive insurance coverage. We also employ advanced cybersecurity measures to protect your data.": "Oui. Les formulaires, moyens de contact, WhatsApp ou reseaux peuvent etre relies dans une version projet.",
        "Can I withdraw my investments anytime?": "Ce style peut-il convenir a un autre metier ?",
        "Yes, you can request withdrawals at any time. Most withdrawals are processed within 3-5 business days, though some alternative investments may have longer redemption periods. We'll always communicate any restrictions upfront.": "Oui. Meme si cette direction est ideale pour le patrimoine ou l'expertise financiere, elle peut aussi servir a d'autres activites a forte valeur qui veulent paraitre plus statutaires.",
        "Ready to Start Your Investment Journey?": "Un modele pret a adapter a votre cabinet",
        "Take the first step towards securing your financial future with our expert portfolio management services.": "Nous reprenons ensuite le contenu pour en faire une vitrine plus claire, plus premium et plus credible pour votre activite.",
        "Empowering your financial future with expertise, transparency, and unwavering trust.": "Direction showroom pour activite patrimoniale, expertise statutaire ou cabinet premium.",
        "SEBI Registered Investment Advisor": "Showroom Ma Vitrine Online",
        "Registration No: INA000012345": "Adaptation multi-activite sur demande",
        "Portfolio Management": "Page hero et promesse",
        "Wealth Planning": "Services et specialites",
        "Risk Assessment": "FAQ et ressources",
        "Tax Optimization": "Contact et conversion",
        "Company": "Cabinet",
        "About Us": "A propos",
        "Our Team": "Equipe",
        "Careers": "Process",
        "Contact Info": "Contact",
        "info@pmsinvestment.com": BRAND.email,
        "+91 98765 43210": BRAND.phoneDisplay,
        "Mumbai, Maharashtra": BRAND.address,
        "Download Brochure": "Voir les modules",
        "© 2024 PMS Investment Services. All rights reserved by ": "Adaptation showroom 2026 par ",
        "CodesCandy": BRAND.brand,
        "ThemeWagon": BRAND.brand,
        "Login": "Parler du projet"
      },
      patches: [
        { selector: "h1.text-5xl", mode: "html", value: "Une vitrine patrimoniale<br><span class=\"text-cyan-600\">qui inspire confiance</span>" },
        { selector: "#about .text-3xl.font-serif.font-black.text-cyan-600", mode: "text", values: ["1", "5", "12"] },
        { selector: "section.py-20.bg-cyan-600 button.bg-transparent", mode: "text", value: "Voir les modules" },
        { selector: "footer ul.space-y-2.text-gray-400.font-sans li a", mode: "text", values: ["Page hero et promesse", "Services et specialites", "FAQ et ressources", "Contact et conversion", "A propos", "Equipe", "Process", "Contact"] },
        { selector: "footer .space-y-2.text-gray-400.font-sans p", mode: "text", values: [BRAND.email, BRAND.phoneDisplay, BRAND.address] },
        { selector: "footer .border-t.border-gray-800.mt-12.pt-8.text-center p", mode: "text", value: "Adaptation showroom 2026 par Ma Vitrine Online." }
      ]
    },
    "formation-executive-premium": {
      model: "Model 21",
      style: "Executive Premium",
      showcaseTitle: "Une vitrine premium pour formation executive, organisme haut de gamme, coaching expert ou offre d'accompagnement a forte valeur.",
      showcaseText: "Le style installe une vraie presence premium avec hero fort, programme bien structure, visages incarnes et boutons qui guident vers le contact.",
      positioning: "Hero editorial, sections programme/intervenants, rythmes visuels forts, modules de preuve et footer corporate.",
      modulesText: "Hero, programme, intervenants, formats, FAQ, CTA final et reseaux / newsletter a recontextualiser.",
      useCase: "Ideal pour formation executive, coaching premium, conseil en leadership, organisme expert ou offre d'accompagnement qui doit paraitre tres serieuse.",
      replace: {
        "Starts on 16 June 2024": "Direction executive",
        "User Experience Conference": "Une vitrine premium pour formation executive",
        "We offer you a new generation of task and project management system. Plan, manage and track.": "Une base ideale pour organisme premium, coach expert ou cabinet qui doit vendre un programme, une expertise et un cadre rassurant.",
        "Buy access pass": "Voir le brief",
        "Add to calendar": "Voir les modules",
        "John Karter": "Session pilote",
        "4.8 rating": "Format premium",
        "Mariya John": "Programme signature",
        "4.9 rating": "Contact rapide",
        "Best Online and Offline Conferences": "Un site pense pour programme, expertise et prise de contact",
        "Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet. recently with desktop publishing software like Aldus PageMaker": "Cette section montre comment structurer un programme, un positionnement, des intervenants et des appels a l'action avec un rendu tres premium.",
        "Upcoming conferences": "Voir le process",
        "The Biggest Digital Event in 2024": "Une structure qui tient sur mobile, desktop et pages dediees",
        "Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.": "Le template est tres utile pour vendre une offre executive, des sessions, des formats d'accompagnement et un niveau de marque plus haut de gamme.",
        "Ticket Prices": "Formats d'accompagnement",
        "$100": "Showroom",
        "Early birds": "Landing",
        "Until May 20, 2022": "Cadrage initial",
        "$150": "Showroom",
        "Late birds": "Vitrine",
        "After May 20, 2022": "Direction complete",
        "Book ticket": "Demander le brief",
        "Upcoming Conference": "Formats et modules",
        "The Conference Construct Millennial": "Page programme et promesse",
        "Local Business Global Event": "Bloc expertise et intervenants",
        "Frontiers Conference Perspectives": "Page contenu et sessions",
        "A Focus Conference Initiatives": "Bloc format premium",
        "Science and Beyond": "Parcours et specialites",
        "Global Event": "Bloc contact et conversion",
        "Cultural Exchange in the Digital Age": "Page ressources et cas d'usage",
        "Education for Tomorrow": "FAQ et informations utiles",
        "Speech by": "Anime par",
        "Reena John & Lorance": "Direction et accompagnement",
        "Martin Luthar": "Expert principal",
        "World Class Speakers": "Visages et profils",
        "Designation": "Intervenant principal",
        "What Our Attendees Say": "Ce que le site doit transmettre",
        "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through.": "Le rendu inspire une expertise plus credible, un cadre plus premium et une offre plus facile a comprendre des les premieres secondes.",
        "Jordhan Daniyel": "Nora Benali",
        "Previous Year Highlights": "Reperes qui renforcent la credibilite",
        "Many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form injected humour, or randomised words": "Cette zone peut servir a mettre en avant des chiffres clefs, des formats proposes ou des preuves de confiance faciles a lire.",
        "10k+": "1 jour",
        "Ticket confirmed": "Cadrage",
        "16": "3",
        "Partners": "Formats",
        "150k+": "100%",
        "Participants": "Mobile",
        "Coffee Break": "Pause",
        "Lunch Time": "Point bilan",
        "10:00 - 10:30": "Module intermediaire",
        "12:30 - 13:30": "Temps de respiration",
        "Book Ticket": "Voir le module",
        "Become a Part of the Digital Evolution!": "Un rendu premium qui se montre facilement",
        "Homepage": "Accueil",
        "Schedules": "Programme",
        "Speakers": "Intervenants",
        "Blog": "Ressources",
        "Contact": "Contact",
        "Documentation": "Support",
        "Sign In": "Voir le brief",
        "Sign Up": "Parler du projet",
        "Home": "Accueil",
        "Schedule": "Programme",
        "About": "Cabinet",
        "Sponsors": "Contact",
        "© All rights reserved. Made by ": "Adaptation showroom 2026 par ",
        "NextJs Templates": BRAND.brand,
        "Distributed by ": "Showroom ",
        "ThemeWagon": BRAND.brand,
        "Subscribe Newsletter": "Recevoir le brief",
        "Email address*": "Votre email"
      },
      hide: ["footer .flex.items-center.gap-5", "div.fixed.top-6.end-1\\/2.translate-x-1\\/2.z-50", ".dp_backto_top"],
      patches: [
        { selector: "header ul.hidden.lg\\:flex li a", mode: "text", values: ["Accueil", "Programme", "Intervenants", "Ressources", "Contact", "Support"] },
        { selector: "footer ul li a", mode: "text", values: ["Accueil", "Intervenants", "Programme", "Cabinet", "Contact"] },
        { selector: "form.newsletter-form button span", mode: "text", value: "Voir le brief" },
        { selector: "form.newsletter-form input", mode: "attr", attr: "placeholder", value: "Votre email" },
        { selector: "footer .col-span-5 p", mode: "text", values: ["Adaptation showroom 2026 par Ma Vitrine Online.", "Direction executive adaptee par Ma Vitrine Online."] }
      ]
    }
  };

  var SHARED_BASE = (function () {
    var current = document.currentScript;
    if (current && current.src) {
      return current.src.replace(/\/ma-vitrine-online\.js(?:\?.*)?$/, "");
    }
    return "../shared";
  })();

  function q(selector, root) {
    try {
      return (root || document).querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function qa(selector, root) {
    try {
      return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    } catch (error) {
      return [];
    }
  }

  function logoSrc() {
    return SHARED_BASE + "/logo-ma-vitrine-online.svg";
  }

  function ensureStylesheet() {
    if (q('link[href*="ma-vitrine-online.css"]')) {
      return;
    }
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = SHARED_BASE + "/ma-vitrine-online.css";
    document.head.appendChild(stylesheet);
  }

  function inferSlug() {
    var slug = document.body && document.body.getAttribute("data-mvo-template");
    if (slug) {
      return slug;
    }
    var pathname = String(window.location.pathname || "").replace(/\\/g, "/");
    var match = pathname.match(/\/(?:template|showroom)\/([^/]+)\//);
    return match ? decodeURIComponent(match[1]) : "";
  }

  function applyValue(node, mode, value, attr) {
    if (!node || typeof value === "undefined") {
      return;
    }
    if (mode === "html") {
      node.innerHTML = value;
      return;
    }
    if (mode === "attr") {
      node.setAttribute(attr, value);
      return;
    }
    node.textContent = value;
  }

  function applyPatches(patches) {
    (patches || []).forEach(function (patch) {
      var nodes = qa(patch.selector);
      if (!nodes.length) {
        return;
      }
      if (patch.values && patch.values.length) {
        nodes.forEach(function (node, index) {
          applyValue(node, patch.mode, patch.values[Math.min(index, patch.values.length - 1)], patch.attr);
        });
        return;
      }
      nodes.forEach(function (node) {
        applyValue(node, patch.mode, patch.value, patch.attr);
      });
    });
  }

  function replaceLogos() {
    qa("img[src*='logo'], img[data-logofixed], .footer-logo img, .logo img, .nav-brand img").forEach(function (img, index) {
      if (index > 12) {
        return;
      }
      img.setAttribute("src", logoSrc());
      img.removeAttribute("srcset");
      img.removeAttribute("data-logofixed");
      img.setAttribute("alt", BRAND.brand);
      img.style.height = "auto";
      img.style.maxWidth = index === 0 ? "180px" : "150px";
      img.style.objectFit = "contain";
    });
  }

  function buildCommonTokens() {
    return {
      "555-123-3456": BRAND.phoneDisplay,
      "+01 1234567890": BRAND.phoneDisplay,
      "+012 345 67890": BRAND.phoneDisplay,
      "1235 2355 98": BRAND.phoneDisplay,
      "+1 242 4942 290": BRAND.phoneDisplay,
      "+1) 96 716 6879": BRAND.phoneDisplay,
      "+1 5589 55488 55": BRAND.phoneDisplay,
      "123 Street, NY, USA": BRAND.address,
      "123 Street, New York, USA": BRAND.address,
      "34 Street Name, City Name Here, United States": BRAND.address,
      "8th floor, 379 Hudson St, New York, NY 10018": BRAND.address,
      "A108 Adam Street, New York, NY 535022": BRAND.address,
      "A108 Adam Street": BRAND.address,
      "New York, NY 535022": BRAND.address,
      "456 Elm Street, Los Angeles": BRAND.address,
      "198 West 21th Street, Suite 721 New York NY 10016": BRAND.address,
      "info@example.com": BRAND.email,
      "demo@gmail.com": BRAND.email,
      "contact@site.com": BRAND.email,
      "info@yourdomain.com": BRAND.email,
      "youremail@email.com": BRAND.email,
      "info@yoursite.com": BRAND.email,
      "yourmail@gmail.com": BRAND.email,
      "johndoe@gmail.com": BRAND.email,
      "contact@lounge.com": BRAND.email,
      "John Rockefeller": BRAND.owner,
      "Andrew Carnegie": BRAND.owner,
      "John Morgan": BRAND.owner,
      "Henry Ford": BRAND.owner,
      "Adam Phillips": BRAND.owner,
      "Dylan Adams": BRAND.owner,
      "Jhon Doe": BRAND.owner,
      "Josh Dunn": BRAND.owner,
      "Saul Goodman": BRAND.owner,
      "Sara Wilsson": BRAND.owner,
      "Jena Karlis": BRAND.owner,
      "John Larson": BRAND.owner,
      "John Doe": BRAND.owner,
      "John Smooth": BRAND.owner,
      "Ceo & Founder": PERSON_ROLES[0],
      "CEO, Co Founder": PERSON_ROLES[0],
      "CEO, XYZ Company": PERSON_ROLES[1],
      "Restaurant Owner": PERSON_ROLES[0],
      "Store Owner": PERSON_ROLES[0],
      "Head Chef": PERSON_ROLES[1],
      "Designer": PERSON_ROLES[2],
      "Entrepreneur": PERSON_ROLES[3],
      "Cleveland, Ohio": "Paris 16e",
      "Pittsburgh, Pennsylvania": "Paris 16e",
      "New York City": "Paris 16e",
      "Dearborn, Michigan": "Paris 16e"
    };
  }

  function buildTokenMap(preset) {
    var tokens = buildCommonTokens();
    Object.keys(preset.replace || {}).forEach(function (key) {
      tokens[key] = preset.replace[key];
    });
    return tokens;
  }

  function replaceTextTokens(tokens) {
    var keys = Object.keys(tokens || {}).sort(function (left, right) {
      return right.length - left.length;
    });
    if (!keys.length) {
      return;
    }
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        var parentName = node.parentNode && node.parentNode.nodeName;
        if (parentName === "SCRIPT" || parentName === "STYLE") {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var current;
    while ((current = walker.nextNode())) {
      var value = current.nodeValue;
      keys.forEach(function (key) {
        value = value.split(key).join(tokens[key]);
      });
      current.nodeValue = value;
    }
  }

  function rewriteBrandNodes() {
    var selectors = [
      ".navbar-brand",
      ".sitename",
      ".footer-logo",
      "footer .ftco-heading-2",
      ".footer-logo h1",
      ".footer-logo h2",
      ".site-logo a",
      ".header .navbar-brand",
      ".logo .brand-name",
      ".footer-brand"
    ];
    selectors.forEach(function (selector) {
      qa(selector).forEach(function (node) {
        if (!node.textContent || !node.textContent.trim()) {
          return;
        }
        node.textContent = BRAND.brand;
      });
    });
  }

  function rewritePortraitCards() {
    var portraitSelector = [
      "img[src*='team-']",
      "img[src*='chef-']",
      "img[src*='avatar']",
      "img[src*='testimonial']",
      "img[src*='person_']",
      "img[src*='client']",
      "img[src*='user-0']",
      "img[src*='cook_']",
      "[style*='person_']",
      "[style*='chef-']",
      "[style*='avatar']"
    ].join(", ");

    qa(portraitSelector).forEach(function (node, index) {
      var card = node.closest(".team-item, .team-member, .staff, .testimonial-item, .testimonials-slider__slide, .media, .item, .comment-body, .comment, blockquote, .ftco-animate");
      if (!card || card.getAttribute("data-mvo-person") === "1") {
        if (node.tagName === "IMG") {
          node.alt = BRAND.owner;
        }
        return;
      }

      card.setAttribute("data-mvo-person", "1");

      var cite = q(".testimonials-slider__cite", card);
      if (cite) {
        var locationNode = q("span", cite);
        cite.textContent = BRAND.owner + " ";
        if (locationNode) {
          cite.appendChild(locationNode);
          locationNode.textContent = "Paris 16e";
        }
      }

      var nameNode = q(".team-text h2, .team-text h3, .team-text h4, .member-info h4, .staff h3, .staff h4, .testimonial-content h3, .author h3, .comment-body h3, .comment-body h4, h3, h4, h5", card);
      if (nameNode) {
        nameNode.textContent = BRAND.owner;
      }

      var roleNode = q(".team-text p, .member-info span, .staff .position, .position, .testimonial-content h4, .author p, .comment-body p", card);
      if (roleNode && roleNode.textContent.trim().length < 80) {
        roleNode.textContent = PERSON_ROLES[index % PERSON_ROLES.length];
      }

      if (node.tagName === "IMG") {
        node.alt = BRAND.owner;
      }
    });
  }

  function rewriteContactDetails() {
    qa("a[href^='tel:']").forEach(function (anchor) {
      anchor.setAttribute("href", "tel:" + BRAND.phoneHref);
      if ((anchor.textContent || "").trim()) {
        anchor.textContent = BRAND.phoneDisplay;
      }
    });

    qa("a[href^='mailto:']").forEach(function (anchor) {
      anchor.setAttribute("href", "mailto:" + BRAND.email);
      anchor.textContent = BRAND.email;
    });

    qa("iframe[src*='google.com/maps'], iframe[src*='google.com/maps/embed']").forEach(function (iframe) {
      iframe.setAttribute("src", "https://www.google.com/maps?q=" + encodeURIComponent(BRAND.address) + "&output=embed");
    });
  }

  function classifyLink(anchor) {
    var text = (anchor.textContent || "").toLowerCase().trim();
    if (/catalogue|retour|back/.test(text)) {
      return "../index.html";
    }
    if (/contact|book|reservation|order|demo|call|commande|reserver|privat|table|consult|rendez|brief|parler|sign up|signup|subscribe/.test(text)) {
      return "#mvo-contact";
    }
    if (/about|story|welcome|learn|read more|concept|apropos|a propos|home|homepage|cabinet/.test(text)) {
      return "#mvo-summary";
    }
    if (/menu|service|feature|chef|gallery|news|recipe|event|module|carte|galerie|equipe|offer|dishes|pricing|plan|testimonial|testimoni|blog|speaker|schedule|agenda|programme|program|documentation|resource|ressource|faq|portfolio|video|audio|format|intervenant|offre|avis/.test(text)) {
      return "#mvo-modules";
    }
    return "#mvo-summary";
  }

  function rewriteLocalLinks() {
    var slug = inferSlug();
    qa("a[href]").forEach(function (anchor) {
      var href = (anchor.getAttribute("href") || "").trim();
      if (anchor.matches(".carousel-control, .carousel-control-prev, .carousel-control-next, [data-slide], [data-bs-slide], [data-toggle], [data-bs-toggle]")) {
        return;
      }
      if (/^(mailto:|tel:|javascript:)/i.test(href)) {
        return;
      }
      if (/^https?:/i.test(href)) {
        anchor.setAttribute("href", classifyLink(anchor));
        return;
      }
      if (/^\/(?:showroom|template)\/[^/]+(?:\/.*)?$/i.test(href)) {
        anchor.setAttribute("href", classifyLink(anchor));
        return;
      }
      if (slug && (href === "/showroom/" + slug || href === "/showroom/" + slug + "/")) {
        anchor.setAttribute("href", classifyLink(anchor));
        return;
      }
      if (href === "#0" || href === "#" || href === "" || href.indexOf(".html") !== -1) {
        anchor.setAttribute("href", classifyLink(anchor));
        return;
      }
      if (href.charAt(0) === "#" && href !== "#top") {
        anchor.setAttribute("href", classifyLink(anchor));
      }
    });
  }

  function neutralizeForms() {
    qa("form").forEach(function (form) {
      form.setAttribute("action", "#mvo-contact");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
      });
      if (form.parentNode && !q(".mvo-form-note", form.parentNode)) {
        var note = document.createElement("p");
        note.className = "mvo-form-note";
        note.textContent = "Version showroom : les formulaires sont neutralises jusqu'a la mise en ligne du vrai projet.";
        form.parentNode.appendChild(note);
      }
    });
  }

  function hideSections(selectors) {
    (selectors || []).forEach(function (selector) {
      qa(selector).forEach(function (node) {
        node.style.display = "none";
      });
    });
  }

  function injectRibbon(preset) {
    if (q(".mvo-ribbon")) {
      return;
    }
    var ribbon = document.createElement("div");
    ribbon.className = "mvo-ribbon";
    ribbon.innerHTML =
      '<a class="mvo-ribbon__brand" href="../index.html">' +
      '<img src="' + logoSrc() + '" alt="' + BRAND.brand + '">' +
      "<span><strong>" + BRAND.brand + "</strong><small>" + preset.model + " · " + preset.style + "</small></span>" +
      "</a>" +
      '<a class="mvo-ribbon__back" href="../index.html">Retour au catalogue</a>';
    document.body.appendChild(ribbon);
  }

  function injectShowcase(preset) {
    if (q("#mvo-summary")) {
      return;
    }

    var section = document.createElement("section");
    section.className = "mvo-preview-section";
    section.id = "mvo-summary";
    section.innerHTML =
      '<span class="mvo-preview-kicker">' + preset.model + " · Template neutralise</span>" +
      '<h2 class="mvo-preview-title">' + preset.showcaseTitle + "</h2>" +
      '<p class="mvo-preview-copy">' + preset.showcaseText + "</p>" +
      '<div class="mvo-preview-grid" id="mvo-modules">' +
      '<article class="mvo-preview-card"><strong>Positionnement</strong><p>' + preset.positioning + "</p></article>" +
      '<article class="mvo-preview-card"><strong>Modules prets</strong><p>' + preset.modulesText + "</p></article>" +
      '<article class="mvo-preview-card"><strong>Bon usage</strong><p>' + preset.useCase + "</p></article>" +
      '<article class="mvo-preview-card"><strong>Identite de demo</strong><p>Nom: ' + BRAND.brand + "<br>Contact: " + BRAND.owner + "<br>Tel: " + BRAND.phoneDisplay + "<br>Adresse: " + BRAND.address + "</p></article>" +
      "</div>" +
      '<div class="mvo-preview-footer" id="mvo-contact">' +
      '<p><span class="mvo-inline-brand"><img src="' + logoSrc() + '" alt="' + BRAND.brand + '"></span><br>' + BRAND.owner + "<br>" + BRAND.address + "<br>" + BRAND.phoneDisplay + "</p>" +
      '<div class="mvo-preview-actions">' +
      '<a class="mvo-preview-btn is-primary" href="../index.html">Voir tous les modeles</a>' +
      '<a class="mvo-preview-btn" href="#top">Revenir en haut</a>' +
      "</div>" +
      "</div>";

    var footer = q("footer");
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
  }

  function setMetadata(preset) {
    document.title = BRAND.brand + " | " + preset.model;
    var description = q('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", preset.showcaseText);
    document.documentElement.setAttribute("lang", "fr");
    document.documentElement.setAttribute("data-mvo-model", preset.model);
  }

  function applyPreset(preset) {
    document.body.classList.add("mvo-preview-ready");
    document.body.setAttribute("data-mvo-model", preset.model);

    setMetadata(preset);
    replaceTextTokens(buildTokenMap(preset));
    applyPatches(preset.patches);
    rewriteBrandNodes();
    replaceLogos();
    rewritePortraitCards();
    rewriteContactDetails();
    hideSections(preset.hide);
    rewriteLocalLinks();
    neutralizeForms();
    injectShowcase(preset);
    injectRibbon(preset);
  }

  function start() {
    ensureStylesheet();

    var slug = inferSlug();
    var preset = PRESETS[slug];
    if (!preset || !document.body) {
      return;
    }

    applyPreset(preset);
    window.setTimeout(function () {
      applyPreset(preset);
    }, 300);
    window.setTimeout(function () {
      applyPreset(preset);
    }, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
