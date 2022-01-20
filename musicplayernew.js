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

