(function () {
  var MENU_PATH = "../data/menu.json";
  var REFRESH_INTERVAL_MS = 15000;
  var lastMenuSnapshot = null;
  var lastHandledHash = "";
  var CATEGORY_I18N = {
    entrees: {
      en: { title: "Starters", subtitle: "Openers and house signatures" }
    },
    salades: {
      en: { title: "Main Salads", subtitle: "Generous salad bowls" }
    },
    croques: {
      en: { title: "Toasties", subtitle: "Served with salad and homemade fries" }
    },
    omelettes: {
      en: { title: "Omelettes", subtitle: "Served with salad and homemade fries" }
    },
    planches: {
      en: { title: "Sharing Boards", subtitle: "Ideal for sharing" }
    },
    plats: {
      en: { title: "Main Courses", subtitle: "Brasserie classics" }
    },
    pates: {
      en: { title: "Pastas", subtitle: "Our pasta dishes" }
    },
    fromages: {
      en: { title: "Cheeses", subtitle: "Cheese selection" }
    },
    desserts: {
      en: { title: "Desserts", subtitle: "Sweet finishes" }
    },
    glaces: {
      en: { title: "Ice Creams", subtitle: "Frozen desserts" }
    },
    cocktails: {
      en: { title: "Cocktails", subtitle: "Classic and signature mixes" }
    },
    "cocktails-sans-alcool": {
      en: { title: "Mocktails", subtitle: "Alcohol-free creations" }
    },
    aperitifs: {
      en: { title: "Aperitifs", subtitle: "Before-dinner drinks" }
    },
    whiskies: {
      en: { title: "Whiskies", subtitle: "4cl" }
    },
    "bieres-pression": {
      en: { title: "Draft Beers", subtitle: "On tap" }
    },
    "bieres-bouteille": {
      en: { title: "Bottled Beers", subtitle: "By the bottle" }
    },
    "boissons-fraiches": {
      en: { title: "Cold Drinks", subtitle: "Soft drinks, juices and mixers" }
    },
    "eaux-minerales": {
      en: { title: "Mineral Waters", subtitle: "Still and sparkling" }
    },
    "boissons-chaudes": {
      en: { title: "Hot Drinks", subtitle: "Coffee, tea and hot chocolate" }
    },
    digestifs: {
      en: { title: "Digestifs", subtitle: "After-dinner spirits" }
    },
    "vins-rouges": {
      en: { title: "Red Wines", subtitle: "By the glass and bottle" }
    },
    "vins-blancs": {
      en: { title: "White Wines", subtitle: "By the glass and bottle" }
    },
    "vins-roses": {
      en: { title: "Rosé Wines", subtitle: "By the glass and bottle" }
    },
    bulles: {
      en: { title: "Sparkling Wines", subtitle: "Champagne and sparkling wines" }
    }
  };
  var ITEM_I18N = {
    "le classique œuf dur mayonnaise maison bien moutardée": {
      frDescription: "",
      enDescription: "Classic hard-boiled egg with homemade mustard mayonnaise"
    },
    "carpaccio de bœuf copeaux de parmesan au pistou, salade roquette": {
      frDescription: "",
      enDescription: "Beef carpaccio with parmesan shavings with pesto, and arugula salad"
    },
    "foie gras de canard maison au miel et armagnac": {
      frDescription: "Marmelade de pomme golden aux épices. Entrée signature de la Maison.",
      enDescription: "Homemade duck foie gras marinated in honey and Armagnac, served with spiced Golden apple marmalade. House signature starter."
    },
    "salade fraîcheur de melon et tomates cerises au jambon de pays et mozzarella": {
      frDescription: "",
      enDescription: "Fresh melon and cherry tomato salad with cured ham and mozzarella"
    },
    "salade d'avocat aux crevettes piment d'espelette": {
      frDescription: "",
      enDescription: "Avocado and shrimps salad, Espelette pepper"
    },
    "œuf mollet crème de truffe, croûtons et parmesan": {
      frDescription: "",
      enDescription: "Meurette-style soft-boiled egg with truffle cream, croutons and parmesan"
    },
    "saumon gravlax pain poilâne, crème de ciboulette": {
      frDescription: "",
      enDescription: "Gravlax salmon, Poilâne bread and chive cream"
    },
    "niagara": {
      enDescription: "Mixed salad, cherry tomatoes, prawns, marinated salmon, shrimps, avocado, green vegetables and chicory"
    },
    "gourmande": {
      enDescription: "Mixed salad, candied onions, Charlotte potato, poached egg, mushrooms, duck breast and duck foie gras toast"
    },
    "césar": {
      enDescription: "Romaine lettuce, breaded chicken, hard-boiled egg, garlic croutons, parmesan shavings and Caesar dressing"
    },
    "salade de saison": {
      enDescription: "Seasonal salad with cherry tomatoes, mozzarella, melon, cured ham, chicken fillet and grilled vegetables"
    },
    "croque végétarien": {
      frDescription: "Tomate concassée, chèvre",
      enDescription: "Toasted sandwich with crushed tomato and goat cheese"
    },
    "croque-monsieur": {
      frDescription: "",
      enDescription: "Toasted ham and cheese sandwich"
    },
    "croque-madame": {
      frDescription: "",
      enDescription: "Toasted ham and cheese, fried egg sandwich"
    },
    "croque poulet": {
      frDescription: "",
      enDescription: "Toasted chicken sandwich"
    },
    "croque saumon mariné": {
      frDescription: "",
      enDescription: "Toasted marinated salmon sandwich"
    },
    "nature": {
      frDescription: "",
      enDescription: "Plain omelette"
    },
    "fromage": {
      frDescription: "",
      enDescription: "Cheese omelette"
    },
    "jambon ou champignons ou lardons": {
      frDescription: "",
      enDescription: "Ham or mushrooms or bacon omelette"
    },
    "mixte fromage et jambon": {
      frDescription: "",
      enDescription: "Mixed omelette with ham and cheese"
    },
    "burger façon niagara": {
      enName: "Niagara burger",
      enDescription: "Beef patty, candied onions, gherkins, tomato, melted cheddar, house sauce, homemade fries and salad"
    },
    "chicken burger": {
      enDescription: "Breaded chicken fillet, mustard sauce, salad, candied onions, homemade fries and salad"
    },
    "burger végétarien": {
      enName: "Vegetarian burger",
      enDescription: "Vegetable patty, avocado, cheddar, salad, tomato, candied onions, homemade fries and salad"
    },
    "suprême de poulet": {
      enName: "Chicken supreme",
      enDescription: "Mushroom cream and risotto"
    },
    "faux-filet charolais 250gr à la fleur de sel": {
      enName: "250g Charolais sirloin steak with fleur de sel"
    },
    "magret de canard": {
      enName: "Duck breast",
      enDescription: "Red fruit jus and sauteed potatoes Sarlat-style"
    },
    "tartare de bœuf préparé par le chef": {
      enName: "Chef-prepared beef tartare",
      enDescription: "Homemade fries and salad. House signature main course."
    },
    "andouillette 5a": {
      enDescription: "Wholegrain mustard sauce and homemade fries"
    },
    "ribs de bœuf angus aux épices": {
      enName: "Spiced Angus beef ribs",
      enDescription: "Baby potatoes and green vegetables. House signature main course."
    },
    "dos de cabillaud rôti": {
      enName: "Roasted cod fillet",
      enDescription: "Crushed potatoes"
    },
    "brochette de gambas en persillade": {
      enName: "Garlic parsley king prawn skewer",
      enDescription: "Tagliatelle"
    },
    "raviole à la ricotta-épinard": {
      enName: "Ricotta and spinach ravioli",
      enDescription: "Parmesan cream"
    },
    "tagliatelles aux lardons façon carbonara": {
      enName: "Carbonara-style tagliatelle with bacon"
    },
    "penne au filet de poulet et champignons crème de truffe": {
      enName: "Penne with chicken fillet, mushrooms and truffle cream"
    },
    "tagliatelles au saumon mariné": {
      enName: "Tagliatelle with marinated salmon"
    },
    "assortiment de fromages": {
      enName: "Cheese selection",
      enDescription: "Brie, Camembert, blue cheese, goat cheese, butter and basil salad"
    },
    "brie de meaux et sa fine salade": {
      enName: "Brie de Meaux with side salad"
    },
    "trilogie de crème brûlée pistache, vanille, caramel beurre salé": {
      enName: "Creme brulee trio: pistachio, vanilla and salted butter caramel"
    },
    "tiramisu façon niagara": {
      enName: "Niagara-style tiramisu"
    },
    "poire confite caramel beurre salé et spéculoos": {
      enName: "Candied pear with salted butter caramel and speculoos"
    },
    "cheesecake coulis aux fruits rouges": {
      enName: "Cheesecake with red fruit coulis"
    },
    "salade de fruits maison et son sorbet citron vert": {
      enName: "Homemade fruit salad with lime sorbet"
    },
    "café gourmand": {
      enName: "Gourmet coffee",
      enDescription: "Coffee with four mini desserts"
    },
    "thé gourmand": {
      enName: "Gourmet tea",
      enDescription: "Tea with four mini desserts"
    },
    "chocolat gourmand": {
      enName: "Gourmet hot chocolate",
      enDescription: "Hot chocolate with four mini desserts"
    },
    "café crème gourmand": {
      enName: "Gourmet cafe creme",
      enDescription: "Cafe creme with four mini desserts"
    },
    "champagne gourmand": {
      enName: "Gourmet Champagne",
      enDescription: "12cl glass of Champagne AOC with four mini desserts"
    }
  };

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getLang() {
    return document.documentElement.lang === "en" ? "en" : "fr";
  }

  function formatCurrency(value) {
    if (value === null || value === undefined || value === "") return "—";
    var amount = Number(value);
    if (Number.isNaN(amount)) return esc(value);
    return new Intl.NumberFormat(getLang() === "en" ? "en-GB" : "fr-FR", {
      style: "currency",
      currency: "EUR"
    }).format(amount);
  }

  function formatNumber(value) {
    if (value === null || value === undefined || value === "" || value === "—") return "—";
    var amount = Number(value);
    if (Number.isNaN(amount)) return esc(value);
    return getLang() === "en" ? String(amount) : String(amount).replace(".", ",");
  }

  function t(fr, en) {
    return getLang() === "en" ? en : fr;
  }

  function itemKey(name) {
    return String(name || "").trim().toLowerCase();
  }

  function looksEnglishDescription(text) {
    return /\b(with|and|served|salad|salads|cheese|cheeses|omelette|omelettes|coffee|dessert|desserts|main course|main courses|starter|starters|toast|toastie|toasties|toasted|board|boards|pasta|pastas|wine|wines|beer|beers|mixed|breaded|chicken|beef|duck|shrimp|shrimps|mushrooms|ham|bacon|plain|hard-boiled|homemade|croutons|parmesan shavings|openers|signature|signatures|brasserie|classic|classics|frozen|sweet finishes|cold drinks|hot drinks|mineral waters|sparkling wines|still and sparkling|by the glass and bottle|on tap|by the bottle|alcohol-free|mixes|bubbles)\b/i.test(String(text || ""));
  }

  function looksFrenchDescription(text) {
    return /\b(avec|au|aux|de|des|du|et|maison|salade|tomates|citron|crème|sauce|vin|glace|glaçons|frais|fraîcheur|fruits|nez|bouche|souple|minéral|poivre|poulet|poire|pêche|abricot|mangue|orange|citronnées)\b/i.test(String(text || ""));
  }

  function categoryI18n(category) {
    return CATEGORY_I18N[category && category.slug] || {};
  }

  function localizedField(entity, frKey, enKey, fallbackEn) {
    if (!entity) return "";
    if (getLang() === "en") return entity[enKey] || fallbackEn || entity[frKey] || "";
    return entity[frKey] || "";
  }

  function titleForCategory(category) {
    if (category.titleEn || category.subtitleEn) {
      return localizedField(category, "title", "titleEn", category.subtitle || category.title);
    }
    if (getLang() !== "en") return category.title;
    var i18n = categoryI18n(category);
    return (i18n.en && i18n.en.title) || category.subtitle || category.title;
  }

  function subtitleForCategory(category) {
    if (category.titleEn || category.subtitleEn) {
      if (getLang() !== "en") {
        var frSubtitle = category.subtitle || "";
        var normalizedSubtitle = String(frSubtitle).trim().toLowerCase();
        var normalizedTitleEn = String(category.titleEn || "").trim().toLowerCase();
        var normalizedSubtitleEn = String(category.subtitleEn || "").trim().toLowerCase();
        if (!frSubtitle) return "";
        if (looksEnglishDescription(frSubtitle)) return "";
        if (normalizedSubtitle && (normalizedSubtitle === normalizedTitleEn || normalizedSubtitle === normalizedSubtitleEn)) return "";
        return frSubtitle;
      }
      return category.subtitleEn || (category.title !== category.subtitle ? category.title : "");
    }
    if (getLang() !== "en") return category.subtitle || "";
    var i18n = categoryI18n(category);
    if (i18n.en && Object.prototype.hasOwnProperty.call(i18n.en, "subtitle")) return i18n.en.subtitle;
    return category.title !== category.subtitle ? category.title : "";
  }

  function itemName(item) {
    if (getLang() === "en" && item && item.nameEn) return item.nameEn;
    var match = ITEM_I18N[itemKey(item && item.name)];
    if (getLang() === "en" && match && match.enName) return match.enName;
    return item.name;
  }

  function itemDescription(item) {
    var description = item && item.description;
    if (getLang() === "en" && item && item.descriptionEn) {
      return item.descriptionEn;
    }
    var match = ITEM_I18N[itemKey(item && item.name)];
    if (getLang() === "en" && match && Object.prototype.hasOwnProperty.call(match, "enDescription")) {
      return match.enDescription;
    }
    if (getLang() === "en" && looksFrenchDescription(description)) {
      return "";
    }
    if (getLang() !== "en" && match && Object.prototype.hasOwnProperty.call(match, "frDescription")) {
      return match.frDescription;
    }
    if (getLang() !== "en" && looksEnglishDescription(description)) {
      return "";
    }
    return description;
  }

  function renderFormules(formules) {
    if (!formules || typeof formules !== "object") return "";

    var day = formules.menuDuJour || {};
    var child = formules.menuEnfant || {};
    var groups = [
      { key: "entrees", fr: "Entrée au choix", en: "Starter of the day" },
      { key: "plats", fr: "Plat au choix", en: "Main course of the day" },
      { key: "desserts", fr: "Dessert au choix", en: "Dessert of the day" }
    ].filter(function (group) {
      return Array.isArray(day.choices && day.choices[group.key]) && day.choices[group.key].length > 0;
    });

    return '\
      <article class="menu-block" id="cat-formules">\
        <div class="menu-block-head">\
          <h2>' + esc(getLang() === "en" ? (formules.titleEn || "Set menus") : (formules.title || "Formules")) + '</h2>\
          ' + ((getLang() === "en" ? (formules.subtitleEn || "Available every day for lunch and dinner") : formules.subtitle) ? "<p>" + esc(getLang() === "en" ? (formules.subtitleEn || "Available every day for lunch and dinner") : formules.subtitle) + "</p>" : "") + '\
        </div>\
        <div class="formula-grid">\
          <section class="formula-card">\
            <h3 class="formula-title">' + esc(getLang() === "en" ? (day.titleEn || "Daily menu") : (day.title || "Menu du jour")) + '</h3>\
            <div class="formula-prices">' + (day.prices || []).map(function (entry) {
              var label = getLang() === "en" ? (entry.labelEn || entry.label) : entry.label;
              if (getLang() === "en") {
                if (label === "Entrée + Plat ou Plat + Dessert") label = "Starter + Main course or Main course + Dessert";
                if (label === "Entrée + Plat + Dessert") label = "Starter + Main course + Dessert";
                if (label === "Entrée seule") label = "Starter only";
                if (label === "Plat seul") label = "Main course only";
                if (label === "Dessert seul") label = "Dessert only";
              }
              return '<div class="formula-price"><strong>' + formatCurrency(entry.amount) + '</strong><span>' + esc(label) + '</span></div>';
            }).join("") + '</div>\
            ' + (groups.length ? '<div class="formula-choices">' + groups.map(function (group) {
              return '<div class="formula-choice-group"><h4>' + esc(t(group.fr, group.en)) + '</h4><div class="formula-choice-list">' + day.choices[group.key].map(function (item) {
                return '<div class="formula-choice-item"><strong>' + esc(itemName(item)) + '</strong>' + (itemDescription(item) ? '<span>' + esc(itemDescription(item)) + '</span>' : '') + '</div>';
              }).join("") + '</div></div>';
            }).join("") + '</div>' : '') + '\
          </section>\
          ' + ((child.description || child.descriptionEn || child.price) ? '\
            <section class="formula-card">\
              <h3 class="formula-title">' + esc(getLang() === "en" ? (child.titleEn || "Kids menu") : "Menu enfant") + '</h3>\
              ' + ((getLang() === "en" ? (child.descriptionEn || "Minced steak, burger, ham, breaded chicken breast or fish, served with pasta or homemade fries, plus a vanilla or chocolate ice cream cup (1 scoop) and a 25cl drink") : child.description) ? '<p class="formula-description">' + esc(getLang() === "en" ? (child.descriptionEn || "Minced steak, burger, ham, breaded chicken breast or fish, served with pasta or homemade fries, plus a vanilla or chocolate ice cream cup (1 scoop) and a 25cl drink") : child.description) + '</p>' : '') + '\
              ' + (child.price !== undefined ? '<div class="formula-prices"><div class="formula-price"><strong>' + formatCurrency(child.price) + '</strong><span>' + esc(getLang() === "en" ? (child.titleEn || "Kids menu") : "Menu enfant") + '</span></div></div>' : '') + '\
            </section>' : '') + '\
        </div>\
      </article>';
  }

  function columnsFromCategory(category) {
    if (Array.isArray(category.columns) && category.columns.length) {
      return category.columns.filter(function (label) {
        return String(label || "").toLowerCase() !== "name";
      }).map(function (label) {
        var digits = String(label || "").replace(/[^\d]/g, "");
        var prefix = category.layout === "beer" || category.layout === "water" ? "price" : "p";
        return {
          key: prefix + digits,
          label: label
        };
      });
    }

    if (category.layout === "wine") {
      return [
        { key: "p15", label: "15cl" },
        { key: "p25", label: "25cl" },
        { key: "p50", label: "50cl" },
        { key: "p75", label: "75cl" }
      ];
    }

    if (category.layout === "beer") {
      return [
        { key: "price25", label: "25cl" },
        { key: "price50", label: "50cl" }
      ];
    }

    if (category.layout === "water") {
      return [
        { key: "price50", label: "50cl" },
        { key: "price100", label: "100cl" }
      ];
    }

    return [];
  }

  function renderPriceTable(category) {
    var columns = columnsFromCategory(category);
    var headers = columns.map(function (column) {
      return "<th>" + esc(column.label) + "</th>";
    }).join("");
    var rows = (category.items || []).map(function (item) {
      return "<tr><td><strong>" + esc(itemName(item)) + "</strong>" + (itemDescription(item) ? '<div class="menu-desc">' + esc(itemDescription(item)) + "</div>" : "") + "</td>" + columns.map(function (column) {
        return "<td>" + formatNumber(item[column.key]) + "</td>";
      }).join("") + "</tr>";
    }).join("");

    return '\
      <article class="menu-block" id="cat-' + esc(category.slug) + '">\
        <div class="menu-block-head">\
          <h2>' + esc(titleForCategory(category)) + '</h2>\
          ' + (subtitleForCategory(category) ? "<p>" + esc(subtitleForCategory(category)) + "</p>" : "") + '\
        </div>\
        <div class="table-wrap">\
          <table class="price-table">\
            <thead><tr><th>' + esc(t("Nom", "Item")) + '</th>' + headers + '</tr></thead>\
            <tbody>' + rows + '</tbody>\
          </table>\
        </div>\
      </article>';
  }

  function renderCategory(category) {
    if (!category) return "";
    if (category.layout === "wine" || category.layout === "beer" || category.layout === "water") {
      return renderPriceTable(category);
    }

    return '\
      <article class="menu-block" id="cat-' + esc(category.slug) + '">\
        <div class="menu-block-head">\
          <h2>' + esc(titleForCategory(category)) + '</h2>\
          ' + (subtitleForCategory(category) ? "<p>" + esc(subtitleForCategory(category)) + "</p>" : "") + '\
        </div>\
        <div class="menu-card">' + (category.items || []).map(function (item) {
          return '<div class="menu-item"><div><div class="menu-name">' + esc(itemName(item)) + '</div>' + (itemDescription(item) ? '<div class="menu-desc">' + esc(itemDescription(item)) + '</div>' : '') + '</div><div class="price">' + formatCurrency(item.price) + '</div></div>';
        }).join("") + '</div>\
      </article>';
  }

  function renderTabs(formules, categories) {
    var entries = [];
    if (formules) entries.push({ slug: "formules", title: t("Formules", "Set menus") });
    (categories || []).forEach(function (category) {
      entries.push({ slug: category.slug, title: titleForCategory(category) });
    });
    return entries.map(function (entry) {
      return '<a href="#cat-' + esc(entry.slug) + '">' + esc(entry.title) + '</a>';
    }).join("");
  }

  function sanitizeMenu(menu) {
    if (!menu || !Array.isArray(menu.categories)) return menu;
    menu.categories = menu.categories.map(function (category) {
      category.items = (category.items || []).filter(function (item) {
        var searchableText = [
          item && item.name,
          item && item.nameEn,
          item && item.description,
          item && item.descriptionEn
        ].join(" ").toLowerCase();
        return !/(^|\b)test\b|descr|uuskjs|iseiemmemes/.test(searchableText);
      });
      return category;
    });
    return menu;
  }

  function scrollToHashTarget(force) {
    var hash = window.location.hash || "";
    if (!hash || (!force && hash === lastHandledHash)) return;

    var targetId = hash.charAt(0) === "#" ? hash.slice(1) : hash;
    var target = document.getElementById(window.decodeURIComponent(targetId));
    if (!target) return;

    lastHandledHash = hash;
    window.requestAnimationFrame(function () {
      target.scrollIntoView({
        behavior: force ? "auto" : "smooth",
        block: "start"
      });
    });
  }

  function renderMenu(menu) {
    var root = document.getElementById("menu-root");
    var tabs = document.getElementById("menu-tabs");
    if (!root) return;

    var categories = Array.isArray(menu.categories) ? menu.categories : [];
    root.innerHTML = [renderFormules(menu.formules)].concat(categories.map(renderCategory)).join("");
    if (tabs) tabs.innerHTML = renderTabs(menu.formules, categories);
  }

  function loadMenu() {
    return fetch(MENU_PATH, { cache: "no-store" })
      .then(function (response) { return response.json(); })
      .then(function (menu) {
        var cleanMenu = sanitizeMenu(menu);
        var snapshot = JSON.stringify(cleanMenu);
        if (snapshot === lastMenuSnapshot) return;
        lastMenuSnapshot = snapshot;
        renderMenu(cleanMenu);
        scrollToHashTarget(true);
      });
  }

  loadMenu()
    .catch(function () {
      var root = document.getElementById("menu-root");
      if (root) root.innerHTML = '<div class="menu-block empty-state">' + esc(t("Impossible de charger la carte pour le moment.", "Unable to load the menu right now.")) + '</div>';
    });

  window.setInterval(function () {
    loadMenu().catch(function () {});
  }, REFRESH_INTERVAL_MS);

  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) loadMenu().catch(function () {});
  });

  window.addEventListener("hashchange", function () {
    scrollToHashTarget(false);
  });
})();
