$(document).ready(function () {
    bestRatedRecepies();
    show6recepies();
});

function show6recepies() {
    let recipes = [];
    let storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes == null) {
        recipes = data;
    }
    else {
        recipes = JSON.parse(storedRecipes);
    }
    recipes.sort((e1, e2) => {
        let avg1 = getAvg(e1);

        let avg2 = getAvg(e2);

        return -(avg1 - avg2);
    });

    let lang = document.documentElement.lang.toUpperCase();
    for (let i = 0; i < recipes.length && i < 6; ++i) {
        oneRecipeIndexName(recipes[i], lang);
    }
}

function bestRatedRecepies() {
    let recipes = [];
    let storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes == null) {
        recipes = data;
    }
    else {
        recipes = JSON.parse(storedRecipes);
    }

    recipes.sort((e1, e2) => {
        let avg1 = getAvg(e1);

        let avg2 = getAvg(e2);

        return -(avg1 - avg2);
    });

    let lang = document.documentElement.lang.toUpperCase();
    for (let i = 0; i < recipes.length && i < 3; ++i) {
        oneRecipeIndex(recipes[i], lang);
    }
}

let recipes = localStorage.getItem("recipes");
recipes = recipes == null ? data : JSON.parse(recipes);
const numberPerPage = 5;
let SRB = document.documentElement.lang == "rs";

function displayContent(recipes, type, pageNum)
{
    let displayNumber = 0;
    recipes.forEach(element => {
        if(displayNumber < (numberPerPage * pageNum) && displayNumber >= (numberPerPage * (pageNum-1)))
        {
            if(SRB)
                appendRecipeCard(element, "RS");
            else
                appendRecipeCard(element, "EN");
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
   
    type = 1;
    let sortBy = 0;
    let textFilter = "";
    let currRecipes = recipes.filter(element=>element["type"] == type && element["name"].includes(textFilter));
  
    sortRecipes(currRecipes, sortBy);
    

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
        sortRecipes(currRecipes, sortBy);
        $("#recipes-col").html("");
        pageNum = 1;
        displayContent(currRecipes, type, pageNum);
    });
});