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

function eventListenerEnterKeyPress(){
    addTaskInput.addEventListener("keypress", function(){ 
        if(inputLenght() > 0 && event.which == 13){
            createListElement()
        }
    })
}

addTaskButton.addEventListener("click",function(){
    if(inputLenght() > 0 || event.which == 13 ){
        createListElement();
        eventListenerEnterKeyPress();
    }
})


