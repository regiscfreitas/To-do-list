const addTaskButton = document.getElementById("addTaskButton");
const addTaskInput = document.getElementById("newTask");
const taskList = document.querySelector("ul");


function inputLenght(){
    return addTaskInput.value.length;
}
function createListElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(addTaskInput.value));
    taskList.appendChild(li);
    addTaskInput.value = "";
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




