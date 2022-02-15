var dishGroup = [
    {
        id: 0,
        nameSRB: "Predjelo",
        nameENG: "Starter",
        nameSRBP: "Predjela"
    },
    {
        id: 1,
        nameSRB: "Glavno jelo",
        nameENG: "Main dish",
        nameSRBP: "Glavna jela"
    },
    {
        id: 2,
        nameSRB: "Desert",
        nameENG: "Dessert",
        nameSRBP: "Deserti"
    },
    {
        id: 3,
        nameSRB: "Užina",
        nameENG: "Snack",
        nameSRBP: "Užina"
    }
]

var data = [
    {
        id: 0,
        name: "Salata",
        nameENGdata: "Salad",
        author: 0,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 4,
            grade: 3
        },
        {
            userID: 2,
            grade: 4
        }],
        time: 5,
        difficulty: 1,
        type: 0,
        recipe: "Sastojci> \n1 veza rotkvica ( oko 8 komada zavisno od veličine ) 1 glavica zelene salate ( vrsta po izboru )\n 3 – 4 mlada luka, opet zavisno od veličine\n        pola kašičice soli\n   alkoholno sirće , nekih 50 ml ( jedna mala čašica )\n   ulje, isto 50 ml\n  pola kašičice šećera ukoliko stavljate alkoholno sirće, a ukoliko je to jabukovo ili sok od limuna onda nema potrebe",
        imageLinks: ["../images/salad/salad1.jpg", "../images/salad/salad2.jpg", "../images/salad/salad3.jpg"],
        videoLinks: "https://www.youtube.com/embed/uyMylObtxog",
        comments: [
            {
                userID: 2,
                text: "Brzo, lako, lepo.",
                date: "21/8/2021"
            },
            {
                userID: 1,
                text: "Salata kao salata",
                date: "20/4/2021"
            }
        ]
    },
    {
        id: 1,
        name: "Potaž od bundeve",
        nameENGdata: "Soup",
        author: 2,
        grade: [{
            userID: 1,
            grade: 3
        },
        {
            userID: 3,
            grade: 2
        }],
        time: 100,
        difficulty: 3,
        type: 0,
        recipe: "Sastojci:\n500 g bundeve\n 2 srednja krompira\n 2 šargarepe\n1 srednji crni luk ili praziluk\n malo ulja\n malo bibera\n malo soli\nmalo peršuna\n malo đumbira\n malo mleka ili pavlake za kuvanje\n po ukusu kisele pavlake. \nCrni luk ili praziluk sitno iseckamo i propržimo na malo ulja. Šargarepu, krompir i bundevu očistimo i iseckamo na kockice srednje veličine. Stavimo sve u šerpu sa lukom i dodamo oko 500 ml vode. Ostavimo da se kuva oko 15...20 minuta. Ako voda uvri dodajemo po malo ne previše, jer potaž treba da bude gust. Dodajemo začine i so po ukusu. Ako postimo onda ne moramo dodavati mleko niti pavlaku. Ukoliko ne postimo najbolje je mleko dodati na samom kraju zbog gustine čorbe. Kada je povrće meko sklonimo šerpu sa ringle i štapnim mikserom izblendiramo sve tako da dobijemo gustu kašu. Ako je pregusta dodajemo još vode ili mleka ili pavlake za kuvanje. Vratimo na ringlu da još 5 minuta proključa. Pre služenja u tanjir možemo dodati kašiku kisele pavlake. Prijatno!",
        imageLinks: ["../images/soup/soup1.jpg", "../images/soup/soup2.jpg"],
        videoLinks: "",
        comments: [ {
            userID: 4,
            text: "Bezveze.",
            date: "21/10/2021"
        },]
    },
    {
        id: 2,
        name: "Tanjir salama",
        nameENGdata: "Salami plate",
        author: 1,
        grade: [{
            userID: 3,
            grade: 5
        },
        {
            userID: 4,
            grade: 4
        }],
        time: 5,
        difficulty: 1,
        type: 0,
        recipe: "Sastojci: \nsalama\npršuta\n\nSitno iseckati salamu i pršutu i poslužiti.",
        imageLinks: ["../images/salami/salami1.jpg", "../images/salami/salami2.jpg", "../images/salami/salami3.jpg"],
        videoLinks: "https://www.youtube.com/embed/EwbSmK_r4Pk",
        comments: [
            {
                userID: 1,
                text: "Prelako za spremanje, a ukusno.",
                date: "29/11/2020"
            }
        ]
    },
    {
        id: 3,
        name: "Grill",
        nameENGdata: "Grill",
        author: 3,
        grade: [{
            userID: 2,
            grade: 5
        },
        {
            userID: 4,
            grade: 4
        },
        {
            userID: 1,
            grade: 5
        }],
        time: 70,
        difficulty: 4,
        type: 1,
        recipe: "Sastojci\nsvinjsko meso - od vrata - 1 kg \n pivo - 300 ml \n masilnovo ulje - 3 kašike \n  biber - šareni u zrnu - 1 kašičica \n šećer - 1 kašičica \n  beli luk - u prahu - pola kašičice \n so - po ukusu. \n\n secite meso na šnicle debljine oko 1, 5 cm. Sameljite biber i natrljajte njim meso sa svih strana. U odgovarajuću posudu sipajte pivo, maslinovo ulje, beli luk, šećer i malo soli. Promešajte dobro da se pomešaju sastojci za marinadu. Stavite šnicle i uvaljajte ih dobro sa svih strana. Ostavite ih bar dva sata u frižideru.Zagrejte roštilj dobro. Namažite ga s malo masnoće, ako je neophodno, i ispecite šnicle dok ne budu gotove s obe strane. Vreme je relativno, ali čim dobiju prijatnu preplanulost i tragove od roštilja, gotove su.Pazite da ih ne prepečete, da ne postanu suve.",
        imageLinks: ["../images/grill/grill1.jpg", "../images/grill/grill2.jpg"],
        videoLinks: "https://www.youtube.com/embed/lUKSAIwe7wg",
        comments: [
            {
                userID: 2,
                text: "Najbolje meso ikada!",
                date: "3/11/2021"
            }
        ]
    },
    {
        id: 4,
        name: "Burger",
        nameENGdata: "Burger",
        author: 3,
        grade: [{
            userID: 0,
            grade: 5
        },
        {
            userID: 1,
            grade: 5
        }],
        time: 60,
        difficulty: 4,
        type: 1,
        recipe: "Sastojci:\n200 g junećeg mlevenog mesa, malo masnijeg „prošaranog“ \n 1 žumance\n  1 kašika prezli\n ½ kašičice sitno seckanog ruzmarina\n 1 kašičica soli\n ½ kašičice bibera\n 1 lepinja za burger\n 1 list čedar sira\n 1 kašika ulja. \n\nMleveno meso pomešajte sa žumancetom, prezlama i začinima. Od dobijene smese formirajte burger.Dobijeni burger pržite u Tefal tiganju na malo ulja sa obe strane. Burger ne mora do kraja da bude pečen ukoliko volite da jedete meso pomalo sirovo.",
        imageLinks: ["../images/burger/burger1.jpg", "../images/burger/burger2.jpg"],
        videoLinks: "https://www.youtube.com/embed/foD42-73wdI",
        comments: [
            {
                userID: 3,
                text: "Najbolji burger ikada!",
                date: "5/10/2021"
            },
            {
                userID: 1,
                text: "Baš je nezdravo, ali ukusno",
                date: "3/7/2021"
            },
        ]
    },
    {
        id: 5,
        name: "Grilovani losos",
        nameENGdata: "Grilled salmon",
        author: 4,
        grade: [{
            userID: 0,
            grade: 2
        },
        {
            userID: 1,
            grade: 4
        }],
        time: 100,
        difficulty: 5,
        type: 1,
        recipe: "Sastojci:\n  4 kom. losos, stekove\n 1 velika glavica beli luk\n sok od 2 limuna\n 3-4 grancice persuna\n sol i biber po vasem ukusu\n 4 kasike majonez za premazivanje\n\n Priprema: \n 1. U posudu u kojoj cete marinirati lososa, stavite izrendani beli luk, limunov sok, sitno iseckan persun, sol i biber. Sve dobro promesajte i dodajte komade lososa ( stekove ili filete). Treba da budu dobro pokriveni marinadom. Tokom mariniranja, obavezno okrenite stekove, da bi se dobro marinirale sa obe strane. 2. Ostavite da se losos marinira nekolko sati a najbolje je da odstoji preko noci. Sto vise stoji u marinadi bolje je, ukusnije. Pre pecenja, bilo na rostilju ili u pecnici, nozem otstranite odvisak luka i persuna.",
        imageLinks: ["../images/salmon/salmon2.jpg", "../images/salmon/salmon1.jpg", "../images/salmon/salmon3.jpg"],
        videoLinks: "https://www.youtube.com/embed/thRj3P0D0AE",
        comments: [
            {
                userID: 0,
                text: "Super! Sve preporuke.",
                date: "1/10/2020"
            },
            {
                userID: 1,
                text: "Nikada nisam voleo ribu. Ovo je grozno ispalo.",
                date: "1/12/2020"
            },
        ]
    },
    {
        id: 6,
        name: "Palačinke",
        nameENGdata: "Pancakes",
        author: 3,
        grade: [{
            userID: 2,
            grade: 5
        },
        {
            userID: 1,
            grade: 3
        }],
        time: 30,
        difficulty: 3,
        type: 2,
        recipe: `Sastojci:
        
        200 g brašna (tip 400, meko)
        2 jajeta
        1 dl ulja
        3 dl mleka i malo mlake vode
        kašičica soli i šećera

Priprema:

Uzmite dublju plastičnu posudu i u nju sipajte brašno, dodajte jaja i oko 2 dl mleka. Probajte da umutite i ako ne ide dodajte još malo mleka.
Savet: testo možete napraviti samo sa vodom ili samo sa mlekom. Najbolje je kada stavite pola mineralne vode i pola mleka.
Važno je da testo bude gusto i da ga mutite dok ne postane glatko, bez grudvica, potom dodajte još mleka, pa malo kisele vode i tako dok ne dobijete testo koje liči na čorbu. U umućeno testo dodajte oko 1 dl ulja i dobro promešajte.
Savet: testo će biti bolje ako ga pustite da odstoji 20-30 minuta.
U tiganj sipajte ulje pa kad se zagreje izručite ulje, tako da tiganj ostane samo masan. Vratite ga na ringlu i onda sipajte kutlačom testo, koje treba da bude ravnomerno raspoređeno po tiganju. Temperatura na kojoj se palačinke peku mora biti visoka. Ostavite nekoliko trenutaka na ringli, a onda prevrnite nožem ili bacite u vis.
Savet: koristite samo teflonske tiganje jer ćete tako izbeći da Vam se palačinke zalepe za dno, tj. neće morati stalno da "podmazujete" tiganj.
Čim se ispeče jedna strana palačinke, okrenite je na drugu stranu i pecite isto koliko i prvu (otprilike oko 1 minut). Gotove palačinke izbacite na plitak tanjir i filujte.
`,
        imageLinks: ["../images/pancake/pancake1.jpg", "../images/pancake/pancake2.jpg", "../images/pancake/pancake3.jpg"],
        videoLinks: "https://www.youtube.com/embed/FLd00Bx4tOk",
        comments: [
        ]
    },
    {
        id: 7,
        name: "Čokoladna fantazija",
        nameENGdata: "Chocolate fantasy",
        author: 0,
        grade: [{
            userID: 1,
            grade: 5
        },
        {
            userID: 2,
            grade: 4
        }],
        time: 40,
        difficulty: 2,
        type: 2,
        recipe: `Sastojci: 

        2 kuglice sladoleda od čokolade
        1 kuglica sladoleda od lješnjaka
        ZA UKRAŠAVANJE
        1 žlica nasjeckanih lješnjaka
        čokoladni desertni preljev

Priprema:

U rashlađenu čašu stavite deo naseckanih lešnika, a zatim kuglice sladoleda od čokolade i lešnika.
Kuglice sladoleda prelijte desertnim prelivom od čokolade, ukrasite šlagom i pospite preostalim lešnicima.
`,
        imageLinks: ["../images/fantasy/fantasy1.jpg"],
        videoLinks: "",
        comments: []
    },
    {
        id: 8,
        name: "Čokoladna torta",
        nameENGdata: "Cake",
        author: 4,
        grade: [{
            userID: 3,
            grade: 2
        },
        {
            userID: 0,
            grade: 4
        }],
        time: 120,
        difficulty: 5,
        type: 2,
        recipe: `Sastojci:
        Kora:
        8 jaja
        5-6 kašika šecera
        8 kasika brašna
        8 kašike ulja
        2 kašike kakaa
        1 prašak za pecivo
        Fil:
        1/2 litre slatke pavlake
        200 g crne čokolade
        200 g mlečne čokolade
        Preliv za kore:
        2 kašike kakaa
        2 dcl mleka
        1 ekstrat ruma

        1. korak

        Fil za kore: U 2dcl slatke pavlake dodati 200gr crne i 200gr mlečne čokolade. Čokoladu izlomiti na kockice. Sve zajedno staviti na slabu vatru da se polako čokolada topi, nikako da vrija. Mešati povremeno da se čokolada i pavlaka sjedine. Kada se čokolada u potpunosti otopi skinuti sa vatre i staviti da se ohladi.
        
        2. korak
        
        Kora: Odvojiti belanca od zumanaca i mutiti belanca dok se ne dobije penasta struktura, potom dodavati šećer. Kada se stegne masa dodati preostala žumanca, potom dodati brašno,ulje i kakao,i na kraju prašak za pecivo. Zagrejati rernu pre pečenja, peći na 180C ono 35 minuta. Nakon isteka vremene proveriti čačkalicom da li je kora dovoljno pečena, ako nije produžiti pečenja na još nekoliko minuta. Kada se kora ispeče ostaviti da se prohladi i preseći je horizontalno na dva jednaka dela.
        
        3. korak
        
        Preliv: Kada se kora skroz ohladi, napraviti smesu od 2dcl mleka pomešanog sa 2 kašike kakaa i ekstratom ruma. Natopiti kore sa tom smešom.
        
        Skroz ohlađenu smešu od čokolada i slatke pavlake umititi mikserom dok ne dobijete čvrstu masu. Početi sa filovanjem kora. Više od pola smese staviti na jednu kora i drugu polovinu kore prebaciti nafilovan deo.Ostatak ostaviti da se nafiluje spolja. Po želji možete preko fila da stavite i šlag.
`,
        imageLinks: ["../images/cake/cake1.jpg", "../images/cake/cake2.jpg", "../images/cake/cake3.jpg"],
        videoLinks: "https://www.youtube.com/embed/xwKGZS3EE7Q",
        comments: [
            {
                userID: 0,
                text: "Super! Sve preporuke.",
                date: "1/10/2020"
            },
            {
                userID: 1,
                text: "Nikada nisam voleo satko. Ovo je grozno ispalo.",
                date: "1/10/2020"
            },
        ]
    },
    {
        id: 9,
        name: "Ovsene pahuljice",
        nameENGdata: "Cereal",
        author: 3,
        grade: [{
            userID: 0,
            grade: 3
        },
        {
            userID: 4,
            grade: 4
        }],
        time: 10,
        difficulty: 1,
        type: 3,
        recipe: `Priprema:

        Priprema ovsene kaše je laka i jednostavna. Četiri kašike ovsenih pahuljica i oko 3 dcl vode zagrejati na ringli, pa kada smesa proključa, dobro promešati i ostaviti da odstoji 5 minuta kako bi pahuljice nabubrele od upijene vode. Ne treba kuvati duže od 5 minuta da ovsena kaša ne bi izgubila svoju hranljivu vrednost. Pošto je kaša neutralnog ukusa, idealna je za pravljenje kako slatkih tako i slanih jela. Po želji, ovsenoj kaši možete dodati: mleko (bilo koju vrstu), jogurt, kiselo mleko, kefir, orašasto, suvo i sveže voće, med, začine (cimet, anis, djumbir, muskatni oraščić), kakao i rogač u prahu. Ako volite slana jela, dodajte sir i zrnce soli.
`,
        imageLinks: ["../images/cereal/cereal1.jpg", "../images/cereal/cereal2.jpg", "../images/cereal/cereal3.jpg"],
        videoLinks: "",
        comments: [
            {
                userID: 2,
                text: "Užasan doručak. Nikad više",
                date: "8/10/2021"
            }
        ]
    },
    {
        id: 10,
        name: "Voće",
        nameENGdata: "Fruit",
        author: 3,
        grade: [{
            userID: 1,
            grade: 2
        },{
            userID: 0,
            grade: 3
        },
        {
            userID: 4,
            grade: 5
        }],
        time: 5,
        difficulty: 1,
        type: 3,
        recipe: `Sastojci
2 jabuke
2 kruške
200gr jagoda
šlag
        
Kako pripremiti

Iseckati svo voće na sitne komadiće i poslužiti.
`,
        imageLinks: [ "../images/fruit/fruit2.jpg", "../images/fruit/fruit3.jpg"],
        videoLinks: "https://www.youtube.com/embed/aNcZTiROURk",
        comments: [ {
            userID: 2,
            text: "Užasan doručak. Nikad više",
            date: "8/10/2021"
        }
        ]
    },
    {
        id: 11,
        name: "Naćosi",
        nameENGdata: "Nachos",
        author: 0,
        grade: [{
            userID: 2,
            grade: 4
        },
        {
            userID: 4,
            grade: 4
        }],
        time: 50,
        difficulty: 3,
        type: 3,
        recipe: `Sastojci:
        1 i po kesa tortilja čipsa

        400g pelata iz konzerve
        
        400g čeri paradajza (crvenog i žutog)
        
        1 ljuta chilli papričica
        
        1 glavica crnog luka
        
        1 glavica crvenog luka
        
        1 šargarepa
        
        1 čen belog luka
        
        200g gaude
        
        so i biber po ukusu
        
        malo maslinovog ulja
        
        peršun, po ukusu


Priprema:

Luk isecite na ploške i izdinstajte na malo maslinovog ulja. Dodajte šargarepu sečenu na manje komade, kratko propžite pa dodajte usitnjen pelat. Kuvajte uz povremeno mešanje dok se ne napravi ujednačena masa. Dodajte čeri paradajze koje ste isekli na polovine. Neka se krčka dok ne ispari sav višak vode. Začinite sitno seckanom ljutom papričicom, biberom, belim lukom, svežim peršunom i solju.

U pliću tepsiju prespite sos od paradajza koji ste napravili. Tortilje ravnomerno “zabodite” po celoj površini. Preporučujem da gaudu izrendate i ravnomerno rasporedite svuda. Stavite da se peče na 200 stepeni oko 20 minuta. Služite toplo, jedite rukama, smejte se i ćaskajte!
`,
        imageLinks: ["../images/nachos/nachos1.jpg", "../images/nachos/nachos2.jpg", "../images/nachos/nachos3.jpg"],
        videoLinks: "",
        comments: [
        ]
    },
];

var users = [
    {
        id: 0,
        username: "Teodora",
        password: "pass99",
    },
    {
        id: 1,
        username: "Tamara",
        password: "pass99",
    },
    {
        id: 2,
        username: "Marko",
        password: "pass99",
    },
    {
        id: 3,
        username: "Jovan",
        password: "pass99",
    },
    {
        id: 4,
        username: "Predrag",
        password: "pass99",
    },
    {
        id: 5,
        username: "Nikola",
        password: "pass99",
    },

];


function getRecipeType(typeID) {
    return dishGroup.find(e => e.id == typeID);
}

function getUserName(userID) {
    return users.find(e => e.id == userID);
}

function getAvg(recipe) {
    let avg = 0;
    recipe.grade.forEach(e => {
        avg += e.grade;
    });
    if (recipe.grade.length != 0) {
        avg /= recipe.grade.length;
    }
    return avg;
}

function oneRecipeIndexName(recipe, lang, cardType) {

    let recipeSPAN = $("<span onclick='window.location.href='pregled_recepata.html';' class='w3-tag w3-row col-10 col-lg-6 food_example  w3-margin w3-padding-large w3-card-4 '></span>");
    let nameLINK = $("<a href =recept.html?id=" + recipe["id"] + "></a>").addClass("no_hover");
    recipeSPAN.append(nameLINK);
    let titleText = $("<h3></h3>").addClass("font28").addClass("box").html(recipe.name);
    nameLINK.append(titleText);

    target = "#styleSpans";
    $(target).append(recipeSPAN);
}

function oneRecipeIndex(recipe, lang, cardType) {

    let recipeDIV = $("<div></div>").addClass("col-xl-4").addClass("col-12").addClass("w3-light-grey").addClass("w3-card-3");

    // name of the recipe
    let title = $("<div></div>").addClass("w3-center").addClass("padding5per");
    recipeDIV.append(title);
    let titleText = $("<h3></h3>").addClass("font26").html(recipe.name);
    title.append(titleText);
    let line = $("<hr style='border-top-color: rgb(224, 126, 46);'>");
    title.append(line);

    // duration of cooking
    let durationDIV = $("<div></div>").addClass("w3-left").addClass("paddingLeft5");
    let durationH3 = $("<h3></h3>").addClass("font20");
    if (lang == "RS")
        durationH3.append("Trajanje: " + recipe.time + "min");
    else
        durationH3.append("Duration: " + recipe.time + "min");
    durationDIV.append(durationH3);
    recipeDIV.append(durationDIV);

    // difficulty
    let difficultyDIV = $("<div></div>").addClass("w3-right").addClass("paddingRight5");
    let difficultyH3 = $("<h3></h3>").addClass("font20").addClass("no_padding");
    if (lang == "RS")
        difficultyH3.append("Težina: " + recipe.difficulty + "&nbsp;");
    else
        difficultyH3.append("Difficulty: " + recipe.difficulty + "&nbsp;");
    difficultyDIV.append(difficultyH3);
    recipeDIV.append(difficultyDIV);

    let br = $("<br>");
    recipeDIV.append(br);
    recipeDIV.append(br);

    // food image
    let imageDIV = $("<div></div>").addClass("w3-center").addClass("padding5per");
    let imageLINK = $("<a href =recept.html?id=" + recipe["id"] + "></a>");
    imageDIV.append(imageLINK);
    let imagePATH = recipe.imageLinks.length > 0 ? recipe.imageLinks[0] : "../images/food.png";
    let image = $("<img></img>").addClass("card-img smallimg").attr("src", imagePATH);
    imageLINK.append(image);
    recipeDIV.append(imageDIV);

    recipeDIV.append(br);
    // rating
    let ratingDIV = $("<div></div>").addClass("w3-center").addClass("paddingLeft5").addClass("font20");
    let ratingAvr = getAvg(recipe);
    let starsCounter;
    avgfloor = Math.floor(ratingAvr);
    for (starsCounter = 0; starsCounter < avgfloor; ++starsCounter) {
        ratingDIV.append($("<a class='star'><i class='fa fa-star'></i></a>"));
    }
    if (avgfloor < ratingAvr) {
        ratingDIV.append($("<a class='star'><i class='fa fa-star-half-o'></i></a>"));
        starsCounter++;
    }
    while (starsCounter < 5) {
        ratingDIV.append($("<a class='star'><i class='fa fa-star-o'></i></a>"));
        starsCounter++;
    }

    ratingDIV.append("&nbsp" + ratingAvr.toFixed(1) + "/5.0" + "&nbsp;");
    recipeDIV.append(br);
    recipeDIV.append(ratingDIV);

    target = "#recipesBEST3";
    $(target).append(recipeDIV);
}

function appendRecipeCard(recipe, lang, cardType) {
    let card = $("<div></div>").addClass("card border").addClass("mb-3").addClass("mt-3").addClass("w3-margin");

    let innerRow = $("<div></div>").addClass("row border").addClass("no-gutters w3-light-gray");
    card.append(innerRow);

    let imgCol = $("<div></div>").addClass("col-xl-4").addClass("col-md-6").addClass("col-12");
    innerRow.append(imgCol);

    let imgLink = $("<a href =recept.html?id=" + recipe["id"] + "></a>");
    imgCol.append(imgLink);

    let imgPath = recipe.imageLinks.length > 0 ? recipe.imageLinks[0] : "../images/food.png";

    let img = $("<img></img>").addClass("card-img").addClass("recipe-img image_height_more").attr("src", imgPath);
    imgLink.append(img);

    let bodyCol = $("<div></div>").addClass("col-xl-8").addClass("col-md-6").addClass("col-12");
    innerRow.append(bodyCol);

    let cardBody = $("<div class='container-fluid'></div>").addClass("card-body");
    bodyCol.append(cardBody);

    let cardBodyRow = $("<div class='row no-gutters'></div>");
    cardBody.append(cardBodyRow);

    let recipeLeft = $("<div class='col-7 '></div>");
    cardBodyRow.append(recipeLeft);

    let titleLink;
    if (lang == "RS")
        titleLink = $("<a href =recept.html?id=" + recipe["id"] + "></a>").addClass("text-reset").addClass("text-decoration-none");
    else
        titleLink = $("<a href =recept_en.html?id=" + recipe["id"] + "></a>").addClass("text-reset").addClass("text-decoration-none");

    let recipeName = $("<h1></h1>").addClass("card-title").html(recipe.name);
    titleLink.append(recipeName);
    let type = getRecipeType(recipe.type);
    let recipeType = $("<p></p>").addClass("card-text").addClass("").html(lang == "RS" ? type.nameSRB : type.nameENG);


    let target = "";
    if (cardType != undefined) {
        switch (cardType) {
            case "user":
                let removeButton = $("<button></button>").attr("data-recipe", recipe.id).addClass("btn").addClass("button_orange").html(lang == "EN" ? "Remove" : "Ukloni");
                removeButton.click(function () {
                    $("#deleteModal").attr("data-recipe", recipe.id).modal('show');
                });
                recipeLeft.append(titleLink);
                recipeLeft.append(recipeType);
                recipeLeft.append(removeButton);

                target = "#recipes-col";


                let recipeRight = $("<div class='col-5'></div>").addClass("recipe-right");
                cardBodyRow.append(recipeRight);


                let rating = $("<p></p>").addClass("card-text");
                let ratingAvr = getAvg(recipe);
                let starsCounter;
                avgfloor = Math.floor(ratingAvr);
                for (starsCounter = 0; starsCounter < avgfloor; ++starsCounter) {
                    rating.append($("<a class='star'><i class='fa fa-star'></i></a>"));
                }
                if (avgfloor < ratingAvr) {
                    rating.append($("<a class='star'><i class='fa fa-star-half-o'></i></a>"));
                    starsCounter++;
                }
                while (starsCounter < 5) {
                    rating.append($("<a class='star'><i class='fa fa-star-o'></i></a>"));
                    starsCounter++;
                }

                rating.append("&nbsp" + ratingAvr.toFixed(1) + "/5.0" + "&nbsp;");
                let br = $("<br>");
                recipeRight.append(br);
                recipeRight.append(rating);

                let time = $("<p></p>").addClass("card-text");

                //time.append(recipe.time + "&nbsp;");
                if (lang == "RS")
                    time.append("Trajanje: " + recipe.time + "min");
                else
                    time.append("Duration: " + recipe.time + "min");

                recipeRight.append(time);

                let difficulty = $("<p></p>").addClass("card-text");

                if (lang == "RS")
                    difficulty.append("Težina: " + recipe.difficulty + "/5");
                else
                    difficulty.append("Difficulty: " + recipe.difficulty + "/5");

                recipeRight.append(difficulty);
                target = "#recipes-col";
                $(target).append(card);

                break;
            case "rating":
                let myRatingHtml = $("<h5></h5>").addClass("card-text");

                let myRating = recipe.grade.find(e => e.userID == 0).grade;
                let cnt;
                for (cnt = 0; cnt < myRating; ++cnt) {
                    myRatingHtml.append($("<i class='fa fa-star'></i>"));
                }
                for (; cnt < 5; ++cnt) {
                    myRatingHtml.append($("<i class='fa fa-star-o'></i>"));
                }

                let recipeRating = $("<div class='w3-container w3-center w3-padding-large w3-margin card card_text w3-light-gray'></div>");
                recipeRating.append(titleLink);
                recipeRating.append(myRatingHtml);
                recipeRating.append(recipeType);

                //cardBodyRow.append(recipeLeft);

                target = "#ratings-col";
                $(target).append(recipeRating);

                break;
        }
    }
    else {
        let author = getUserName(recipe.author);
        let recipeAuthor = $("<h5></h5>").addClass("card-text").html(author.name);

        recipeLeft.append(titleLink);
        recipeLeft.append(recipeAuthor);
        recipeLeft.append(recipeType);

        target = "#recipes-col";
    }

}

function appendComment(comment, recipe) {
    let commentDiv = $("<div class='w3-container w3-center w3-padding-large w3-margin card w3-light-gray'></div>");

    let commentBody = $("<div class=''></div>");
    commentDiv.append(commentBody);

    let commentBodyP = $("<h3></h3>").addClass("card-title italic").text('"' + comment.text + '"');
    commentBody.append(commentBodyP);

    let commentDetails = $("<div class='comment-details orange'></div>");
    commentDiv.append(commentDetails);

    if (recipe != undefined) {
        let recipeFile = document.documentElement.lang == "en" ? "recept_en.html" : "recept.html";
        let recipeUrl = $("<a href='" + recipeFile + "?id=" + recipe.id + "'></a>").addClass("orange").text(recipe.name);
        commentDetails.append(recipeUrl).append(", " + comment.date);
    }
    else {
        let user = getUserName(comment.userID).username;
        commentDetails.append(user + ", " + comment.date);
    }
    $("#comment-col").append(commentDiv);
}

function changeLang(){
    if(document.documentElement.lang != "rs")
    $("#RS").attr("href", window.location.href.replace("_en.html",".html"));

if (document.documentElement.lang != "en")
    $("#EN").attr("href", window.location.href.replace(".html","_en.html"));
}