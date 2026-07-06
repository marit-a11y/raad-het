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
  "Fiets", "Step", "Barbecue", "Tent", "Beamer","Hoofddorp", "Amsterdam", "Noorwegen", "Kroatie", "Ruzie", "Buitendouche", "Zwembad", "Handdoek", "Duikpak", "Zwembad", "Boot","Uniform", "Groep 4", "Palapa", 

];

// ============================================================
// ALGEMENE CATEGORIEËN
// ============================================================

const DIEREN_KAARTEN = [
  "Hond", "Lucky", "Zara", "Indra", "Tonni", "Brownie",
  "Aap", "Pinguïn", "Dolfijn", "Haai", "Papegaai", "Plakiplaki",
  "Patso", "Eend", "Schildpad", "Krokodil", "Zebra",
  "Neushoorn", "Joker", "Vlinder", "Maribomba", "Spin",
  "Kikker", "Slang", "Koe", "Paard", "Schaap", "Varken",
  "Kip", "Eend", "Zwaan", "Panda", "Koala", "Kangoeroe",
  "Zeehond", "Octopus", "Mol", "Egel", "Vos", "Wolf",
  "Beer", "Flamingo", "Luipaard", "Kameel", "Lama",
  "Zeepaard", "Landkrab", "Kwal", "Specht", "Pauw",
  "Struisvogel", "Walrus", "Bever", "Wasbeer", "Zeeegel",
  "Gorilla", "Chimpansee", "Jaguar", "Poema", "Leguaan",
  "Kip", "Warawara", "Zeeleeuw", "Gekko", "Axolotl",
];

const FILMS_KAARTEN = [
  "Frozen", "Mamma Mia", "Broodhond", "Nijntje", "Up", "Shrek", "Minions",
  "Tinkerbell", "Rambo", "Wievandedrie", "Dora", "Zootropolis",
  "Wednesday", "Smurfen", "Mickey Mouse", "Bambi", "Pinokkio",
  "Zoop", "Jeugdjournaal", "MAFS", "Winx", "K3",
  "Pokémon", "Naruto", "Avatar", "Bluey", "Paw Patrol",
  "Stranger Things", "Wednesday", "Squid Game",
];

const ETEN_KAARTEN = [
  "Pizza", "Pasta", "Hamburger", "Friet", "Appelsap", "Banaan",
  "Aardbei", "Watermeloen", "Ananas", "Mango", "Druiven",
  "Sinaasappel", "Citroen", "Wortel", "Broccoli", "Komkommer",
  "Tomaat", "Paprika", "Kaas", "Chocolade", "Koekje",
  "Arepa", "Ijs", "Wafel", "Pannenkoek", "Kokosmelk",
  "Drop", "Hagelslag", "Pindakaas", "Cruesli",
  "Boterham", "Soep", "Rijst", "Stamppot", "Spaghetti",
  "Lasagne", "Salade", "Sushi", "Hotdog", "Popcorn",
  "Chips", "Yoghurt", "Smoothie", "Chocomel", "Speculaas",
  "Oliebol", "Croissant", "Marshmallow", "Kauwgom", "Lolly",
  "Taco", "Burrito", "Nasi", "Bami", "Satay",
];

const SPORT_KAARTEN = [
  "Voetbal", "Basketbal", "Tennis", "Zwemmen", "Fietsen",
  "Hardlopen", "Skiën", "Schaatsen", "Volleybal", "Handbal",
  "Turnen", "Paardrijden", "Surfen", "Klimmen",
  "Judo", "Karate", "Tikkertje", "Bowlen",
  "Golf", "Rugby", "Hockey", "Dansen", "Ballet",
  "Hinkelen", "Duiken", "Wielrennen", "Boogschie­ten",
  "Skateboarden", "Breakdansen", "Schermen", "Roeien",
];

const BEROEPEN_KAARTEN = [
  "Dokter", "Tandarts", "Leraar", "Politieagent",
  "Brandweerman", "Verpleegster", "Kok", "Bakker",
  "Piloot", "Astronaut", "Schilder", "Muzikant",
  "Acteur", "Tandenfee", "Tuinman", "Postbode",
  "Vuilnisman", "Bouwvakker", "Dierenarts",
  "Apotheker", "Boer", "Visser", "Kapper",
  "Clown", "Goochelaar", "Danser", "Fotograaf",
  "YouTuber", "Presentator", "Bewaker", "Bibliothecaris",
  "Schoonmaker", "Chauffeur", "Makelaar", "Rechter",
];

const NATUUR_KAARTEN = [
  "Zon", "Maan", "Ster", "Regenboog", "Wolk", "Regen",
  "Sneeuw", "Bliksem", "Berg", "Noordkust", "Zweden",
  "Meer", "Waterval", "Woestijn", "Jungle", "Bos", "Muggenbult",
  "Vulkaan", "Eiland", "Kust", "Tornado", "Hagel", "Mist",
  "Bloem", "Oud-Valkeveen", "Gras", "Cactus", "Paddenstoel",
  "Steen", "Zand", "Schelp", "Zeester", "Zonsondergang",
  "Gletsjer", "Koraalrif", "Savanne", "Moeras", "Palmboom",
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
  "Microscoop", "Telescoop", "Kompas", "Fakkel", "Zweefvliegtuig",
];

// Bekende personen en plaatsen — typisch 30 Seconds
const MENSEN_KAARTEN = [
  // Bekende Nederlanders
  "Sinterklaas", "Zwarte Piet", "Koning Willem", "Koningin Maxima",
  "Amalia", "Arjen Robben", "Johan Cruijff", "Max Verstappen",
  "Famke Louise", "Ali B", "Gordon", "Marco Borsato",
  // Internationaal (kinderen kennen ze)
  "Taylor Swift", "Beyoncé", "Rihanna", "Justin Bieber",
  "Ronaldo", "Messi", "Neymar", "LeBron James",
  "Mickey Mouse", "Donald Duck", "Winnie the Pooh",
  "Spiderman", "Batman", "Superman", "Wonder Woman",
  "Harry Potter", "Hermione", "Voldemort", "Dumbledore",
  "Elsa", "Anna", "Simba", "Pumba",
  // Landen & steden (30 Seconds klassiek)
  "Nederland", "België", "Duitsland", "Frankrijk", "Spanje",
  "Italië", "Amerika", "Australië", "China", "Japan",
  "Amsterdam", "Parijs", "Londen", "Rome", "New York",
];

const BEGRIPPEN_KAARTEN = [
  // Klassieke 30 Seconds abstracte woorden
  "Vakantie", "Verjaardag", "Feest", "Ziekenhuis", "School",
  "Bibliotheek", "Pretpark", "Bioscoop", "Markt", "Supermarkt",
  "Vliegveld", "Station", "Haven", "Museum", "Kasteel",
  "Sprookje", "Avontuur", "Geheim", "Verrassing", "Magie",
  "Vriendschap", "Familie", "Liefde", "Ruzie", "Kusje",
  "Ochtend", "Nacht", "Winter", "Zomer", "Lente", "Herfst",
  "Vuur", "Water", "Aarde", "Lucht", "Ijs",
  "Muziek", "Dans", "Tekening", "Foto", "Film",
  "Droom", "Angst", "Lachen", "Huilen", "Slapen",
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
  { id: "mensen",    icon: "⭐",     cards: MENSEN_KAARTEN    },
  { id: "begrippen", icon: "💭",     cards: BEGRIPPEN_KAARTEN },
];
