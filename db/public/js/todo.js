const oMain = document.getElementsByTagName('main')[0];

let oContainer = document.createElement('span');
let oDivTodoPrompt = document.createElement('div');
let oTodoPrompt = document.createElement('input');
let oButtonAddTask = document.createElement('button');
let oToDo = document.createElement('p');
let oToDoList = document.createElement('ul');
let oDone = document.createElement('p');
let oDoneList = document.createElement('ul');


oContainer.classList.add('container-sm');
oContainer.innerHTML = '<h1>Tache à faire</h1>';

oDivTodoPrompt.classList.add('col-sm-2');
oTodoPrompt.classList.add('form-control');
oDivTodoPrompt.appendChild(oTodoPrompt);

oButtonAddTask.addEventListener('click', addTask);
oButtonAddTask.classList.add('btn');
oButtonAddTask.classList.add('btn-primary');
oButtonAddTask.innerHTML = 'Ajouter';

oContainer.appendChild(oDivTodoPrompt);

oContainer.appendChild(oButtonAddTask);
oMain.appendChild(oContainer);


function addTask() {
    alert(oTodoPrompt.value);
};
