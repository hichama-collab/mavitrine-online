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
    if (/catalogue|retour/.test(text)) {
      return "../index.html";
    }
    if (/contact|book|reservation|order|demo|call|commande|reserver|privat|table/.test(text)) {
      return "#mvo-contact";
    }
    if (/about|story|welcome|learn|read more|concept|apropos|a propos/.test(text)) {
      return "#mvo-summary";
    }
    if (/menu|service|feature|chef|gallery|news|recipe|event|module|carte|galerie|equipe|offer|dishes/.test(text)) {
      return "#mvo-modules";
    }
    return "#mvo-summary";
  }

  function rewriteLocalLinks() {
    qa("a[href]").forEach(function (anchor) {
      var href = (anchor.getAttribute("href") || "").trim();
      if (anchor.matches(".carousel-control, .carousel-control-prev, .carousel-control-next, [data-slide], [data-bs-slide], [data-toggle], [data-bs-toggle]")) {
        return;
      }
      if (/^(mailto:|tel:|javascript:)/i.test(href)) {
        return;
      }
      if (/^https?:/i.test(href)) {
        if (/youtube\.com|youtu\.be/.test(href)) {
          anchor.setAttribute("href", "../index.html");
        }
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

  function start() {
    ensureStylesheet();

    var slug = inferSlug();
    var preset = PRESETS[slug];
    if (!preset || !document.body) {
      return;
    }

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
