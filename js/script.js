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

function saveTask(){
    console.log("saving task");

    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let dueDate = $("#selDueDate").val();
    let color = $("#selColor").val();
    let emoji = $("#selEmoji").val();
    let location = $("#txtLocation").val();
    let status = $("#selStatus").val();
    let notification = $("#chkNotification").prop("checked");

    let task = new Task(isImportant, title, dueDate, description, color, emoji, location, status, notification);
    displayTask(task);
}

function displayTask(task){
    let syntax = `<div id = "newone" style="background-color:${task.color}">
        <h5>${task.title}</h5>
        <h5>${task.description}</h5>
        <h5>${task.dueDate}</h5>
        <h5>${task.color}</h5>
        <h5>${task.emoji}</h5>
        <h5>${task.location}</h5>
        <h5>${task.status}</h5>
        <h5>${task.notification}</h5>
    </div>`;

    $("#pendingTasks").append(syntax);
}

function init(){
    console.log("Task Manager page!");

    //assigns events
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);

    //load initial data
}

window.onload = init;