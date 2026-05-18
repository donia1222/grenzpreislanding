import type { Lang } from "@/contexts/LanguageContext"

export const landingTranslations: Record<Lang, LandingT> = {
  de: {
    nav: {
      features: "Funktionen",
      app: "App",
      stores: "Supermärkte",
      categories: "Kategorien",
      howItWorks: "So geht's",
      cta: "App holen — Kostenlos",
      langModal: "Sprache wählen",
    },
    hero: {
      title1: "Lohnt sich",
      title2: "der Grenzübertritt?",
      subtitle: "GrenzPreis hilft dir zu entscheiden, ob sich der Grenzübertritt nach Deutschland oder Österreich wirklich lohnt – mit automatischer Berechnung von Benzin, Zoll und Mehrwertsteuer.",
      chips: ["Kostenlos", "CH · DE · AT"],
      offersPerWeek: "Im Preisvergleich",
      totalOffers: "CH vs. DE & AT",
      updatedWeekly: "Direkter Preisvergleich",
    },
    stats: {
      storesLabel: "Länder verglichen",
      offersLabel: "Sparpotenzial",
      freeValue: "Kostenlos",
      freeLabel: "Kein Abo",
      langLabel: "Sprachen",
    },
    features: {
      badge: "Funktionen",
      title: "Dein smarter",
      titleHighlight: "Grenzpreisrechner.",
      subtitle: "Kein Rätselraten mehr. GrenzPreis zeigt dir auf den Rappen genau, ob sich die Fahrt nach Deutschland oder Österreich wirklich lohnt.",
      items: [
        { title: "Preise vergleichen — CH vs. DE & AT", description: "Suche nach Produkten und sieh sofort, wie viel du im Ausland sparst. KI-geschätzte Preise von deutschen und österreichischen Supermärkten — direkt verglichen mit Schweizer Supermarktpreisen." },
        { title: "Echte Ersparnis berechnen", description: "GrenzPreis zieht Benzinkosten, Mehrwertsteuer und Zollfreibeträge ab — damit du weißt, wie viel du tatsächlich in der Tasche behältst." },
        { title: "Einkaufsliste erstellen", description: "Erstelle deine persönliche Einkaufsliste mit bis zu 20 Produkten. Wähle aus vorprogrammierten Kategorien oder suche mit KI nach aktuellen Preisen." },
        { title: "KI-Suche für aktuelle Preise", description: "Mit dem KI-Modus findet GrenzPreis aktuelle Preise direkt aus dem Internet — für eigene Produkte und Kategorien, die du selbst erstellen kannst." },
        { title: "Route & Zoll planen", description: "Wähle deine Grenzstadt, das Zielland und die Anzahl Personen. GrenzPreis berechnet die Zollfreibeträge automatisch und zeigt dir die Route." },
        { title: "Preisassistent (KI)", description: "Frag den eingebauten KI-Assistenten nach Preisen für Dienstleistungen — Zahnarzt, Tierarzt, Autoreparatur — in der Schweiz, Deutschland und Österreich." },
      ],
    },
    screenshots: {
      badge: "App-Vorschau",
      title: "Die App",
      titleHighlight: "im Überblick.",
      subtitle: "Einfach bedienbar, schnell und präzise — so sieht GrenzPreis in der Praxis aus.",
      items: [
        { label: "Route & Zielland", description: "Wähle deine Stadt, das Zielland und starte den Preisvergleich" },
        { label: "Benzin & Zoll", description: "Kraftstoffverbrauch und Zollfreibeträge werden automatisch einkalkuliert" },
        { label: "Einkaufsliste", description: "Produkte eingeben oder aus Kategorien auswählen — bis zu 20 Artikel" },
        { label: "Preisassistent", description: "KI-Assistent beantwortet Preisfragen zu CH, DE und AT" },
      ],
    },
    stores: {
      badge: "Supermärkte",
      title: "Deutschland & Österreich.",
      titleHighlight: "Günstig einkaufen.",
      subtitle: "GrenzPreis vergleicht Preise bei den führenden Supermärkten in Deutschland und Österreich — vollständig und aktuell.",
      items: [
        { name: "Deutschland 🇩🇪", description: "Vergleiche Preise deutscher Supermärkte direkt hinter der Grenze. Spare bis zu 40 % gegenüber Schweizer Preisen." },
        { name: "Österreich 🇦🇹", description: "Vergleiche Preise österreichischer Supermärkte. Ideal für Regionen im Vorarlberg und am Bodensee." },
      ],
      thankYou: "GrenzPreis nutzt KI-geschätzte Preisdaten aus DE & AT — alle Angaben dienen als Orientierung. Tatsächliche Preise im Laden können abweichen.",
    },
    categories: {
      badge: "Kategorien",
      title: "Sparen in",
      titleHighlight: "jeder Kategorie.",
      subtitle: "Von Fleisch bis Getränke — finde die besten Preise für deinen Grenzübertritt.",
      items: ["Fleisch", "Milch & Käse", "Obst & Gemüse", "Getränke", "Snacks", "Backwaren"],
    },
    howItWorks: {
      badge: "So funktioniert's",
      title: "In 3",
      titleHighlight: "einfachen Schritten.",
      subtitle: "Von der Eingabe bis zur Entscheidung — GrenzPreis macht es einfach.",
      steps: [
        { title: "Route & Produkte wählen", description: "Wähle deine Grenzstadt, das Zielland (DE, AT oder beide) und erstelle deine Einkaufsliste mit bis zu 20 Produkten." },
        { title: "Preise vergleichen lassen", description: "GrenzPreis sucht die aktuellen Preise in Deutschland und Österreich und vergleicht sie direkt mit Schweizer Supermarktpreisen." },
        { title: "Nettogewinn sehen & losfahren", description: "Du siehst deinen echten Nettogewinn nach Abzug von Benzin, Zoll und Mehrwertsteuer. Öffne direkt die Karte zur nächsten Grenzstadt." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Häufig gestellte",
      titleHighlight: "Fragen.",
      subtitle: "Alles, was du über GrenzPreis wissen musst.",
      items: [
        { question: "Ist die App wirklich kostenlos?", answer: "Ja, GrenzPreis ist vollständig kostenlos. Kein Abo, keine versteckten Kosten, keine Werbung." },
        { question: "Welche Länder werden verglichen?", answer: "GrenzPreis vergleicht Supermarktpreise in der Schweiz, Deutschland und Österreich — inklusive Benzin, Mehrwertsteuer und Zollfreibeträgen." },
        { question: "Wie genau sind die Preise?", answer: "Alle Preise sind KI-geschätzte Richtwerte — keine offiziellen Preise der Supermärkte. Im Standard-Modus nutzt GrenzPreis vorprogrammierte Durchschnittswerte, im KI-Modus werden tagesaktuelle Schätzungen erstellt. Die tatsächlichen Preise im Laden können abweichen." },
        { question: "Wie wird die Benzinersparnis berechnet?", answer: "Du gibst deinen Kraftstoffverbrauch und den aktuellen Preis ein. GrenzPreis berechnet die Benzinkosten für die Hin- und Rückfahrt automatisch und zieht sie von der Bruttoersparnis ab." },
        { question: "Was ist der Zollfreibetrag?", answer: "Schweizer können bis zu 300 CHF Waren pro Person zollfrei einführen. Bei 2 Personen sind es 600 CHF, bei Familien bis zu 1.200 CHF. GrenzPreis berechnet dies automatisch." },
        { question: "Gibt es eine Android-Version?", answer: "Die App ist aktuell für iOS verfügbar. Eine Android-Version ist in Entwicklung und wird bald im Google Play Store erhältlich sein." },
      ],
    },
    cta: {
      title: "Bereit zu wissen ob sich",
      titleHighlight: "der Grenzübertritt lohnt?",
      subtitle: "GrenzPreis zeigt dir deinen echten Nettogewinn — nach Benzin, Zoll und Wechselkurs.",
      benefits: ["Kostenlos", "CH · DE · AT", "Benzin & Zoll inbegriffen", "Offline verfügbar"],
    },
    footer: {
      copyright: "Alle Rechte vorbehalten.",
      datenschutz: "Datenschutz",
      impressum: "Impressum",
      kontakt: "Kontakt",
      praesentation: "Präsentation",
      langModal: "Sprache",
    },
  },

  es: {
    nav: {
      features: "Funciones",
      app: "App",
      stores: "Supermercados",
      categories: "Categorías",
      howItWorks: "Cómo funciona",
      cta: "Obtener la app — Gratis",
      langModal: "Elegir idioma",
    },
    hero: {
      title1: "¿Vale la pena",
      title2: "cruzar la frontera?",
      subtitle: "GrenzPreis te ayuda a decidir si realmente vale la pena cruzar la frontera a Alemania o Austria a comprar más barato — calculando gasolina, aranceles e IVA para que sepas si el viaje compensa de verdad.",
      chips: ["Gratis", "CH · DE · AT"],
      offersPerWeek: "En comparación",
      totalOffers: "CH vs. DE & AT",
      updatedWeekly: "Comparativa de precios",
    },
    stats: {
      storesLabel: "Países comparados",
      offersLabel: "Potencial de ahorro",
      freeValue: "Gratis",
      freeLabel: "Sin suscripción",
      langLabel: "Idiomas",
    },
    features: {
      badge: "Funciones",
      title: "Tu calculadora",
      titleHighlight: "de precios fronterizos.",
      subtitle: "Sin más dudas. GrenzPreis te muestra al céntimo si vale la pena el viaje a Alemania o Austria.",
      items: [
        { title: "Comparar precios — CH vs. DE & AT", description: "Busca productos y ve al instante cuánto ahorras en el extranjero. Precios estimados por IA de supermercados alemanes y austríacos — comparados directamente con los precios de supermercados suizos." },
        { title: "Calcular el ahorro real", description: "GrenzPreis descuenta los costes de gasolina, el IVA y las franquicias aduaneras — para que sepas exactamente cuánto te quedas en el bolsillo." },
        { title: "Crear lista de la compra", description: "Crea tu lista personal con hasta 20 productos. Elige entre categorías preprogramadas o busca precios actuales con IA." },
        { title: "Búsqueda con IA", description: "Con el modo IA, GrenzPreis busca precios actuales directamente en internet — para tus propios productos y categorías personalizadas." },
        { title: "Planificar ruta y aduana", description: "Elige tu ciudad fronteriza, el país de destino y el número de personas. GrenzPreis calcula las franquicias aduaneras automáticamente y te muestra la ruta." },
        { title: "Asistente de precios (IA)", description: "Pregunta al asistente de IA por precios de servicios — dentista, veterinario, taller — en Suiza, Alemania y Austria." },
      ],
    },
    screenshots: {
      badge: "Vista previa de la app",
      title: "La app",
      titleHighlight: "de un vistazo.",
      subtitle: "Fácil de usar, rápida y precisa — así es GrenzPreis en la práctica.",
      items: [
        { label: "Ruta y destino", description: "Elige tu ciudad, el país de destino y empieza la comparación de precios" },
        { label: "Gasolina y aduana", description: "El consumo de combustible y las franquicias aduaneras se calculan automáticamente" },
        { label: "Lista de la compra", description: "Introduce productos o elige categorías — hasta 20 artículos" },
        { label: "Asistente de precios", description: "El asistente de IA responde preguntas de precios sobre CH, DE y AT" },
      ],
    },
    stores: {
      badge: "Supermercados",
      title: "Alemania & Austria.",
      titleHighlight: "Comprar más barato.",
      subtitle: "GrenzPreis compara precios en los principales supermercados de Alemania y Austria — completo y actualizado.",
      items: [
        { name: "Alemania 🇩🇪", description: "Compara precios de supermercados alemanes justo al otro lado de la frontera. Ahorra hasta un 40 % respecto a los precios suizos." },
        { name: "Austria 🇦🇹", description: "Compara precios de supermercados austríacos. Ideal para regiones de Vorarlberg y el lago Constanza." },
      ],
      thankYou: "GrenzPreis utiliza precios estimados por IA de DE y AT — todos los datos son orientativos. Los precios reales en tienda pueden variar.",
    },
    categories: {
      badge: "Categorías",
      title: "Ahorra en",
      titleHighlight: "cada categoría.",
      subtitle: "Desde carne hasta bebidas — encuentra los mejores precios para tu cruce de frontera.",
      items: ["Carne", "Leche & Queso", "Frutas & Verduras", "Bebidas", "Snacks", "Panadería"],
    },
    howItWorks: {
      badge: "Cómo funciona",
      title: "En 3",
      titleHighlight: "sencillos pasos.",
      subtitle: "Desde la entrada hasta la decisión — GrenzPreis lo hace fácil.",
      steps: [
        { title: "Elige ruta y productos", description: "Elige tu ciudad fronteriza, el país de destino (DE, AT o ambos) y crea tu lista de compras con hasta 20 productos." },
        { title: "Comparar precios", description: "GrenzPreis busca los precios actuales en Alemania y Austria y los compara directamente con los precios de los supermercados suizos." },
        { title: "Ver ganancia neta y partir", description: "Ves tu ganancia neta real tras deducir gasolina, aranceles e IVA. Abre directamente el mapa a la ciudad fronteriza más cercana." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Preguntas",
      titleHighlight: "frecuentes.",
      subtitle: "Todo lo que necesitas saber sobre GrenzPreis.",
      items: [
        { question: "¿La app es realmente gratuita?", answer: "Sí, GrenzPreis es completamente gratuito. Sin suscripción, sin costes ocultos, sin publicidad." },
        { question: "¿Qué países se comparan?", answer: "GrenzPreis compara precios de supermercados en Suiza, Alemania y Austria — incluyendo gasolina, IVA y franquicias aduaneras." },
        { question: "¿Qué precisión tienen los precios?", answer: "Todos los precios son estimaciones orientativas calculadas por IA — no son precios oficiales de los supermercados. En modo estándar GrenzPreis usa valores medios preprogramados; en modo IA se generan estimaciones actualizadas. Los precios reales en tienda pueden variar." },
        { question: "¿Cómo se calcula el ahorro en gasolina?", answer: "Introduces tu consumo de combustible y el precio actual. GrenzPreis calcula automáticamente el coste del viaje de ida y vuelta y lo descuenta del ahorro bruto." },
        { question: "¿Qué es la franquicia aduanera?", answer: "Los suizos pueden importar bienes por un valor de hasta 300 CHF por persona sin pagar aranceles. Con 2 personas son 600 CHF, con familias hasta 1.200 CHF. GrenzPreis lo calcula automáticamente." },
        { question: "¿Hay versión para Android?", answer: "La app está disponible actualmente para iOS. Una versión Android está en desarrollo y pronto estará disponible en Google Play Store." },
      ],
    },
    cta: {
      title: "¿Listo para saber si vale",
      titleHighlight: "la pena el viaje?",
      subtitle: "GrenzPreis te muestra tu ganancia neta real — después de gasolina, aranceles y tipo de cambio.",
      benefits: ["Gratis", "CH · DE · AT", "Gasolina & aduana incluidos", "Disponible sin conexión"],
    },
    footer: {
      copyright: "Todos los derechos reservados.",
      datenschutz: "Privacidad",
      impressum: "Aviso legal",
      kontakt: "Contacto",
      praesentation: "Presentación",
      langModal: "Idioma",
    },
  },

  fr: {
    nav: {
      features: "Fonctionnalités",
      app: "App",
      stores: "Supermarchés",
      categories: "Catégories",
      howItWorks: "Comment ça marche",
      cta: "Obtenir l'app — Gratuit",
      langModal: "Choisir la langue",
    },
    hero: {
      title1: "Vaut-il la peine de",
      title2: "passer la frontière?",
      subtitle: "GrenzPreis vous aide à décider si traverser la frontière vers l'Allemagne ou l'Autriche vaut vraiment la peine — en calculant essence, droits de douane et TVA pour savoir si le déplacement en vaut le coup.",
      chips: ["Gratuit", "CH · DE · AT"],
      offersPerWeek: "En comparaison",
      totalOffers: "CH vs. DE & AT",
      updatedWeekly: "Comparatif des prix",
    },
    stats: {
      storesLabel: "Pays comparés",
      offersLabel: "Potentiel d'économie",
      freeValue: "Gratuit",
      freeLabel: "Sans abonnement",
      langLabel: "Langues",
    },
    features: {
      badge: "Fonctionnalités",
      title: "Votre calculateur",
      titleHighlight: "de prix frontalier.",
      subtitle: "Plus de doutes. GrenzPreis vous montre au centime près si le voyage en Allemagne ou en Autriche vaut vraiment la peine.",
      items: [
        { title: "Comparer les prix — CH vs. DE & AT", description: "Recherchez des produits et voyez instantanément combien vous économisez à l'étranger. Prix estimés par IA des supermarchés allemands et autrichiens — comparés directement aux prix des supermarchés suisses." },
        { title: "Calculer l'économie réelle", description: "GrenzPreis déduit les coûts d'essence, la TVA et les franchises douanières — pour que vous sachiez exactement ce que vous gardez dans votre poche." },
        { title: "Créer une liste de courses", description: "Créez votre liste personnelle avec jusqu'à 20 produits. Choisissez parmi des catégories préprogrammées ou recherchez les prix actuels avec l'IA." },
        { title: "Recherche par IA", description: "Avec le mode IA, GrenzPreis trouve les prix actuels directement sur internet — pour vos propres produits et catégories personnalisées." },
        { title: "Planifier l'itinéraire et la douane", description: "Choisissez votre ville frontalière, le pays de destination et le nombre de personnes. GrenzPreis calcule automatiquement les franchises douanières et vous montre l'itinéraire." },
        { title: "Assistant prix (IA)", description: "Demandez à l'assistant IA les prix des services — dentiste, vétérinaire, garage — en Suisse, en Allemagne et en Autriche." },
      ],
    },
    screenshots: {
      badge: "Aperçu de l'app",
      title: "L'app",
      titleHighlight: "en un coup d'œil.",
      subtitle: "Facile à utiliser, rapide et précise — voilà GrenzPreis en pratique.",
      items: [
        { label: "Itinéraire & destination", description: "Choisissez votre ville, le pays de destination et démarrez la comparaison de prix" },
        { label: "Essence & douane", description: "La consommation de carburant et les franchises douanières sont calculées automatiquement" },
        { label: "Liste de courses", description: "Entrez des produits ou choisissez des catégories — jusqu'à 20 articles" },
        { label: "Assistant prix", description: "L'assistant IA répond aux questions de prix sur CH, DE et AT" },
      ],
    },
    stores: {
      badge: "Supermarchés",
      title: "Allemagne & Autriche.",
      titleHighlight: "Acheter moins cher.",
      subtitle: "GrenzPreis compare les prix dans les principaux supermarchés d'Allemagne et d'Autriche — complet et à jour.",
      items: [
        { name: "Allemagne 🇩🇪", description: "Comparez les prix des supermarchés allemands juste de l'autre côté de la frontière. Économisez jusqu'à 40 % par rapport aux prix suisses." },
        { name: "Autriche 🇦🇹", description: "Comparez les prix des supermarchés autrichiens. Idéal pour les régions du Vorarlberg et du lac de Constance." },
      ],
      thankYou: "GrenzPreis utilise des prix estimés par IA pour DE et AT — toutes les données sont indicatives. Les prix réels en magasin peuvent varier.",
    },
    categories: {
      badge: "Catégories",
      title: "Économisez dans",
      titleHighlight: "chaque catégorie.",
      subtitle: "De la viande aux boissons — trouvez les meilleurs prix pour votre passage de frontière.",
      items: ["Viande", "Lait & Fromage", "Fruits & Légumes", "Boissons", "Snacks", "Boulangerie"],
    },
    howItWorks: {
      badge: "Comment ça marche",
      title: "En 3",
      titleHighlight: "étapes simples.",
      subtitle: "De la saisie à la décision — GrenzPreis simplifie tout.",
      steps: [
        { title: "Choisir l'itinéraire et les produits", description: "Choisissez votre ville frontalière, le pays de destination (DE, AT ou les deux) et créez votre liste de courses avec jusqu'à 20 produits." },
        { title: "Comparer les prix", description: "GrenzPreis cherche les prix actuels en Allemagne et en Autriche et les compare directement avec les prix des supermarchés suisses." },
        { title: "Voir le gain net et partir", description: "Vous voyez votre gain net réel après déduction de l'essence, des droits de douane et de la TVA. Ouvrez directement la carte vers la ville frontalière la plus proche." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Questions",
      titleHighlight: "fréquentes.",
      subtitle: "Tout ce que vous devez savoir sur GrenzPreis.",
      items: [
        { question: "L'app est-elle vraiment gratuite?", answer: "Oui, GrenzPreis est entièrement gratuit. Pas d'abonnement, pas de coûts cachés, pas de publicité." },
        { question: "Quels pays sont comparés?", answer: "GrenzPreis compare les prix des supermarchés en Suisse, en Allemagne et en Autriche — y compris l'essence, la TVA et les franchises douanières." },
        { question: "Quelle est la précision des prix?", answer: "Tous les prix sont des estimations indicatives calculées par IA — ce ne sont pas des prix officiels des supermarchés. En mode standard GrenzPreis utilise des moyennes préprogrammées, en mode IA des estimations actualisées sont générées. Les prix réels en magasin peuvent varier." },
        { question: "Comment l'économie en essence est-elle calculée?", answer: "Vous saisissez votre consommation de carburant et le prix actuel. GrenzPreis calcule automatiquement le coût du trajet aller-retour et le déduit de l'économie brute." },
        { question: "Qu'est-ce que la franchise douanière?", answer: "Les Suisses peuvent importer des marchandises jusqu'à 300 CHF par personne en franchise de droits. Avec 2 personnes, c'est 600 CHF, avec des familles jusqu'à 1.200 CHF. GrenzPreis le calcule automatiquement." },
        { question: "Y a-t-il une version Android?", answer: "L'app est actuellement disponible pour iOS. Une version Android est en cours de développement et sera bientôt disponible sur le Google Play Store." },
      ],
    },
    cta: {
      title: "Prêt à savoir si",
      titleHighlight: "la frontière vaut le déplacement?",
      subtitle: "GrenzPreis vous montre votre gain net réel — après essence, droits de douane et taux de change.",
      benefits: ["Gratuit", "CH · DE · AT", "Essence & douane inclus", "Disponible hors ligne"],
    },
    footer: {
      copyright: "Tous droits réservés.",
      datenschutz: "Confidentialité",
      impressum: "Mentions légales",
      kontakt: "Contact",
      praesentation: "Présentation",
      langModal: "Langue",
    },
  },

  it: {
    nav: {
      features: "Funzionalità",
      app: "App",
      stores: "Supermercati",
      categories: "Categorie",
      howItWorks: "Come funziona",
      cta: "Scarica l'app — Gratis",
      langModal: "Scegli la lingua",
    },
    hero: {
      title1: "Vale la pena",
      title2: "varcare il confine?",
      subtitle: "GrenzPreis ti aiuta a decidere se vale davvero la pena varcare il confine verso la Germania o l'Austria per fare la spesa — calcolando carburante, dazi doganali e IVA, così sai se il viaggio conviene davvero.",
      chips: ["Gratuito", "CH · DE · AT"],
      offersPerWeek: "Nel confronto",
      totalOffers: "CH vs. DE & AT",
      updatedWeekly: "Confronto prezzi",
    },
    stats: {
      storesLabel: "Paesi confrontati",
      offersLabel: "Potenziale di risparmio",
      freeValue: "Gratuito",
      freeLabel: "Nessun abbonamento",
      langLabel: "Lingue",
    },
    features: {
      badge: "Funzionalità",
      title: "Il tuo calcolatore",
      titleHighlight: "di prezzi transfrontalieri.",
      subtitle: "Niente più dubbi. GrenzPreis ti mostra al centesimo se il viaggio in Germania o Austria vale davvero la pena.",
      items: [
        { title: "Confrontare i prezzi — CH vs. DE & AT", description: "Cerca prodotti e vedi subito quanto risparmi all'estero. Prezzi stimati dall'IA dei supermercati tedeschi e austriaci — confrontati direttamente con i prezzi dei supermercati svizzeri." },
        { title: "Calcolare il risparmio reale", description: "GrenzPreis deduce i costi del carburante, l'IVA e le franchigie doganali — così sai esattamente quanto ti rimane in tasca." },
        { title: "Creare la lista della spesa", description: "Crea la tua lista personale con fino a 20 prodotti. Scegli tra categorie preprogrammate o cerca i prezzi attuali con l'IA." },
        { title: "Ricerca con IA", description: "Con la modalità IA, GrenzPreis trova i prezzi attuali direttamente da internet — per i tuoi prodotti e categorie personalizzate." },
        { title: "Pianificare percorso e dogana", description: "Scegli la tua città di confine, il paese di destinazione e il numero di persone. GrenzPreis calcola automaticamente le franchigie doganali e ti mostra il percorso." },
        { title: "Assistente prezzi (IA)", description: "Chiedi all'assistente IA i prezzi dei servizi — dentista, veterinario, officina — in Svizzera, Germania e Austria." },
      ],
    },
    screenshots: {
      badge: "Anteprima app",
      title: "L'app",
      titleHighlight: "in sintesi.",
      subtitle: "Facile da usare, veloce e precisa — ecco come si presenta GrenzPreis nella pratica.",
      items: [
        { label: "Percorso & destinazione", description: "Scegli la tua città, il paese di destinazione e avvia il confronto prezzi" },
        { label: "Carburante & dogana", description: "Il consumo di carburante e le franchigie doganali vengono calcolati automaticamente" },
        { label: "Lista della spesa", description: "Inserisci prodotti o scegli categorie — fino a 20 articoli" },
        { label: "Assistente prezzi", description: "L'assistente IA risponde alle domande sui prezzi in CH, DE e AT" },
      ],
    },
    stores: {
      badge: "Supermercati",
      title: "Germania & Austria.",
      titleHighlight: "Fare la spesa risparmiando.",
      subtitle: "GrenzPreis confronta i prezzi nei principali supermercati di Germania e Austria — completo e aggiornato.",
      items: [
        { name: "Germania 🇩🇪", description: "Confronta i prezzi dei supermercati tedeschi appena oltre il confine. Risparmia fino al 40 % rispetto ai prezzi svizzeri." },
        { name: "Austria 🇦🇹", description: "Confronta i prezzi dei supermercati austriaci. Ideale per le regioni del Vorarlberg e del Lago di Costanza." },
      ],
      thankYou: "GrenzPreis utilizza prezzi stimati dall'IA per DE e AT — tutti i dati sono indicativi. I prezzi reali in negozio possono variare.",
    },
    categories: {
      badge: "Categorie",
      title: "Risparmiare in",
      titleHighlight: "ogni categoria.",
      subtitle: "Dalla carne alle bevande — trova i prezzi migliori per il tuo attraversamento del confine.",
      items: ["Carne", "Latte & Formaggi", "Frutta & Verdura", "Bevande", "Snack", "Panetteria"],
    },
    howItWorks: {
      badge: "Come funziona",
      title: "In 3",
      titleHighlight: "semplici passi.",
      subtitle: "Dall'inserimento alla decisione — GrenzPreis semplifica tutto.",
      steps: [
        { title: "Scegliere percorso e prodotti", description: "Scegli la tua città di confine, il paese di destinazione (DE, AT o entrambi) e crea la tua lista della spesa con fino a 20 prodotti." },
        { title: "Confrontare i prezzi", description: "GrenzPreis cerca i prezzi attuali in Germania e Austria e li confronta direttamente con i prezzi dei supermercati svizzeri." },
        { title: "Vedere il guadagno netto e partire", description: "Vedi il tuo guadagno netto reale dopo la deduzione di carburante, dazi doganali e IVA. Apri direttamente la mappa verso la città di confine più vicina." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Domande",
      titleHighlight: "frequenti.",
      subtitle: "Tutto ciò che devi sapere su GrenzPreis.",
      items: [
        { question: "L'app è davvero gratuita?", answer: "Sì, GrenzPreis è completamente gratuito. Nessun abbonamento, nessun costo nascosto, nessuna pubblicità." },
        { question: "Quali paesi vengono confrontati?", answer: "GrenzPreis confronta i prezzi dei supermercati in Svizzera, Germania e Austria — inclusi carburante, IVA e franchigie doganali." },
        { question: "Quanto sono precisi i prezzi?", answer: "Tutti i prezzi sono stime indicative calcolate dall'IA — non sono prezzi ufficiali dei supermercati. In modalità standard GrenzPreis usa medie preprogrammate, in modalità IA vengono generate stime aggiornate. I prezzi reali in negozio possono variare." },
        { question: "Come viene calcolato il risparmio sul carburante?", answer: "Inserisci il consumo di carburante e il prezzo attuale. GrenzPreis calcola automaticamente il costo del viaggio di andata e ritorno e lo deduce dal risparmio lordo." },
        { question: "Cos'è la franchigia doganale?", answer: "Gli svizzeri possono importare merci fino a 300 CHF per persona in esenzione da dazi. Con 2 persone sono 600 CHF, con famiglie fino a 1.200 CHF. GrenzPreis lo calcola automaticamente." },
        { question: "Esiste una versione Android?", answer: "L'app è attualmente disponibile per iOS. Una versione Android è in sviluppo e sarà presto disponibile sul Google Play Store." },
      ],
    },
    cta: {
      title: "Pronto a scoprire se",
      titleHighlight: "vale la pena attraversare il confine?",
      subtitle: "GrenzPreis ti mostra il tuo guadagno netto reale — dopo carburante, dazi doganali e cambio valuta.",
      benefits: ["Gratuito", "CH · DE · AT", "Carburante & dogana inclusi", "Disponibile offline"],
    },
    footer: {
      copyright: "Tutti i diritti riservati.",
      datenschutz: "Privacy",
      impressum: "Note legali",
      kontakt: "Contatto",
      praesentation: "Presentazione",
      langModal: "Lingua",
    },
  },

  en: {
    nav: {
      features: "Features",
      app: "App",
      stores: "Supermarkets",
      categories: "Categories",
      howItWorks: "How it works",
      cta: "Get the App — Free",
      langModal: "Choose language",
    },
    hero: {
      title1: "Is the border crossing",
      title2: "worth it?",
      subtitle: "GrenzPreis helps you decide whether crossing the border to Germany or Austria to shop cheaper is really worth it — calculating fuel, customs and VAT so you know if the trip actually pays off.",
      chips: ["Free", "CH · DE · AT"],
      offersPerWeek: "In comparison",
      totalOffers: "CH vs. DE & AT",
      updatedWeekly: "Direct price comparison",
    },
    stats: {
      storesLabel: "Countries compared",
      offersLabel: "Savings potential",
      freeValue: "Free",
      freeLabel: "No subscription",
      langLabel: "Languages",
    },
    features: {
      badge: "Features",
      title: "Your smart",
      titleHighlight: "border price calculator.",
      subtitle: "No more guessing. GrenzPreis shows you to the cent whether the trip to Germany or Austria is really worth it.",
      items: [
        { title: "Compare prices — CH vs. DE & AT", description: "Search for products and instantly see how much you save abroad. AI-estimated prices from German and Austrian supermarkets — compared directly with Swiss supermarket prices." },
        { title: "Calculate real savings", description: "GrenzPreis deducts fuel costs, VAT and customs allowances — so you know exactly how much stays in your pocket." },
        { title: "Create a shopping list", description: "Create your personal shopping list with up to 20 products. Choose from pre-programmed categories or search for current prices with AI." },
        { title: "AI search for current prices", description: "With AI mode, GrenzPreis finds current prices directly from the internet — for your own products and custom categories you can create yourself." },
        { title: "Plan route & customs", description: "Choose your border town, destination country and number of people. GrenzPreis automatically calculates customs allowances and shows you the route." },
        { title: "Price assistant (AI)", description: "Ask the built-in AI assistant about service prices — dentist, vet, car repair — in Switzerland, Germany and Austria." },
      ],
    },
    screenshots: {
      badge: "App Preview",
      title: "The app",
      titleHighlight: "at a glance.",
      subtitle: "Easy to use, fast and precise — this is GrenzPreis in action.",
      items: [
        { label: "Route & destination", description: "Choose your city, the destination country and start the price comparison" },
        { label: "Fuel & customs", description: "Fuel consumption and customs allowances are calculated automatically" },
        { label: "Shopping list", description: "Enter products or choose categories — up to 20 items" },
        { label: "Price assistant", description: "AI assistant answers price questions for CH, DE and AT" },
      ],
    },
    stores: {
      badge: "Supermarkets",
      title: "Germany & Austria.",
      titleHighlight: "Shop cheaper.",
      subtitle: "GrenzPreis compares prices at the leading supermarkets in Germany and Austria — complete and up to date.",
      items: [
        { name: "Germany 🇩🇪", description: "Compare prices at German supermarkets just across the border. Save up to 40 % compared to Swiss prices." },
        { name: "Austria 🇦🇹", description: "Compare prices at Austrian supermarkets. Ideal for regions in Vorarlberg and on Lake Constance." },
      ],
      thankYou: "GrenzPreis uses AI-estimated price data from DE & AT — all figures are for guidance only. Actual in-store prices may vary.",
    },
    categories: {
      badge: "Categories",
      title: "Save in",
      titleHighlight: "every category.",
      subtitle: "From meat to beverages — find the best prices for your border crossing.",
      items: ["Meat", "Milk & Cheese", "Fruit & Vegetables", "Beverages", "Snacks", "Bakery"],
    },
    howItWorks: {
      badge: "How it works",
      title: "In 3",
      titleHighlight: "simple steps.",
      subtitle: "From input to decision — GrenzPreis makes it simple.",
      steps: [
        { title: "Choose route & products", description: "Select your border town, destination country (DE, AT or both) and create your shopping list with up to 20 products." },
        { title: "Compare prices", description: "GrenzPreis finds current prices in Germany and Austria and compares them directly with Swiss supermarket prices." },
        { title: "See net gain & go", description: "You see your real net gain after deducting fuel, customs duties and VAT. Open the map directly to the nearest border town." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked",
      titleHighlight: "questions.",
      subtitle: "Everything you need to know about GrenzPreis.",
      items: [
        { question: "Is the app really free?", answer: "Yes, GrenzPreis is completely free. No subscription, no hidden costs, no ads." },
        { question: "Which countries are compared?", answer: "GrenzPreis compares supermarket prices in Switzerland, Germany and Austria — including fuel, VAT and customs allowances." },
        { question: "How accurate are the prices?", answer: "All prices are AI-estimated guidance values — not official supermarket prices. In standard mode GrenzPreis uses pre-programmed averages; in AI mode up-to-date estimates are generated. Actual in-store prices may vary." },
        { question: "How is the fuel saving calculated?", answer: "You enter your fuel consumption and the current price. GrenzPreis automatically calculates the round-trip fuel cost and deducts it from the gross savings." },
        { question: "What is the customs allowance?", answer: "Swiss residents can import goods up to CHF 300 per person duty-free. With 2 people it's CHF 600, with families up to CHF 1,200. GrenzPreis calculates this automatically." },
        { question: "Is there an Android version?", answer: "The app is currently available for iOS. An Android version is in development and will soon be available on the Google Play Store." },
      ],
    },
    cta: {
      title: "Ready to find out if",
      titleHighlight: "the border crossing is worth it?",
      subtitle: "GrenzPreis shows you your real net savings — after fuel, customs and exchange rate.",
      benefits: ["Free", "CH · DE · AT", "Fuel & customs included", "Available offline"],
    },
    footer: {
      copyright: "All rights reserved.",
      datenschutz: "Privacy",
      impressum: "Legal notice",
      kontakt: "Contact",
      praesentation: "Presentation",
      langModal: "Language",
    },
  },
}

export type LandingT = {
  nav: {
    features: string
    app: string
    stores: string
    categories: string
    howItWorks: string
    cta: string
    langModal: string
  }
  hero: {
    title1: string
    title2: string
    subtitle: string
    chips: string[]
    offersPerWeek: string
    totalOffers: string
    updatedWeekly: string
  }
  stats: {
    storesLabel: string
    offersLabel: string
    freeValue: string
    freeLabel: string
    langLabel: string
  }
  features: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  screenshots: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { label: string; description: string }[]
  }
  stores: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { name: string; description: string }[]
    thankYou: string
  }
  categories: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: string[]
  }
  howItWorks: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    steps: { title: string; description: string }[]
  }
  faq: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { question: string; answer: string }[]
  }
  cta: {
    title: string
    titleHighlight: string
    subtitle: string
    benefits: string[]
  }
  footer: {
    copyright: string
    datenschutz: string
    impressum: string
    kontakt: string
    praesentation: string
    langModal: string
  }
}
