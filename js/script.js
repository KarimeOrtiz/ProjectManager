let importantIconClass = "fa-regular fa-star";
let nonImportantIconClass = "fa-solid fa-star";
let isImportant = false;

function toggleImportant(){
    console.log("Icon clicked");

    if(!isImportant){
        $("#iImportant").removeClass(importantIconClass);
        $("#iImportant").addClass(nonImportantIconClass);
        isImportant = true;
    }else{
        $("#iImportant").removeClass(nonImportantIconClass);
        $("#iImportant").addClass(importantIconClass);
        isImportant = false;
    }
}

function init(){
    console.log("Task Manager page!");
    $("#iImportant").click(toggleImportant);
}

window.onload = init;