const addTaskButton = document.getElementById("addTaskButton");
const addTaskInput = document.getElementById("newTask");
const taskList = document.querySelector("ul");
const deleteTaskButton = document.getElementsByClassName("deleteButton");


function inputLenght(){
    return addTaskInput.value.length;
}
function createListElement(){
    let li = document.createElement("li");
    let listItemLabel =  document.createElement("span");
    listItemLabel.innerText = addTaskInput.value;
    li.appendChild((listItemLabel));
    let doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.classList.add("undone");
    doneCheckbox.onclick = function(){
        if(!(doneCheckbox.parentElement.className == "done")){
            doneCheckbox.parentElement.classList.remove("undone");
            doneCheckbox.parentElement.classList.add("done");   
        }else{
            doneCheckbox.parentElement.classList.remove("done");
            doneCheckbox.parentElement.classList.add("undone");
        }
    };
    li.appendChild(doneCheckbox);
    let deleteTask = document.createElement("button");
    deleteTask.setAttribute("class","deleteButton")
    let deleteTaskIcon = document.createElement("img")
    deleteTask.appendChild(deleteTaskIcon);
    deleteTaskIcon.src = "trash.png";
    li.appendChild(deleteTask);
    taskList.appendChild(li);
    addTaskInput.value = "";
}
function responsiveListElement(){
    if(inputLenght() > 40){
        createListElement();
    }
}
function addListAfterKeyPress(event){
        if(event.which === 13 && inputLenght() > 0){
            createListElement()
        }  
}
function addListAfterClick() {
        if(inputLenght() > 0){
            createListElement();
        }  
}

addTaskInput.addEventListener("keypress", addListAfterKeyPress);
addTaskButton.addEventListener("click", addListAfterClick);

/*function taskDone(){
    document.querySelector("li").classList.add("done");
}

doneCheckbox.addEventListener("click", taskDone);*/


function deleteTaskFromList(){
    taskList.removeChild(taskList.lastElementChild); 
}

document.getElementsByClassName("deleteButton").addEventListener("click", deleteTaskFromList);

