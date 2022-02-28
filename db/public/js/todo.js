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

oButtonAddTask.addEventListener('click', () => {
    addTask()});

oButtonAddTask.classList.add('btn');
oButtonAddTask.classList.add('btn-primary');
oButtonAddTask.innerHTML = 'Ajouter';

oToDoList.id = 'toDoList';

oContainer.appendChild(oDivTodoPrompt);

oContainer.appendChild(oButtonAddTask);


oContainer.appendChild(oToDoList);
oMain.appendChild(oContainer);


function addTask() {

    let oLiToDoList = document.createElement('li');

    oLiToDoList.innerText = oTodoPrompt.value;

    oToDoList.appendChild(oLiToDoList);

    const oButtonDeleteTask = document.createElement('button');
    oButtonDeleteTask.innerText = 'Suppression';
    oLiToDoList.appendChild(oButtonDeleteTask);
    oButtonDeleteTask.addEventListener("click", () => {
        oLiToDoList.remove();
    });

    const oButtonDoneTask = document.createElement('button');
    oButtonDoneTask.innerText = 'Mission Accomplie !';
    oLiToDoList.appendChild(oButtonDoneTask);
    oButtonDoneTask.addEventListener("click", () => {
        oDone.innerHTML = '<h3>Tâche(s) réalisée(s)</h3>'

        oDoneList.appendChild(oLiToDoList);
    })



};


//Ajout d'un event listener suite à la levé de touche sur 'Enter', on jouera alors la fonction addTask()
oTodoPrompt.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        addTask();
    }
});
