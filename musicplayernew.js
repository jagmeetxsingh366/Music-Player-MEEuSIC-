const playbutton = document.getElementById("play_button");
var duration = document.getElementById("duration");
var SongName = document.getElementById("song_name");
var mainImg = document.getElementById("mainimg");
var song = document.getElementById("us");
var ArtistName = document.getElementById("artist_name");
var SongImg = document.getElementById("songimg");
const nextbutton = document.getElementById("next");
const prevbutton = document.getElementById("prev");
const sideBox = document.querySelector(".sidebox");
var redo = document.getElementById("redo");
var lyrics = document.querySelector(".lyrics");
var header = document.querySelector(".lyrical_header");
let songs = [
  {
  song_name: "Unforgettable",
  songURL: "1.mp3",
  artist: "Diljit Dosanjh",
  liked: "true",
  img: "https://i.scdn.co/image/ab67616d0000b273ca3e81ffb16f782d4d094a6f",
  lyrics: `Na Crystal Ne Bachaya Na Stone’aa Ne
  Sutti Payi Nu Uthaya Jatt De Phone’aa Ne
  Na Crystal Ne Bachaya Na Stone’aa Ne
  Sutti Payi Nu Uthaya Jatt De Phone’aa Ne
  
  Hauli Hauli Leya Kar Mera Naa Nakhro
  Vairi Labhde Ne Atta Patta Thaan Nakhro
  Kehndi Mainu Rehna Ae Hasaunda
  Te Bahoteyan Ch Khulda Hi Nahi
  
  Kalle Nu Kalli Jado Takkri
  Te Kehndi Jatta Bhulda Hi Nahi
  Kalle Nu Kalli Jado Takkri
  Te Kehndi Jatta Bhulda Hi Nahi
  
  Te Kehndi Jatta Bhulda Hi Nahi
  Te Kehndi Jatta Bhulda Hi Nahi
  
  Unexpected Dil Wich Beh Gaya
  Kinne Kitte Main Reject Kiven Tu Reh Gaya
  Assi Saste Nashe Na Jani Mano Lain Wale Asi
  Jaan Waleya Cho Naiyo Billo Rehan Wale
  
  Kehndiya Saheliyan Bach Bach Bach Ni
  Unforgettable Jatt Gaya Hatti Rach Ni
  Sadda Waleya Rehnae Tu Model’an Ch
  Fer Dass Kiven Dhulda Hi Nahi
  
  Kalle Nu Kalli Jado Takkri
  Te Kehndi Jatta Bhulda Hi Nahi
  Kalle Nu Kalli Jado Takkri
  Te Kehndi Jatta Bhulda Hi Nahi
  
  Te Kehndi Jatta Bhulda Hi Nahi
  Te Kehndi Jatta Bhulda Hi Nahi
  
  Priceless Jeha Pyaar Paa Kudiye
  Mera Pyaar Mukke Taan Mukkja Thaan Kudiye
  Gall Keh Dil Di Chadd Permission’aa Je
  Howe Pyar Sacha Fer Paiye Na Condition’aa
  
  Kithe Bhajje Time Jado Hova Tere Naal Ve
  Jaan Kadd Laine Jado Puchde Tu Haal Ve
  Tere Karke Aa Channi Nattan
  Tere Bina Kise Mull Da Hi Nahi
  
  Kalle Nu Kalli Jado Takkri
  Te Kehndi Jatta Bhulda Hi Nahi
  Kalle Nu Kalli Jado Takkri
  Te Kehndi Jatta Bhulda Hi Nahi
  
  Te Kehndi Jatta Bhulda Hi Nahi
  Te Kehndi Jatta Bhulda Hi Nahi
  
  
  
  Check Full Lyrics on LyricsGoal: https://www.lyricsgoal.com/unforgettable-diljit-dosanjh/`
},
  
  {
    song_name: "CHU GON DU",
    songURL: "2.mp3",
    artist: "Karan Aujla",
    liked: "false",
    img: "https://upload.wikimedia.org/wikipedia/en/7/7b/BacTHAfucUP.jpg",
    lyrics: `Oh Jadon Kitte Mitraan Di Car Dikhdi
    Udd’di Safedyan To Daar Dikhdi
    Antia De Face Utto Dekh Li Kude
    Ni Dekhi Mitraan Naal
    Rakhi Hoi Khaar Dikhdi
    
    Oh Kayi Kehnde Jatt Naal Maadi Karni
    Kayi Kehnde Bair Di Thaa Aadi Karni
    Kayi Kehnde Digge Utte Taadi Karni
    Karke Taan Dekhan Kude
    
    Oh Kayi Kehnde Jatt Nu Tabaah Karna
    Kayi Kehnde O Kade Aa Karna
    Enna Ne Ki Balliye Swaah Karna
    Saale Karke Taan Dekhan Kude
    
    Oh Karke Taan Dekhan Kude
    Karke Taan Dekhan Kude
    
    Oh Mitraan Ne Ankhan Nu Paleya Kude
    Ni Jiven Hunda Ae Kisan Kole Killa Goriye
    Oh Jawange Ta Kathe Fer Jawange Rakane
    Jiven Amarjot Chamkila Goriye
    
    Oh Kayi Kehnde Ehda Patta Saaf Goriye
    Kayi Kehnde Banda Hi Kharab Goriye
    Kayi Kehnde Khulli Ae Kitaab Goriye
    Saale Padhke Taan Dekhan Kude
    
    Ho Kayi Kehnde Jatt Nu Dabauna Goriye
    Kayi Kehnde Mathe Utte Launa Goriye
    Sukh Naal Main Bhi Ehi Chauna Goriye
    Saale Karke Taa Dekhan Kude
    
    Oh Karke Taan Dekhan Kude
    Oh Karke Taan Dekhan Kude
    Karke Taa Dekhan Kude
    Oh Karke Taan Dekhan Kude
    
    Oh Aiven Keda Karu Baal Vinga Goriye
    Assi Rab To Hi Sidhi Likhvayi Baithe Aa
    Khadi Hoke Bebe De Hi Sukha Sukh Di Ni
    Kude Taan Hi Assi Authe Tak Aayi Baithe Aa
    
    Oh Kayi Kehnde Kalla Kalla Putt Fadna
    Kayi Kehnde Ennu Sutt Sutt Fadna
    Kayi Kehnde Mitraan Da Gutt Fadna
    Saale Fadd Ke Taan Dekhan Kude
    
    Oh Kayi Kehnde Aujle Nu Saaf Karna
    Kayi Kehnde Lokka Nu Khilaf Karna
    Saleya Nu Rab Ne Ni Maaf Karna
    Saale Karke Taan Dekhan Kude
    
    Karke Taan Dekhan Kude
    Oh Karke Taan Dekhan Kude
    Karke Taa Dekhan Kude
    Oh Karke Taan Dekhan Kude
    
    Karke Taan Dekhan Kude
    Karke Taan Dekhan Kude
    Oh Karke Taan Dekhan Kude
    Karke Taan Dekhan Kude`,
  },
  {
    song_name: "FEW DAYS",
    songURL: "3.mp3",
    artist: "Karan Aujla",
    liked: "false",
    img: "https://a10.gaanacdn.com/gn_img/albums/10q3Zj1352/q3ZRw0OM35/size_xxl_1617801560.webp",
    lyrics: `Yo Aah
    Yeah Proof!
    
    Routine Kudey Meri Team Kudey
    Ni Khave Tadke Feem Kudey
    Coffee Wale Cup Hathan Vich
    Cappan De Vich Lean Kudey
    
    Oh Khare Naal Chaldi Aa Whisky Kudey
    Scene Hoya Peya Poora Risky Kudey
    Mitran Di Life Kithe Ishqy Kudey
    Oh Sarhdeyan Mere Saale Chadhdeyan Ton
    
    Oh Garde Uth Gaye Pardeyan Ton
    Te Parde Utth Gaye Gardeyan Ton
    Ni Thode Din Ne Mitran De
    Hunn Mang Ki Mangna Mardeyan Ton
    
    Oh Garde Uth Gaye Pardeyan Ton
    Te Parde Utth Gaye Gardeyan Ton
    Ni Thode Din Ne Mitran De
    Hunn Mang Ki Mangna Mardeyan Ton
    
    Pyaran Ton Te Naara Ton Ni
    Yaara Nu Kudey Allergy Ae
    Sadda Taan Sunn Challi Jaandae
    Tera Teri Marzi Ae
    
    Aap De Naa Kisey Kolo Mange Hoye Ne
    Oh Dabba Naal Pistol Tange Hoye Ne
    Bande Mere Naal Saare Lange Hoye Ne
    Ni Hath Ni Paunde Dardeyan Ton
    
    Oh Garde Uth Gaye Pardeyan Ton
    Te Parde Utth Gaye Gardeyan Ton
    Ni Thode Din Ne Mitran De
    Hunn Mang Ki Mangna Mardeyan Ton
    
    Oh Kaaliyan Kaaliyan Raatan Ni
    Barsatan Vich Mulqatan Ni
    Jehdiyan Suniya Nani Ton
    Tu Dade Mere Diyan Baatan Ni
    
    Ohne Vi Si Kadde Bade Veham Goriye
    Oh Main Vi Ohde Wangu Jama Kaim Goriye
    Tainu Lag Jana Bada Time Goriye
    Ni Sadde Laane Baare Saara Padhdeyan Ton
    
    Oh Garde Uth Gaye Pardeyan Ton
    Te Parde Utth Gaye Gardeyan Ton
    Ni Thode Din Ne Mitran De
    Hunn Mang Ki Mangna Mardeyan Ton
    
    Muskaan De Vich Nuksaan Kudey
    Nuksaan Ch Meri Jaan Kudey
    Oh Kalle Kattna Zindagi Nu
    Main Jinna Chir Mehmaan Kudey
    
    Aujle De Yaar Ni Pawaunde Kundala
    Oh Much Khadi Karke Dikhayi Hundala
    Ik Vaar Dikhan Main Laa Da Dhundla
    Ni Time Ni Langda Wardeyan Ton
    
    Oh Garde Uth Gaye Pardeyan Ton
    Te Parde Utth Gaye Gardeyan Ton
    Ni Thode Din Ne Mitran De
    Hunn Mang Ki Mangna Mardeyan Ton`,
  },
  {
    song_name: "HINT",
    songURL: "4.mp3",
    artist: "Karan Aujla",
    liked: "false",
    img: "https://a10.gaanacdn.com/gn_img/albums/Oxd3xP3gVY/xd3xYryYWg/size_xxl.jpg",
    lyrics: `Jay Trak
    Karan Aujla
    Rehaan Records Baby
    Sandeep Rehaan
    
    Ho pehle week ho gayi gusse
    Dooje week bole russe
    
    Pehle week ho gayi gusse
    Dooje week bole russe
    Teeje week nazran chon fark peya
    Jeende jaagde vi joon
    Akhan ne bigaadi payi ae
    Mareyan da dekhne nu nark peya
    
    
    
    Baith ke peya ke chahwan
    Pher toreya tu kude
    Assi tere dil vichon khade hi gaye
    
    Thode thode hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    Chhadan de hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    
    Ho change ho gaye kapde si
    Change hoiyan gallan kude
    Hauli hauli change ho gayi vashna teri
    Saareyan de hathan vich
    Ghummi jaave begiye ni
    
    
    
    Mildi image sachchi tash naal teri
    Ho change ho gaye kapde si
    Change hoiyan gallan kude
    Hauli hauli change ho gayi vashna teri
    Saareyan de hathan vich
    Ghummi jaave begiye ni
    Mildi image sachchi tash naal teri
    
    Chup chaap paige assi
    Apne raahan nu kude
    Shukar mana tu assi lade ni gaye
    
    Thode thode hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    Chhadan de hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    
    Ho siron laike pairan tak kamb gaya khada jadon
    Mereyan yaaran ch teri gall turri si
    Ik kehnda duje nu dikha ke photo othe teri
    Kal mere naal vi haan aa hi kudi si
    
    Ho siron laike pairan tak kamb gaya khada jadon
    Mereyan yaaran ch teri gall turri si
    Ik kehnda duje nu dikha ke photo othe teri
    Kal mere naal vi haan aa hi kudi si
    
    Hathan vichon langhi hathon hor naal jode
    Saanu pata hi ni lagga kadon phade ni gaye
    
    Thode thode hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    Chhadan de hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    
    Ho aundiyan tareliyan nu soch soch tere baare
    Kahda vair kadd gayi ni jaandi dass ja
    Sone jeha, sone jeha sohna sohna aakh kude
    Kihdi hunn ban gayi tu chaandi dass ja
    
    Aundiyan tareliyan nu soch soch tere baare
    Kahda vair kadd gayi ni jaandi dass ja
    Sone jeha, sone jeha sohna sohna aakh kude
    Kihdi hunn ban gayi tu chaandi dass ja
    
    Aujle nu care hai ni
    Assi tere baare mahda
    Bolne rakaane urre padhe ni gaye
    
    Thode thode hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    Chhadan de hint taan ditte si akhan ne
    Sathon ho gayi galti ni padhe ni gaye
    
    Geetan di machine
    Jay Trak
    Rehaan Records Baby
    Sandeep Rehaan`,
  },
  {
    song_name: "MEXICO",
    songURL: "5.mp3",
    artist: "Karan Aujla",
    liked: "false",
    img: "http://a10.gaanacdn.com/images/albums/24/3941224/crop_480x480_1616002409_3941224.jpg",
    lyrics: `Yeah Proof! Let’s bounce!
    Koka Koka Ni Balliye, Paa Lai Koka Ni Balliye,
    Aaja Mexico Challiye, Aaja Mexico
    Baby Ji Chahida Ki Ae, Ji Daso Daso
    Baby Let’s Go, Don’t Say No,
    One Piece End Cheez Teri Rees Kaun Karu
    Jatt Jiyu Jatt Maru, Kithe Tere Bin Saru
    Teri Diti Hoi Nishani Gal Gaani Di Diwaani
    Kann Nattiyan Ne Pattiyan Ne Naaran Eh Mathiyan Ne
    Gud De Dali Te Aaja Jatt Di Gali Ch
    Teri Tor De Diwane Jine Aashiq Zamane
    
    
     
    Karde Aa Nok Jhok, Main Rakane Dene Thok
    Tu Aan Rap Jatt Folk, Tu Aa Beat Main Geet
    Tu Ae Chann Main Aa Gun,
    Gal Mann Meri Jaan Tu Aa Sire Di Rakaan
    Jatt Sire Da Shaitaan,
    
    Tere Karke Chhaliye, Lakh Dollar Laata Jhalliye
    Koka Koka Ni Balliye, Pa Lai Koka Ni Baliye
    Aaja Mexico Challiye, Aaja Mexico Challiye
    Koka Koka Ni Balliye, Pa Lai Koka Ni Baliye.
    
    Othe Laijaake Karange Ni Aapan Jo-Jo
    Baby Let’s Go, Don’t Say No,
    Teri Mere Nal Ticket Kara Layi,
    Utton Business-class Kach De Glass
    Samundar De Kande Jadon Dhup Karu Shine
    Peewange Ni Wine, Raat Nu Tequila,
    Karoon Whisky Da Heela,
    Hona Rabb Vi Nai Yaad Lawange Swaad
    
    Book Kar Layi Ae Yacht Challi Banke Je Hot
    Othe Banglow Aa Book, Paau Desi Jatt Khut
    Baby Hundi Naiyo Wait Chheti Kar Ho Gaye Late
    Hurry Up, Baby!
    
    
     
    Raah Taan Tera Malliye, Mil La Tu Kalli Kalliye
    Coca Coca Ni Balliye, Paa Lai Coca Ni Balliye,
    Aaja Mexico Challiye, Aaja Mexico
    Coca Coca Ni Balliye, Paa Lai Coca Ni Balliye.
    
    Oh Kapde Lai Laye Ni Bolly To L.A. Ni
    Yaaran Ne Maare Aa Nailey Te Dailey Ni
    Suno Ji Hello Ji, Jo Vi Ae Kehlo Ji
    Paise Na Dekho Ji, Lai Lao Ji, Lai Lao Ji
    
    Zara Zara Tu, Nede Nede Aa,
    Mere Mere Saah Tere Tere Naam
    Zara Zara Tu, Nede Nede Aa,
    Mere Mere Saah Tere Tere Naam
    
    Decision Aa Reason Aa Na Tere Piche Aaun Da
    Na Time Lagge Saun Da, Naa Naun Da, Na Gaun Da
    Ni Nakhre Handaun Da, Ni Cha Ae Viaun Da
    Ni Baahin Chooda Paun Da, Na Fer Kade Laun Da,
    
    
     
    Main Karda Try Meri Bebe Teri Taayi
    Dowein Pakkiyan Friend Kudey Galbaat End
    Karaan Send Tere Ghar Kal Rishta Rakane
    Ni Relation Chalaake Te Vacation Te Jaake
    Honeymoon De Teyari, Sukoon Di Teyari
    Hoju Summer Ch Kar Baby June Di Teyari, Get Ready B!
    
    Naah Tu Naa Kardi Chhalliye,
    Dekhe Main Supne Jhalliye,
    Koka Koka Ni Balliye, Paa Lai Koka Ni Balliye,
    Aaja Mexico Challiye, Aaja Mexico
    Koka Koka Ni Balliye, Paa Lai Koka Ni Balliye.`,
  },
  {
    song_name: "NAIN BENGALI",
    songURL: "6.mp3",
    liked: "false",
    artist: "Guru Randhawa",
    img: "https://c.saavncdn.com/259/Nain-Bengali-Hindi-2021-20210714071001-500x500.jpg",
    lyrics: `Oh Jadon Chaldi Aa
    Saanh Chalde Ne
    Jadon Rukdi Aa
    Dil Ruk Janda
    
    But She Don’t Know
    How I Feel?
    Ese Karke
    Mera Dil Toot Jaanda
    
    Ho Lakk Ton Patli Roop Di Sohni
    Ohde Wargi Na Koyi Honi
    Oh Gora Rang Makhan De Pede
    Sadke Jawan Kudiye Tere
    
    Oh Jadon Chaldi Aa
    Saanh Chalde Ne
    Jadon Rukdi Aa
    Dil Ruk Janda
    
    Dil Ruk Janda
    Dil Ruk Janda
    
    Nain Bengali Ne
    Ada Gujarati Aa
    Oh Kehde Shehar Di Aa
    Samajh Mein Na Aati Aa
    
    Oh Kade Hassdi Aa
    Kade Sangdi Aa
    Kade Chori Chori
    Dil Mangdi Aa
    
    But All I Need Hai Ohda Pyar
    Par Oh Mainu Sooli Te Tangdi Aa
    
    Ho Lakk Ton Patli Roop Di Sohni
    Ohde Wargi Na Koyi Honi
    Oh Gora Rang Makhan De Pede
    Sadke Jawan Kudiye Tere
    
    Jadon Chaldi Aa
    Saanh Chalde Ne
    Jadon Rukdi Aa
    Dil Ruk Janda
    
    Dil Ruk Janda
    
    Ho Tere Naa Te Kar Dunga
    Main Saare De Saare Ni
    Aa Jinne Vi Ne Aasman Vich Taare Ni
    
    Tu Moon Jehi Ae Lagdi
    Haaye Ni Mutiyaare Ni
    Tere Gallan Wale Toye
    Bade Pyare Ni
    
    Ho Jadon Chaldi Aa
    Saanh Chalde Ne
    Jadon Rukdi Aa
    Dil Ruk Janda
    
    Dil Ruk Janda
    Dil Ruk Janda`,
  },
  {
    song_name: "RIM VS JHANJHAR",
    songURL: "7.mp3",
    artist: "Karan Aujla",
    liked: "false",
    img: "https://c.saavncdn.com/860/Rim-vs-Jhanjar-English-2018-20181217170026-500x500.jpg",
    lyrics: `Jhanjar’an
    Mere vi pawaan de kade jhanjar’an
    
    R M G!
    
    Oh shonk saare poore thok thok karda
    Mainu saare kehton rok-tok karta
    Gallan naal supne dikhauna ae
    Pichhon aakh dinna main taan chok karta
    
    Ho sunne sunne lagde aan pair ve
    Turreya na jaave moora wadhran
    
    Gaddi te pavaunda aina rim ve
    Mere vi pawa de kade jhanjar’an x (2)
    
    Oh aakhde bandook done thaan karke
    
    PauseUnmute
    Loaded: 8.95%
    Fullscreen
    
    
    Ek thok thok massle nabede ne
    Ab taan tu sohneya ve yaaran naal rehna
    Jatti bunn bunn kotiyan nu dene ne x (2)
    Yaaran naal nai takk bajjde
    Kithe renhda puchhdi aan chaadar’an
    
    Gaddi te pavaunda aina rim ve
    Mere vi pawa de kade jhanjar’an x (2)
    
    Ho jadon kithe jaiye kehna jutti chaad ke
    Jutti chaad ke chadhi tu injh kehne ae
    Mainu kaale suit te to jude ni kade
    Ab kaaliyan hi gaddiyan tu laina ae x (2)
    
    Mera da tu phone vi ni chakkda
    
    
    
    Mainu jithe kahe othe haajran
    Gaddi te pavaunda aina rim ve
    Mere vi pawa de kade jhanjar’an x (2)
    
    Deep Jandu!
    
    Chaaki diyan dabbiyan bana ke rakhda
    Vich kaala kaala hunda kaure kive
    Addiyan ne sunniyan vasaun chakk di
    Hunn karda palazo tu na jee ve x (2)
    
    Gharale da Karan kadon sudhru
    Diggi ch luko ke rakhe dabbna
    
    Gaddi te pavaunda aina rim ve
    Mere vi pawa de kade jhanjar’an x (2)
    
    Parma Music!
    Sukh Sanghera!`,
  },
  {
    song_name: "TALJA",
    songURL: "8.mp3",
    artist: "Jassa Dhillon",
    liked: "false",
    img: "https://images.hungama.com/c/1/12c/8cc/63356134/63356134_300x300.jpg",
    lyrics: `Oh Baby Bass Rehando Na Lado
    Mere Husan De Dushmna Naal
    Ehh Jmaana Jaalim Hai
    Te Jaalim He Rehna Aa
    Oye Aa Kachiya Ambiyan
    Ta Main Chabb Ke Khaju
    Dekhi Chal Banda Ki
    Valet Lene Saare Main
    Bicho Paad Doon Mere Saale De
    Ford De, Ford De
    Ford De Toachan Vargi Yaari
    Ho Paiju Pind Tere Te Bhari
    Ho Vigdya Jatt Te Jhota Same
    Ho Kardun Raga Cho Garmi Saari
    Naal Jo Mere Oh Bande Agg
    Ptandar Lott Layinde Ne Thag
    Roj Da Yab Tu Giriya Chabb Ho
    Ho Dekh Najare Ni
    La Sharta Yaara Tera Thoke
    Te Bade Sawaare Ni
    Je Kahe Bana Deyan Scene Main
    Hune Dubaare Ni
    La Sharta Yaara Tera Thoke
    Te Bade Sawaare Ni
    Je Kahe Bana Deyan Scene Main
    Hune Dubaare Ni
    Gur Sidhu Music!
    O Talja O Talja O Talja Talja Talja
    O Talja O Talja O Talja Talja Talja
    O Talja O Talja Ve Badmasha
    Aiven Hoju Koi Tamasha
    Ve Kahton Jaan Dukhan Vich Pauni
    Ve Koyi La Ke Rakh Du Passa
    Katt Lai Rabb Toh Thoda Dar Ke
    Thode Ghutt Sabar De Bharke
    Sare Pind Di Akh Vich Radke
    Ve Fadya Jayega
    Aiven Velly Banda Banda Ragadya Jayega
    Aiven Velly Banda Banda Ragadya Jayega
    Aah Hukam De Ike Dukke Ni
    Tere Jatt De Muhre Fikke Ni
    On Flasha Hon Kudey
    Rehnde Saah Vairi De Khiche Ni
    Mast Aa Rahindi Chaal
    Lafdya Nal Kadiye Laal
    Kayi Takkre Velly Mittra Nu
    Sadda Vinga Vi Na Vaal
    Baba Naal Te Khidya Maal
    Te Aun Hulaare Ni
    La Sharta Yaara Tera Thoke
    Te Bade Sawaare Ni
    Je Kahe Bana Deyan Scene Main
    Hune Dubaare Ni
    Begaane Putt Hoye Aa Juttt
    Ve Raat Pawayega
    Aah Patlon Da Dil Kehnda
    Tu Att Karayega
    Shant Shaant Ke Pauna
    Ve Jatta Kurte Kaale
    Aa Chaklo Chaklo Kahinde
    Jo Pattu Rakhda Naale
    OH Poora Tohra Dhakad Shora
    Ni Jigre Bamb Kude
    Aah Rees Jatt Di Laude
    Ni Jaane Hamb Kude
    Tohna Chakde Roj Hi
    Gode Thale Laa Dya Ge
    Tu Bol Pyaar De Bol
    Hune Puga Dya Ge
    Tauba Tauba Teriyan Galla Ve
    Tauba Tauba Tere Karaar
    Na Ishq Tere Vich Bhora
    Ve Sare Auto E Ne Hathiyaar
    Din Ne Chaar Te Lammi Car
    Sirre Kuj Laayega
    Jatta Velly Banda Banda Ragadya Jayega
    Jatta Velly Banda Banda Ragadya Jayega
    La Sharta Yaara Tera Thoke
    Te Bade Sawaare Ni
    O Talja O Talja O Talja Talja Talja
    Velly Banda Banda Ragadya Jayega
    O Talja O Talja O Talja Talja Talja
    La Sharta Yaara Tera Thoke
    Te Bade Sawaare Ni
    Gur Sidhu Music!`,
  },
  {
    song_name: "ZAFARNAMA",
    songURL: "9.mp3",
    artist: "Bhai Mehal Singh Ji & Jatha",
    liked: "false",
    img: "https://cover.djpunjab.org/47292/300x700/Zafarnama-Fateh-Di-Chithi-Bhai-Mehal-Singh-Ji-Chandigarh-Wale.jpg",
    lyrics: `ਐ ਨਿਪੰਸਕ ਸਲਤਨਤ ਦੇ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜੇਬ,
    ਤੂੰ ਪਲੰਦਾ ਝੂਠ ਦਾ ਤੇ ਤੂੰ ਹੈਂ ਬੰਦਾ ਪੁਰ ਫਰੇਬ,
    
    ਰੱਬ ਜਾਣੇ ਤੇਰੀਆਂ ਕਸਮਾਂ ਦੀ ਕਿੰਨੀ ਕਿਸਮ ਹੈ,
    ਝੂਠ ਦੀ ਹੈ ਰੂਹ ਤੇਰੀ ਤੇ ਝੂਠ ਦਾ ਹੀ ਜਿਸਮ ਹੈ,
    
    ਮੈਂ ਸ਼ੁਰੂ ਕਰਦਾ ਹਾਂ ਚਿੱਠੀ ਆਪਣੀ ਦਾ ਸਿਲਸਿਲਾ,
    ਵੇਖ ਮੇਰੇ ਦਿਲ ਦੀ ਰੰਗਤ ਦਾ ਨਜ਼ਾਰਾ ਬੁਜਦਿਲਾ,
    
    ਵਾਹਿਗੁਰੂ ਦੇ ਨਾਮ ਦਾ ਲਿਖਦਾ ਹਾਂ ਪਹਿਲਾ ਹਰਫ਼ ਮੈਂ,
    ਤੀਰ ਵਾਂਗੂ ਮਾਰਦਾ ਹਾਂ ਹਰਫ਼ ਤੇਰੀ ਤਰਫ਼ ਮੈਂ,
    
    ਨਾਂ ਤੇਰੇ ਦਾ ਅਰਥ ਹੈ ਸੁੰਦਰ ਸਜਾਵਟ ਤਖਤ ਦੀ,
    ਪਰ ਤੇਰੀ ਸੂਰਤ ਹੈ ਲੱਗਦੀ ਸਿਤਮਗਰ ਕੰਮਬਖ਼ਤ ਦੀ,
    
    ਤੇਰੀ ਤਸਬੀ ਦੇ ਨੇ ਮਣਕੇ ਕੈਦਖਾਨੇ ਮੌਤ ਦੇ,
    ਡੰਡਿਆਂ ਦੇ ਨਾਲ ਕੱਢੇ ਅਰਥ ਤੂੰ ਡੰਡਾਉਤ ਦੇ,
    
    ਇਹ ਤੇਰੀ ਕੜਵੀ ਕਮੀਨੀ ਬਦਲਿਆਂ ਦੀ ਭਾਵਨਾ,
    ਹੁਣ ਇਹ ਚਾਹੁੰਦੀ ਜੋਰ ਗੁਰੂ ਗੋਬਿੰਦ ਦਾ ਅਜਮਾਵਣਾ,
    
    ਮੈਂ ਤੇਰੇ ਪੈਰਾਂ ਦੇ ਹੇਠਾਂ ਅੱਗ ਐਸੀ ਬਾਲਣੀ,
    ਜਿਸਨੇ ਤੇਰੀ ਸਲਤਨਤ ਤੇ ਬਾਦਸ਼ਾਹੀ ਜਾਲਣੀ,
    
    ਕੀ ਹੋਇਆ ਜੇ ਸ਼ੇਰ ਦੇ ਬੱਚੇ ਤੂੰ ਮਾਰੇ ਗਿੱਦੜਾ,
    ਕੀ ਹੋਇਆ ਜੇ ਲਿੱਦ ਤੂੰ ਫਿਰਦਾ ਫੁੰਡਾਈ ਲਿੱਦੜਾ,
    
    ਜੋ ਖੁਦਾ ਦੇ ਨਾਮ ਤੇ ਚੁੱਕੀਆਂ ਤੂੰ ਕਸਮਾਂ ਮਰ ਗਈਆਂ,
    ਤੇਰੀਆਂ ਪੰਜੇ ਨਮਾਜਾਂ ਨੂੰ ਕਲੰਕਿਤ ਕਰ ਗਈਆਂ,
    
    ਆ ਸੁਣਾਵਾ ਕਿਸ ਤਰਾਂ ਕਰਦੇ ਨੇ ਯੋਧੇ ਗੁਫਤਗੂ,
    ਆ ਵਿਖਾਵਾਂ ਕਿਸ ਤਰਾਂ ਲੜਦੇ ਨੇ ਜੰਗਾਂ ਜੰਗਜੂ,
    
    ਜੰਗ ਦੇ ਮੈਦਾਨ ਵਿੱਚ ਫੌਜਾਂ ਸਜਾਈਆਂ ਜਾਂਦੀਆਂ,
    ਹੋ ਕੇ ਆਹਮੋ ਸਾਹਮਣੇ ਤੇਗਾਂ ਉਠਾਈਆਂ ਜਾਂਦੀਆਂ,
    
    ਜੇ ਨਾ ਫੋਜਾਂ ਨੂੰ ਲੜਾਉਂਣਾ ਚਾਹੁਣ ਯੋਧੇ ਛਾਕਰੇ
    ਦੋਹਾਂ ਧਿਰਾਂ ਦੇ ਸੂਰਮੇਂ ਜਰਨੈਲ ਕਰਦੇ ਟਾਕਰੇ,
    
    ਤੂੰ ਹੀ ਏਦਾਂ ਫੌਜ ਲੈ ਕੇ ਆਜਾ ਮੇਰੇ ਰੂਬਰੂ,
    ਮੈਂ ਲੜਾਂਗਾ ਜੰਗ ਉਸੇ ਹੀ ਤਰਾਂ ਹੀ ਹੂਬਹੂ,
    
    ਓ ਖੁਦਾ ਦੇ ਮੁਜਰਿਮਾਂ ਤੂੰ ਬਾਦਸ਼ਾਹ ਮਰਦੂਦ ਹੈ,
    ਆਪਣੀ ਹੀ ਅੱਗ ਅੰਦਰ ਸੜ ਰਿਹਾ ਨਮਰੂਦ ਹੈ,
    
    ਆ ਪੜ੍ਹਾਵਾਂ ਰੱਬ ਦੀ ਤਹਿਰੀਰ ਅਨਪੜ੍ਹ ਆਲਮਾਂ,
    ਆ ਦਿਖਾਵਾਂ ਰੱਬ ਦੀ ਰਹਿਮਤ ਦਾ ਜਲਵਾ ਜਾਲਮਾਂ,
    
    ਸੁਣ ਉਏ ਬੋਲੇ ਬਾਦਸ਼ਾਹ ਇਹ ਵਖਤ ਦੀ ਆਵਾਜ ਹੈ,
    ਖਾਲਸੇ ਦੀ ਇਸ ਤਬਾਹੀ ਵਿੱਚ ਵੀ ਕੋਈ ਰਾਜ ਹੈ,
    
    ਇਹ ਤਬਾਹੀ ਹੈ ਹੋਈ ਉੱਜੜੇ ਵਸਾਵਂਣ ਵਾਸਤੇ.
    ਇਹ ਤਬਾਹੀ ਹੈ ਹੋਈ ਰੋਂਦੇ ਹਸਾਵਣ ਵਾਸਤੇ,
    
    ਜੋ ਹੈ ਕੀਤਾ ਤੇਰੀਆਂ ਫੌਜਾਂ ਗੜੀ ਚਮਕੌਰ ਵਿੱਚ,
    ਬੁਜਦਿਲੀ ਨੀ ਉਸ ਤੋਂ ਵੱਡੀ ਹੈ ਕੋਈ ਇਸ ਦੌਰ ਵਿੱਚ,
    
    ਫੂੰਡਿਆ ਜਾ ਤੀਰ ਮੇਰੇ ਖਾਨ ਨਾਹਰ ਖਾਨ ਨੂੰ,
    ਸਭ ਤੇਰੇ ਜਰਨੈਲ ਫਿਰਦੇ ਸੀ ਲਕੋਂਦੇ ਜਾਨ ਨੂੰ,
    
    ਕੱਟ ਗਏ ਤੇਰੇ ਹਜਾਰਾਂ ਸੀ ਸਿਪਾਹੀ ਕੱਟ ਗਏ,
    ਡੱਟ ਗਏ ਮੇਰੇ ਲੜਾਕੇ ਸਿੰਘ ਚਾਲੀ ਡੱਟ ਗਏ,
    
    ਉਹ ਤੇਰਾ ਖਵਾਜਾ ਜੋ ਮਰਦੂਦ ਵੱਡਾ ਸੂਰਮਾ,
    ਜੇ ਨਾ ਲੁਕਦਾ ਉਸਦਾ ਮੈਂ ਕੁੱਟ ਦਿੰਦਾ ਚੂਰਮਾ,
    ਉਸ ਘੜੀ ਖੁਦਾ ਨੇ ਕੀਤੀ ਆਪ ਮੇਰੀ ਰਹਿਬਰੀ,
    ਆਪਣੇ ਬੰਦੇ ਦੀ ਕੀਤੀ ਆਪ ਬੰਦਾ ਪਰਵਰੀ,
    ਮੈਂ ਹਜਾਰਾਂ ਘੇਰਿਆਂ ਨੂੰ ਤੋੜ ਕੇ ਹਾਂ ਆ ਗਿਆ,
    ਬਾਦਸ਼ਾਹ ਮੈਂ ਤੇਰਾ ਮੂੰਹ ਮੋੜ ਕੇ ਹਾਂ ਆ ਗਿਆ,
    ਝੂਠੀਆਂ ਕਸਮਾਂ ਦਾ ਸਾਹਾ ਤੂੰ ਹੀ ਜਿੰਮੇਵਾਰ ਹੈਂ.
    ਤੂੰ ਖੁਦਾ ਦੀ ਨਜ਼ਰ ਵਿੱਚ ਸ਼ੈਤਾਨ ਹੈਂ ਮੱਕਾਰ ਹੈ,
    ਤੂੰ ਹੈ ਝੂਠਾ ਬਾਦਸ਼ਾਹ ਤੇ ਜਿੰਦਗੀ ਦਾ ਕੋਹੜ ਹੈ,
    ਤੂੰ ਖੜਾ ਦਰਿਆ ਕਿਨਾਰੇ ਖੋਖਲਾ ਇੱਕ ਬੋਹੜ ਹੈ,
    ਉਸਨੂੰ ਕੀ ਆਂਚ ਆਉਂਣੀ ਸੱਚ ਜਿਸਦਾ ਯਾਰ ਹੈ,
    ਉਸਨੂੰ ਕੀ ਫਿਕਰ ਜਿਸਦਾ ਰੱਬ ਪਹਿਰੇਦਾਰ ਹੈ,
    ਵਾਲ ਮੇਰਾ ਇੱਕ ਵੀ ਵਿੰਗਾ ਤੂੰ ਕਰ ਸਕਦਾ ਨਹੀਂ,
    ਖਾਲਸਾ ਮੇਰਾ ਤਾਂ ਹਸ਼ਰਾਂ ਤੀਕ ਮਰ ਸਕਦਾ ਨਹੀਂ,
    ਮੈਂ ਖਤਮ ਕਰਦਾ ਹਾਂ ਚਿੱਠੀ ਖੋਲਿਆ ਜਿਸ ਪਾਜ ਹੈ,
    ਬੱਸ ਪ੍ਰਾਹੁਣਾ ਚੰਦ ਦਿਨਾਂ ਦਾ ਇਹ ਜੋ ਤੇਰਾ ਰਾਜ ਹੈ,
    ਤੂੰ ਹਵਾ ਵੀ ਨਹੀਂ ਛੂਹ ਸਕਦਾ ਗੋਬਿੰਦ ਦੀ,
    ਬਸ ਫੂਕ ਨਿਕਲੀ ਹੀ ਸਮਝੋ ਬਾਦਸ਼ਾਈ ਹਿੰਦ ਦੀ,
    ਜੇ ਹੈ ਚਾਤਰ ਭੇੜੀਏ ਤੈਨੂੰ ਮਰਨ ਦੀ ਲਾਲਸਾ,
    ਮੈਂ ਤੇਰੇ ਪਿੱਛੇ ਲਗਾਉਣਾ ਸ਼ੇਰ ਬੱਬਰ ਖਾਲਸਾ,
    ਸੱਚ ਦਾ ਝ਼ੰਡਾ ਮੈਂ ਤੇਰੇ ਤਖਤਾਂ ਉੱਤੇ ਗ਼ੱਡ ਕੇ,
    ਰਾਹ ਉਲੀਕਾਂ ਗਾ ਨਵਾਂ ਇਕ ਤੀਰ ਆਪਣਾ ਛੱਡ ਕੇ,
    ਇਕ ਤੀਰ ਆਪਣਾ ਛੱਡ ਕੇ...`,
  },
  {
    song_name: "US",
    songURL: "10.mp3",
    artist: "Sidhu Moose Wala",
    liked: "false",
    img: "https://www.lyricsstatus.com/wp-content/uploads/2021/05/Webp.net-compress-image-2021-05-23T120203.590.jpg",
    lyrics: `Ae Yo, The Kidd!

    No Walkin’ Away Na Na
    And Givin’ Up Without Fight
    No Walkin’ Away Na Na
    You And I’re In This For Life
    
    Main Thodi Tez Aa Oh Thoda Bhola
    Life Katheyan Bitauni Sadda Goal Aa
    Hunde Lekh’an Ch Ni Wise Munde Sabde
    I’m Glad Ki Jatt Mera Kol Aa
    
    Main Thodi Tez Aa Oho Bhola
    Life Katheyan Bitauni Sadda Goal Aa
    Hunde Lekh’an Ch Ni Wise Munde Sabde
    I’m Glad Ki Jatt Mera Kol Aa
    
    Main Chup Karaan Na Te Oh Ni Bolda
    Kade Kade Meri Gall Vi Ni Gaurda
    Sau Kardi Taan Ek Massan Chakda
    Ghatt Dinda Ae Jawaab Meri Call Da
    
    Main Thodi Sweet Aa Te Oho Rude Aa
    Gall Kare Ya Na Kare Ohda Mood Aa
    Mainu Pata Aa Main Ohnu Thik Karlu
    Jatti Hauslein Ch Paindi Oh God Aa
    
    There Is Nothing To About It
    I Can Stop It
    You Got Me All Out My Mind
    All Out Of Pocket
    
    Oh You The King I’m The One
    But Thе Things That You Done
    Better Make It Up To Me
    Because I’m Mad
    
    Still I Love You Till My Last Day
    So Baby Please Don’t Make Me Wait In Vain
    From My Strength Now But You’re My Weakness
    Still I’m Glad That You Came My Way
    
    Nehde Dil De Wakt Milde
    Lok Suneya Tahion Kadar Karaan
    Kadi Taan Aawega Samjhawega Gal Lawega
    Tahion Sabar Karaan
    
    Tere Vargi Tu Ae Aankhda
    Duniya Bhatheri Phirdi
    Oh Tere Jehi Ae Par Tu Ni
    Tahion Tere Magar Phiraan
    Ve Tahion Tere Magar Phiraan
    
    Yeah I’m Thuggin’
    I Bought The Everything In Our Way
    You Won It, You Got The Anything For You Bae
    I’m The Rose You’re The Gun
    Get The Ring I’m The One
    Ain’t No One Better For You
    You Know I’m Bad
    
    They Say We’re Crazy We’ll Never Make It
    But They Don’t Know Us
    There’s No You If There’s No Me
    Ain’t No Faking This We Got That Energy
    I Want You Close To Me Yeah
    
    Main Thodi Hot Aa Oh Thoda Cool Aa
    Ladd Paini Aa Dimaag Mera Fool Aa
    Ni Oh Karda Believe Respect Ch
    Munda Sochni Ton Jamma Old School Aa
    
    Main Thodi Soft Aa Oh Thoda Hard Aa
    Rehnda Khijhda Hi Karda Na Laad Aa
    Dinda Dekhan Kise Nu Mere Wal Na
    Injh Kare Jeon Behave Mera Guard Aa
    
    Main Thodi Aam Aa Oh Mashhoor Aa
    Par Bhora Vi Na Karda Guroor Aa
    Chakkan Hor Na Guarantee Moose Wale Di
    Bas Kudiyan Te Nasheya Ton Door Aa
    
    Ni Bas Kudiyan Te Nasheyan Ton Door Aa
    Kudiyan Te Nasheyan Ton Door Aa
    
    No Walkin’ Away Na Na
    And Givin’ Up Without Fight
    No Walkin’ Away Na Na
    You And I’re In This For Life`,
  },
  {
    song_name: "BAROOD WARGI",
    songURL: "11.mp3",
    artist: "Simran Kaur Dhadli",
    liked: "false",
    img: "https://cover.djpunjab.org/49708/300x700/Barood-Wargi-Simiran-Kaur-Dhadli.jpg",
    lyrics: `Jatti Ae Barood Wargi, Ve Jatti Ae Barood Wargi
    Rakhi Raund-An Naal Yaraane Laake
    Phul Tere Sarh Jaan’ge, Tere Phul Dite Sarh Jaan’ge
    Mereyan Hathan Wich Aake
    Jatti Ae Barood Wargi, Ve Jatti Ae Barood Wargi
    
    
     
    Deyor Mere Meri Akh Ch Kade Na Akh Nu Paun’ge
    Oh Raati Bhabhi Banda Thok Gayi Phone Aun’ge
    Ve Tainu Phone Aun’ge
    
    Pauni Gaati Je Tu Feete Kass’la
    Gift-An Ch Aau Tainu Nit Asla
    Veeran Ton Meri Khair Mangenga
    Ve Tu Bharenga Chaunkiyan Jaake
    
    Jatti Ae Barood Vargi, Ve Jatti Ae Barood Vargi
    Rakhi Raund-An Naal Yaraane Laake
    Phul Tere Sarh Jaan’ge, Tere Phul Dite Sarh Jaan’ge
    Mereyan Hathan Wich Aake
    Jatti Ae Barood Vargi, Ve Jatti Ae Barood Vargi
    
    Ehna Hathan Te Leek Na Pyaran Di
    Jhoothi Yaari Jhoothe Yaraan Di
    Seena Pathar Ho Geya Ae
    Ji Chhuriyan Pitth De Utte Sehke
    
    
     
    Vekhi Ragdaan Kha Layin Naa
    Ve Mitra Tu Jatti Naal Khehke
    Vekhi Ragdaan Kha Layin Naa
    Ve Mitra Tu Jatti Naal Khehke
    
    Aa Vikhavaan Tainu Show-Reel Ve
    Jehde Main Kite Peel Oh Na Hoye Heal Ve
    Bole Jo Khilaf Iko Vari Bol Gaye
    Jaake Dekh Kidaan Kar Dite Buthe Seal Ve
    
    Hauli Hauli Kaare Hon’ge Reveal Ve
    Kine Gayab Kite Kineyan Di Hor Deal Ve
    Bahu Pekeyan Ton Zyada Peshiyan Te Jandi Ae
    Tere Bebe Bapu Karan’ge Bad Feel Ve
    
    Main Keha Rehan’de Ve Jaano Jayenga
    Main Keha Rehan’de Ve Jaano Jayenga
    Nangi Taar Nu Ve Gile Hath Paake
    
    
     
    Jatti Ae Barood Wargi
    Ve Jatti Ae Barood Wargi
    Rakhi Raund-An Naal Yaraane Laake
    Phul Tere Sarh Jaan’ge, Tere Phul Dite Sarh Jaan’ge
    Mereyan Hathan Wich Aake
    Jatti Ae Barood Wargi, Ve Jatti Ae Barood Wargi
    
    Fattad Sher De Wargi Mat
    Mere Kheyalan De Wich Agg Baldi
    Jatti Jammi Kalli Rehan Nu Bheedan De Wich Nai Raldi
    Gal Khaane Pa Lai Kahi Jaani Aan
    Bina Pyar De Main Kafi Changi Rahi Jaani Aa
    
    Ve Modke Tu Laija Surma Modke Tu Laija Surma,
    Main Rakhaan Vairiyan Nu Akhan Ch Sajaake
    
    Jatti Ae Barood Vargi, Ve Jatti Ae Barood Vargi
    Rakhi Raund-An Naal Yaraane Laake
    Phul Tere Sarh Jaan Ge, Tere Phul Dite Sarh Jaan Ge
    Mereyan Hathan Wich Aake
    Jatti Ae Barood Vargi, Ve Jatti Ae Barood Vargi
    
    
     
    JATTI AE BAROOD WARGI SONG LYRICS ENGLISH MEANING | SIMIRAN KAUR DHADLI
    Jatti Ae Barood Wargi Ve Jatti Ae Barood Wargi
    Hey, the girl (Jatti) is as explosive as gun powder.
    
    Rakhe Raundan Naal Yaraane Laake
    Hey, the girl is as explosive as gun powder. She is familiarized with the bullet cartridges.
    
    Phul Tere Sarh Jaange
    Your flowers would perish.
    
    Tere Phul Dite Sarh Jaange Mereyan Hathan Wich Aake
    The flowers you’d give me would die as soon as they got into my hands.
    
    Deyor Mere Meri Akh Ch Kade Na Akh Nu Paunge
    My in-laws would never make eye contact with me.
    
    Oh Raati Bhabhi Banda Thok Gayi Phone Aunge
    They’d get calls saying that I, their sister-in-law, had killed a man the night before.
    
    Ve Tainu Phone Aunge
    You’d get such calls.
    
    Pauni Gaati Je Tu Feete Kassla
    If you still want to be in love with me, you should be prepared for anything.
    
    Giftan Ch Aau Tainu Nit Asla
    You would frequently receive firearms as gifts.
    
    Veeran Ton Meri Khair Mangenga
    Ve Tu Bharenga Chaunkiyan Jaake
    You’d say a prayer for me. You would visit them over and over.
    
    Jatti Ae Barood Vargi Ve
    Jatti (I) is as explosive as gun powder.
    
    Jatti Ae Barood Vargi Rakhe Raundan Naal Yaraane Laake
    Jatti is as explosive as gun powder, and bullet cartridges are her friends.
    
    
     
    Phul Tere Sarh Jaange
    Your flowers would wither and die.
    
    Tere Phul Dite Sarh Jaange Mereyan Hathan Wich Aake
    The flowers you’d give me might die once they get into my hands.
    
    Jatti Ae Barood Vargi Ve
    Jatti, the girl, is as explosive as gunpowder.
    
    Ehna Hathan Te Leek Na Pyaran Di
    In my palms, there is no love line.
    
    Jhoothi Yaari Jhoothe Yaraan Di
    But there is only the phony love of phony lovers.
    
    Seena Pathar Ho Geya Ae
    Ji Chhuriyan Pitth De Utte Sehke
    After being stabbed in the back several times, I’ve turned stonehearted.
    
    Vekhi Ragdaan Kha Layin Naa
    Ve Mitra Tu Jatti Naal Khehke
    Make sure you don’t get hurt while dealing with me.
    
    Aa Vikhavaan Tainu Show-reel Ve
    Allow me to demonstrate.
    
    Jehde Main Kite Peel Oh Na Hoye Heal Ve
    Those I harmed did not have the opportunity to heal.
    
    Bole Jo Khilaf Iko Vari Bol Gaye
    It was their first and last experience to speak out against me.
    
    Jaake Dekh Kidaan Kar Dite Buthe Seal Ve
    You should go, see how I shut their mouths.
    
    
     
    Hauli Hauli Kaare Honge Reveal Ve
    Kine Gayab Kite Kineyan Di Hor Deal Ve
    It will all be revealed gradually. How many have I made vanish, and how many more will there be?
    
    Bahu Pekeyan Ton Zyada Peshiyan Te Jandi Ae
    Tere Bebe Bapu Karange Bad Feel Ve
    Your parents would be upset and complain that I, their daughter-in-law, attend the court more frequently than my parents.
    
    Main Keha Rehan De Ve Jaano Jayenga
    You should avoid falling in love with me because it could cost you your life.
    
    Nangi Taar Nu Ve Gille Hath Paake
    It’s the same as touching a high-voltage electric wire with your bare hands.
    
    Jatti Ae Barood Wargi Ve Jatti Ae Barood Wargi
    Hey, the girl (Jatti) is as explosive as gun powder.
    
    Rakhe Raundan Naal Yaraane Laake
    Hey, the girl is as explosive as gun powder. She is familiarized with the bullet cartridges.
    
    Phul Tere Sarh Jaange
    Your flowers would perish.
    
    Tere Phul Dite Sarh Jaange Mereyan Hathan Wich Aake
    The flowers you’d give me would die as soon as they got into my hands.
    
    Fattad Sher De Wargi Mat
    My thoughts are like those of a wounded lion.
    
    Mere Kheyalan De Wich Agg Baldi
    In my mind, there is a raging fire.
    
    Jatti Jammi Kalli Rehan Nu Bheedan De Wich Nai Raldi
    I was born to be alone. I never blend in with the crowds.
    
    
     
    Gal Khaane Pa Lai Kahi Jaani Aan
    You should take note of what I’m saying.
    
    Bina Pyar De Main Kafi Changi Rahi Jaani Aa
    I’m doing well without love.
    
    Ve Modke Tu Laija Surma Modke Tu Laija Surma
    Take your kohl back.
    
    Main Rakhaan Vairiyan Nu Akhan Ch Sajaake
    Take your kohl back because I beautify my eyes by having my enemies in them.
    
    Jatti Ae Barood Vargi Ve
    Jatti (I) is as explosive as gun powder.
    
    Jatti Ae Barood Vargi Rakhe Raundan Naal Yaraane Laake
    Jatti is as explosive as gun powder, and bullet cartridges are her friends.
    
    Phul Tere Sarh Jaange
    Your flowers would wither and die.
    
    Tere Phul Dite Sarh Jaange Mereyan Hathan Wich Aake
    The flowers you’d give me might die once they get into my hands.
    
    Jatti Ae Barood Vargi Ve
    Jatti, the girl, is as explosive as gunpowder.
    `,
  },
  {
    song_name: "PARSHAWAN",
    songURL: "12.mp3",
    artist: "Harnoor",
    liked: "false",
    img: "http://a10.gaanacdn.com/images/albums/24/4248424/crop_480x480_4248424.jpg",
    lyrics: `Its JayB!

    Turdi Ae Jadon Thoda Hor Bolde
    Paunche Piche Jhanjhra De Bol Bolde
    Ajje Tak Nain Sheele Sheele Vekhle
    Tareyan Je Jutti Utte Tille Vekhle
    
    Fikke Je Firoshi Kithon Aunde Hoye Aa
    Baalan Wich Uljhe Parande Hoye Aa
    Sab Kujh Chete Har Gall Gauli Ni
    Kadon Kadon Tez Kadon Turre Hauli Ni
    
    Dekh Leya Tainu Bada Jee Bhar Ke
    Reh Gaiyan Ne Bas Ik Laavan Sohniye
    
    Aiven Taan Ni Tere Kole Aavan Sohniye
    Saah To Sohna Tera Parshawan Sohniye
    Aiven Taan Ni Tere Kole Aavan Sohniye
    Saah To Sohna Tera Parshawan Sohniye
    
    Vekhde Hi Saare Chare Banne Honge
    Khulle Baal Jadon Ni Tu Banne Honge
    Meri Aa Pasand Bhave Aam Jeha Ae
    Suit Sharmayi Dhali Sham Jeha Ae
    
    Mere Muhre Bhave Nazra Ni Chakdi
    Ankh Dil Dovein Mere Utte Rakhdi
    Aitvaar Wangu Notice Ch Pakkiyan
    Ohvi Gallan Chete Jo Tu Wiche Kattiyan
    
    Wakh Teri Gifty De Geet Wargi
    Likha Tere Baare Ki Main Gaavan Sohniye
    
    Aiven Taan Ni Tere Kole Aavan Sohniye
    Saah To Sohna Tera Parshawan Sohniye
    Aiven Taan Ni Tere Kole Aavan Sohniye
    Saah To Sohna Tera Parshawan Sohniye
    
    Tere Layi Main Todke Hi Mooda Jhalliye
    Jeb Wich Paake Taare Turra Jhalliye
    Zindagi De Rang Hor Ghude Ho Gaye
    Khwaab Sadde Thode Si Jo Poore Ho Gaye
    
    Sari Gall Tere Utte Chaddi Dekhle
    Heel Utte Tikke Jiven Eddi Vekhle
    Jugnu Aa Jehi Teri Chal Lagdi
    Teri Har Ada Waah Kamaal Lagdi
    
    Judeya Jadon Main Tere Kol Tutt Ke
    Palakn Diyan Tu Kare Chaavan Sohniye
    
    Aiven Taan Ni Tere Kole Aavan Sohniye
    Saah To Sohna Tera Parshawan Sohniye
    Aiven Taan Ni Tere Kole Aavan Sohniye
    Saah To Sohna Tera Parshawan Sohniye`,
  },
  {
    song_name: "Thunder",
    songURL: "13.mp3",
    artist: "Imagine Dragons",
    liked: "false",
    img: "https://images.genius.com/f258673d4d0d2748c8bd2693bcdd6440.1000x1000x1.jpg",
    lyrics: `Just a young gun with a quick fuse
    I was uptight, wanna let loose
    I was dreaming of bigger things and
    Wanna leave my own life behind
    Not a "Yes sir", not a follower
    Fit the box, fit the mold
    Have a seat in the foyer, take a number
    I was lightning before the thunder
    Thunder, thunder
    Thunder, thun-, thunder
    Thun-thun-thunder, thunder
    Thunder, thunder, thun-, thunder
    Thun-thun-thunder, thunder
    Thunder, feel the thunder
    Lightning and the thunder
    Thunder, feel the thunder
    Lightning and the thunder
    Thunder, thunder
    Thunder
    Kids were laughing in my classes
    While I was scheming for the masses
    Who do you think you are?
    Dreaming 'bout being a big star
    You say you're basic, you say you're easy
    You're always riding in the backseat
    Now I'm smiling from the stage while
    You were clapping in the nosebleeds
    Thunder, thunder, thun-
    Thunder, thun-thun-thunder
    Thunder, thunder
    Thunder, thun-, thunder
    Thun-thun-thunder, thunder
    Thunder, feel the thunder
    Lightning and the thunder
    Thunder, feel the thunder
    Lightning and the thunder
    Thunder
    Thunder, feel the thunder
    Lightning and the thunder
    Thunder
    Thunder, feel the thunder
    Lightning and the thunder, thunder
    Thunder, feel the thunder
    Lightning and the thunder, thunder
    Thunder, feel the thunder
    Lightning and the thunder, thunder
    Thunder, feel the thunder (feel the)
    Lightning and the thunder, thunder
    Thunder, thunder, thun-
    Thunder, thun-thun-thunder, thunder
    Thunder, thunder, thun-
    Thunder, thun-thun-thunder, thunder
    Thunder, thunder, thun-
    Thunder, thun-thun-thunder, thunder
    Thunder, thunder, thun-, thunder
    Thun-thun-thunder, thunder`,
  },
  {
    song_name: "Why Don't We",
    songURL: "14.mp3",
    artist: "Blaeker Ft. Strawberry blonde",
    liked: "false",
    img: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/8c/59/22/8c592221-2406-5cc8-9f27-dc2bea179ae1/7330178003668.png/400x400bb.jpeg",
    lyrics: `Wake up at your place? 
    Wake up at mine? 
    Same question always 
    I'm getting tired
    
    We could have breakfast 
    Counting your freckles 
    Close to the west coast 
    How about that?
    
    Why don't we just get a place together? 
    Mornings in our own bed, so much better 
    Balconies and bathtubs, what you want 
    Why don't we just get a place together?
    
    Why don't we just get a place together?
    
    We can get #000000a8 walls 
    With big windows 
    Up on the third floor 
    In our chateau
    
    Why don't we just get a place together? 
    Mornings in our own bed, so much better 
    Balconies and bathtubs, what you want 
    Why don't we just get a place together?
    
    Why don't we just get a place together?
    
    Wake up at your place
    Wake up at mine
    Balconies and bathtubs, what you want 
    Why don't we just get a place together?
    
    Why don't we just get a place together?`,
  },
  {
    song_name: "Bad Munda",
    songURL: "15.mp3",
    artist: "Jass Manak Ft. Emiway",
    liked: "false",
    img: "234526749_361371295485923_3144961387069005836_n.jpg",
    lyrics: `Emiway Bantai!
    Jass Manak Sath Mein Kya
    Sunn!
    
    Haan Kudiyan Di Main Jaan Kude
    U.K To Pakistan Kude
    Kudiyan Mainu Dekh Kehndiyan
    Oh Yeah, Oh Yeah
    
    Main Heere Di Khan Kude
    Shallu Na Shahrukh Khan Kude
    Mainu Taan Vi Dollar Aan Kude
    Oh Yeah Oh Yeah
    
    Na Koyi Chori Na Koyi Daaka
    Na Kitte Da Gunda
    Taan Vi Kehnde Mainu
    
    Bad Munda Bad Munda
    Bad Munda Ni
    Kehnde Mainu
    Bad Munda Bad Munda
    Bad Munda Ni
    
    Bad Munda Bad Munda
    Bad Munda Ni
    Kehnde Mainu
    Bad Munda Bad Munda
    Bad Munda Ni
    
    Ha-ha-ha
    Malum Hai Na!
    
    Haan Bad Munda
    Sab Bole Mujhe Rap Gunda
    Hairaan Pareshan
    Sab Khud Bana Brand Munda
    
    Alag Pehchan Hai
    Sab Soche Kaun Banda
    Bahut Hard Nahi Chote
    Bahut Zyada Ghaint Munda
    
    Sabhi Piche Mere
    Main Tere Pe Lattu
    Bad Banda Main
    Baaki Sab Saale Fattu, Chal Ae!
    
    Kahyenga Tu Fattoos
    Swag Fattey Classy
    Har Samay Mera
    Isliye Dekhta Ni Rashi
    
    Bad Munda Sabke Playlist Pe
    Jude Bantai Jidhar Hai
    Woh Cheez A List Pe
    
    Rap Game Ka Bana
    Main Shahrukh Khan
    Isliye Apne Piche
    Itni Saari Ladies Hai
    
    Ae Sidha Shot Fikar Ni
    Use Jise Woh Mily
    Main Travis Scot Tera
    Aur Tu Hai Meri Kylie
    
    Aedi Chali Karne Ka Nahi
    Mere Saamne
    Main Note Gin Rela Baaki
    Bache Jaante Kaun Hai Daddy
    
    Ho Poori Kara Main Aish Kude
    Karda Ni Main Hash Kude
    Time Mere Kolo Ghatt Hi Hunda
    Ghatda Ni Kade Cash Kude
    
    Poori Kara Main Aish Kude
    Karda Ni Main Hash Kude
    Time Mere Kolo Ghatt Hi Hunda
    Ghatda Ni Kade Cash Kude
    
    Duniya Crazy Mere Piche
    Main Tere Piche Hunda
    Taan Hi Kehnde Mainu
    
    Bad Munda Bad Munda
    Bad Munda Ni
    Kehnde Mainu
    Bad Munda Bad Munda
    Bad Munda Ni
    
    Bad Munda Bad Munda
    Bad Munda Ni
    Kehnde Mainu
    Bad Munda Bad Munda
    Bad Munda Ni
    
    Haan Bad Munda
    Sab Bole Mujhe Rap Gunda
    Hairaan Pareshan
    Sab Khud Bana Brand Munda
    
    Malum Hai Na`,
  },
  {
    song_name: "Lover",
    songURL: "16.mp3",
    artist: "Diljit Dosanjh",
    liked: "false",
    img: "https://static.toiimg.com/thumb/msid-85511378,width-800,height-600,resizemode-75,imgsize-69986,pt-32,y_pad-40/85511378.jpg",
    lyrics: `Kol Ae Tu Yeah
Sambh Le Dil Mere Nu Yeah
Dass De Doori Ae Kyun Yeah
Meriyan Ankhan De Samne Reh

Tere Bagair Yeah
Lagdi Duniya Zehar Yeah
Jivein Laiju Koyi Gair Yeah
Paige Kaiyan Naal Vair Yeah

Ankh Laawan Mach Jaawein
Poori Ae Tu Fire
Ni Tu Meri Ho Jaawein
Ae Hi Hai Desire

Ankh Laawa Mach Jaawein
Poori Ae Tu Fire
Ni Tu Meri Ho Jaawein
Baby Baby

Tera Ni Main Tera Ni Main Lover
Ankhan Da Dangeya
Hona Ni Main Hona Ni Main Recover
Tainu Jo Takkeya

Reha Ni Main Reha Ni Main Sober
Tera Mere Dil Te Ae
Rooh Te Ae Asar

Tere Kole Howan Jadon
Chup Vi Chup Na Rehndi Ae
Taare Tuttde Ne Jadon
Zulf Laate Khaindi Aa

Turrdi Aa Kithe Kudi
Pani Wangu Behndi Ae
Baahan Ch Na Howe
Tu Taan Jaan Ch Jaan Naal
Paindi Ae

Turri Jivein Koyi Nasha
Peena Aa Main Day Night
Thoda Jeha Trippy Aan
Par Tu Hai Taan It’s Alright
Baby Baby

Tera Ni Main Tera Ni Main Lover
Ankhan Da Dangeya
Hona Ni Main Hona Ni Main Recover
Tainu Jo Takkeya

Reha Ni Main Reha Ni Main Sober
Tera Mere Dil Te Ae
Rooh Te Ae Asar
Baby Baby

Chaliye Kitte Door Kitte Ni
2 Seater Vich Tu Te Main
Paisa Paani Wang Laa Doon
Ki Saa Chaidi Naam Te Le

Duniya Main Kardun Teri
Bas Tu Meri Hoke Reh
Saari Raat Na Sowan Sachi
Kudiye Mere Kol Ta Beh

Rakhdi Ae Raj De Tu
Modde Utte Sar Ni
Bullan Ton Na Jaawe Smile
Kini Kini Chirr Ni

Rakhdi Ae Raj De Tu
Modde Utte Sar Ni
Bullan Ton Na Jaawe Smile
Kini Kini Chirr Ni

Tera Ni Main Tera Ni Main Lover
Ankhan Da Dangeya
Hona Ni Main Hona Ni Main Recover
Tainu Jo Takkeya

Reha Ni Main Reha Ni Main Sober
Tera Mere Dil Te Ae
Rooh Te Ae Asar
Baby Baby

Tera Ni Main Tera Ni Main Lover
Baby Baby
Tera Ni Main Tera Ni Main Lover
Baby Baby
Tera Ni Main Tera Ni Main Lover
Baby Baby
Tera Ni Main Tera Ni Main Lover



Read Full Lyrics at iLyricsHub: https://www.ilyricshub.com/lover-diljit-dosanjh/`,
  },
  {
    song_name: "High School",
    songURL: "17.mp3",
    artist: "Nicki Minaj Ft. Lil Wayne",
    liked: "false",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35a514b9-c7d7-4039-b1e4-a95588f521e8/d5ue9mj-3e52c0ec-5cf3-4d36-9871-0ebd056588f3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1YTUxNGI5LWM3ZDctNDAzOS1iMWU0LWE5NTU4OGY1MjFlOFwvZDV1ZTltai0zZTUyYzBlYy01Y2YzLTRkMzYtOTg3MS0wZWJkMDU2NTg4ZjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.W9jAtFOrRaG6TKqye-klCp3SBdUOsAxya89o2V2pAAo",
    lyrics: `He said he came from Jamaica
    He owned a couple acres
    A couple fake visas 'cause he never got his papers
    Gave up on love, f-g with them heart breakers
    But he was gettin' money with the movers and the shakers
    He was mixed with a couple things
    Ball like a couple rings
    Bricks in the condo and grams to sing sing
    Left arm, baby mother tatted
    5-year bid up, North when they ratted
    Anyway, I felt him, helped him
    Put him on lock, seatbelt them
    Took him out to Belgium, welcome!
    Bitches this pretty, that's seldom
    This box better than the box he was held in
    I'm Momma Dee in that order
    I call him Daddy like daughters
    He like it when I get drunk
    But I like it when he be sober
    That's top of the toppa
    I never fuck with beginners
    I let him play with my pussy
    Then lick it off of his fingers
    I'm in the zone
    They holler at me but it's you
    You, this ain't high school
    Me and my crew, we can slide through
    Give it to you whenever you want
    Whip it whenever you want
    Baby, it's yours
    Anywhere, everywhere
    Baby it's your world, ain't it? (Alright)
    Baby it's your world, ain't it?
    She got a n-a at home and one on the side
    Best friend is a d-ke, they f--ed around a few times
    Her and her momma alike, so all they do is fight
    I tell her make me some money, she tell me make her a wife
    I tell her: "b--h, you crazy, f--k wrong with you?
    And excuse my French, but I'm a long kisser
    And then she try to tell me I'm the only one that's hittin'
    And I say: "what about them n-gas?"
    She say: "what about them n-gas?"
    You right, what you doing tonight?
    Put on something tight
    Don't judge me, I get life
    She love me like a brother
    But f--k me like a husband
    P--sy like a oven too hot to put my tongue in
    All I had to do is rub it
    The genie out the bottle
    P--sy so wet, I'mma need goggles
    She tell me that's it's mine
    I tell her stop lying, mine and who else?
    She say worry about yourself, Lil Tune
    They holler at me but it's you
    You, this ain't high school
    Me and my crew, we can slide through
    Give it to you whenever you want
    Whip it whenever you want
    Baby, it's yours
    Anywhere, everywhere
    Baby it's your world, ain't it?
    Baby it's your world, ain't it?
    I know you want it boy
    I see you tryin'
    Just keep on pushin'
    I'ma let you slide in
    Just close your eyes and
    This horizon
    It's ready, come get you some
    Yeah, yeah, yeah, yeah`,
  },
  {
    song_name: "Vibe",
    songURL: "18.mp3",
    artist: "Diljit Dosanjh",
    liked: "false",
    img: "https://www.thepollywood.com/wp-content/uploads/2021/09/VIBE.jpg",
    lyrics: `Vibe Teri Meri Mildi Aa
    Vibe Teri Meri Mildi Aa
    Lokki Mere Haase Sunde
    Te Tu Sunda Dil Di Aa
    
    Vibe Teri Meri Mildi Aa
    Vibe Teri Meri Mildi Aa
    
    Gutt Mera Fadhda Ae Jaan Ke Jatta
    Roj Mile Supne Ch Aan Ke Jatta
    Gutt Mera Fadhda Ae Jaan Ke Jatta
    Roj Mile Supne Ch Aan Ke Jatta
    
    Moncler Wich Jachda Ae
    Moncler Wich Jachda Ae
    Ve Mainu Moon Kehan Waleya
    Ve Tu Dil Wich Vasda Ae
    
    Moncler Wich Jachda Ae
    Moncler Wich Jachda Ae
    
    Enna Pyar Enna Pyar Kari Na Jatta
    Hojuga Possessive Subaah Ve
    Ik Mint Ik Mint Dur Jana Ae
    Agla Da Aunda Mainu Sanh Ve
    
    Raj Pyaar Bada Gudha Aa
    Raj Pyaar Bada Gudha Aa
    Tainu Main Pehna Du Nattiya
    Pauna Tere Naa Da Chudaa Aa
    
    Raj Pyaar Bada Gudha Aa
    Raj Pyaar Bada Gudha Aa
    
    Link Tere Naal Lagde Osame De
    Kadh Deve Watt Kurte Pazame De
    Mere Piche 15 De Sir Padte
    Charche Suna Main Kitte Karname De
    
    Ve Main Sareyan Naal Todi Aa
    Ve Main Sareyan Naal Todi Aa
    Ve Tu Bass Mera Ho Gaya
    Koi Choti Gall Thodi Aa
    
    Ve Main Sareyan Naal Todi Aa
    Ve Main Sareyan Naal Todi Aa
    Ve Main Sareyan Naal Todi Aa
    
    
    
    Check Full Lyrics on LyricsGoal: https://www.lyricsgoal.com/vibe-diljit-dosanjh/ `,
  },
  {
    song_name: "Asa Di Vaar",
    songURL: "19.mp3",
    artist: "Bhai Sarabjeet Singh",
    liked: "true",
    img: "https://www.jagranimages.com/images/newimg/19012021/19_01_2021-guru_gobind_singh_jayanti2021_21286360.jpg",
    lyrics: `ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥
    ਆਸਾ ਮਹਲਾ ੪ ਛੰਤ ਘਰੁ ੪ ॥
    
    ਹਰਿ ਅੰਮ੍ਰਿਤ ਭਿੰਨੇ ਲੋਇਣਾ ਮਨੁ ਪ੍ਰੇਮਿ ਰਤੰਨਾ ਰਾਮ ਰਾਜੇ ॥
    ਮਨੁ ਰਾਮਿ ਕਸਵਟੀ ਲਾਇਆ ਕੰਚਨੁ ਸੋਵਿੰਨਾ ॥
    ਗੁਰਮੁਖਿ ਰੰਗਿ ਚਲੂਲਿਆ ਮੇਰਾ ਮਨੁ ਤਨੋ ਭਿੰਨਾ ॥
    ਜਨੁ ਨਾਨਕੁ ਮੁਸਕਿ ਝਕੋਲਿਆ ਸਭੁ ਜਨਮੁ ਧਨੁ ਧੰਨਾ ॥੧॥
    
    ੴ ਸਤਿਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ
    ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰਪ੍ਰਸਾਦਿ ॥
    
    ਆਸਾ ਮਹਲਾ ੧ ॥
    
    ਵਾਰ ਸਲੋਕਾ ਨਾਲਿ ਸਲੋਕ ਭੀ ਮਹਲੇ ਪਹਿਲੇ ਕੇ ਲਿਖੇ ਟੁੰਡੇ ਅਸ ਰਾਜੈ ਕੀ ਧੁਨੀ ॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਬਲਿਹਾਰੀ ਗੁਰ ਆਪਣੇ ਦਿਉਹਾੜੀ ਸਦ ਵਾਰ ॥
    ਜਿਨਿ ਮਾਣਸ ਤੇ ਦੇਵਤੇ ਕੀਏ ਕਰਤ ਨ ਲਾਗੀ ਵਾਰ ॥੧॥
    
    ਮਹਲਾ ੨ ॥
    
    ਜੇ ਸਉ ਚੰਦਾ ਉਗਵਹਿ ਸੂਰਜ ਚੜਹਿ ਹਜਾਰ ॥
    ਏਤੇ ਚਾਨਣ ਹੋਦਿਆਂ ਗੁਰ ਬਿਨੁ ਘੋਰ ਅੰਧਾਰ ॥੨॥
    
    ਮਃ ੧ ॥
    
    ਨਾਨਕ ਗੁਰੂ ਨ ਚੇਤਨੀ ਮਨਿ ਆਪਣੈ ਸੁਚੇਤ ॥
    ਛੁਟੇ ਤਿਲ ਬੂਆੜ ਜਿਉ ਸੁੰਞੇ ਅੰਦਰਿ ਖੇਤ ॥
    ਖੇਤੈ ਅੰਦਰਿ ਛੁਟਿਆ ਕਹੁ ਨਾਨਕ ਸਉ ਨਾਹ ॥
    ਫਲੀਅਹਿ ਫੁਲੀਅਹਿ ਬਪੁੜੇ ਭੀ ਤਨ ਵਿਚਿ ਸੁਆਹ ॥੩॥
    
    ਪਉੜੀ ॥
    
    ਆਪੀਨ੍ਹ੍ਹੈ ਆਪੁ ਸਾਜਿਓ ਆਪੀਨ੍ਹ੍ਹੈ ਰਚਿਓ ਨਾਉ ॥
    ਦੁਯੀ ਕੁਦਰਤਿ ਸਾਜੀਐ ਕਰਿ ਆਸਣੁ ਡਿਠੋ ਚਾਉ ॥
    ਦਾਤਾ ਕਰਤਾ ਆਪਿ ਤੂੰ ਤੁਸਿ ਦੇਵਹਿ ਕਰਹਿ ਪਸਾਉ ॥
    ਤੂੰ ਜਾਣੋਈ ਸਭਸੈ ਦੇ ਲੈਸਹਿ ਜਿੰਦੁ ਕਵਾਉ ॥
    ਕਰਿ ਆਸਣੁ ਡਿਠੋ ਚਾਉ ॥੧॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਸਚੇ ਤੇਰੇ ਖੰਡ ਸਚੇ ਬ੍ਰਹਮੰਡ ॥
    ਸਚੇ ਤੇਰੇ ਲੋਅ ਸਚੇ ਆਕਾਰ ॥
    ਸਚੇ ਤੇਰੇ ਕਰਣੇ ਸਰਬ ਬੀਚਾਰ ॥
    ਸਚਾ ਤੇਰਾ ਅਮਰੁ ਸਚਾ ਦੀਬਾਣੁ ॥
    ਸਚਾ ਤੇਰਾ ਹੁਕਮੁ ਸਚਾ ਫੁਰਮਾਣੁ ॥
    ਸਚਾ ਤੇਰਾ ਕਰਮੁ ਸਚਾ ਨੀਸਾਣੁ ॥
    
    ਸਚੇ ਤੁਧੁ ਆਖਹਿ ਲਖ ਕਰੋੜਿ ॥
    ਸਚੈ ਸਭਿ ਤਾਣਿ ਸਚੈ ਸਭਿ ਜੋਰਿ ॥
    ਸਚੀ ਤੇਰੀ ਸਿਫਤਿ ਸਚੀ ਸਾਲਾਹ ॥
    ਸਚੀ ਤੇਰੀ ਕੁਦਰਤਿ ਸਚੇ ਪਾਤਿਸਾਹ ॥
    ਨਾਨਕ ਸਚੁ ਧਿਆਇਨਿ ਸਚੁ ॥
    ਜੋ ਮਰਿ ਜੰਮੇ ਸੁ ਕਚੁ ਨਿਕਚੁ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਵਡੀ ਵਡਿਆਈ ਜਾ ਵਡਾ ਨਾਉ ॥
    ਵਡੀ ਵਡਿਆਈ ਜਾ ਸਚੁ ਨਿਆਉ ॥
    ਵਡੀ ਵਡਿਆਈ ਜਾ ਨਿਹਚਲ ਥਾਉ ॥
    ਵਡੀ ਵਡਿਆਈ ਜਾਣੈ ਆਲਾਉ ॥
    
    ਵਡੀ ਵਡਿਆਈ ਬੁਝੈ ਸਭਿ ਭਾਉ ॥
    ਵਡੀ ਵਡਿਆਈ ਜਾ ਪੁਛਿ ਨ ਦਾਤਿ ॥
    ਵਡੀ ਵਡਿਆਈ ਜਾ ਆਪੇ ਆਪਿ ॥
    ਨਾਨਕ ਕਾਰ ਨ ਕਥਨੀ ਜਾਇ ॥
    ਕੀਤਾ ਕਰਣਾ ਸਰਬ ਰਜਾਇ ॥੨॥
    
    ਮਹਲਾ ੨ ॥
    
    ਇਹੁ ਜਗੁ ਸਚੈ ਕੀ ਹੈ ਕੋਠੜੀ ਸਚੇ ਕਾ ਵਿਚਿ ਵਾਸੁ ॥
    ਇਕਨ੍ਹ੍ਹਾ ਹੁਕਮਿ ਸਮਾਇ ਲਏ ਇਕਨ੍ਹ੍ਹਾ ਹੁਕਮੇ ਕਰੇ ਵਿਣਾਸੁ ॥
    ਇਕਨ੍ਹ੍ਹਾ ਭਾਣੈ ਕਢਿ ਲਏ ਇਕਨ੍ਹ੍ਹਾ ਮਾਇਆ ਵਿਚਿ ਨਿਵਾਸੁ ॥
    ਏਵ ਭਿ ਆਖਿ ਨ ਜਾਪਈ ਜਿ ਕਿਸੈ ਆਣੇ ਰਾਸਿ ॥
    ਨਾਨਕ ਗੁਰਮੁਖਿ ਜਾਣੀਐ ਜਾ ਕਉ ਆਪਿ ਕਰੇ ਪਰਗਾਸੁ ॥੩॥
    
    ਪਉੜੀ ॥
    
    ਨਾਨਕ ਜੀਅ ਉਪਾਇ ਕੈ ਲਿਖਿ ਨਾਵੈ ਧਰਮੁ ਬਹਾਲਿਆ ॥
    ਓਥੈ ਸਚੇ ਹੀ ਸਚਿ ਨਿਬੜੈ ਚੁਣਿ ਵਖਿ ਕਢੇ ਜਜਮਾਲਿਆ ॥
    ਥਾਉ ਨ ਪਾਇਨਿ ਕੂੜਿਆਰ ਮੁਹ ਕਾਲ੍ਹ੍ਹੈ ਦੋਜਕਿ ਚਾਲਿਆ ॥
    ਤੇਰੈ ਨਾਇ ਰਤੇ ਸੇ ਜਿਣਿ ਗਏ ਹਾਰਿ ਗਏ ਸਿ ਠਗਣ ਵਾਲਿਆ ॥
    ਲਿਖਿ ਨਾਵੈ ਧਰਮੁ ਬਹਾਲਿਆ ॥੨॥
    
    ਸਲੋਕ ਮਃ ੧ ॥
    
    ਵਿਸਮਾਦੁ ਨਾਦ ਵਿਸਮਾਦੁ ਵੇਦ ॥
    ਵਿਸਮਾਦੁ ਜੀਅ ਵਿਸਮਾਦੁ ਭੇਦ ॥
    ਵਿਸਮਾਦੁ ਰੂਪ ਵਿਸਮਾਦੁ ਰੰਗ ॥
    ਵਿਸਮਾਦੁ ਨਾਗੇ ਫਿਰਹਿ ਜੰਤ ॥
    
    ਵਿਸਮਾਦੁ ਪਉਣੁ ਵਿਸਮਾਦੁ ਪਾਣੀ ॥
    ਵਿਸਮਾਦੁ ਅਗਨੀ ਖੇਡਹਿ ਵਿਡਾਣੀ ॥
    ਵਿਸਮਾਦੁ ਧਰਤੀ ਵਿਸਮਾਦੁ ਖਾਣੀ ॥
    ਵਿਸਮਾਦੁ ਸਾਦਿ ਲਗਹਿ ਪਰਾਣੀ ॥
    
    ਵਿਸਮਾਦੁ ਸੰਜੋਗੁ ਵਿਸਮਾਦੁ ਵਿਜੋਗੁ ॥
    ਵਿਸਮਾਦੁ ਭੁਖ ਵਿਸਮਾਦੁ ਭੋਗੁ ॥
    ਵਿਸਮਾਦੁ ਸਿਫਤਿ ਵਿਸਮਾਦੁ ਸਾਲਾਹ ॥
    ਵਿਸਮਾਦੁ ਉਝੜ ਵਿਸਮਾਦੁ ਰਾਹ ॥
    
    ਵਿਸਮਾਦੁ ਨੇੜੈ ਵਿਸਮਾਦੁ ਦੂਰਿ ॥
    ਵਿਸਮਾਦੁ ਦੇਖੈ ਹਾਜਰਾ ਹਜੂਰਿ ॥
    ਵੇਖਿ ਵਿਡਾਣੁ ਰਹਿਆ ਵਿਸਮਾਦੁ ॥
    ਨਾਨਕ ਬੁਝਣੁ ਪੂਰੈ ਭਾਗਿ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਕੁਦਰਤਿ ਦਿਸੈ ਕੁਦਰਤਿ ਸੁਣੀਐ ਕੁਦਰਤਿ ਭਉ ਸੁਖ ਸਾਰੁ ॥
    ਕੁਦਰਤਿ ਪਾਤਾਲੀ ਆਕਾਸੀ ਕੁਦਰਤਿ ਸਰਬ ਆਕਾਰੁ ॥
    ਕੁਦਰਤਿ ਵੇਦ ਪੁਰਾਣ ਕਤੇਬਾ ਕੁਦਰਤਿ ਸਰਬ ਵੀਚਾਰੁ ॥
    
    ਕੁਦਰਤਿ ਖਾਣਾ ਪੀਣਾ ਪੈਨ੍ਹ੍ਹਣੁ ਕੁਦਰਤਿ ਸਰਬ ਪਿਆਰੁ ॥
    ਕੁਦਰਤਿ ਜਾਤੀ ਜਿਨਸੀ ਰੰਗੀ ਕੁਦਰਤਿ ਜੀਅ ਜਹਾਨ ॥
    ਕੁਦਰਤਿ ਨੇਕੀਆ ਕੁਦਰਤਿ ਬਦੀਆ ਕੁਦਰਤਿ ਮਾਨੁ ਅਭਿਮਾਨੁ ॥
    
    ਕੁਦਰਤਿ ਪਉਣੁ ਪਾਣੀ ਬੈਸੰਤਰੁ ਕੁਦਰਤਿ ਧਰਤੀ ਖਾਕੁ ॥
    ਸਭ ਤੇਰੀ ਕੁਦਰਤਿ ਤੂੰ ਕਾਦਿਰੁ ਕਰਤਾ ਪਾਕੀ ਨਾਈ ਪਾਕੁ ॥
    ਨਾਨਕ ਹੁਕਮੈ ਅੰਦਰਿ ਵੇਖੈ ਵਰਤੈ ਤਾਕੋ ਤਾਕੁ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਆਪੀਨ੍ਹ੍ਹੈ ਭੋਗ ਭੋਗਿ ਕੈ ਹੋਇ ਭਸਮੜਿ ਭਉਰੁ ਸਿਧਾਇਆ ॥
    ਵਡਾ ਹੋਆ ਦੁਨੀਦਾਰੁ ਗਲਿ ਸੰਗਲੁ ਘਤਿ ਚਲਾਇਆ ॥
    ਅਗੈ ਕਰਣੀ ਕੀਰਤਿ ਵਾਚੀਐ ਬਹਿ ਲੇਖਾ ਕਰਿ ਸਮਝਾਇਆ ॥
    ਥਾਉ ਨ ਹੋਵੀ ਪਉਦੀਈ ਹੁਣਿ ਸੁਣੀਐ ਕਿਆ ਰੂਆਇਆ ॥
    ਮਨਿ ਅੰਧੈ ਜਨਮੁ ਗਵਾਇਆ ॥੩॥
    
    ਸਲੋਕ ਮਃ ੧ ॥
    
    ਭੈ ਵਿਚਿ ਪਵਣੁ ਵਹੈ ਸਦਵਾਉ ॥
    ਭੈ ਵਿਚਿ ਚਲਹਿ ਲਖ ਦਰੀਆਉ ॥
    ਭੈ ਵਿਚਿ ਅਗਨਿ ਕਢੈ ਵੇਗਾਰਿ ॥
    ਭੈ ਵਿਚਿ ਧਰਤੀ ਦਬੀ ਭਾਰਿ ॥
    
    ਭੈ ਵਿਚਿ ਇੰਦੁ ਫਿਰੈ ਸਿਰ ਭਾਰਿ ॥
    ਭੈ ਵਿਚਿ ਰਾਜਾ ਧਰਮ ਦੁਆਰੁ ॥
    ਭੈ ਵਿਚਿ ਸੂਰਜੁ ਭੈ ਵਿਚਿ ਚੰਦੁ ॥
    ਕੋਹ ਕਰੋੜੀ ਚਲਤ ਨ ਅੰਤੁ ॥
    
    ਭੈ ਵਿਚਿ ਸਿਧ ਬੁਧ ਸੁਰ ਨਾਥ ॥
    ਭੈ ਵਿਚਿ ਆਡਾਣੇ ਆਕਾਸ ॥
    ਭੈ ਵਿਚਿ ਜੋਧ ਮਹਾਬਲ ਸੂਰ ॥
    
    ਭੈ ਵਿਚਿ ਆਵਹਿ ਜਾਵਹਿ ਪੂਰ ॥
    ਸਗਲਿਆ ਭਉ ਲਿਖਿਆ ਸਿਰਿ ਲੇਖੁ ॥
    ਨਾਨਕ ਨਿਰਭਉ ਨਿਰੰਕਾਰੁ ਸਚੁ ਏਕੁ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਨਾਨਕ ਨਿਰਭਉ ਨਿਰੰਕਾਰੁ ਹੋਰਿ ਕੇਤੇ ਰਾਮ ਰਵਾਲ ॥
    ਕੇਤੀਆ ਕੰਨ੍ਹ੍ਹ ਕਹਾਣੀਆ ਕੇਤੇ ਬੇਦ ਬੀਚਾਰ ॥
    ਕੇਤੇ ਨਚਹਿ ਮੰਗਤੇ ਗਿੜਿ ਮੁੜਿ ਪੂਰਹਿ ਤਾਲ ॥
    
    ਬਾਜਾਰੀ ਬਾਜਾਰ ਮਹਿ ਆਇ ਕਢਹਿ ਬਾਜਾਰ ॥
    ਗਾਵਹਿ ਰਾਜੇ ਰਾਣੀਆ ਬੋਲਹਿ ਆਲ ਪਤਾਲ ॥
    ਲਖ ਟਕਿਆ ਕੇ ਮੁੰਦੜੇ ਲਖ ਟਕਿਆ ਕੇ ਹਾਰ ॥
    
    ਜਿਤੁ ਤਨਿ ਪਾਈਅਹਿ ਨਾਨਕਾ ਸੇ ਤਨ ਹੋਵਹਿ ਛਾਰ ॥
    ਗਿਆਨੁ ਨ ਗਲੀਈ ਢੂਢੀਐ ਕਥਨਾ ਕਰੜਾ ਸਾਰੁ ॥
    ਕਰਮਿ ਮਿਲੈ ਤਾ ਪਾਈਐ ਹੋਰ ਹਿਕਮਤਿ ਹੁਕਮੁ ਖੁਆਰੁ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਨਦਰਿ ਕਰਹਿ ਜੇ ਆਪਣੀ ਤਾ ਨਦਰੀ ਸਤਿਗੁਰੁ ਪਾਇਆ ॥
    ਏਹੁ ਜੀਉ ਬਹੁਤੇ ਜਨਮ ਭਰੰਮਿਆ ਤਾ ਸਤਿਗੁਰਿ ਸਬਦੁ ਸੁਣਾਇਆ ॥
    ਸਤਿਗੁਰ ਜੇਵਡੁ ਦਾਤਾ ਕੋ ਨਹੀ ਸਭਿ ਸੁਣਿਅਹੁ ਲੋਕ ਸਬਾਇਆ ॥
    ਸਤਿਗੁਰਿ ਮਿਲਿਐ ਸਚੁ ਪਾਇਆ ਜਿਨ੍ਹ੍ਹੀ ਵਿਚਹੁ ਆਪੁ ਗਵਾਇਆ ॥
    ਜਿਨਿ ਸਚੋ ਸਚੁ ਬੁਝਾਇਆ ॥੪॥
    
    ਸਲੋਕ ਮਃ ੧ ॥
    
    ਘੜੀਆ ਸਭੇ ਗੋਪੀਆ ਪਹਰ ਕੰਨ੍ਹ੍ਹ ਗੋਪਾਲ ॥
    ਗਹਣੇ ਪਉਣੁ ਪਾਣੀ ਬੈਸੰਤਰੁ ਚੰਦੁ ਸੂਰਜੁ ਅਵਤਾਰ ॥
    ਸਗਲੀ ਧਰਤੀ ਮਾਲੁ ਧਨੁ ਵਰਤਣਿ ਸਰਬ ਜੰਜਾਲ ॥
    ਨਾਨਕ ਮੁਸੈ ਗਿਆਨ ਵਿਹੂਣੀ ਖਾਇ ਗਇਆ ਜਮਕਾਲੁ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਵਾਇਨਿ ਚੇਲੇ ਨਚਨਿ ਗੁਰ ॥
    ਪੈਰ ਹਲਾਇਨਿ ਫੇਰਨ੍ਹ੍ਹਿ ਸਿਰ ॥
    ਉਡਿ ਉਡਿ ਰਾਵਾ ਝਾਟੈ ਪਾਇ ॥
    ਵੇਖੈ ਲੋਕੁ ਹਸੈ ਘਰਿ ਜਾਇ ॥
    ਰੋਟੀਆ ਕਾਰਣਿ ਪੂਰਹਿ ਤਾਲ ॥
    
    ਆਪੁ ਪਛਾੜਹਿ ਧਰਤੀ ਨਾਲਿ ॥
    ਗਾਵਨਿ ਗੋਪੀਆ ਗਾਵਨਿ ਕਾਨ੍ਹ੍ਹ ॥
    ਗਾਵਨਿ ਸੀਤਾ ਰਾਜੇ ਰਾਮ ॥
    ਨਿਰਭਉ ਨਿਰੰਕਾਰੁ ਸਚੁ ਨਾਮੁ ॥
    ਜਾ ਕਾ ਕੀਆ ਸਗਲ ਜਹਾਨੁ ॥
    
    ਸੇਵਕ ਸੇਵਹਿ ਕਰਮਿ ਚੜਾਉ ॥
    ਭਿੰਨੀ ਰੈਣਿ ਜਿਨ੍ਹ੍ਹਾ ਮਨਿ ਚਾਉ ॥
    ਸਿਖੀ ਸਿਖਿਆ ਗੁਰ ਵੀਚਾਰਿ ॥
    ਨਦਰੀ ਕਰਮਿ ਲਘਾਏ ਪਾਰਿ ॥
    ਕੋਲੂ ਚਰਖਾ ਚਕੀ ਚਕੁ ॥
    
    ਥਲ ਵਾਰੋਲੇ ਬਹੁਤੁ ਅਨੰਤੁ ॥
    ਲਾਟੂ ਮਾਧਾਣੀਆ ਅਨਗਾਹ ॥
    ਪੰਖੀ ਭਉਦੀਆ ਲੈਨਿ ਨ ਸਾਹ ॥
    ਸੂਐ ਚਾੜਿ ਭਵਾਈਅਹਿ ਜੰਤ ॥
    ਨਾਨਕ ਭਉਦਿਆ ਗਣਤ ਨ ਅੰਤ ॥
    
    ਬੰਧਨ ਬੰਧਿ ਭਵਾਏ ਸੋਇ ॥
    ਪਇਐ ਕਿਰਤਿ ਨਚੈ ਸਭੁ ਕੋਇ ॥
    ਨਚਿ ਨਚਿ ਹਸਹਿ ਚਲਹਿ ਸੇ ਰੋਇ ॥
    ਉਡਿ ਨ ਜਾਹੀ ਸਿਧ ਨ ਹੋਹਿ ॥
    ਨਚਣੁ ਕੁਦਣੁ ਮਨ ਕਾ ਚਾਉ ॥
    ਨਾਨਕ ਜਿਨ੍ਹ੍ਹ ਮਨਿ ਭਉ ਤਿਨ੍ਹ੍ਹਾ ਮਨਿ ਭਾਉ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਨਾਉ ਤੇਰਾ ਨਿਰੰਕਾਰੁ ਹੈ ਨਾਇ ਲਇਐ ਨਰਕਿ ਨ ਜਾਈਐ ॥
    ਜੀਉ ਪਿੰਡੁ ਸਭੁ ਤਿਸ ਦਾ ਦੇ ਖਾਜੈ ਆਖਿ ਗਵਾਈਐ ॥
    ਜੇ ਲੋੜਹਿ ਚੰਗਾ ਆਪਣਾ ਕਰਿ ਪੁੰਨਹੁ ਨੀਚੁ ਸਦਾਈਐ ॥
    ਜੇ ਜਰਵਾਣਾ ਪਰਹਰੈ ਜਰੁ ਵੇਸ ਕਰੇਦੀ ਆਈਐ ॥
    ਕੋ ਰਹੈ ਨ ਭਰੀਐ ਪਾਈਐ ॥੫॥
    
    ਸਲੋਕ ਮਃ ੧ ॥
    
    ਮੁਸਲਮਾਨਾ ਸਿਫਤਿ ਸਰੀਅਤਿ ਪੜਿ ਪੜਿ ਕਰਹਿ ਬੀਚਾਰੁ ॥
    ਬੰਦੇ ਸੇ ਜਿ ਪਵਹਿ ਵਿਚਿ ਬੰਦੀ ਵੇਖਣ ਕਉ ਦੀਦਾਰੁ ॥
    ਹਿੰਦੂ ਸਾਲਾਹੀ ਸਾਲਾਹਨਿ ਦਰਸਨਿ ਰੂਪਿ ਅਪਾਰੁ ॥
    ਤੀਰਥਿ ਨਾਵਹਿ ਅਰਚਾ ਪੂਜਾ ਅਗਰ ਵਾਸੁ ਬਹਕਾਰੁ ॥
    ਜੋਗੀ ਸੁੰਨਿ ਧਿਆਵਨ੍ਹ੍ਹਿ ਜੇਤੇ ਅਲਖ ਨਾਮੁ ਕਰਤਾਰੁ ॥
    
    ਸੂਖਮ ਮੂਰਤਿ ਨਾਮੁ ਨਿਰੰਜਨ ਕਾਇਆ ਕਾ ਆਕਾਰੁ ॥
    ਸਤੀਆ ਮਨਿ ਸੰਤੋਖੁ ਉਪਜੈ ਦੇਣੈ ਕੈ ਵੀਚਾਰਿ ॥
    ਦੇ ਦੇ ਮੰਗਹਿ ਸਹਸਾ ਗੂਣਾ ਸੋਭ ਕਰੇ ਸੰਸਾਰੁ ॥
    ਚੋਰਾ ਜਾਰਾ ਤੈ ਕੂੜਿਆਰਾ ਖਾਰਾਬਾ ਵੇਕਾਰ ॥
    ਇਕਿ ਹੋਦਾ ਖਾਇ ਚਲਹਿ ਐਥਾਊ ਤਿਨਾ ਭਿ ਕਾਈ ਕਾਰ ॥
    
    ਜਲਿ ਥਲਿ ਜੀਆ ਪੁਰੀਆ ਲੋਆ ਆਕਾਰਾ ਆਕਾਰ ॥
    ਓਇ ਜਿ ਆਖਹਿ ਸੁ ਤੂੰਹੈ ਜਾਣਹਿ ਤਿਨਾ ਭਿ ਤੇਰੀ ਸਾਰ ॥
    ਨਾਨਕ ਭਗਤਾ ਭੁਖ ਸਾਲਾਹਣੁ ਸਚੁ ਨਾਮੁ ਆਧਾਰੁ ॥
    ਸਦਾ ਅਨੰਦਿ ਰਹਹਿ ਦਿਨੁ ਰਾਤੀ ਗੁਣਵੰਤਿਆ ਪਾ ਛਾਰੁ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਮਿਟੀ ਮੁਸਲਮਾਨ ਕੀ ਪੇੜੈ ਪਈ ਕੁਮ੍ਹ੍ਹਿਆਰ ॥
    ਘੜਿ ਭਾਂਡੇ ਇਟਾ ਕੀਆ ਜਲਦੀ ਕਰੇ ਪੁਕਾਰ ॥
    ਜਲਿ ਜਲਿ ਰੋਵੈ ਬਪੁੜੀ ਝੜਿ ਝੜਿ ਪਵਹਿ ਅੰਗਿਆਰ ॥
    ਨਾਨਕ ਜਿਨਿ ਕਰਤੈ ਕਾਰਣੁ ਕੀਆ ਸੋ ਜਾਣੈ ਕਰਤਾਰੁ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਓ ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਆ ॥
    ਸਤਿਗੁਰ ਵਿਚਿ ਆਪੁ ਰਖਿਓਨੁ ਕਰਿ ਪਰਗਟੁ ਆਖਿ ਸੁਣਾਇਆ ॥
    ਸਤਿਗੁਰ ਮਿਲਿਐ ਸਦਾ ਮੁਕਤੁ ਹੈ ਜਿਨਿ ਵਿਚਹੁ ਮੋਹੁ ਚੁਕਾਇਆ ॥
    ਉਤਮੁ ਏਹੁ ਬੀਚਾਰੁ ਹੈ ਜਿਨਿ ਸਚੇ ਸਿਉ ਚਿਤੁ ਲਾਇਆ ॥
    ਜਗਜੀਵਨੁ ਦਾਤਾ ਪਾਇਆ ॥੬॥
    
    ਸਲੋਕ ਮਃ ੧ ॥
    
    ਹਉ ਵਿਚਿ ਆਇਆ ਹਉ ਵਿਚਿ ਗਇਆ ॥
    ਹਉ ਵਿਚਿ ਜੰਮਿਆ ਹਉ ਵਿਚਿ ਮੁਆ ॥
    ਹਉ ਵਿਚਿ ਦਿਤਾ ਹਉ ਵਿਚਿ ਲਇਆ ॥
    ਹਉ ਵਿਚਿ ਖਟਿਆ ਹਉ ਵਿਚਿ ਗਇਆ ॥
    ਹਉ ਵਿਚਿ ਸਚਿਆਰੁ ਕੂੜਿਆਰੁ ॥
    ਹਉ ਵਿਚਿ ਪਾਪ ਪੁੰਨ ਵੀਚਾਰੁ ॥
    
    ਹਉ ਵਿਚਿ ਨਰਕਿ ਸੁਰਗਿ ਅਵਤਾਰੁ ॥
    ਹਉ ਵਿਚਿ ਹਸੈ ਹਉ ਵਿਚਿ ਰੋਵੈ ॥
    ਹਉ ਵਿਚਿ ਭਰੀਐ ਹਉ ਵਿਚਿ ਧੋਵੈ ॥
    ਹਉ ਵਿਚਿ ਜਾਤੀ ਜਿਨਸੀ ਖੋਵੈ ॥
    ਹਉ ਵਿਚਿ ਮੂਰਖੁ ਹਉ ਵਿਚਿ ਸਿਆਣਾ ॥
    ਮੋਖ ਮੁਕਤਿ ਕੀ ਸਾਰ ਨ ਜਾਣਾ ॥
    
    ਹਉ ਵਿਚਿ ਮਾਇਆ ਹਉ ਵਿਚਿ ਛਾਇਆ ॥
    ਹਉਮੈ ਕਰਿ ਕਰਿ ਜੰਤ ਉਪਾਇਆ ॥
    ਹਉਮੈ ਬੂਝੈ ਤਾ ਦਰੁ ਸੂਝੈ ॥
    ਗਿਆਨ ਵਿਹੂਣਾ ਕਥਿ ਕਥਿ ਲੂਝੈ ॥
    ਨਾਨਕ ਹੁਕਮੀ ਲਿਖੀਐ ਲੇਖੁ ॥
    ਜੇਹਾ ਵੇਖਹਿ ਤੇਹਾ ਵੇਖੁ ॥੧॥
    
    ਮਹਲਾ ੨ ॥
    
    ਹਉਮੈ ਏਹਾ ਜਾਤਿ ਹੈ ਹਉਮੈ ਕਰਮ ਕਮਾਹਿ ॥
    ਹਉਮੈ ਏਈ ਬੰਧਨਾ ਫਿਰਿ ਫਿਰਿ ਜੋਨੀ ਪਾਹਿ ॥
    ਹਉਮੈ ਕਿਥਹੁ ਊਪਜੈ ਕਿਤੁ ਸੰਜਮਿ ਇਹ ਜਾਇ ॥
    
    ਹਉਮੈ ਏਹੋ ਹੁਕਮੁ ਹੈ ਪਇਐ ਕਿਰਤਿ ਫਿਰਾਹਿ ॥
    ਹਉਮੈ ਦੀਰਘ ਰੋਗੁ ਹੈ ਦਾਰੂ ਭੀ ਇਸੁ ਮਾਹਿ ॥
    ਕਿਰਪਾ ਕਰੇ ਜੇ ਆਪਣੀ ਤਾ ਗੁਰ ਕਾ ਸਬਦੁ ਕਮਾਹਿ ॥
    ਨਾਨਕੁ ਕਹੈ ਸੁਣਹੁ ਜਨਹੁ ਇਤੁ ਸੰਜਮਿ ਦੁਖ ਜਾਹਿ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਸੇਵ ਕੀਤੀ ਸੰਤੋਖੀਈਬ਼ ਜਿਨ੍ਹ੍ਹੀ ਸਚੋ ਸਚੁ ਧਿਆਇਆ ॥
    ਓਨ੍ਹ੍ਹੀ ਮੰਦੈ ਪੈਰੁ ਨ ਰਖਿਓ ਕਰਿ ਸੁਕ੍ਰਿਤੁ ਧਰਮੁ ਕਮਾਇਆ ॥
    ਓਨ੍ਹ੍ਹੀ ਦੁਨੀਆ ਤੋੜੇ ਬੰਧਨਾ ਅੰਨੁ ਪਾਣੀ ਥੋੜਾ ਖਾਇਆ ॥
    ਤੂੰ ਬਖਸੀਸੀ ਅਗਲਾ ਨਿਤ ਦੇਵਹਿ ਚੜਹਿ ਸਵਾਇਆ ॥
    ਵਡਿਆਈ ਵਡਾ ਪਾਇਆ ॥੭॥
    
    ਸਲੋਕ ਮਃ ੧ ॥
    
    ਪੁਰਖਾਂ ਬਿਰਖਾਂ ਤੀਰਥਾਂ ਤਟਾਂ ਮੇਘਾਂ ਖੇਤਾਂਹ ॥
    ਦੀਪਾਂ ਲੋਆਂ ਮੰਡਲਾਂ ਖੰਡਾਂ ਵਰਭੰਡਾਂਹ ॥
    ਅੰਡਜ ਜੇਰਜ ਉਤਭੁਜਾਂ ਖਾਣੀ ਸੇਤਜਾਂਹ ॥
    
    ਸੋ ਮਿਤਿ ਜਾਣੈ ਨਾਨਕਾ ਸਰਾਂ ਮੇਰਾਂ ਜੰਤਾਹ ॥
    ਨਾਨਕ ਜੰਤ ਉਪਾਇ ਕੈ ਸੰਮਾਲੇ ਸਭਨਾਹ ॥
    ਜਿਨਿ ਕਰਤੈ ਕਰਣਾ ਕੀਆ ਚਿੰਤਾ ਭਿ ਕਰਣੀ ਤਾਹ ॥
    
    ਸੋ ਕਰਤਾ ਚਿੰਤਾ ਕਰੇ ਜਿਨਿ ਉਪਾਇਆ ਜਗੁ ॥
    ਤਿਸੁ ਜੋਹਾਰੀ ਸੁਅਸਤਿ ਤਿਸੁ ਤਿਸੁ ਦੀਬਾਣੁ ਅਭਗੁ ॥
    ਨਾਨਕ ਸਚੇ ਨਾਮ ਬਿਨੁ ਕਿਆ ਟਿਕਾ ਕਿਆ ਤਗੁ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਲਖ ਨੇਕੀਆ ਚੰਗਿਆਈਆ ਲਖ ਪੁੰਨਾ ਪਰਵਾਣੁ ॥
    ਲਖ ਤਪ ਉਪਰਿ ਤੀਰਥਾਂ ਸਹਜ ਜੋਗ ਬੇਬਾਣ ॥
    ਲਖ ਸੂਰਤਣ ਸੰਗਰਾਮ ਰਣ ਮਹਿ ਛੁਟਹਿ ਪਰਾਣ ॥
    
    ਲਖ ਸੁਰਤੀ ਲਖ ਗਿਆਨ ਧਿਆਨ ਪੜੀਅਹਿ ਪਾਠ ਪੁਰਾਣ ॥
    ਜਿਨਿ ਕਰਤੈ ਕਰਣਾ ਕੀਆ ਲਿਖਿਆ ਆਵਣ ਜਾਣੁ ॥
    ਨਾਨਕ ਮਤੀ ਮਿਥਿਆ ਕਰਮੁ ਸਚਾ ਨੀਸਾਣੁ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਸਚਾ ਸਾਹਿਬੁ ਏਕੁ ਤੂੰ ਜਿਨਿ ਸਚੋ ਸਚੁ ਵਰਤਾਇਆ ॥
    ਜਿਸੁ ਤੂੰ ਦੇਹਿ ਤਿਸੁ ਮਿਲੈ ਸਚੁ ਤਾ ਤਿਨ੍ਹ੍ਹੀ ਸਚੁ ਕਮਾਇਆ ॥
    ਸਤਿਗੁਰਿ ਮਿਲਿਐ ਸਚੁ ਪਾਇਆ ਜਿਨ੍ਹ੍ਹ ਕੈ ਹਿਰਦੈ ਸਚੁ ਵਸਾਇਆ ॥
    ਮੂਰਖ ਸਚੁ ਨ ਜਾਣਨ੍ਹ੍ਹੀ ਮਨਮੁਖੀ ਜਨਮੁ ਗਵਾਇਆ ॥
    ਵਿਚਿ ਦੁਨੀਆ ਕਾਹੇ ਆਇਆ ॥੮॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਪੜਿ ਪੜਿ ਗਡੀ ਲਦੀਅਹਿ ਪੜਿ ਪੜਿ ਭਰੀਅਹਿ ਸਾਥ ॥
    ਪੜਿ ਪੜਿ ਬੇੜੀ ਪਾਈਐ ਪੜਿ ਪੜਿ ਗਡੀਅਹਿ ਖਾਤ ॥
    ਪੜੀਅਹਿ ਜੇਤੇ ਬਰਸ ਬਰਸ ਪੜੀਅਹਿ ਜੇਤੇ ਮਾਸ ॥
    ਪੜੀਐ ਜੇਤੀ ਆਰਜਾ ਪੜੀਅਹਿ ਜੇਤੇ ਸਾਸ ॥
    ਨਾਨਕ ਲੇਖੈ ਇਕ ਗਲ ਹੋਰੁ ਹਉਮੈ ਝਖਣਾ ਝਾਖ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਲਿਖਿ ਲਿਖਿ ਪੜਿਆ ॥
    ਤੇਤਾ ਕੜਿਆ ॥
    ਬਹੁ ਤੀਰਥ ਭਵਿਆ ॥
    ਤੇਤੋ ਲਵਿਆ ॥
    ਬਹੁ ਭੇਖ ਕੀਆ ਦੇਹੀ ਦੁਖੁ ਦੀਆ ॥
    ਸਹੁ ਵੇ ਜੀਆ ਅਪਣਾ ਕੀਆ ॥
    
    ਅੰਨੁ ਨ ਖਾਇਆ ਸਾਦੁ ਗਵਾਇਆ ॥
    ਬਹੁ ਦੁਖੁ ਪਾਇਆ ਦੂਜਾ ਭਾਇਆ ॥
    ਬਸਤ੍ਰ ਨ ਪਹਿਰੈ ॥
    ਅਹਿਨਿਸਿ ਕਹਰੈ ॥
    ਮੋਨਿ ਵਿਗੂਤਾ ॥
    
    ਕਿਉ ਜਾਗੈ ਗੁਰ ਬਿਨੁ ਸੂਤਾ ॥
    ਪਗ ਉਪੇਤਾਣਾ ॥
    ਅਪਣਾ ਕੀਆ ਕਮਾਣਾ ॥
    ਅਲੁ ਮਲੁ ਖਾਈ ਸਿਰਿ ਛਾਈ ਪਾਈ ॥
    ਮੂਰਖਿ ਅੰਧੈ ਪਤਿ ਗਵਾਈ ॥
    ਵਿਣੁ ਨਾਵੈ ਕਿਛੁ ਥਾਇ ਨ ਪਾਈ ॥
    
    ਰਹੈ ਬੇਬਾਣੀ ਮੜੀ ਮਸਾਣੀ ॥
    ਅੰਧੁ ਨ ਜਾਣੈ ਫਿਰਿ ਪਛੁਤਾਣੀ ॥
    ਸਤਿਗੁਰੁ ਭੇਟੇ ਸੋ ਸੁਖੁ ਪਾਏ ॥
    ਹਰਿ ਕਾ ਨਾਮੁ ਮੰਨਿ ਵਸਾਏ ॥
    ਨਾਨਕ ਨਦਰਿ ਕਰੇ ਸੋ ਪਾਏ ॥
    ਆਸ ਅੰਦੇਸੇ ਤੇ ਨਿਹਕੇਵਲੁ ਹਉਮੈ ਸਬਦਿ ਜਲਾਏ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਭਗਤ ਤੇਰੈ ਮਨਿ ਭਾਵਦੇ ਦਰਿ ਸੋਹਨਿ ਕੀਰਤਿ ਗਾਵਦੇ ॥
    ਨਾਨਕ ਕਰਮਾ ਬਾਹਰੇ ਦਰਿ ਢੋਅ ਨ ਲਹਨ੍ਹ੍ਹੀ ਧਾਵਦੇ ॥
    ਇਕਿ ਮੂਲੁ ਨ ਬੁਝਨ੍ਹ੍ਹਿ ਆਪਣਾ ਅਣਹੋਦਾ ਆਪੁ ਗਣਾਇਦੇ ॥
    ਹਉ ਢਾਢੀ ਕਾ ਨੀਚ ਜਾਤਿ ਹੋਰਿ ਉਤਮ ਜਾਤਿ ਸਦਾਇਦੇ ॥
    ਤਿਨ੍ਹ੍ਹ ਮੰਗਾ ਜਿ ਤੁਝੈ ਧਿਆਇਦੇ ॥੯॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਕੂੜੁ ਰਾਜਾ ਕੂੜੁ ਪਰਜਾ ਕੂੜੁ ਸਭੁ ਸੰਸਾਰੁ ॥
    ਕੂੜੁ ਮੰਡਪ ਕੂੜੁ ਮਾੜੀ ਕੂੜੁ ਬੈਸਣਹਾਰੁ ॥
    ਕੂੜੁ ਸੁਇਨਾ ਕੂੜੁ ਰੁਪਾ ਕੂੜੁ ਪੈਨ੍ਹ੍ਹਣਹਾਰੁ ॥
    
    ਕੂੜੁ ਕਾਇਆ ਕੂੜੁ ਕਪੜੁ ਕੂੜੁ ਰੂਪੁ ਅਪਾਰੁ ॥
    ਕੂੜੁ ਮੀਆ ਕੂੜੁ ਬੀਬੀ ਖਪਿ ਹੋਏ ਖਾਰੁ ॥
    ਕੂੜਿ ਕੂੜੈ ਨੇਹੁ ਲਗਾ ਵਿਸਰਿਆ ਕਰਤਾਰੁ ॥
    
    ਕਿਸੁ ਨਾਲਿ ਕੀਚੈ ਦੋਸਤੀ ਸਭੁ ਜਗੁ ਚਲਣਹਾਰੁ ॥
    ਕੂੜੁ ਮਿਠਾ ਕੂੜੁ ਮਾਖਿਉ ਕੂੜੁ ਡੋਬੇ ਪੂਰੁ ॥
    ਨਾਨਕੁ ਵਖਾਣੈ ਬੇਨਤੀ ਤੁਧੁ ਬਾਝੁ ਕੂੜੋ ਕੂੜੁ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਸਚੁ ਤਾ ਪਰੁ ਜਾਣੀਐ ਜਾ ਰਿਦੈ ਸਚਾ ਹੋਇ ॥
    ਕੂੜ ਕੀ ਮਲੁ ਉਤਰੈ ਤਨੁ ਕਰੇ ਹਛਾ ਧੋਇ ॥
    ਸਚੁ ਤਾ ਪਰੁ ਜਾਣੀਐ ਜਾ ਸਚਿ ਧਰੇ ਪਿਆਰੁ ॥
    ਨਾਉ ਸੁਣਿ ਮਨੁ ਰਹਸੀਐ ਤਾ ਪਾਏ ਮੋਖ ਦੁਆਰੁ ॥
    
    ਸਚੁ ਤਾ ਪਰੁ ਜਾਣੀਐ ਜਾ ਜੁਗਤਿ ਜਾਣੈ ਜੀਉ ॥
    ਧਰਤਿ ਕਾਇਆ ਸਾਧਿ ਕੈ ਵਿਚਿ ਦੇਇ ਕਰਤਾ ਬੀਉ ॥
    ਸਚੁ ਤਾ ਪਰੁ ਜਾਣੀਐ ਜਾ ਸਿਖ ਸਚੀ ਲੇਇ ॥
    ਦਇਆ ਜਾਣੈ ਜੀਅ ਕੀ ਕਿਛੁ ਪੁੰਨੁ ਦਾਨੁ ਕਰੇਇ ॥
    
    ਸਚੁ ਤਾਂ ਪਰੁ ਜਾਣੀਐ ਜਾ ਆਤਮ ਤੀਰਥਿ ਕਰੇ ਨਿਵਾਸੁ ॥
    ਸਤਿਗੁਰੂ ਨੋ ਪੁਛਿ ਕੈ ਬਹਿ ਰਹੈ ਕਰੇ ਨਿਵਾਸੁ ॥
    ਸਚੁ ਸਭਨਾ ਹੋਇ ਦਾਰੂ ਪਾਪ ਕਢੈ ਧੋਇ ॥
    ਨਾਨਕੁ ਵਖਾਣੈ ਬੇਨਤੀ ਜਿਨ ਸਚੁ ਪਲੈ ਹੋਇ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਦਾਨੁ ਮਹਿੰਡਾ ਤਲੀ ਖਾਕੁ ਜੇ ਮਿਲੈ ਤ ਮਸਤਕਿ ਲਾਈਐ ॥
    ਕੂੜਾ ਲਾਲਚੁ ਛਡੀਐ ਹੋਇ ਇਕ ਮਨਿ ਅਲਖੁ ਧਿਆਈਐ ॥
    ਫਲੁ ਤੇਵੇਹੋ ਪਾਈਐ ਜੇਵੇਹੀ ਕਾਰ ਕਮਾਈਐ ॥
    ਜੇ ਹੋਵੈ ਪੂਰਬਿ ਲਿਖਿਆ ਤਾ ਧੂੜਿ ਤਿਨ੍ਹ੍ਹਾ ਦੀ ਪਾਈਐ ॥
    ਮਤਿ ਥੋੜੀ ਸੇਵ ਗਵਾਈਐ ॥੧੦॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਸਚਿ ਕਾਲੁ ਕੂੜੁ ਵਰਤਿਆ ਕਲਿ ਕਾਲਖ ਬੇਤਾਲ ॥
    ਬੀਉ ਬੀਜਿ ਪਤਿ ਲੈ ਗਏ ਅਬ ਕਿਉ ਉਗਵੈ ਦਾਲਿ ॥
    ਜੇ ਇਕੁ ਹੋਇ ਤ ਉਗਵੈ ਰੁਤੀ ਹੂ ਰੁਤਿ ਹੋਇ ॥
    
    ਨਾਨਕ ਪਾਹੈ ਬਾਹਰਾ ਕੋਰੈ ਰੰਗੁ ਨ ਸੋਇ ॥
    ਭੈ ਵਿਚਿ ਖੁੰਬਿ ਚੜਾਈਐ ਸਰਮੁ ਪਾਹੁ ਤਨਿ ਹੋਇ ॥
    ਨਾਨਕ ਭਗਤੀ ਜੇ ਰਪੈ ਕੂੜੈ ਸੋਇ ਨ ਕੋਇ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਲਬੁ ਪਾਪੁ ਦੁਇ ਰਾਜਾ ਮਹਤਾ ਕੂੜੁ ਹੋਆ ਸਿਕਦਾਰੁ ॥
    ਕਾਮੁ ਨੇਬੁ ਸਦਿ ਪੁਛੀਐ ਬਹਿ ਬਹਿ ਕਰੇ ਬੀਚਾਰੁ ॥
    ਅੰਧੀ ਰਯਤਿ ਗਿਆਨ ਵਿਹੂਣੀ ਭਾਹਿ ਭਰੇ ਮੁਰਦਾਰੁ ॥
    ਗਿਆਨੀ ਨਚਹਿ ਵਾਜੇ ਵਾਵਹਿ ਰੂਪ ਕਰਹਿ ਸੀਗਾਰੁ ॥
    ਊਚੇ ਕੂਕਹਿ ਵਾਦਾ ਗਾਵਹਿ ਜੋਧਾ ਕਾ ਵੀਚਾਰੁ ॥
    
    ਮੂਰਖ ਪੰਡਿਤ ਹਿਕਮਤਿ ਹੁਜਤਿ ਸੰਜੈ ਕਰਹਿ ਪਿਆਰੁ ॥
    ਧਰਮੀ ਧਰਮੁ ਕਰਹਿ ਗਾਵਾਵਹਿ ਮੰਗਹਿ ਮੋਖ ਦੁਆਰੁ ॥
    ਜਤੀ ਸਦਾਵਹਿ ਜੁਗਤਿ ਨ ਜਾਣਹਿ ਛਡਿ ਬਹਹਿ ਘਰ ਬਾਰੁ ॥
    ਸਭੁ ਕੋ ਪੂਰਾ ਆਪੇ ਹੋਵੈ ਘਟਿ ਨ ਕੋਈ ਆਖੈ ॥
    ਪਤਿ ਪਰਵਾਣਾ ਪਿਛੈ ਪਾਈਐ ਤਾ ਨਾਨਕ ਤੋਲਿਆ ਜਾਪੈ ॥੨॥
    
    ਮਃ ੧ ॥
    
    ਵਦੀ ਸੁ ਵਜਗਿ ਨਾਨਕਾ ਸਚਾ ਵੇਖੈ ਸੋਇ ॥
    ਸਭਨੀ ਛਾਲਾ ਮਾਰੀਆ ਕਰਤਾ ਕਰੇ ਸੁ ਹੋਇ ॥
    ਅਗੈ ਜਾਤਿ ਨ ਜੋਰੁ ਹੈ ਅਗੈ ਜੀਉ ਨਵੇ ॥
    ਜਿਨ ਕੀ ਲੇਖੈ ਪਤਿ ਪਵੈ ਚੰਗੇ ਸੇਈ ਕੇਇ ॥੩॥
    
    ਪਉੜੀ ॥
    
    ਧੁਰਿ ਕਰਮੁ ਜਿਨਾ ਕਉ ਤੁਧੁ ਪਾਇਆ ਤਾ ਤਿਨੀ ਖਸਮੁ ਧਿਆਇਆ ॥
    ਏਨਾ ਜੰਤਾ ਕੈ ਵਸਿ ਕਿਛੁ ਨਾਹੀ ਤੁਧੁ ਵੇਕੀ ਜਗਤੁ ਉਪਾਇਆ ॥
    ਇਕਨਾ ਨੋ ਤੂੰ ਮੇਲਿ ਲੈਹਿ ਇਕਿ ਆਪਹੁ ਤੁਧੁ ਖੁਆਇਆ ॥
    ਗੁਰ ਕਿਰਪਾ ਤੇ ਜਾਣਿਆ ਜਿਥੈ ਤੁਧੁ ਆਪੁ ਬੁਝਾਇਆ ॥
    ਸਹਜੇ ਹੀ ਸਚਿ ਸਮਾਇਆ ॥੧੧॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਦੁਖੁ ਦਾਰੂ ਸੁਖੁ ਰੋਗੁ ਭਇਆ ਜਾ ਸੁਖੁ ਤਾਮਿ ਨ ਹੋਈ ॥
    ਤੂੰ ਕਰਤਾ ਕਰਣਾ ਮੈ ਨਾਹੀ ਜਾ ਹਉ ਕਰੀ ਨ ਹੋਈ ॥੧॥
    ਬਲਿਹਾਰੀ ਕੁਦਰਤਿ ਵਸਿਆ ॥
    ਤੇਰਾ ਅੰਤੁ ਨ ਜਾਈ ਲਖਿਆ ॥੧॥ ਰਹਾਉ ॥
    
    ਜਾਤਿ ਮਹਿ ਜੋਤਿ ਜੋਤਿ ਮਹਿ ਜਾਤਾ ਅਕਲ ਕਲਾ ਭਰਪੂਰਿ ਰਹਿਆ ॥
    ਤੂੰ ਸਚਾ ਸਾਹਿਬੁ ਸਿਫਤਿ ਸੁਆਲ੍ਹ੍ਹਿਉ ਜਿਨਿ ਕੀਤੀ ਸੋ ਪਾਰਿ ਪਇਆ ॥
    ਕਹੁ ਨਾਨਕ ਕਰਤੇ ਕੀਆ ਬਾਤਾ ਜੋ ਕਿਛੁ ਕਰਣਾ ਸੁ ਕਰਿ ਰਹਿਆ ॥੨॥
    
    ਮਃ ੨ ॥
    
    ਜੋਗ ਸਬਦੰ ਗਿਆਨ ਸਬਦੰ ਬੇਦ ਸਬਦੰ ਬ੍ਰਾਹਮਣਹ ॥
    ਖਤ੍ਰੀ ਸਬਦੰ ਸੂਰ ਸਬਦੰ ਸੂਦ੍ਰ ਸਬਦੰ ਪਰਾ ਕ੍ਰਿਤਹ ॥
    ਸਰਬ ਸਬਦੰ ਏਕ ਸਬਦੰ ਜੇ ਕੋ ਜਾਣੈ ਭੇਉ ॥
    ਨਾਨਕੁ ਤਾ ਕਾ ਦਾਸੁ ਹੈ ਸੋਈ ਨਿਰੰਜਨ ਦੇਉ ॥੩॥
    
    ਮਃ ੨ ॥
    
    ਏਕ ਕ੍ਰਿਸਨੰ ਸਰਬ ਦੇਵਾ ਦੇਵ ਦੇਵਾ ਤ ਆਤਮਾ ॥
    ਆਤਮਾ ਬਾਸੁਦੇਵਸ੍ਯ੍ਯਿ ਜੇ ਕੋ ਜਾਣੈ ਭੇਉ ॥
    ਨਾਨਕੁ ਤਾ ਕਾ ਦਾਸੁ ਹੈ ਸੋਈ ਨਿਰੰਜਨ ਦੇਉ ॥੪॥
    
    ਮਃ ੧ ॥
    
    ਕੁੰਭੇ ਬਧਾ ਜਲੁ ਰਹੈ ਜਲ ਬਿਨੁ ਕੁੰਭੁ ਨ ਹੋਇ ॥
    ਗਿਆਨ ਕਾ ਬਧਾ ਮਨੁ ਰਹੈ ਗੁਰ ਬਿਨੁ ਗਿਆਨੁ ਨ ਹੋਇ ॥੫॥
    
    ਪਉੜੀ ॥
    
    ਪੜਿਆ ਹੋਵੈ ਗੁਨਹਗਾਰੁ ਤਾ ਓਮੀ ਸਾਧੁ ਨ ਮਾਰੀਐ ॥
    ਜੇਹਾ ਘਾਲੇ ਘਾਲਣਾ ਤੇਵੇਹੋ ਨਾਉ ਪਚਾਰੀਐ ॥
    ਐਸੀ ਕਲਾ ਨ ਖੇਡੀਐ ਜਿਤੁ ਦਰਗਹ ਗਇਆ ਹਾਰੀਐ ॥
    ਪੜਿਆ ਅਤੈ ਓਮੀਆ ਵੀਚਾਰੁ ਅਗੈ ਵੀਚਾਰੀਐ ॥
    ਮੁਹਿ ਚਲੈ ਸੁ ਅਗੈ ਮਾਰੀਐ ॥੧੨॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਨਾਨਕ ਮੇਰੁ ਸਰੀਰ ਕਾ ਇਕੁ ਰਥੁ ਇਕੁ ਰਥਵਾਹੁ ॥
    ਜੁਗੁ ਜੁਗੁ ਫੇਰਿ ਵਟਾਈਅਹਿ ਗਿਆਨੀ ਬੁਝਹਿ ਤਾਹਿ ॥
    ਸਤਜੁਗਿ ਰਥੁ ਸੰਤੋਖ ਕਾ ਧਰਮੁ ਅਗੈ ਰਥਵਾਹੁ ॥
    
    ਤ੍ਰੇਤੈ ਰਥੁ ਜਤੈ ਕਾ ਜੋਰੁ ਅਗੈ ਰਥਵਾਹੁ ॥
    ਦੁਆਪੁਰਿ ਰਥੁ ਤਪੈ ਕਾ ਸਤੁ ਅਗੈ ਰਥਵਾਹੁ ॥
    ਕਲਜੁਗਿ ਰਥੁ ਅਗਨਿ ਕਾ ਕੂੜੁ ਅਗੈ ਰਥਵਾਹੁ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਸਾਮ ਕਹੈ ਸੇਤੰਬਰੁ ਸੁਆਮੀ ਸਚ ਮਹਿ ਆਛੈ ਸਾਚਿ ਰਹੇ ॥
    ਸਭੁ ਕੋ ਸਚਿ ਸਮਾਵੈ ॥
    ਰਿਗੁ ਕਹੈ ਰਹਿਆ ਭਰਪੂਰਿ ॥
    ਰਾਮ ਨਾਮੁ ਦੇਵਾ ਮਹਿ ਸੂਰੁ ॥
    ਨਾਇ ਲਇਐ ਪਰਾਛਤ ਜਾਹਿ ॥
    ਨਾਨਕ ਤਉ ਮੋਖੰਤਰੁ ਪਾਹਿ ॥
    
    ਜੁਜ ਮਹਿ ਜੋਰਿ ਛਲੀ ਚੰਦ੍ਰਾਵਲਿ ਕਾਨ੍ਹ੍ਹ ਕ੍ਰਿਸਨੁ ਜਾਦਮੁ ਭਇਆ ॥
    ਪਾਰਜਾਤੁ ਗੋਪੀ ਲੈ ਆਇਆ ਬਿੰਦ੍ਰਾਬਨ ਮਹਿ ਰੰਗੁ ਕੀਆ ॥
    ਕਲਿ ਮਹਿ ਬੇਦੁ ਅਥਰਬਣੁ ਹੂਆ ਨਾਉ ਖੁਦਾਈ ਅਲਹੁ ਭਇਆ ॥
    ਨੀਲ ਬਸਤ੍ਰ ਲੇ ਕਪੜੇ ਪਹਿਰੇ ਤੁਰਕ ਪਠਾਣੀ ਅਮਲੁ ਕੀਆ ॥
    
    ਚਾਰੇ ਵੇਦ ਹੋਏ ਸਚਿਆਰ ॥
    ਪੜਹਿ ਗੁਣਹਿ ਤਿਨ੍ਹ੍ਹ ਚਾਰ ਵੀਚਾਰ ॥
    ਭਾਉ ਭਗਤਿ ਕਰਿ ਨੀਚੁ ਸਦਾਏ ॥
    ਤਉ ਨਾਨਕ ਮੋਖੰਤਰੁ ਪਾਏ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਸਤਿਗੁਰ ਵਿਟਹੁ ਵਾਰਿਆ ਜਿਤੁ ਮਿਲਿਐ ਖਸਮੁ ਸਮਾਲਿਆ ॥
    ਜਿਨਿ ਕਰਿ ਉਪਦੇਸੁ ਗਿਆਨ ਅੰਜਨੁ ਦੀਆ ਇਨ੍ਹ੍ਹੀ ਨੇਤ੍ਰੀ ਜਗਤੁ ਨਿਹਾਲਿਆ ॥
    ਖਸਮੁ ਛੋਡਿ ਦੂਜੈ ਲਗੇ ਡੁਬੇ ਸੇ ਵਣਜਾਰਿਆ ॥
    ਸਤਿਗੁਰੂ ਹੈ ਬੋਹਿਥਾ ਵਿਰਲੈ ਕਿਨੈ ਵੀਚਾਰਿਆ ॥
    ਕਰਿ ਕਿਰਪਾ ਪਾਰਿ ਉਤਾਰਿਆ ॥੧੩॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਸਿੰਮਲ ਰੁਖੁ ਸਰਾਇਰਾ ਅਤਿ ਦੀਰਘ ਅਤਿ ਮੁਚੁ ॥
    ਓਇ ਜਿ ਆਵਹਿ ਆਸ ਕਰਿ ਜਾਹਿ ਨਿਰਾਸੇ ਕਿਤੁ ॥
    ਫਲ ਫਿਕੇ ਫੁਲ ਬਕਬਕੇ ਕੰਮਿ ਨ ਆਵਹਿ ਪਤ ॥
    ਮਿਠਤੁ ਨੀਵੀ ਨਾਨਕਾ ਗੁਣ ਚੰਗਿਆਈਆ ਤਤੁ ॥
    
    ਸਭੁ ਕੋ ਨਿਵੈ ਆਪ ਕਉ ਪਰ ਕਉ ਨਿਵੈ ਨ ਕੋਇ ॥
    ਧਰਿ ਤਾਰਾਜੂ ਤੋਲੀਐ ਨਿਵੈ ਸੁ ਗਉਰਾ ਹੋਇ ॥
    ਅਪਰਾਧੀ ਦੂਣਾ ਨਿਵੈ ਜੋ ਹੰਤਾ ਮਿਰਗਾਹਿ ॥
    ਸੀਸਿ ਨਿਵਾਇਐ ਕਿਆ ਥੀਐ ਜਾ ਰਿਦੈ ਕੁਸੁਧੇ ਜਾਹਿ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਪੜਿ ਪੁਸਤਕ ਸੰਧਿਆ ਬਾਦੰ ॥
    ਸਿਲ ਪੂਜਸਿ ਬਗੁਲ ਸਮਾਧੰ ॥
    ਮੁਖਿ ਝੂਠ ਬਿਭੂਖਣ ਸਾਰੰ ॥
    ਤ੍ਰੈਪਾਲ ਤਿਹਾਲ ਬਿਚਾਰੰ ॥
    ਗਲਿ ਮਾਲਾ ਤਿਲਕੁ ਲਿਲਾਟੰ ॥
    
    ਦੁਇ ਧੋਤੀ ਬਸਤ੍ਰ ਕਪਾਟੰ ॥
    ਜੇ ਜਾਣਸਿ ਬ੍ਰਹਮੰ ਕਰਮੰ ॥
    ਸਭਿ ਫੋਕਟ ਨਿਸਚਉ ਕਰਮੰ ॥
    ਕਹੁ ਨਾਨਕ ਨਿਹਚਉ ਧਿਆਵੈ ॥
    ਵਿਣੁ ਸਤਿਗੁਰ ਵਾਟ ਨ ਪਾਵੈ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਕਪੜੁ ਰੂਪੁ ਸੁਹਾਵਣਾ ਛਡਿ ਦੁਨੀਆ ਅੰਦਰਿ ਜਾਵਣਾ ॥
    ਮੰਦਾ ਚੰਗਾ ਆਪਣਾ ਆਪੇ ਹੀ ਕੀਤਾ ਪਾਵਣਾ ॥
    ਹੁਕਮ ਕੀਏ ਮਨਿ ਭਾਵਦੇ ਰਾਹਿ ਭੀੜੈ ਅਗੈ ਜਾਵਣਾ ॥
    ਨੰਗਾ ਦੋਜਕਿ ਚਾਲਿਆ ਤਾ ਦਿਸੈ ਖਰਾ ਡਰਾਵਣਾ ॥
    ਕਰਿ ਅਉਗਣ ਪਛੋਤਾਵਣਾ ॥੧੪॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਦਇਆ ਕਪਾਹ ਸੰਤੋਖੁ ਸੂਤੁ ਜਤੁ ਗੰਢੀ ਸਤੁ ਵਟੁ ॥
    ਏਹੁ ਜਨੇਊ ਜੀਅ ਕਾ ਹਈ ਤ ਪਾਡੇ ਘਤੁ ॥
    ਨਾ ਏਹੁ ਤੁਟੈ ਨ ਮਲੁ ਲਗੈ ਨਾ ਏਹੁ ਜਲੈ ਨ ਜਾਇ ॥
    ਧੰਨੁ ਸੁ ਮਾਣਸ ਨਾਨਕਾ ਜੋ ਗਲਿ ਚਲੇ ਪਾਇ ॥
    
    ਚਉਕੜਿ ਮੁਲਿ ਅਣਾਇਆ ਬਹਿ ਚਉਕੈ ਪਾਇਆ ॥
    ਸਿਖਾ ਕੰਨਿ ਚੜਾਈਆ ਗੁਰੁ ਬ੍ਰਾਹਮਣੁ ਥਿਆ ॥
    ਓਹੁ ਮੁਆ ਓਹੁ ਝੜਿ ਪਇਆ ਵੇਤਗਾ ਗਇਆ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਲਖ ਚੋਰੀਆ ਲਖ ਜਾਰੀਆ ਲਖ ਕੂੜੀਆ ਲਖ ਗਾਲਿ ॥
    ਲਖ ਠਗੀਆ ਪਹਿਨਾਮੀਆ ਰਾਤਿ ਦਿਨਸੁ ਜੀਅ ਨਾਲਿ ॥
    ਤਗੁ ਕਪਾਹਹੁ ਕਤੀਐ ਬਾਮ੍ਹ੍ਹਣੁ ਵਟੇ ਆਇ ॥
    
    ਕੁਹਿ ਬਕਰਾ ਰਿੰਨ੍ਹ੍ਹਿ ਖਾਇਆ ਸਭੁ ਕੋ ਆਖੈ ਪਾਇ ॥
    ਹੋਇ ਪੁਰਾਣਾ ਸੁਟੀਐ ਭੀ ਫਿਰਿ ਪਾਈਐ ਹੋਰੁ ॥
    ਨਾਨਕ ਤਗੁ ਨ ਤੁਟਈ ਜੇ ਤਗਿ ਹੋਵੈ ਜੋਰੁ ॥੨॥
    
    ਮਃ ੧ ॥
    
    ਨਾਇ ਮੰਨਿਐ ਪਤਿ ਊਪਜੈ ਸਾਲਾਹੀ ਸਚੁ ਸੂਤੁ ॥
    ਦਰਗਹ ਅੰਦਰਿ ਪਾਈਐ ਤਗੁ ਨ ਤੂਟਸਿ ਪੂਤ ॥੩॥
    
    ਮਃ ੧ ॥
    
    ਤਗੁ ਨ ਇੰਦ੍ਰੀ ਤਗੁ ਨ ਨਾਰੀ ॥
    ਭਲਕੇ ਥੁਕ ਪਵੈ ਨਿਤ ਦਾੜੀ ॥
    ਤਗੁ ਨ ਪੈਰੀ ਤਗੁ ਨ ਹਥੀ ॥
    ਤਗੁ ਨ ਜਿਹਵਾ ਤਗੁ ਨ ਅਖੀ ॥
    ਵੇਤਗਾ ਆਪੇ ਵਤੈ ॥
    
    ਵਟਿ ਧਾਗੇ ਅਵਰਾ ਘਤੈ ॥
    ਲੈ ਭਾੜਿ ਕਰੇ ਵੀਆਹੁ ॥
    ਕਢਿ ਕਾਗਲੁ ਦਸੇ ਰਾਹੁ ॥
    ਸੁਣਿ ਵੇਖਹੁ ਲੋਕਾ ਏਹੁ ਵਿਡਾਣੁ ॥
    ਮਨਿ ਅੰਧਾ ਨਾਉ ਸੁਜਾਣੁ ॥੪॥
    
    ਪਉੜੀ ॥
    
    ਸਾਹਿਬੁ ਹੋਇ ਦਇਆਲੁ ਕਿਰਪਾ ਕਰੇ ਤਾ ਸਾਈ ਕਾਰ ਕਰਾਇਸੀ ॥
    ਸੋ ਸੇਵਕੁ ਸੇਵਾ ਕਰੇ ਜਿਸ ਨੋ ਹੁਕਮੁ ਮਨਾਇਸੀ ॥
    ਹੁਕਮਿ ਮੰਨਿਐ ਹੋਵੈ ਪਰਵਾਣੁ ਤਾ ਖਸਮੈ ਕਾ ਮਹਲੁ ਪਾਇਸੀ ॥
    ਖਸਮੈ ਭਾਵੈ ਸੋ ਕਰੇ ਮਨਹੁ ਚਿੰਦਿਆ ਸੋ ਫਲੁ ਪਾਇਸੀ ॥
    ਤਾ ਦਰਗਹ ਪੈਧਾ ਜਾਇਸੀ ॥੧੫॥
    
    ਸਲੋਕ ਮਃ ੧ ॥
    
    ਗਊ ਬਿਰਾਹਮਣ ਕਉ ਕਰੁ ਲਾਵਹੁ ਗੋਬਰਿ ਤਰਣੁ ਨ ਜਾਈ ॥
    ਧੋਤੀ ਟਿਕਾ ਤੈ ਜਪਮਾਲੀ ਧਾਨੁ ਮਲੇਛਾਂ ਖਾਈ ॥
    ਅੰਤਰਿ ਪੂਜਾ ਪੜਹਿ ਕਤੇਬਾ ਸੰਜਮੁ ਤੁਰਕਾ ਭਾਈ ॥
    ਛੋਡੀਲੇ ਪਾਖੰਡਾ ॥
    ਨਾਮਿ ਲਇਐ ਜਾਹਿ ਤਰੰਦਾ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਮਾਣਸ ਖਾਣੇ ਕਰਹਿ ਨਿਵਾਜ ॥
    ਛੁਰੀ ਵਗਾਇਨਿ ਤਿਨ ਗਲਿ ਤਾਗ ॥
    ਤਿਨ ਘਰਿ ਬ੍ਰਹਮਣ ਪੂਰਹਿ ਨਾਦ ॥
    ਉਨ੍ਹ੍ਹਾ ਭਿ ਆਵਹਿ ਓਈ ਸਾਦ ॥
    
    ਕੂੜੀ ਰਾਸਿ ਕੂੜਾ ਵਾਪਾਰੁ ॥
    ਕੂੜੁ ਬੋਲਿ ਕਰਹਿ ਆਹਾਰੁ ॥
    ਸਰਮ ਧਰਮ ਕਾ ਡੇਰਾ ਦੂਰਿ ॥
    ਨਾਨਕ ਕੂੜੁ ਰਹਿਆ ਭਰਪੂਰਿ ॥
    ਮਥੈ ਟਿਕਾ ਤੇੜਿ ਧੋਤੀ ਕਖਾਈ ॥
    
    ਹਥਿ ਛੁਰੀ ਜਗਤ ਕਾਸਾਈ ॥
    ਨੀਲ ਵਸਤ੍ਰ ਪਹਿਰਿ ਹੋਵਹਿ ਪਰਵਾਣੁ ॥
    ਮਲੇਛ ਧਾਨੁ ਲੇ ਪੂਜਹਿ ਪੁਰਾਣੁ ॥
    ਅਭਾਖਿਆ ਕਾ ਕੁਠਾ ਬਕਰਾ ਖਾਣਾ ॥
    
    ਚਉਕੇ ਉਪਰਿ ਕਿਸੈ ਨ ਜਾਣਾ ॥
    ਦੇ ਕੈ ਚਉਕਾ ਕਢੀ ਕਾਰ ॥
    ਉਪਰਿ ਆਇ ਬੈਠੇ ਕੂੜਿਆਰ ॥
    ਮਤੁ ਭਿਟੈ ਵੇ ਮਤੁ ਭਿਟੈ ॥
    ਇਹੁ ਅੰਨੁ ਅਸਾਡਾ ਫਿਟੈ ॥
    
    ਤਨਿ ਫਿਟੈ ਫੇੜ ਕਰੇਨਿ ॥
    ਮਨਿ ਜੂਠੈ ਚੁਲੀ ਭਰੇਨਿ ॥
    ਕਹੁ ਨਾਨਕ ਸਚੁ ਧਿਆਈਐ ॥
    ਸੁਚਿ ਹੋਵੈ ਤਾ ਸਚੁ ਪਾਈਐ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਚਿਤੈ ਅੰਦਰਿ ਸਭੁ ਕੋ ਵੇਖਿ ਨਦਰੀ ਹੇਠਿ ਚਲਾਇਦਾ ॥
    ਆਪੇ ਦੇ ਵਡਿਆਈਆ ਆਪੇ ਹੀ ਕਰਮ ਕਰਾਇਦਾ ॥
    ਵਡਹੁ ਵਡਾ ਵਡ ਮੇਦਨੀ ਸਿਰੇ ਸਿਰਿ ਧੰਧੈ ਲਾਇਦਾ ॥
    ਨਦਰਿ ਉਪਠੀ ਜੇ ਕਰੇ ਸੁਲਤਾਨਾ ਘਾਹੁ ਕਰਾਇਦਾ ॥
    ਦਰਿ ਮੰਗਨਿ ਭਿਖ ਨ ਪਾਇਦਾ ॥੧੬॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਜੇ ਮੋਹਾਕਾ ਘਰੁ ਮੁਹੈ ਘਰੁ ਮੁਹਿ ਪਿਤਰੀ ਦੇਇ ॥
    ਅਗੈ ਵਸਤੁ ਸਿਞਾਣੀਐ ਪਿਤਰੀ ਚੋਰ ਕਰੇਇ ॥
    ਵਢੀਅਹਿ ਹਥ ਦਲਾਲ ਕੇ ਮੁਸਫੀ ਏਹ ਕਰੇਇ ॥
    ਨਾਨਕ ਅਗੈ ਸੋ ਮਿਲੈ ਜਿ ਖਟੇ ਘਾਲੇ ਦੇਇ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਜਿਉ ਜੋਰੂ ਸਿਰਨਾਵਣੀ ਆਵੈ ਵਾਰੋ ਵਾਰ ॥
    ਜੂਠੇ ਜੂਠਾ ਮੁਖਿ ਵਸੈ ਨਿਤ ਨਿਤ ਹੋਇ ਖੁਆਰੁ ॥
    ਸੂਚੇ ਏਹਿ ਨ ਆਖੀਅਹਿ ਬਹਨਿ ਜਿ ਪਿੰਡਾ ਧੋਇ ॥
    ਸੂਚੇ ਸੇਈ ਨਾਨਕਾ ਜਿਨ ਮਨਿ ਵਸਿਆ ਸੋਇ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਤੁਰੇ ਪਲਾਣੇ ਪਉਣ ਵੇਗ ਹਰ ਰੰਗੀ ਹਰਮ ਸਵਾਰਿਆ ॥
    ਕੋਠੇ ਮੰਡਪ ਮਾੜੀਆ ਲਾਇ ਬੈਠੇ ਕਰਿ ਪਾਸਾਰਿਆ ॥
    ਚੀਜ ਕਰਨਿ ਮਨਿ ਭਾਵਦੇ ਹਰਿ ਬੁਝਨਿ ਨਾਹੀ ਹਾਰਿਆ ॥
    ਕਰਿ ਫੁਰਮਾਇਸਿ ਖਾਇਆ ਵੇਖਿ ਮਹਲਤਿ ਮਰਣੁ ਵਿਸਾਰਿਆ ॥
    ਜਰੁ ਆਈ ਜੋਬਨਿ ਹਾਰਿਆ ॥੧੭॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਜੇ ਕਰਿ ਸੂਤਕੁ ਮੰਨੀਐ ਸਭ ਤੈ ਸੂਤਕੁ ਹੋਇ ॥
    ਗੋਹੇ ਅਤੈ ਲਕੜੀ ਅੰਦਰਿ ਕੀੜਾ ਹੋਇ ॥
    ਜੇਤੇ ਦਾਣੇ ਅੰਨ ਕੇ ਜੀਆ ਬਾਝੁ ਨ ਕੋਇ ॥
    
    ਪਹਿਲਾ ਪਾਣੀ ਜੀਉ ਹੈ ਜਿਤੁ ਹਰਿਆ ਸਭੁ ਕੋਇ ॥
    ਸੂਤਕੁ ਕਿਉ ਕਰਿ ਰਖੀਐ ਸੂਤਕੁ ਪਵੈ ਰਸੋਇ ॥
    ਨਾਨਕ ਸੂਤਕੁ ਏਵ ਨ ਉਤਰੈ ਗਿਆਨੁ ਉਤਾਰੇ ਧੋਇ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਮਨ ਕਾ ਸੂਤਕੁ ਲੋਭੁ ਹੈ ਜਿਹਵਾ ਸੂਤਕੁ ਕੂੜੁ ॥
    ਅਖੀ ਸੂਤਕੁ ਵੇਖਣਾ ਪਰ ਤ੍ਰਿਅ ਪਰ ਧਨ ਰੂਪੁ ॥
    ਕੰਨੀ ਸੂਤਕੁ ਕੰਨਿ ਪੈ ਲਾਇਤਬਾਰੀ ਖਾਹਿ ॥
    ਨਾਨਕ ਹੰਸਾ ਆਦਮੀ ਬਧੇ ਜਮ ਪੁਰਿ ਜਾਹਿ ॥੨॥
    
    ਮਃ ੧ ॥
    
    ਸਭੋ ਸੂਤਕੁ ਭਰਮੁ ਹੈ ਦੂਜੈ ਲਗੈ ਜਾਇ ॥
    ਜੰਮਣੁ ਮਰਣਾ ਹੁਕਮੁ ਹੈ ਭਾਣੈ ਆਵੈ ਜਾਇ ॥
    ਖਾਣਾ ਪੀਣਾ ਪਵਿਤ੍ਰੁ ਹੈ ਦਿਤੋਨੁ ਰਿਜਕੁ ਸੰਬਾਹਿ ॥
    ਨਾਨਕ ਜਿਨ੍ਹ੍ਹੀ ਗੁਰਮੁਖਿ ਬੁਝਿਆ ਤਿਨ੍ਹ੍ਹਾ ਸੂਤਕੁ ਨਾਹਿ ॥੩॥
    
    ਪਉੜੀ ॥
    
    ਸਤਿਗੁਰੁ ਵਡਾ ਕਰਿ ਸਾਲਾਹੀਐ ਜਿਸੁ ਵਿਚਿ ਵਡੀਆ ਵਡਿਆਈਆ ॥
    ਸਹਿ ਮੇਲੇ ਤਾ ਨਦਰੀ ਆਈਆ ॥
    ਜਾ ਤਿਸੁ ਭਾਣਾ ਤਾ ਮਨਿ ਵਸਾਈਆ ॥
    ਕਰਿ ਹੁਕਮੁ ਮਸਤਕਿ ਹਥੁ ਧਰਿ ਵਿਚਹੁ ਮਾਰਿ ਕਢੀਆ ਬੁਰਿਆਈਆ ॥
    ਸਹਿ ਤੁਠੈ ਨਉ ਨਿਧਿ ਪਾਈਆ ॥੧੮॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਪਹਿਲਾ ਸੁਚਾ ਆਪਿ ਹੋਇ ਸੁਚੈ ਬੈਠਾ ਆਇ ॥
    ਸੁਚੇ ਅਗੈ ਰਖਿਓਨੁ ਕੋਇ ਨ ਭਿਟਿਓ ਜਾਇ ॥
    ਸੁਚਾ ਹੋਇ ਕੈ ਜੇਵਿਆ ਲਗਾ ਪੜਣਿ ਸਲੋਕੁ ॥
    ਕੁਹਥੀ ਜਾਈ ਸਟਿਆ ਕਿਸੁ ਏਹੁ ਲਗਾ ਦੋਖੁ ॥
    ਅੰਨੁ ਦੇਵਤਾ ਪਾਣੀ ਦੇਵਤਾ ਬੈਸੰਤਰੁ ਦੇਵਤਾ ਲੂਣੁ ਪੰਜਵਾ ਪਾਇਆ ਘਿਰਤੁ ॥
    
    ਤਾ ਹੋਆ ਪਾਕੁ ਪਵਿਤੁ ॥
    ਪਾਪੀ ਸਿਉ ਤਨੁ ਗਡਿਆ ਥੁਕਾ ਪਈਆ ਤਿਤੁ ॥
    ਜਿਤੁ ਮੁਖਿ ਨਾਮੁ ਨ ਊਚਰਹਿ ਬਿਨੁ ਨਾਵੈ ਰਸ ਖਾਹਿ ॥
    ਨਾਨਕ ਏਵੈ ਜਾਣੀਐ ਤਿਤੁ ਮੁਖਿ ਥੁਕਾ ਪਾਹਿ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਭੰਡਿ ਜੰਮੀਐ ਭੰਡਿ ਨਿੰਮੀਐ ਭੰਡਿ ਮੰਗਣੁ ਵੀਆਹੁ ॥
    ਭੰਡਹੁ ਹੋਵੈ ਦੋਸਤੀ ਭੰਡਹੁ ਚਲੈ ਰਾਹੁ ॥
    ਭੰਡੁ ਮੁਆ ਭੰਡੁ ਭਾਲੀਐ ਭੰਡਿ ਹੋਵੈ ਬੰਧਾਨੁ ॥
    ਸੋ ਕਿਉ ਮੰਦਾ ਆਖੀਐ ਜਿਤੁ ਜੰਮਹਿ ਰਾਜਾਨ ॥
    
    ਭੰਡਹੁ ਹੀ ਭੰਡੁ ਊਪਜੈ ਭੰਡੈ ਬਾਝੁ ਨ ਕੋਇ ॥
    ਨਾਨਕ ਭੰਡੈ ਬਾਹਰਾ ਏਕੋ ਸਚਾ ਸੋਇ ॥
    ਜਿਤੁ ਮੁਖਿ ਸਦਾ ਸਾਲਾਹੀਐ ਭਾਗਾ ਰਤੀ ਚਾਰਿ ॥
    ਨਾਨਕ ਤੇ ਮੁਖ ਊਜਲੇ ਤਿਤੁ ਸਚੈ ਦਰਬਾਰਿ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਸਭੁ ਕੋ ਆਖੈ ਆਪਣਾ ਜਿਸੁ ਨਾਹੀ ਸੋ ਚੁਣਿ ਕਢੀਐ ॥
    ਕੀਤਾ ਆਪੋ ਆਪਣਾ ਆਪੇ ਹੀ ਲੇਖਾ ਸੰਢੀਐ ॥
    ਜਾ ਰਹਣਾ ਨਾਹੀ ਐਤੁ ਜਗਿ ਤਾ ਕਾਇਤੁ ਗਾਰਬਿ ਹੰਢੀਐ ॥
    ਮੰਦਾ ਕਿਸੈ ਨ ਆਖੀਐ ਪੜਿ ਅਖਰੁ ਏਹੋ ਬੁਝੀਐ ॥
    ਮੂਰਖੈ ਨਾਲਿ ਨ ਲੁਝੀਐ ॥੧੯॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਨਾਨਕ ਫਿਕੈ ਬੋਲਿਐ ਤਨੁ ਮਨੁ ਫਿਕਾ ਹੋਇ ॥
    ਫਿਕੋ ਫਿਕਾ ਸਦੀਐ ਫਿਕੇ ਫਿਕੀ ਸੋਇ ॥
    ਫਿਕਾ ਦਰਗਹ ਸਟੀਐ ਮੁਹਿ ਥੁਕਾ ਫਿਕੇ ਪਾਇ ॥
    ਫਿਕਾ ਮੂਰਖੁ ਆਖੀਐ ਪਾਣਾ ਲਹੈ ਸਜਾਇ ॥੧॥
    
    ਮਃ ੧ ॥
    
    ਅੰਦਰਹੁ ਝੂਠੇ ਪੈਜ ਬਾਹਰਿ ਦੁਨੀਆ ਅੰਦਰਿ ਫੈਲੁ ॥
    ਅਠਸਠਿ ਤੀਰਥ ਜੇ ਨਾਵਹਿ ਉਤਰੈ ਨਾਹੀ ਮੈਲੁ ॥
    ਜਿਨ੍ਹ੍ਹ ਪਟੁ ਅੰਦਰਿ ਬਾਹਰਿ ਗੁਦੜੁ ਤੇ ਭਲੇ ਸੰਸਾਰਿ ॥
    
    ਤਿਨ੍ਹ੍ਹ ਨੇਹੁ ਲਗਾ ਰਬ ਸੇਤੀ ਦੇਖਨ੍ਹ੍ਹੇ ਵੀਚਾਰਿ ॥
    ਰੰਗਿ ਹਸਹਿ ਰੰਗਿ ਰੋਵਹਿ ਚੁਪ ਭੀ ਕਰਿ ਜਾਹਿ ॥
    ਪਰਵਾਹ ਨਾਹੀ ਕਿਸੈ ਕੇਰੀ ਬਾਝੁ ਸਚੇ ਨਾਹ ॥
    
    ਦਰਿ ਵਾਟ ਉਪਰਿ ਖਰਚੁ ਮੰਗਾ ਜਬੈ ਦੇਇ ਤ ਖਾਹਿ ॥
    ਦੀਬਾਨੁ ਏਕੋ ਕਲਮ ਏਕਾ ਹਮਾ ਤੁਮ੍ਹ੍ਹਾ ਮੇਲੁ ॥
    ਦਰਿ ਲਏ ਲੇਖਾ ਪੀੜਿ ਛੁਟੈ ਨਾਨਕਾ ਜਿਉ ਤੇਲੁ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਆਪੇ ਹੀ ਕਰਣਾ ਕੀਓ ਕਲ ਆਪੇ ਹੀ ਤੈ ਧਾਰੀਐ ॥
    ਦੇਖਹਿ ਕੀਤਾ ਆਪਣਾ ਧਰਿ ਕਚੀ ਪਕੀ ਸਾਰੀਐ ॥
    ਜੋ ਆਇਆ ਸੋ ਚਲਸੀ ਸਭੁ ਕੋਈ ਆਈ ਵਾਰੀਐ ॥
    ਜਿਸ ਕੇ ਜੀਅ ਪਰਾਣ ਹਹਿ ਕਿਉ ਸਾਹਿਬੁ ਮਨਹੁ ਵਿਸਾਰੀਐ ॥
    ਆਪਣ ਹਥੀ ਆਪਣਾ ਆਪੇ ਹੀ ਕਾਜੁ ਸਵਾਰੀਐ ॥੨੦॥
    
    ਸਲੋਕੁ ਮਹਲਾ ੨ ॥
    
    ਏਹ ਕਿਨੇਹੀ ਆਸਕੀ ਦੂਜੈ ਲਗੈ ਜਾਇ ॥
    ਨਾਨਕ ਆਸਕੁ ਕਾਂਢੀਐ ਸਦ ਹੀ ਰਹੈ ਸਮਾਇ ॥
    ਚੰਗੈ ਚੰਗਾ ਕਰਿ ਮੰਨੇ ਮੰਦੈ ਮੰਦਾ ਹੋਇ ॥
    ਆਸਕੁ ਏਹੁ ਨ ਆਖੀਐ ਜਿ ਲੇਖੈ ਵਰਤੈ ਸੋਇ ॥੧॥
    
    ਮਹਲਾ ੨ ॥
    
    ਸਲਾਮੁ ਜਬਾਬੁ ਦੋਵੈ ਕਰੇ ਮੁੰਢਹੁ ਘੁਥਾ ਜਾਇ ॥
    ਨਾਨਕ ਦੋਵੈ ਕੂੜੀਆ ਥਾਇ ਨ ਕਾਈ ਪਾਇ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਜਿਤੁ ਸੇਵਿਐ ਸੁਖੁ ਪਾਈਐ ਸੋ ਸਾਹਿਬੁ ਸਦਾ ਸਮ੍ਹ੍ਹਾਲੀਐ ॥
    ਜਿਤੁ ਕੀਤਾ ਪਾਈਐ ਆਪਣਾ ਸਾ ਘਾਲ ਬੁਰੀ ਕਿਉ ਘਾਲੀਐ ॥
    ਮੰਦਾ ਮੂਲਿ ਨ ਕੀਚਈ ਦੇ ਲੰਮੀ ਨਦਰਿ ਨਿਹਾਲੀਐ ॥
    ਜਿਉ ਸਾਹਿਬ ਨਾਲਿ ਨ ਹਾਰੀਐ ਤੇਵੇਹਾ ਪਾਸਾ ਢਾਲੀਐ ॥
    ਕਿਛੁ ਲਾਹੇ ਉਪਰਿ ਘਾਲੀਐ ॥੨੧॥
    
    ਸਲੋਕੁ ਮਹਲਾ ੨ ॥
    
    ਚਾਕਰੁ ਲਗੈ ਚਾਕਰੀ ਨਾਲੇ ਗਾਰਬੁ ਵਾਦੁ ॥
    ਗਲਾ ਕਰੇ ਘਣੇਰੀਆ ਖਸਮ ਨ ਪਾਏ ਸਾਦੁ ॥
    ਆਪੁ ਗਵਾਇ ਸੇਵਾ ਕਰੇ ਤਾ ਕਿਛੁ ਪਾਏ ਮਾਨੁ ॥
    ਨਾਨਕ ਜਿਸ ਨੋ ਲਗਾ ਤਿਸੁ ਮਿਲੈ ਲਗਾ ਸੋ ਪਰਵਾਨੁ ॥੧॥
    
    ਮਹਲਾ ੨ ॥
    
    ਜੋ ਜੀਇ ਹੋਇ ਸੁ ਉਗਵੈ ਮੁਹ ਕਾ ਕਹਿਆ ਵਾਉ ॥
    ਬੀਜੇ ਬਿਖੁ ਮੰਗੈ ਅੰਮ੍ਰਿਤੁ ਵੇਖਹੁ ਏਹੁ ਨਿਆਉ ॥੨॥
    
    ਮਹਲਾ ੨ ॥
    
    ਨਾਲਿ ਇਆਣੇ ਦੋਸਤੀ ਕਦੇ ਨ ਆਵੈ ਰਾਸਿ ॥
    ਜੇਹਾ ਜਾਣੈ ਤੇਹੋ ਵਰਤੈ ਵੇਖਹੁ ਕੋ ਨਿਰਜਾਸਿ ॥
    ਵਸਤੂ ਅੰਦਰਿ ਵਸਤੁ ਸਮਾਵੈ ਦੂਜੀ ਹੋਵੈ ਪਾਸਿ ॥
    ਸਾਹਿਬ ਸੇਤੀ ਹੁਕਮੁ ਨ ਚਲੈ ਕਹੀ ਬਣੈ ਅਰਦਾਸਿ ॥
    ਕੂੜਿ ਕਮਾਣੈ ਕੂੜੋ ਹੋਵੈ ਨਾਨਕ ਸਿਫਤਿ ਵਿਗਾਸਿ ॥੩॥
    
    ਮਹਲਾ ੨ ॥
    
    ਨਾਲਿ ਇਆਣੇ ਦੋਸਤੀ ਵਡਾਰੂ ਸਿਉ ਨੇਹੁ ॥
    ਪਾਣੀ ਅੰਦਰਿ ਲੀਕ ਜਿਉ ਤਿਸ ਦਾ ਥਾਉ ਨ ਥੇਹੁ ॥੪॥
    
    ਮਹਲਾ ੨ ॥
    
    ਹੋਇ ਇਆਣਾ ਕਰੇ ਕੰਮੁ ਆਣਿ ਨ ਸਕੈ ਰਾਸਿ ॥
    ਜੇ ਇਕ ਅਧ ਚੰਗੀ ਕਰੇ ਦੂਜੀ ਭੀ ਵੇਰਾਸਿ ॥੫॥
    
    ਪਉੜੀ ॥
    
    ਚਾਕਰੁ ਲਗੈ ਚਾਕਰੀ ਜੇ ਚਲੈ ਖਸਮੈ ਭਾਇ ॥
    ਹੁਰਮਤਿ ਤਿਸ ਨੋ ਅਗਲੀ ਓਹੁ ਵਜਹੁ ਭਿ ਦੂਣਾ ਖਾਇ ॥
    ਖਸਮੈ ਕਰੇ ਬਰਾਬਰੀ ਫਿਰਿ ਗੈਰਤਿ ਅੰਦਰਿ ਪਾਇ ॥
    
    ਵਜਹੁ ਗਵਾਏ ਅਗਲਾ ਮੁਹੇ ਮੁਹਿ ਪਾਣਾ ਖਾਇ ॥
    ਜਿਸ ਦਾ ਦਿਤਾ ਖਾਵਣਾ ਤਿਸੁ ਕਹੀਐ ਸਾਬਾਸਿ ॥
    ਨਾਨਕ ਹੁਕਮੁ ਨ ਚਲਈ ਨਾਲਿ ਖਸਮ ਚਲੈ ਅਰਦਾਸਿ ॥੨੨॥
    
    ਸਲੋਕੁ ਮਹਲਾ ੨ ॥
    
    ਏਹ ਕਿਨੇਹੀ ਦਾਤਿ ਆਪਸ ਤੇ ਜੋ ਪਾਈਐ ॥
    ਨਾਨਕ ਸਾ ਕਰਮਾਤਿ ਸਾਹਿਬ ਤੁਠੈ ਜੋ ਮਿਲੈ ॥੧॥
    
    ਮਹਲਾ ੨ ॥
    
    ਏਹ ਕਿਨੇਹੀ ਚਾਕਰੀ ਜਿਤੁ ਭਉ ਖਸਮ ਨ ਜਾਇ ॥
    ਨਾਨਕ ਸੇਵਕੁ ਕਾਢੀਐ ਜਿ ਸੇਤੀ ਖਸਮ ਸਮਾਇ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਨਾਨਕ ਅੰਤ ਨ ਜਾਪਨ੍ਹ੍ਹੀ ਹਰਿ ਤਾ ਕੇ ਪਾਰਾਵਾਰ ॥
    ਆਪਿ ਕਰਾਏ ਸਾਖਤੀ ਫਿਰਿ ਆਪਿ ਕਰਾਏ ਮਾਰ ॥
    ਇਕਨ੍ਹ੍ਹਾ ਗਲੀ ਜੰਜੀਰੀਆ ਇਕਿ ਤੁਰੀ ਚੜਹਿ ਬਿਸੀਆਰ ॥
    ਆਪਿ ਕਰਾਏ ਕਰੇ ਆਪਿ ਹਉ ਕੈ ਸਿਉ ਕਰੀ ਪੁਕਾਰ ॥
    ਨਾਨਕ ਕਰਣਾ ਜਿਨਿ ਕੀਆ ਫਿਰਿ ਤਿਸ ਹੀ ਕਰਣੀ ਸਾਰ ॥੨੩॥
    
    ਸਲੋਕੁ ਮਃ ੧ ॥
    
    ਆਪੇ ਭਾਂਡੇ ਸਾਜਿਅਨੁ ਆਪੇ ਪੂਰਣੁ ਦੇਇ ॥
    ਇਕਨ੍ਹ੍ਹੀ ਦੁਧੁ ਸਮਾਈਐ ਇਕਿ ਚੁਲ੍ਹ੍ਹੈ ਰਹਨ੍ਹ੍ਹਿ ਚੜੇ ॥
    ਇਕਿ ਨਿਹਾਲੀ ਪੈ ਸਵਨ੍ਹ੍ਹਿ ਇਕਿ ਉਪਰਿ ਰਹਨਿ ਖੜੇ ॥
    ਤਿਨ੍ਹ੍ਹਾ ਸਵਾਰੇ ਨਾਨਕਾ ਜਿਨ੍ਹ੍ਹ ਕਉ ਨਦਰਿ ਕਰੇ ॥੧॥
    
    ਮਹਲਾ ੨ ॥
    
    ਆਪੇ ਸਾਜੇ ਕਰੇ ਆਪਿ ਜਾਈ ਭਿ ਰਖੈ ਆਪਿ ॥
    ਤਿਸੁ ਵਿਚਿ ਜੰਤ ਉਪਾਇ ਕੈ ਦੇਖੈ ਥਾਪਿ ਉਥਾਪਿ ॥
    ਕਿਸ ਨੋ ਕਹੀਐ ਨਾਨਕਾ ਸਭੁ ਕਿਛੁ ਆਪੇ ਆਪਿ ॥੨॥
    
    ਪਉੜੀ ॥
    
    ਵਡੇ ਕੀਆ ਵਡਿਆਈਆ ਕਿਛੁ ਕਹਣਾ ਕਹਣੁ ਨ ਜਾਇ ॥
    ਸੋ ਕਰਤਾ ਕਾਦਰ ਕਰੀਮੁ ਦੇ ਜੀਆ ਰਿਜਕੁ ਸੰਬਾਹਿ ॥
    ਸਾਈ ਕਾਰ ਕਮਾਵਣੀ ਧੁਰਿ ਛੋਡੀ ਤਿੰਨੈ ਪਾਇ ॥
    ਨਾਨਕ ਏਕੀ ਬਾਹਰੀ ਹੋਰ ਦੂਜੀ ਨਾਹੀ ਜਾਇ ॥
    ਸੋ ਕਰੇ ਜਿ ਤਿਸੈ ਰਜਾਇ ॥੨੪॥੧॥ ਸੁਧੁ`,
  },
  {
    song_name: "SpaceShip",
    songURL: "20.mp3",
    artist: "AP Dhillon",
    liked: "true",
    img: "https://i.scdn.co/image/ab67616d00001e02852d4ace5ba8cf082b045c38",
    lyrics: `Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare Jandi
    
    Hawa Nu Cheerda Jaave
    Lagge Baaz Di Chunj Jeha Hood
    Hath Ni Aunda Jatt Ni
    Fadd Lainde If They Could
    
    Gasoline Naal Full Aa Tanki
    Hathan Wich Booj Aa Mehngi
    Dekh Launde Jande Adiye Ni Sip
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    V-12 Engine De Gunje
    Lalkaar Ne
    Laren Di Sena Naalo
    Tez Raftaar Ne
    
    Tin Degree Aa
    Highway Te Uddan Nu Jandi
    Jiddan Engine Aa Laya
    Hunda Bob Lazar Ne
    
    Raula Sunn Car Da Ni
    Seene Uddi Daar Da Ni
    Tyre’an Dekh Road Utte
    Chaddi Grip
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    60 MG Wali Edible Na Lame Ni
    Pop Car Lagdi Na Duniya Same Ni
    Gaddiyan Da Jhakan Yaara
    Rakheyan Eddan Jiddan
    Elon Musk Di Propulsion Di Game Ni
    
    Gill Dhillon Unjh Kude
    Bolde Aa Ghatt Jadon
    Bolde Te Munh Te
    Pakki Launde Zip
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    Light’an Lagdiyan Taare
    Chadhe Sir’an Nu Ne Paare
    Jandi Udd Di Ferrari Lagge
    Spaceship
    
    
    
    Check Full Lyrics on LyricsGoal: https://www.lyricsgoal.com/spaceship-ap-dhillon/` 
  },{
  song_name: "Mukh Modi Na",
    songURL: "21.mp3",
    artist: "Bhai Mehal Singh ji",
    liked: "true",
    img: "https://cutewallpaper.org/21/guru-gobind-singh-images/Gobind-Singh-Ji-HD-Wallpapers-Guru-gobind-singh-Shri-guru-.jpg",
    lyrics: ``
  }
  ,
  {
    song_name: "BANDOOK",
    songURL: "22.mp3",
    artist: "Karan Aujla",
    liked: "false",
    img: "https://i.scdn.co/image/ab67616d0000b273e2630cd9e516f240ed6775d1",
    lyrics: `Rehaan Records!
    Sandeep Rehaan!
    Karan Aujla!
    Awwww
    
    Oh Pehlan Kehndi Enne Bande Marda Reha
    Te Hunn Baat Puche Na Haye
    Pehlan Tere Modde Naal Lagi Rehndi Si
    Ve Hunn Sath Puche Na
    
    Ho Pehlan Bhari Rakhda Si
    Hunn Vich Main Sandook
    Jihda Jinda Bebe Nahio Kholdi
    Meri Russ Gayi Bandook
    
    
     
    Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    Oye Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    
    Ho Main Keha Ghabra Na
    Tainu Kadh Lunga Cheti
    Vairi Bolan Lagge
    
    Vairi Kinne Yaar
    Mere Count Karde Aa
    Round Tolan Lage
    
    Oh Main Keha Ghabra Na
    Tainu Kadh Lunga Cheti
    Vairi Bolan Lagge
    
    Vairi Kinne Yaar
    Mere Count Karde Aa
    Round Tolan Lage
    
    Oh Thonnu Dawan Jankaari
    Meri Russi Ni Mashook
    Oh Taan Phire Mitran Nu Toldi
    Meri Russ Gayi Bandook
    
    Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    Oye Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    
    Sandeep Rehaan!
    
    Ho Kithe Kithe Mere Naal Waake Kareya
    Tu Peya Rehna Bed Ch
    Kehndi Kade Miss Tu Nishana Nai Si Kitta
    Marda Si Head Ch
    
    Oh Kithe Kithe Mere Naal Waake Kareya
    Tu Peya Rehna Bed Ch
    Kehndi Kade Miss Tu Nishana Nahi Si Kitta
    Marda Si Head Ch
    
    Ho Mainu Dekh Bhajje Kook
    Dindi Kalje Mein Phook
    Tainu Qadar Ni Kehndi Mere Roll’di
    Meri Russ Gayi Bandook
    
    Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    Oye Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    
    Main Keha Chup Kar Tainu Aujla Peyau
    Ajj Khoon Mang Ke
    
    Oh Anti’an De Shehar
    Ajj Gehda Marna Ni
    Tainu Modde Tang Ke
    
    Keha Chup Kar Tainu Aujla Peyau
    Ajj Khoon Mang Ke
    Anti’an De Shehar
    Ajj Gehda Marna Ni
    Tainu Modde Tang Ke
    
    Ho Kehndi Kuch Taan Tu Bol
    Laija Vairiyan De Kol
    Kehndi Kadh De Tu Fire Kan Kholdi
    Meri Russ Gayi Bandook
    
    Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    Oye Ajj Kal Mere Naa Ni Boldi
    Meri Russ Gayi Bandook
    
    Rehaan Records!
    Sandeep Rehaan!
    Geet’an Di Machine!
    Awwww!`,
  }
  ,{song_name: "Can't Hold Us",
  songURL: "23.mp3",
  artist: "MacleMore Ft. Ryan Lewis",
  liked: "false",
  img: "https://cdn.nba.com/manage/2021/08/GettyImages-1232154862-scaled-e1628017591660-784x510.jpg",
  lyrics: `Return of the Mack
  Get 'em, what it is, what it does, what it is, what it isn't
  Looking for a better way to get up out of bed
  Instead of getting on the Internet
  And checking a new hit me, get up
  Thrift shop, pimp-strut walkin'
  Little bit of humble, little bit of cautious
  Somewhere between like Rocky and Cosby
  Sweater game, nope nope, y'all can't copy
  Yup, Bad, moonwalking, this here is our party
  My posse's been on Broadway, and we did it our way
  Grown music, I shed my skin and put my bones
  Into everything I record to it and yet I'm on
  Let that stage light go and shine on down
  Got that Bob Barker suit game and plinko in my style
  Money, stay on my craft and stick around for those pounds
  But I do that to pass the torch and put on for my town
  Trust me, on my I-N-D-E-P-E-N-D-E-N-T shit, hustlin'
  Chasing dreams since I was fourteen
  With the four-track, bussin'
  Halfway cross that city with the backpack
  Fat cat, crushing labels out here, nah, they can't tell me nothin'
  We give that to the people, spread it across the country
  Labels out here, nah, they can't tell me nothin'
  We give it to the people, spread it across the country
  Can we go back? This is the moment
  Tonight is the night, we'll fight 'til it's over
  So we put our hands up
  Like the ceiling can't hold us
  Like the ceiling can't hold us
  Can we go back? This is the moment
  Tonight is the night, we'll fight 'til it's over
  So we put our hands up
  Like the ceiling can't hold us
  Like the ceiling can't hold us
  Now, can I kick it? Thank you
  Yeah, I'm so damn grateful
  I grew up really wanting gold fronts
  But that's what you get when Wu-Tang raised you
  Y'all can't stop me
  Go hard like I got a 808 in my heartbeat
  And I'm eating at the beat like you gave a little speed
  To a great white shark on Shark Week, raw!
  Tell me go up, gone
  Deuces, goodbye, I got a world to see
  And my girl, she wanna see Rome
  Caesar'll make you a believer
  Nah, I never ever did it for a throne
  That validation comes from giving it back to the people
  Now sing a song, and it goes like
  Raise those hands, this is our party
  We came here to live life like nobody was watching
  I got my city right behind me, if I fall, they got me
  Learn from that failure, gain humility
  And then we keep marching, I said...
  Can we go back? This is the moment
  Tonight is the night, we'll fight 'til it's over
  So we put our hands up
  Like the ceiling can't hold us
  Like the ceiling can't hold us
  Can we go back? This is the moment
  Tonight is the night, we'll fight 'til it's over
  So we put our hands up
  Like the ceiling can't hold us
  Like the ceiling can't hold us
  And so we put our hands up
  And so we put our hands up
  Oh, oh, oh, oh...
  Na na na na, na na na na
  Hey-ee ay-ee ay-ee ay ay-ee ay-ee, hey
  And all my people say
  Na na na na, na na na na
  Hey-ee ay-ee ay-ee ay ay-ee ay-ee, hey
  And all my people say
  Na na na na, na na na na
  Oh-oh-oh-oh-oh-oh, oh-oh-oh-oh-oh-oh
  And all my people say
  Na na na na, na na na na
  Mack-le-eh-eh-eh-eh-more!
  Can we go back? This is the moment
  Tonight is the night, we'll fight 'til it's over
  So we put our hands up
  Like the ceiling can't hold us
  Like the ceiling can't hold us
  Can we go back? This is the moment
  Tonight is the night, we'll fight 'til it's over
  So we put our hands up
  Like the ceiling can't hold us
  Like the ceiling can't hold us`
}
];


var circle = document.querySelector(".circle");
var songduration = document.querySelector("#songduration");
song.src = songs[0].songURL;
SongName.innerHTML = songs[0].song_name;
ArtistName.innerHTML = songs[0].artist;
SongImg.src = songs[0].img;
mainImg.src = songs[0].img;
var i = 0;

nextbutton.addEventListener("click", () => {
  song.pause();
  i = (i + 1) % songs.length;
  song.src = songs[i].songURL;
  SongName.innerHTML = songs[i].song_name;
  ArtistName.innerHTML = songs[i].artist;
  SongImg.src = songs[i].img;
  mainImg.src = songs[i].img;
  lyrics.innerHTML = songs[i].lyrics;
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
  removeplay();
  colorred(song);
  song.play();
  rotate_song_img();
  playbutton.style.color = "#393E46";
  console.log(song);
  songduration.innerHTML = `${Math.round(song.duration / 60)}:${
    Math.round(song.duration) - Math.round(song.duration / 60) * 60
  }`;
});

prevbutton.addEventListener("click", () => {
  song.pause();
  if (i == 0) i = songs.length - 1;
  else i = (i - 1) % songs.length;
  song.src = songs[i].songURL;
  SongName.innerHTML = songs[i].song_name;
  ArtistName.innerHTML = songs[i].artist;
  SongImg.src = songs[i].img;
  mainImg.src = songs[i].img;
  lyrics.innerHTML = songs[i].lyrics;
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
  removeplay();
  colorred(song);
  console.log(song.src);
  song.play();
  rotate_song_img();
  playbutton.style.color = "#393E46";
  songduration.innerHTML = `${Math.round(song.duration / 60)}:${
    Math.round(song.duration) - Math.round(song.duration / 60) * 60
  }`;
});

redo.addEventListener("click", () => {
  song.pause();
  song.currentTime = 0;
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
  song.play();
});

if (song.currentTime == song.duration) {
  playbutton.classList.remove("fa-pause");
  playbutton.classList.add("fa-play");
  song.pause();
}
for (var i = 1; i < songs.length; i++) {
  var ans = document.createElement("div");
  ans.innerHTML = `<div class = "side_song">
    <i class="fas fa-play myplay" id="play_button"></i>
    <div class="centerregion"><p class = "side_song_name">${songs[i].song_name}</p>
    <p class="side_artist_name">${songs[i].artist}</p>
  </div>
    <img class="side_song_image" src="${songs[i].img}">
  </div>`;
  sideBox.appendChild(ans);
}

var myplaybutton = document.getElementsByClassName("myplay");

for (let k = 0; k < myplaybutton.length; k++) {
  myplaybutton[k].addEventListener("click", () => {
    if (myplaybutton[k].classList.contains("fa-play")) {
      removeplay();
      
      songduration.innerHTML = `${Math.round(song.duration / 60)}:${Math.abs(
        Math.round(song.duration) - Math.round(song.duration / 60) * 60
      )}`;
      console.log(song.duration / 60);
      myplaybutton[k].classList.remove("fa-play");
      myplaybutton[k].classList.add("fa-pause");
      playbutton.classList.remove("fa-play");
      playbutton.classList.add("fa-pause");
      playbutton.style.color = "#393E46";
      myplaybutton[k].style.color = "#393E46";
      console.log(song.src);
      song.src = songs[k].songURL;
      SongName.innerHTML = songs[k].song_name;
      ArtistName.innerHTML = songs[k].artist;
      SongImg.src = songs[k].img;
      mainImg.src = songs[k].img;
      lyrics.innerHTML = songs[k].lyrics;

      if (songs[k].liked == "true") {
        likebutton.style.color = "#393E46";
        likebutton.classList.remove("fas");
        likebutton.classList.add("far");
      } else {
        likebutton.style.color = "#393E46";
        likebutton.classList.remove("far");
        likebutton.classList.add("fas");
      }
      song.play();
      if(SongImg.src == 'https://www.jagranimages.com/images/newimg/19012021/19_01_2021-guru_gobind_singh_jayanti2021_21286360.jpg')
      {
        SongImg.style.animation = 'none';
      }
      else
    {
    SongImg.style.animationName= 'rotate';
    SongImg.style.animationDuration =  '20s';
    SongImg.style.animationIterationCount = 'infinite';
    SongImg.style.animationTimingFunction= 'linear';
    }
      i = k;
    } else {
      SongImg.style.animation = 'none';
      myplaybutton[k].classList.remove("fa-pause");
      myplaybutton[k].classList.add("fa-play");
      playbutton.classList.remove("fa-pause");
      playbutton.classList.add("fa-play");
      playbutton.style.color = "#000000a8";
      myplaybutton[k].style.color = "#000000a8";
      song.pause();
      i = k;
    }
  });
}
playbutton.addEventListener("click", () => {
  if (playbutton.classList.contains("fa-play")) {
    song.play();
    rotate_song_img();
    playbutton.classList.remove("fa-play");
    playbutton.classList.add("fa-pause");
    playbutton.style.color = "#393E46";
    playbutton.style.transition = "all 2s";
    colorred(song);
  } else {
    SongImg.style.animation = 'none';
    removeplay();
    playbutton.classList.remove("fa-pause");
    playbutton.classList.add("fa-play");
    song.pause();
    mainImg.style.animationName='o'
  }
  console.log(song.duration / 60);
  songduration.innerHTML = `${Math.round(song.duration / 60)}:${Math.abs(
    Math.round(song.duration) - Math.round(song.duration / 60) * 60
  )}`;
  console.log(song.duration);
});

function removeplay() {
  for (let m = 0; m < myplaybutton.length; m++) {
    myplaybutton[m].classList.remove("fa-pause");
    myplaybutton[m].classList.add("fa-play");
    myplaybutton[m].style.color = "#000000a8";
    playbutton.style.color = "#393E46";
  }
}

lyrics.innerHTML = songs[0].lyrics;


function colorred(mysong) {
  for (var n = 0; n < songs.length; n++) {
    if (
      `http://127.0.0.1:5500/__pycache__/cpp%20data%20structures/stack/websites/musicplayer/${songs[n].songURL}` ==
      mysong.src
    ) {
      console.log(n);
      myplaybutton[n].classList.remove("fa-play");
      myplaybutton[n].classList.add("fa-pause");
      myplaybutton[n].style.color = "#393E46";
    }
  }
}

var likebutton = document.querySelector("#like");

for (var i = 0; i < songs.length; i++) {
  likebutton.addEventListener("click", () => {
    if (songs[i].liked == "false") {
      songs[i].liked = "true";
      likebutton.classList.remove("fas");
      likebutton.classList.add("far");
    } else {
      songs[i].liked = "false";
      likebutton.classList.remove("far");
      likebutton.classList.add("fas");
    }
  });
}
const shufflebutton = document.querySelector(".shufflebtn");
let z = 0;
shufflebutton.addEventListener("click", () => {
  if (z % 2 == 0) {
    shufflebutton.style.color = "#393E46";
    shufflebutton.style.transform.scale = "1.1";
    song.addEventListener("ended", myfunction);
  } else {
    shufflebutton.style.color = "gray";
    song.removeEventListener("ended", myfunction);
    song.addEventListener("ended", () => {
      playbutton.classList.remove("fa-pause");
      playbutton.classList.add("fa-play");
      playbutton.style.color = "#000000a8";
      removeplay();
    });
  }
  z++;
});

function myfunction() {
  song.pause();
  i = (i + 1) % songs.length;
  song.src = songs[i].songURL;
  SongName.innerHTML = songs[i].song_name;
  ArtistName.innerHTML = songs[i].artist;
  SongImg.src = songs[i].img;
  mainImg.src = songs[i].img;
  lyrics.innerHTML = songs[i].lyrics;
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
  removeplay();
  colorred();
  song.play();
  playbutton.style.color = "#393E46";
}
var rangevalue = document.querySelector(".value");
console.log(songimg)

song.addEventListener("playing", () => {
  setInterval(() => {
    if (Math.round(song.currentTime) % 60 < 10)
      duration.innerHTML = `${Math.floor(Math.round(song.currentTime) / 60)}:0${
        Math.round(song.currentTime) % 60
      }`;
    else
      duration.innerHTML = `${Math.floor(Math.round(song.currentTime) / 60)}:${
        Math.round(song.currentTime) % 60
      }`;
    rangevalue.style.width =
      `${(song.currentTime / song.duration) * 426}` + "px";
    circle.style.left =
      `${(song.currentTime / song.duration) * 426 + 550 }` + "px";
     
  }, 500);
  
});
circle.style.transition = "all 100ms";
circle.style.opacity = 0;
var range = document.querySelector(".range");
song.addEventListener("ended", () => {
  duration.innerHTML = "00:00";
  playbutton.classList.remove("fa-pause");
  playbutton.classList.add("fa-play");
  removeplay();
  song.currentTime = 0;
});
rangevalue.addEventListener("mouseover", () => {
  rangevalue.style.height = "5px";
  range.style.height = "5px";
  circle.style.opacity = "1";
});
rangevalue.addEventListener("mouseout", () => {
  rangevalue.style.height = "3px";
  range.style.height = "3px";
  circle.style.opacity = "0";
});
range.addEventListener("mouseover", () => {
  rangevalue.style.height = "5px";
  range.style.height = "5px";
  circle.style.opacity = "1";
});
range.addEventListener("mouseout", () => {
  rangevalue.style.height = "3px";
  range.style.height = "3px";
  circle.style.opacity = "0";
});

range.addEventListener("click", (e) => {
  console.log(e.clientX - 426);
  rangevalue.style.width = `${e.clientX - 555}px`;
  song.currentTime = (e.clientX - 555) * (song.duration / 426);
});
rangevalue.addEventListener("click", (e) => {
  console.log(e.clientX - 426);
  rangevalue.style.width = `${e.clientX - 555}px`;
  song.currentTime = (e.clientX - 555) * (song.duration / 426);
});



const volume_up = document.querySelector(".up");
const volume_down = document.querySelector(".down");
const range2 = document.querySelector(".range2");
const colored_range = document.querySelector(".colored_range2");
var current_volume = 1;

volume_up.addEventListener("click", () => {
  if (song.volume < 1) song.volume += 0.02;
  console.log(song.volume);
  colored_range.style.height = `${100 - song.volume * 100}px`;
  if (song.volume > 0) {
    volume_down.classList.remove("fas fa-volume-mute");
    volume_down.classList.add("fas fa-volume-down");
  }
});
volume_down.addEventListener("click", () => {
  colored_range.style.height = `${100 - song.volume * 100}px`;
  if (song.volume != 0) {
    song.volume = 0;
    volume_down.classList.remove("fa-volume-down");
    volume_down.classList.add("fa-volume-mute");
    colored_range.style.height = "100px";
  } else {
    song.volume = current_volume;
    volume_down.classList.remove("fa-volume-mute");
    volume_down.classList.add("fa-volume-down");
    colored_range.style.height = `${100 - current_volume * 100}px`;
    console.log(colored_range.style.height);
  }
});

colored_range.addEventListener("click", (e) => {
  volume_down.classList.remove("fa-volume-mute");
  volume_down.classList.add("fa-volume-down");
  console.log(Math.abs(e.clientY - 300));
  colored_range.style.height = `${100 - Math.abs(e.clientY - 360)}px`;
  song.volume = Math.abs(e.clientY - 360) / 100;
  current_volume = song.volume;
  console.log(current_volume);
});
range2.addEventListener("click", (e) => {
  volume_down.classList.remove("fa-volume-mute");
  volume_down.classList.add("fa-volume-down");
  console.log(Math.abs(e.clientY - 300));
  colored_range.style.height = `${100 - Math.abs(e.clientY - 360)}px`;
  song.volume = Math.abs(e.clientY - 360) / 100;
  current_volume = song.volume;
  console.log(current_volume);
});

const search_bar = document.querySelector("#search_bar");
const search = document.querySelector("#search_list");
const search_btn = document.querySelector('.fa-arrow-right');
var g = 0;
const cross = document.querySelector('.fa-times');

console.log(sideBox);
const song_result = document.querySelector('.song_result');

search.addEventListener("click", () => {
  if (g % 2 == 0) {
    search.style.transition = "all 150ms";
    search.style.borderBottom = "solid 1px gray";
    search.style.width = "120px";
    search_bar.style.transition = "all 1s";
    search_bar.style.width = "250px";
    search_bar.style.opacity = "1";
    search_btn.style.transition = '1.5s'
    search_btn.style.opacity = 1;
    song_result.innerHTML = '';
    song_result.style.opacity = 1;
    search_bar.value = '';
    cross.style.transition = 'all 1s';
    cross.style.opacity = 1;
    cross.style.transform = 'translateX(120px)';
    g++;
  } else {
    search.style.transition = '200ms'
    search_bar.style.opacity = 0;
    search_bar.style.width = "0px";
    search.style.width = "0px";
    search.style.border = "none";
    search_btn.style.transition = 'all 0.6s';
    search_btn.style.opacity = 0;
    song_result.style.transition = '500ms';
    song_result.style.opacity = 0;
    cross.style.transition = 'all 1s';
    cross.style.opacity = 0;
    cross.style.transform = 'translateX(-120px)';
    g++;
  }
});


cross.addEventListener('click',()=>{
  cross.style.transition = '500ms';
  song_result.style.transition = 'all 500ms';
  song_result.innerHTML ='';
  search_bar.value = '';
});


var searched_song_name = '';
search_btn.addEventListener('click',()=>{
  const song_search = (search_bar.value).toLowerCase();
  var flag = false;
  song_result.innerHTML = '';
  for(var l = 0;l<songs.length;l++){
    if(((songs[l].song_name).toLowerCase()).includes(song_search.trim()) || ((songs[l].artist).toLowerCase()).includes(song_search.trim()))
    {
    
    var result = document.createElement("div");
   result.innerHTML = `<div class ="this_list">
    <li class='song_result_list'>
    <img class="search_song_img" width="80px" style = "backgroundColor = 'gray'; "src="${songs[l].img}">
    <div class = "search_list_text">
    <p class= "search_song_name">${songs[l].song_name}</p>  
    <p class = "search_song_artist">${songs[l].artist}</p>
    </div>
    </li>
    </div>`;
    song_result.style.transition = 'all 1s';
    song_result.appendChild(result);
    flag = true;
    }

  }
  if(!flag)
  {
    var result = document.createElement("div");
    song_result.innerHTML = '';
    result.innerHTML = `<div class ="this_list">
    <li class='song_result_list'>
    <div class = "search_list_text">
    Oops No Results!!!
    </div>
    </li>
    </div>`;
    song_result.appendChild(result);
  }
  
const search_result_list = document.querySelectorAll('.this_list');
console.log(search_result_list);
for(var y = 0;y<search_result_list.length;y++)
{
  search_result_list[y].addEventListener('click',(e)=>{
    console.log(e.target.previousSibling.value);
    for(var b = 0;b<songs.length;b++)
    {
      if(e.target.innerHTML == songs[b].song_name)
      {
      song.src = songs[b].songURL;
      SongName.innerHTML = songs[b].song_name;
      ArtistName.innerHTML = songs[b].artist;
      SongImg.src = songs[b].img;
      mainImg.src = songs[b].img;
      lyrics.innerHTML = songs[b].lyrics;
      playbutton.classList.remove("fa-play");
      playbutton.classList.add("fa-pause");
      playbutton.style.color = '#393E46';
      removeplay();
      colorred(song);
      song.play();
      i = b;
      break;
    }
    }
    rotate_song_img();
  })
}
})

search_bar.addEventListener('keyup',(e)=>{
  if(e.keyCode == 13)
  search_btn.click();
})

sideBox.addEventListener('keyup',(e)=>{
  if(e.keyCode == 32)
  song.pause();
})

function rotate_song_img(){
  if(SongImg.src != 'https://www.jagranimages.com/images/newimg/19012021/19_01_2021-guru_gobind_singh_jayanti2021_21286360.jpg')
    {
    SongImg.style.animationName= 'rotate';
    SongImg.style.animationDuration =  '15s';
    SongImg.style.animationIterationCount = 'infinite';
    SongImg.style.animationTimingFunction= 'linear';
    }
}

song.addEventListener('ended',()=>{
  SongImg.style.animation = 'none';
})

song.addEventListener('pause',()=>{
   playbutton.classList.remove('fa-pause');
   playbutton.classList.add('fa-play');
   removeplay();
   SongImg.style.animation ='none';
})
song.addEventListener('play',()=>{
   playbutton.classList.remove('fa-play');
   playbutton.classList.add('fa-pause');
   colorred(song);  
   rotate_song_img();
})

