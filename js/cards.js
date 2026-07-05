// ============================================================
// EIGEN FAMILIE-KAARTEN — pas dit zelf aan!
// Alleen enkelvoudige woorden of namen
// ============================================================

const FAMILIE_KAARTEN = [
  // Namen van familie en vrienden (voeg zelf toe!):
  "Mama", "Papa", "Opa", "Oma",
  // "Tante", "Oom", "Noor", "Lotte", "Sem",
];

const THUIS_VOORWERPEN = [
  "Vaatwasser", "Stofzuiger", "Wasmachine", "Koelkast",
  "Afstandsbediening", "Magnetron", "Trampoline",
  "Lego", "Puzzel", "Speelkaarten", "Gitaar", "Piano",
  "Fiets", "Scooter", "Barbecue", "Tent", "Slaapzak",
];

// ============================================================
// ALGEMENE CATEGORIEËN
// ============================================================

const DIEREN_KAARTEN = [
  "Hond", "Kat", "Olifant", "Giraffe", "Leeuw", "Tijger",
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
  "Frozen", "Assepoester", "Sneeuwwitje", "Rapunzel",
  "Vaiana", "Encanto", "Coco", "Up", "Shrek", "Minions",
  "Brave", "Cars", "Luca", "Ratatouille", "Sing",
  "Paddington", "Matilda", "Aladdin", "Mulan", "Tarzan",
  "Bambi", "Pinokkio", "Dumbo", "Doornroosje", "Zootropolis",
  "Bluey", "SpongeBob",
];

const ETEN_KAARTEN = [
  "Pizza", "Pasta", "Hamburger", "Friet", "Appel", "Banaan",
  "Aardbei", "Watermeloen", "Ananas", "Mango", "Druiven",
  "Sinaasappel", "Citroen", "Wortel", "Broccoli", "Komkommer",
  "Tomaat", "Paprika", "Kaas", "Chocolade", "Koekje",
  "Taart", "Ijs", "Wafel", "Pannenkoek", "Stroopwafel",
  "Drop", "Hagelslag", "Pindakaas", "Cornflakes",
  "Boterham", "Soep", "Rijst", "Stamppot", "Spaghetti",
  "Lasagne", "Salade", "Sushi", "Hotdog", "Popcorn",
  "Chips", "Yoghurt", "Smoothie", "Chocomel", "Speculaas",
  "Oliebol", "Croissant", "Beschuit",
];

const SPORT_KAARTEN = [
  "Voetbal", "Basketbal", "Tennis", "Zwemmen", "Fietsen",
  "Hardlopen", "Skiën", "Schaatsen", "Volleybal", "Handbal",
  "Turnen", "Paardrijden", "Surfen", "Klimmen",
  "Judo", "Karate", "Tafeltennis", "Badminton",
  "Golf", "Rugby", "Hockey", "Dansen", "Ballet",
  "Bowlen", "Hinkelen", "Tikken", "Duiken",
];

const BEROEPEN_KAARTEN = [
  "Dokter", "Tandarts", "Leraar", "Politieagent",
  "Brandweerman", "Verpleegster", "Kok", "Bakker",
  "Piloot", "Astronaut", "Schilder", "Muzikant",
  "Acteur", "Schrijver", "Tuinman", "Postbode",
  "Vuilnisman", "Bouwvakker", "Dierenarts",
  "Apotheker", "Boer", "Visser", "Kapper",
  "Taxichauffeur", "Clown", "Goochelaar", "Danser",
  "Fotograaf", "YouTuber", "Presentator", "Bewaker",
];

const NATUUR_KAARTEN = [
  "Zon", "Maan", "Ster", "Regenboog", "Wolk", "Regen",
  "Sneeuw", "Bliksem", "Storm", "Berg", "Rivier", "Zee",
  "Meer", "Waterval", "Woestijn", "Jungle", "Bos", "Weide",
  "Vulkaan", "Eiland", "Kust", "Tornado", "Hagel", "Mist",
  "Bloem", "Boom", "Gras", "Cactus", "Paddenstoel",
  "Steen", "Zand", "Schelp", "Zeester", "IJsberg",
];

const VOORWERPEN_KAARTEN = [
  "Televisie", "Bank", "Tafel", "Stoel", "Bed", "Kussen",
  "Deken", "Lamp", "Koelkast", "Oven", "Magnetron",
  "Wasmachine", "Computer", "Telefoon", "Boek",
  "Fiets", "Auto", "Rugzak", "Koffer", "Paraplu",
  "Zonnebril", "Pet", "Helm", "Handschoenen", "Laarzen",
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
