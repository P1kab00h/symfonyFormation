let test = new ToDoList();


test.createDom();





/*
const oMain = document.getElementsByTagName('main')[0];
let oContainer = document.createElement('span');
let oDivTodoPrompt = document.createElement('div');
let oTodoPrompt = document.createElement('input');
let oButtonAddTask = document.createElement('button');
let oToDo = document.createElement('h3');
let oToDoList = document.createElement('ul');
let oDone = document.createElement('div');
let oDoneList = document.createElement('ul');

oContainer.classList.add('container-sm');
oContainer.innerHTML = '<h1>Nouvelle tâche</h1>';

oToDo.classList.add('to-do-title');

oDivTodoPrompt.classList.add('col-sm-2');
oTodoPrompt.classList.add('form-control');
oDivTodoPrompt.appendChild(oTodoPrompt);



oButtonAddTask.addEventListener('click', () => {
    oToDo.innerHTML = 'Tâche(s) à réaliser';
    addTask()

});

//présentation et contenu du bouton d'ajout de tâche
oButtonAddTask.classList.add('btn');
oButtonAddTask.classList.add('btn-primary');
oButtonAddTask.classList.add('mt-3'); //marge top de 3
oButtonAddTask.classList.add('mb-3');
oButtonAddTask.innerHTML = 'Ajouter';

oToDoList.id = 'toDoList';

oContainer.appendChild(oDivTodoPrompt);

oContainer.appendChild(oButtonAddTask);

oContainer.appendChild(oToDo);

oContainer.appendChild(oToDoList);
oMain.appendChild(oContainer);
// définition d'un focus sur le champ prompt, il faut penser à le mettre à la fin sinon KO !!
oTodoPrompt.focus();

function addTask() {
    let oLiToDoList = document.createElement('li');
    const oButtonDeleteTask = document.createElement('button');
    let oLiDoneList = document.createElement('li');
    const oButtonDoneTask = document.createElement('button');
    const oButtonDeleteDoneTask = document.createElement('button');
    const oButtonUndoTask = document.createElement('button');

    oButtonDeleteTask.className = "btn btn-danger ms-2 mt-1 mb-1 me-1";
    oButtonDoneTask.className = "btn btn-success m-1";

    oButtonDeleteDoneTask.className = "btn btn-danger ms-2 mt-1 mb-1 me-1";
    oButtonUndoTask.className = "btn btn-warning m-1";

    oLiToDoList.innerText = oTodoPrompt.value;

    // on vide le champ prompt après sa saisie
    oTodoPrompt.value = "";

    oToDoList.appendChild(oLiToDoList);
    oButtonDeleteTask.innerText = 'Supprimer';
    oLiToDoList.appendChild(oButtonDeleteTask);
    oButtonDeleteTask.addEventListener("click", () => {
        oLiToDoList.remove();
    });

    oButtonDoneTask.innerText = 'Mission Accomplie !';
    oButtonDeleteDoneTask.innerText = 'Supprimer';
    oButtonUndoTask.innerText = 'annuler';
    oLiToDoList.appendChild(oButtonDoneTask);
    oButtonDoneTask.addEventListener("click", () => {
        oDone.innerHTML = '<h3>Tâche(s) réalisée(s)</h3>';
        oDone.className = 'done-task';
        oContainer.appendChild(oDone);
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
        oToDo.innerHTML = 'Tâche(s) à réaliser';
        addTask();
    }
});
*/
