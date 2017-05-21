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
    "question": "Welches Programm ist kein Mailprogramm?",
    "answers": [
      "MS Mail",
      "MS Outlook",
      "Thunderbird",
      "Typo3"
    ],
    "solution": 3,
    "weight": 1.5
  }
)

db.questions.insert(
  {
    "question_id" : 103,
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
    "question_id" : 104,
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
    "question_id" : 105,
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
//dublicate-question-object (check line 36-50) 
db.questions.insert(
  {
    "question_id" : 106,
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
    "question_id" : 107,
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
    "question_id" : 108,
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
    "question_id" : 109,
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
    "question_id" : 110,
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
    "question_id" : 111,
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
    "question_id" : 112,
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
    "question_id" : 113,
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
//Testteil F Relationen 10 Pkt. insgesamt
db.questions.insert(
  {
    "question_id" : 114,
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
    "question_id" : 115,
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
    "question_id" : 116,
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

//T
db.questions.insert(
  {
    "question_id" : 117,
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

//I'm not sure about to define 2 right Answers like that is the right way
db.questions.insert(
  {
    "question_id" : 118,
    "category": "Relationen",
    "question": "Wer ist der schnellste Sprinter? Albert lief 9,87 sec. auf 100 Metern. Ronald gewann in 9,82 sec., wurde aber nachträglich wegen dopings disqualifiziert. Frank wurde Zweiter in ebenfalls 9,87 sec. per Zielfotoentschied.",
    "answers": [
      "Albert",
      "Frank",
      "Ronald",
      "Frank & Albert"
    ],
    "solution": 3,
    "weight": 2
  }
)

//Testteil G Schlussfolgerungen 10 Pkt insgesamt
db.questions.insert(
  {
    "question_id" : 119,
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
    "question_id" : 120,
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
    "question_id" : 121,
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
    "question_id" : 122,
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

//Testteil UNKNOWN | Zahlenreihen | ? Pkt insgesamt | 15 min
/*
## seem's that there must be another way to implement the task-instructions
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Zahlenreihen 
## Task :
## Jede Folge von Zahlen ist nach bestimmten Regeln aufgebaut. 
## Die Zahlenfolge kann sich aus einer einzigen Gruppe oder aus mehreren Gruppen zusammensetzen. 
## Vorzeichen und Rechnoperationen können mehrfach wechseln.
##
## Tipp! Schreiben Sie unterhalb der Zahlenreihen zwischen den Zahlen die von Ihnen ermittelten bzw. vermuteten Rechenoperationen.                                                                                    
##~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

db.questions.insert(
  {
    "question_id" : 123,
    "category": "Zahlenreihen",
    "question": "5    7    4    6    3    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : ´124,
    "category": "Zahlenreihen",
    "question": "72    61    48    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 125,
    "category": "Zahlenreihen",
    "question": "75    15    25    5    15    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 126,
    "category": "Zahlenreihen",
    "question": "8    5    15    18     6    3    9   ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 127,
    "category": "Zahlenreihen",
    "question": "1    2    4    2    4    8    6    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 128,
    "category": "Zahlenreihen",
    "question": "3    6    18    36    108    216    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 129,
    "category": "Zahlenreihen",
    "question": "-56    -33    -21,5    -15,75    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 130,
    "category": "Zahlenreihen",
    "question": "8,5    4,25    6,25    12,5    10,5    5,25    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 131,
    "category": "Zahlenreihen",
    "question": "312    78    26    13    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

//Dont know about how to display fractions. Need's review...
db.questions.insert(
  {
    "question_id" : 132,
    "category": "Zahlenreihen",
    "question": "3/2    2,2    3,1    4 1/5    5 1/2    ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

//Testteil B | Zinsrechnung | 14 Pkt insgesamt |  15 min. 
db.questions.insert(
  {
    "question_id" : 133,
    "category": "Dreisatz - Zinsrechnung",
    "question": "In einer Schule sind 800 Umschüler/innen. 17,5 % sind in der Prüfungsvorbereitung, davon sind 45 % IT-Systemkaufleute. Wieviel IT-Systemkaufleute sind in der Prüfungsvorbereitung?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 134,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Ein Auto verlor im ersten Jahr seiner Nutzung 30% seines Neuwertes und wird jetzt für 8.050 € verkauft. Wie hoch war der Neuwert des Wagens?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 135,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Der Preis für einen Computer wird zuerst um 20% gesenkt, eine Woche darauf um wird er um weiter 5% gesenkt. Jetzt kostet er 1.140 €. Wie hoch war der ursprüngliche Preis?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 136,
    "category": "Dreisatz - Zinsrechnung",
    "question": "4.000 € bringen in 8 Monaten genau 240 € Zinsen. Wie hoch ist der Zinssatz?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 137,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Wieviel € Zinsen kostet ein Kredit von 600 € für eine Laufzeit von 60 Tagen zu 7.5% ?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 138,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Ein Darlehen wird mit 6,5% verzinst, Die Halbjahreszinsen betragen 146,25 €. Wie hoch ist das Darlehen?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

db.questions.insert(
  {
    "question_id" : 139,
    "category": "Dreisatz - Zinsrechnung",
    "question": "Zwei Wasserpumpen fördern in 12 Stunden 2.400 Liter Wasser. Wieviel Liter fördern 5 Pumpen in 5 Stunden?",
    "answers": [
      "",
      "",
      "",
      "",
      ""
    ],
    "solution": ,
    "weight": 2
  }
)

/*
## seem's that there must be another way to implement the task-instructions
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Gemeinsamkeiten - Abstraktionsfähigkeit 
## Task :
## Suchen Sie bei den folgenden Begriffspaaren jeweils das passende wort, indem Sie die "?" durch einen der Begriffe a bis d ersetzen. Kreuzen Sie die richtige Lösung an.
##~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
//Testteil C | Gemeinsamkeiten finden Abstraktionsfähigkeit und Bildung von Begriffen | 10 Pkt insgesamt | 2 min.
db.questions.insert(
  {
    "question_id" : 140,
    "category": "Gemeinsamkeiten",
    "question": "Kostüm - Frau  Anzug - ?",
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
    "question_id" : 141,
    "category": "Gemeinsamkeiten",
    "question": "Pflanze - Rose   ? - Tiger",
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
    "question_id" : 142,
    "category": "Gemeinsamkeiten",
    "question": "Bein - Kniegelenk  Arm - ?",
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
    "question_id" : 143,
    "category": "Gemeinsamkeiten",
    "question": "Dekade - 10 Monate  Semester - ?",
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
    "question_id" : 144,
    "category": "Gemeinsamkeiten",
    "question": "Flamme - Kerze   ? - Lampe",
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
    "question_id" : 145,
    "category": "Abstraktionsfähigkeit",
    "question": "Quadrat Rechteck Würfel Dreieck",
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
    "question_id" : 146,
    "category": "Abstraktionsfähigkeit",
    "question": "Fluß Bach See Strom",
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
    "question_id" : 147,
    "category": "Abstraktionsfähigkeit",
    "question": "Saft Milch Tee Alkohol",
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
    "question_id" : 148,
    "category": "Abstraktionsfähigkeit",
    "question": "Papier Buch Zeitung Roman",
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
    "question_id" : 149,
    "category": "Abstraktionsfähigkeit",
    "question": "Pullover Wolle Strumpf Jacke",
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
