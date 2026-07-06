// ============================================================
// EIGEN FAMILIE-KAARTEN — pas dit zelf aan!
// Alleen enkelvoudige woorden of namen
// ============================================================

const FAMILIE_KAARTEN = [
  // Namen van familie en vrienden (voeg zelf toe!):
  "Mama", "Papa", "Andere Opa", "Andere Oma", "Oude opa", "Oude oma",
  // "Tante Laila", "Oom Bart", "Noor", "Nina", "Jazzlyn", "Chloë", "Amaya", "Anne-Sofie", "Maja", "Lorena", "Tess", "Heloise", "Nieuwe opa", "Nieuwe oma", "Oom Sander", "Tante Ebru", "Tante Tia", "Tante tasja", "Tante Titia", "Maksim", "Vincent", "Jessica", "Siliya", "Julie", "Richard", "Simon", "Sofia", "Luukie", "Dirk", "Inge", "Suze", "Julia", "Elin", "Liv", "Groep 4", "Juf Simone", "Meester Teun", "Meester Ted", "Vespucci", 
 

];

const THUIS_VOORWERPEN = [
  "Vaatwasser",  "Six-seven", "Turnmat", "Was", "Koelkast",
"Airco",
  "Afstandsbediening", "Magnetron", "Trampoline", "Schommelstoel", "Appartement Amsterdam",
  "Lego", "Dumpling", "Needo", "Labubu", "Piano", "Skateboard", "Telefoon",
  "Fiets", "Step", "Barbecue", "Tent", "Beamer","Hoofddorp", "Amsterdam", "Noorwegen", "Kroatie", "Ruzie", "Buitendouche", "Zwembad", "Handdoek", "Duikpak", "Zwembad", "Boot","Uniform", "Groep 4", 

];

// ============================================================
// ALGEMENE CATEGORIEËN
// ============================================================

const DIEREN_KAARTEN = [
  "Hond", "Lucky", "Zara", "Indra", "Leeuw", "Tijger",
  "Aap", "Pinguïn", "Dolfijn", "Haai", "Papegaai", "Uil",
  "Konijn", "Hamster", "Schildpad", "Krokodil", "Zebra",
  "Neushoorn", "Nijlpaard", "Vlinder", "Bij", "Spin",
  "Kikker", "Slang", "Koe", "Paard", "Schaap", "Varken",
  "Kip", "Eend", "Zwaan", "Panda", "Koala", "Kangoeroe",
  "Zeehond", "Octopus", "Mol", "Egel", "Vos", "Wolf",
  "Beer", "Flamingo", "Luipaard", "Kameel", "Lama",
  "Zeepaard", "Salamander", "Ekster", "Specht", "Pauw",
  "Struisvogel", "Walrus", "Bever", "Wasbeer", "Hyena",
];

const FILMS_KAARTEN = [
  "Frozen", "Mama mia", "Toy story", "Broodhond",
  "Peppa big", "Lady en de Vagebond", "Nijntje", "Up", "Shrek", "Minions",
  "Tinkerbell", "Wie is de Mol", "Wie van de drie", "Rambo", "Sing",
  "MAFS", "The voice", "Salisch", "Dora", "Lion King",
  "Bambi", "Pinokkio", "Netflix", "Zoop", "Zootropolis",
  "Youtube", "Shorts", "De kleine zeemeermin", "Wednesday", "Disney", "Smurfen", "Jeugdjournaal", "Lucky Luke", "Home alone", "Mickey Mouse",
];

const ETEN_KAARTEN = [
  "Pizza", "Pasta", "Hamburger", "Friet", "Appelsap", "Banaan",
  "Aardbei", "Watermeloen", "Ananas", "Mango", "Druiven",
  "Sinaasappel", "Citroen", "Wortel", "Broccoli", "Komkommer",
  "Tomaat", "Paprika", "Kaas", "Chocolade", "Koekje",
  "Arepa pampuna", "Ijs", "Wafel", "Pannenkoek", "Kokosmelk",
  "Drop", "Hagelslag", "Pindakaas", "Cruesli",
  "Boterham", "Soep", "Rijst", "Stamppot", "Spaghetti",
  "Lasagne", "Salade", "Sushi", "Hotdog", "Popcorn",
  "Chips", "Yoghurt", "Smoothie", "Chocomel", "Speculaas",
  "Oliebol", "Croissant", "Vlees",
];

const SPORT_KAARTEN = [
  "Voetbal", "Basketbal", "Tennis", "Zwemmen", "Fietsen",
  "Hardlopen", "Skiën", "Schaatsen", "Volleybal", "Handbal",
  "Turnen", "Paardrijden", "Surfen", "Klimmen",
  "Judo", "Karate", "Tikkertje", "Boomhut",
  "Golf", "Rugby", "Hockey", "Dansen", "Ballet",
  "Bowlen", "Hinkelen", "Tikken", "Duiken",
];

const BEROEPEN_KAARTEN = [
  "Dokter", "Tandarts", "Leraar", "Politieagent",
  "Brandweerman", "Verpleegster", "Kok", "Bakker",
  "Piloot", "Astronaut", "Schilder", "Muzikant",
  "Acteur", "Tandenfee", "Tuinman", "Postbode",
  "Vuilnisman", "Bouwvakker", "Dierenarts",
  "Apotheker", "Boer", "Visser", "Kapper",
  "Neuriën", "Clown", "Goochelaar", "Danser",
  "Fotograaf", "YouTuber", "Presentator", "Bewaker",
];

const NATUUR_KAARTEN = [
  "Zon", "Maan", "Ster", "Regenboog", "Wolk", "Regen",
  "Sneeuw", "Bliksem", "Blue room", "Berg", "Noordkust", "Zweden",
  "Meer", "Waterval", "Woestijn", "Jungle", "Bos", "Muggenbult",
  "Vulkaan", "Eiland", "Kust", "Tornado", "Hagel", "Mist",
  "Bloem", "Oud-Valkeveen", "Gras", "Cactus", "Paddenstoel",
  "Steen", "Zand", "Schelp", "Zeester", "Zonsondergang",
];

const VOORWERPEN_KAARTEN = [
  "Televisie", "Bank", "Tafel", "Stoel", "Bed", "Kussen",
  "Dekbed", "Lamp", "Koelkast", "Oven", "Magnetron",
  "Wasmachine", "Computer", "Telefoon", "Boek",
  "Fiets", "Auto", "Rugzak", "Koffer", "Paraplu",
  "Zonnebril", "Tweeling", "Helm", "Handschoenen", "Laarzen",
  "Potlood", "Schaar", "Lijm", "Verf", "Liniaal",
  "Tandenborstel", "Zeep", "Handdoek", "Spiegel",
  "Klok", "Sleutels", "Portemonnee", "Puzzel", "Pop",
  "Trampoline", "Tent", "Slaapzak", "Verrekijker",
];

// ============================================================
// CATEGORIE-CONFIGURATIE
// ============================================================

const CATEGORIES = [
  { id: "familie",   icon: "👨‍👩‍👧", cards: FAMILIE_KAARTEN   },
  { id: "dieren",    icon: "🦁",     cards: DIEREN_KAARTEN    },
  { id: "films",     icon: "🎬",     cards: FILMS_KAARTEN     },
  { id: "eten",      icon: "🍕",     cards: ETEN_KAARTEN      },
  { id: "sport",     icon: "⚽",     cards: SPORT_KAARTEN     },
  { id: "beroepen",  icon: "👩‍⚕️",   cards: BEROEPEN_KAARTEN  },
  { id: "natuur",    icon: "🌿",     cards: NATUUR_KAARTEN    },
  { id: "voorwerpen",icon: "🎒",     cards: VOORWERPEN_KAARTEN},
  { id: "thuis",     icon: "🏠",     cards: THUIS_VOORWERPEN  },
];
