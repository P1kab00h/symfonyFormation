const oMain = document.getElementsByTagName('main')[0];

let oContainer = document.createElement('span');
let oDivTodoPrompt = document.createElement('div');
let oTodoPrompt = document.createElement('input');
let oButtonAddTask = document.createElement('button');
let oToDo = document.createElement('p');
let oToDoList = document.createElement('ul');
let oDone = document.createElement('div');
let oDoneList = document.createElement('ul');


oContainer.classList.add('container-sm');
oContainer.innerHTML = '<h1>Nouvelle tâche</h1>';

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
    oButtonDeleteTask.innerText = 'Supprimer';
    oLiToDoList.appendChild(oButtonDeleteTask);
    oButtonDeleteTask.addEventListener("click", () => {
        oLiToDoList.remove();
    });

    let oLiDoneList = document.createElement('li');
    const oButtonDoneTask = document.createElement('button');
    const oButtonDeleteDoneTask = document.createElement('button');
    const oButtonUndoTask = document.createElement('button');


    oButtonDoneTask.innerText = 'Mission Accomplie !';
    oButtonDeleteDoneTask.innerText = 'Supprimer';
    oButtonUndoTask.innerText = 'annuler';
    oLiToDoList.appendChild(oButtonDoneTask);
    oButtonDoneTask.addEventListener("click", () => {
        oDone.innerHTML = '<h3>Tâche(s) réalisée(s)</h3>';
        oDone.className = 'done-task';
        oContainer.appendChild(oDone);
        console.log(oLiToDoList);


        oLiDoneList.innerHTML = oLiToDoList.firstChild.textContent;

        oContainer.appendChild(oDoneList);
        oDoneList.appendChild(oLiDoneList);
        oLiDoneList.appendChild(oButtonDeleteDoneTask);
        oLiDoneList.appendChild(oButtonUndoTask);
        oLiToDoList.remove();
        oButtonDeleteDoneTask.addEventListener("click", () => {
            oLiDoneList.remove();
        });

        oButtonUndoTask.addEventListener('click', () => {
            oLiToDoList.innerHTML = oLiDoneList.firstChild.textContent;
            oToDoList.appendChild(oLiToDoList);
            oLiToDoList.appendChild(oButtonDeleteTask);
            oLiToDoList.appendChild(oButtonDoneTask);

            oLiDoneList.remove();

        });


    })



};


//Ajout d'un event listener suite à la levé de touche sur 'Enter', on jouera alors la fonction addTask()
oTodoPrompt.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        addTask();
    }
});
