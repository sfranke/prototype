// A list of insert statements for single questions that should be added to the database.
db.questions.insert(
  {
    "question_id" : 100,
    "category": "Benutzer",
    "question": "Welches Programm ist KEIN Betriebssystem",
    "answers": [
      "MS Windows",
      "Joomla",
      "IOS",
      "Ubuntu",
      "Android"
    ],
    "solution": 1,
    "weight": 1.5
  }
)

db.questions.insert(
  {
    "question_id" : 101,
    "category": "Benutzer",
    "question": "Welches Programm ist eine Tabellenkalkulation?",
    "answers": [
      "MS Word",
      "MS Excel",
      "Ms OneNote",
      "MS Powerpoint",
      "Ms Outlook"
    ],
    "solution": 1,
    "weight": 1.5
  }
)

db.questions.insert(
  {
    "question_id" : 102,
    "category": "Benutzer",
    "question": "Was ist ein CMS?",
    "answers": [
      "Content-Management-System zum Erstellen und Bearbeiten von Webseiten",
      "Customer-Management-System zur Verwaltung von Kundendaten",
      "Company-Management-System zur Verwaltung von Unternehmensdaten",
      "Customs-Management-System zur Verwaltung von internationalen Warentransporten (Customs = Zoll)"
    ],
    "solution": 0,
    "weight": 1.5
  }
)

db.questions.insert(
  {
    "question_id" : 103,
    "category": "Benutzer",
    "question": "Sie sollen eine Präsentation für PC & Beamer erstellen. Welches Programm nutzen Sie dafür?",
    "answers": [
      "MS Word",
      "MS MS Excel",
      "MS OneNote",
      "MS Powerpoint",
      "MS Outlook"
    ],
    "solution": 3,
    "weight": 1.5
  }
)

db.questions.insert(
  {
    "question_id" : 104,
    "category": "Technik",
    "question": "Welches ist ein Datenträger mit magnetischer Datenaufzeichnung",
    "answers": [
      "Eine SD-Karte",
      "Eine Festplatte",
      "Ein USB-Stick",
      "Eine DVD"
    ],
    "solution": 1,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 105,
    "category": "Benutzer",
    "question": "Welches Programm ist kein Mailprogramm?",
    "answers": [
      "MS Mail",
      "MS Outlook",
      "Thunderbird",
      "Typo3"
    ],
    "solution": 1,
    "weight": 1.5
  }
)

db.questions.insert(
  {
    "question_id" : 106,
    "category": "Programmieren",
    "question": "Ein Bug (englisch: Wanze, Ungeziefer) in der EDV bezeichnet",
    "answers": [
      "Spionageprogramme von NSA, GRU, ...",
      "Einen Programmfehler",
      "Eine bestimmte Sorte Computerviren"
    ],
    "solution": 1,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 107,
    "category": "Web",
    "question": "Versuche, über gefälschte Webseiten, E-Mails oder Kurznachrichten an persönliche Daten eines Internet-Benutzers zu gelangen und damit Identitätsdiebstahl zu begehen, nennt man",
    "answers": [
      "Blogging",
      "Phishing",
      "Captcha",
      "Morphing"
    ],
    "solution": 1,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 108,
    "category": "Web",
    "question": "Das Kürzel WWW steht für",
    "answers": [
      "World Wide Web",
      "Wide World Web",
      "Wireless Web World",
      "World WiFi Web"
    ],
    "solution": 0,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 109,
    "category": "Technik",
    "question": "Welchen Anschluss finden Sie NICHT am Computer?",
    "answers": [
      "PS/2",
      "AG 56",
      "RJ 45",
      "USB 3"
    ],
    "solution": 1,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 110,
    "category": "Technik",
    "question": "Was ist KEINE drahtlose Übertragung?",
    "answers": [
      "Firewire",
      "NFC",
      "WIFI",
      "Bluetooth"
    ],
    "solution": 0,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 111,
    "category": "Technik",
    "question": "Ein moderner Flachbildschirm wird auch bezeichnet als",
    "answers": [
      "TTF",
      "TBC",
      "TFT",
      "CRT"
    ],
    "solution": 2,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 112,
    "category": "Programmieren",
    "question": "Welches ist KEINE Programmiersprache?",
    "answers": [
      "C++",
      "PHP",
      "HTML",
      "VB.Net",
      "JAVA"
    ],
    "solution": 2,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 113,
    "category": "Relationen",
    "question": "Wer ist der kleinste? Heinz ist größer als Marion. Marion ist kleiner als Dietmar. Dietmar ist kleiner als Heinz.",
    "answers": [
      "Heinz",
      "Marion",
      "Dietmar"

    ],
    "solution": 1,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 114,
    "category": "Relationen",
    "question": "Wer ist der/die fachlich Beste? Verona ist sehr gut, jedoch nicht so gut wie Peter. Nicole weiß überhaupt nichts. Marc hat den 2. Platz  in der Mathematikolympiade mit 1,2 Punkten vor Peter gewonnen.",
    "answers": [
      "Peter",
      "Verona",
      "Marc",
      "Nicole"

    ],
    "solution": 2,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 115,
    "category": "Wer ist der Jüngste? Alfred ist älter als Bertha. Bertha ist älter als Charlotte, aber jünger als Dorothea. Dorothea ist älter als Alfred",
    "question": "Relationen",
    "answers": [
      "Dorothea",
      "Bertha",
      "Alfred",
      "Charlotte"
    ],
    "solution": 3,
    "weight": 3
  }
)

db.questions.insert(
  {
    "question_id" : 116,
    "category": "Relationen",
    "question": "Wer hat den schönsten Garten? Alberts Garten ist ein Kunstwerk im englischen Stil. Pauls Garten wird als der schönste bezeichnet, aber nur 46% aller Gartenfreunde sind dieser Meinung. 54% der Gartenfreunde haben sich für eine Person entschieden, die erst auf dem Gartenfest gekührt wurde.",
    "answers": [
      "Paul",
      "Albert"
    ],
    "solution": 1,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 117,
    "category": "Relationen",
    "question": "Wer ist der schnellste Sprinter? Albert lief 9,87 sec. auf 100 Metern. Ronald gewann in 9,82 sec., wurde aber nachträglich wegen dopings disqualifiziert. Frank wurde Zweiter in ebenfalls 9,87 sec. per Zielfotoentschied.",
    "answers": [
      "Albert",
      "Frank",
      "Ronald",
      "Frank & Albert"
    ],
    "solution": 1,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 118,
    "category": "Schlussfolgerung",
    "question": "Der Dackel Max ist 30 cm hoch und wiegt 5 Kilo. ein Blindenhund muss mindestens 40 cm hoch sein.",
    "answers": [
      "Dackel wiegen verhältnismäßig wenig.",
      "Max ist kleiner als der Durchschnitt.",
      "Max ist kein Blindenhund.",
      "Blindenhunde sind größer als andere Hunde.",
      "Dackel werden selten als Blindenhunde verwendet,"
    ],
    "solution": 2,
    "weight": 2.5
  }
)

db.questions.insert(
  {
    "question_id" : 119,
    "category": "Schlussfolgerung",
    "question": "In den Sommermonaten kommt es auf der Autobahnstrecke zwischen Hamburg - Amsterdam oft zu Stauungen.",
    "answers": [
      "In den Sommermonaten ist diese Strecke überlastet.",
      "Die Autobahn hat zu wenige Fahrspuren.",
      "Während der Sommermonate werden zu viele Straßenbauarbeiten durchgeführt.",
      "Holländer ,womöglich mit Kindern und wohnwagen, fahren zu langsam",
      "Die deutschen Autofahrer fahren mit den Holländern um die Wette."
    ],
    "solution": 0,
    "weight": 2.5
  }
)

db.questions.insert(
  {
    "question_id" : 120,
    "category": "Schlussfolgerung",
    "question": "Formel-1-Fahrer leben gefährlich.",
    "answers": [
      "Es passieren in keinem anderen Sport so viele Unfälle wie bei der Formel-1.",
      "Die Lebenserwartung bei Formel-1-Fahrern ist niedriger als die des Bevölkerungsdurchschnitts.",
      "Im Durchschnitt kommt es bei jedem zweiten Formel-1-Fahrer zu einem Unfall.",
      "Bei Formel-1-Rennen passieren häufig Unfälle, bei denen der Fahrer zu Schaden kommen kann.",
      "Formel-1-Fahrer fahren im Kampf um den Sieg zu riskant."
    ],
    "solution": 3,
    "weight": 2.5
  }
)

db.questions.insert(
  {
    "question_id" : 121,
    "category": "Schlussfolgerung",
    "question": "Bei gesteigerter körperlicher Belastung muß auch die Kalorienzufuhr erhöht werden, damit der Körper leistungsfähig bleibt.",
    "answers": [
      "Wer viel isst, bewegt sich viel.",
      "Außerordentliche Bewegung erfordert mehr Kalorien.",
      "Vor jeder körperlichen Betätigung muss man viel Nahrung zu sich nehmen.",
      "Sportler erzielen um so bessere Ergebnisse wenn  sie sich kalorienreicher ernähren.",
      "Ein Leistungsfähiger Körper verbrennt am Tag ungefähr 8500 Kalorien."
    ],
    "solution": 1,
    "weight": 2.5
  }
)

db.questions.insert(
  {
    "question_id" : 122,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 5    7    4    6    3    ?",
    "answers": [
      "2",
      "0",
      "6",
      "8",
      "5"
    ],
    "solution": 4,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 123,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 72    61    48    ?",
    "answers": [
      "34",
      "33",
      "35",
      "37",
      "36"
    ],
    "solution": 1,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 124,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 75    15    25    5    15    ?",
    "answers": [
      "3",
      "25",
      "5",
      "18",
      "10"
    ],
    "solution": 0,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 125,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 8    5    15    18     6    3    9   ?",
    "answers": [
      "27",
      "3",
      "6",
      "18",
      "12"
    ],
    "solution": 4,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 126,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 1    2    4    2    4    8    6    ?",
    "answers": [
      "4",
      "10",
      "2",
      "12",
      "13"
    ],
    "solution": 3,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 127,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 3    6    18    36    108    216    ?",
    "answers": [
      "432",
      "72",
      "648",
      "108",
      "9,1818181818"
    ],
    "solution": 2,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 128,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : -56    -33    -21,5    -15,75    ?",
    "answers": [
      "-13,163",
      "-13,172",
      "-12,965",
      "-18,625",
      "-12,875"
    ],
    "solution": 4,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 129,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 8,5    4,25    6,25    12,5    10,5    5,25    ?",
    "answers": [
      "10,5",
      "7,25",
      "2,625",
      "3,25",
      "8,25"
    ],
    "solution": 1,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 130,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 312    78    26    13    ?",
    "answers": [
      "1",
      "6,5",
      "12",
      "14",
      "13"
    ],
    "solution": 4,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 131,
    "category": "Zahlenreihen",
    "question": "Lösen Sie bitte folgende Zahlenreihe anhand der richtigen mathematischen Operation : 3/2    2,2    3,1    4 1/5    5 1/2    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": 8,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 132,
    "category": "Dreisatz - Zinsrechnung",
    "question": "In einer Schule sind 800 Umschüler/innen. 17,5 % sind in der Prüfungsvorbereitung, davon sind 45 % IT-Systemkaufleute. Wieviel IT-Systemkaufleute sind in der Prüfungsvorbereitung?",
    "answers": [
      "63",
      "66",
      "36",
      "33",
      "500"
    ],
    "solution": 0,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 133,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Ein Auto verlor im ersten Jahr seiner Nutzung 30% seines Neuwertes und wird jetzt für 8.050 € verkauft. Wie hoch war der Neuwert des Wagens?",
    "answers": [
      "11465,00 €",
      "11050,00 €",
      "10465,00 €",
      "10406,50 €",
      "10460,50 €"
    ],
    "solution": 2,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 134,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Der Preis für einen Computer wird zuerst um 20% gesenkt, eine Woche darauf um wird er um weitere 5% gesenkt. Jetzt kostet er 1.140 €. Wie hoch war der ursprüngliche Preis?",
    "answers": [
      "1365,00 €",
      "1245,00 €",
      "1425,00 €",
      "1634,00 €",
      "1436,40 €"
    ],
    "solution": 4,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 135,
    "category": "Dreisatz - Zinsrechnung",
    "question": "4.000 € bringen in 8 Monaten genau 240 € Zinsen. Wie hoch ist der Zinssatz?",
    "answers": [
      "12 %",
      "26,666667 %",
      "3 %",
      "9 %",
      "6 %"
    ],
    "solution": 3,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 136,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Wieviel € Zinsen kostet ein Kredit von 600 € für eine Laufzeit von 60 Tagen zu 7.5% ?",
    "answers": [
      "603,75 €",
      "302,82 €",
      "302,44 €",
      "3028,15 €",
      "30,28 €"
    ],
    "solution": 1,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 137,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Ein Darlehen wird mit 6,5% verzinst, Die Halbjahreszinsen betragen 146,25 €. Wie hoch ist das Darlehen?",
    "answers": [
      "136,74375 €",
      "95,0625 €",
      "9,50625 €",
      "2250 €",
      "2253,846154 €"
    ],
    "solution": 3,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 138,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Zwei Wasserpumpen fördern in 12 Stunden 2.400 Liter Wasser. Wieviel Liter fördern 5 Pumpen in 5 Stunden?",
    "answers": [
      "2500 Liter",
      "4200 Liter",
      "1500 Liter",
      "3600 Liter",
      "1250 Liter"
    ],
    "solution": 0,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 139,
    "category": "Gemeinsamkeiten",
    "question": "Suchen Sie bei den folgenden Begriffspaaren jeweils das passende wort, indem Sie die ? durch einen der Begriffe ersetzen: Kostüm - Frau  Anzug - ?",
    "answers": [
      "Mann",
      "Oma",
      "Enkel",
      "Bruder"
    ],
    "solution": 0,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 140,
    "category": "Gemeinsamkeiten",
    "question": "Suchen Sie bei den folgenden Begriffspaaren jeweils das passende wort, indem Sie die ? durch einen der Begriffe ersetzen: Pflanze - Rose   ? - Tiger",
    "answers": [
      "Fauna",
      "Lebewesen",
      "Raubtier",
      "Tier"
    ],
    "solution": 3,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 141,
    "category": "Gemeinsamkeiten",
    "question": "Suchen Sie bei den folgenden Begriffspaaren jeweils das passende wort, indem Sie die ? durch einen der Begriffe ersetzen: Bein - Kniegelenk  Arm - ?",
    "answers": [
      "Pickel",
      "Ellenbogen",
      "Hand",
      "Haare"
    ],
    "solution": 1,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 142,
    "category": "Gemeinsamkeiten",
    "question": "Suchen Sie bei den folgenden Begriffspaaren jeweils das passende wort, indem Sie die ? durch einen der Begriffe ersetzen: Dekade - 10 Monate  Semester - ?",
    "answers": [
      "Sixpack",
      "6 Tage",
      "halbes Jahr",
      "Sextant"
    ],
    "solution": 2,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 143,
    "category": "Gemeinsamkeiten",
    "question": "Suchen Sie bei den folgenden Begriffspaaren jeweils das passende wort, indem Sie die ? durch einen der Begriffe ersetzen: Flamme - Kerze   ? - Lampe",
    "answers": [
      "Glühwurm",
      "Glycerin",
      "Glühwein",
      "Glühbirne",
      "Feuer"
    ],
    "solution": 3,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 144,
    "category": "Abstraktionsfähigkeit",
    "question": "Wählen Sie bitte den Begriff der nicht mit den anderen Begriffen übereinstimmt : Quadrat Rechteck Würfel Dreieck",
    "answers": [
      "Quadrat",
      "Würfel",
      "Dreieck",
      "Rechteck"
    ],
    "solution": 1,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 145,
    "category": "Abstraktionsfähigkeit",
    "question": "Wählen Sie bitte den Begriff der nicht mit den anderen Begriffen übereinstimmt : Fluß Bach See Strom",
    "answers": [
      "Fluß",
      "See",
      "Strom",
      "Bach"
    ],
    "solution": 2,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 146,
    "category": "Abstraktionsfähigkeit",
    "question": "Wählen Sie bitte den Begriff der nicht mit den anderen Begriffen übereinstimmt : Saft Milch Tee Alkohol",
    "answers": [
      "Alkohol",
      "Milch",
      "Tee",
      "Saft"
    ],
    "solution": 3,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 147,
    "category": "Abstraktionsfähigkeit",
    "question": "Wählen Sie bitte den Begriff der nicht mit den anderen Begriffen übereinstimmt : Papier Buch Zeitung Roman",
    "answers": [
      "Buch",
      "Zeitung",
      "Roman",
      "Papier"
    ],
    "solution": 0,
    "weight": 1
  }
)

db.questions.insert(
  {
    "question_id" : 148,
    "category": "Abstraktionsfähigkeit",
    "question": "Wählen Sie bitte den Begriff der nicht mit den anderen Begriffen übereinstimmt : Pullover Wolle Strumpf Jacke",
    "answers": [
      "Jacke",
      "Wolle",
      "Pullover",
      "Strumpf"
    ],
    "solution": 1,
    "weight": 1
  }
)
