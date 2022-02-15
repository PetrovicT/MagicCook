let recipes = localStorage.getItem("recipes");
recipes = recipes == null ? data : JSON.parse(recipes);
const numberPerPage = 6;

let SRB = document.documentElement.lang == "rs";

function displayContent(recipes, type, pageNum)
{
    let displayNumber = 0;
    recipes.forEach(element => {
        if(displayNumber < (numberPerPage * pageNum) && displayNumber >= (numberPerPage * (pageNum-1)))
        {
            if(SRB)
                displayRecipeAll(element, "RS");
            else
                displayRecipeAll(element, "EN");
        }
        displayNumber++;
    });
    $("#curr").html(pageNum);
}

function sortRecipes(recipes, sortBy)
{
    switch(sortBy)
    {
        case 0:
            recipes.sort((element1, element2) =>{
                return getAvg(element2) - getAvg(element1);
            });
        break;
        case 1:
            recipes.sort((element1, element2) => element1["difficulty"] - element2["difficulty"]);
        break;
    }
}

$(document).ready(function(){
    params = new URLSearchParams(window.location.search);
    if(!params.has("type"))
        window.location.href = "index.html";
    let type = params.get("type");
        
    if(SRB)
        document.title = "Magic Cook - " + getRecipeType(type)["nameSRBP"];
    else
        document.title = "Magic Cook - " + getRecipeType(type)["nameENG"] + "s";
        let pageNum = 1;
    let sortBy = 0;
    let textFilter = "";
    let currRecipes = recipes.filter(element=>element["type"] == type && element["name"].includes(textFilter));
    if(SRB)
        $(".breadcrumb").append("<li class='breadcrumb-item active'><a href='#' class='text-body'>" + dishGroup[type]["nameSRBP"] + "</a></li>");
    else
        $(".breadcrumb").append("<li class='breadcrumb-item active'><a href='#' class='text-body'>" + dishGroup[type]["nameENG"] + "s</a></li>");
    sortRecipes(currRecipes, sortBy);
    displayContent(currRecipes, type, pageNum);

    $("#allBack").click(function(){
        pageNum = 1;
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });
    $("#back").click(function(){
        pageNum = (pageNum - 1) > 0 ? (pageNum - 1) : pageNum;
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });
    $("#next").click(function(){
        pageNum = (pageNum + 1) <= Math.ceil(currRecipes.length/numberPerPage) ? (pageNum + 1) : pageNum;
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });
    $("#allNext").click(function(){
        pageNum = Math.ceil(currRecipes.length/numberPerPage);
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });

    $("select").change(function(){
        sortBy = parseInt($(this).val());
        sortRecipes(currRecipes, sortBy);
        $("#recipes-col").html("");
        displayContent(currRecipes, type, pageNum);
    });

    $("#search").click(function(){
        textFilter = $("#searchText").val().toLowerCase().trim();
        currRecipes = recipes.filter(element=>element["name"].toLowerCase().includes(textFilter));
        if (currRecipes.length == 0)  $("#recipes-col").html("<h4 class='w3-center'>Nijedno jelo ne odgovara pretrazi!</h4>");
        else{
        sortRecipes(currRecipes, sortBy);
        $("#recipes-col").html("");
    }
        pageNum = 1;
        displayContent(currRecipes, type, pageNum);
    });
});


function displayRecipeAll(recipe, lang, cardType) {

let recipeDIV = $("<div style='display: inline-block;'></div>").addClass("col-md-4").addClass("w3-light-grey").addClass("w3-card-3").addClass("w3-center");
    
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
    let image = $("<img></img>").addClass("card-img image_height w3-center").attr("src", imagePATH);
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
    if (avgfloor<ratingAvr) {
        ratingDIV.append($("<a class='star'><i class='fa fa-star-half-o'></i></a>"));
        starsCounter++;
    }
    while(starsCounter < 5) {
        ratingDIV.append($("<a class='star'><i class='fa fa-star-o'></i></a>"));
        starsCounter++;
    }

    ratingDIV.append("&nbsp" + ratingAvr.toFixed(1) + "/5.0" + "&nbsp;");
    recipeDIV.append(br);
    recipeDIV.append(ratingDIV);
    recipeDIV.append(br);

    target = "#recipes-col"; 
    $(target).append(recipeDIV);
}