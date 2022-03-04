export default class ToDoList
{
    constructor(el)
    {
        this.el = el;

        this.oContainer;
        this.oTodoPrompt;
        this.oToDoList;
        this.oDone;
        this.oDoneList;
    }

    createDom()
    {
        this.oContainer= document.createElement('span');
        this.oTodoPrompt = document.createElement('input');
        this.oToDoList = document.createElement('ul');
        this.oDone = document.createElement('div');
        this.oDoneList = document.createElement('ul');

        let oDivTodoPrompt = document.createElement('div');
        let oButtonAddTask = document.createElement('button');
        let oToDo = document.createElement('h6');

        this.oContainer.classList.add('container-sm');
        this.oContainer.innerHTML = '<h6>Nouvelle tâche</h6>';
            oToDo.classList.add('to-do-title');
            oDivTodoPrompt.classList.add('col-sm-2');
        this.oTodoPrompt.classList.add('form-control');
            oDivTodoPrompt.appendChild(this.oTodoPrompt);

        oButtonAddTask.addEventListener('click', () => {
            oToDo.innerHTML = 'Tâche(s) à réaliser';
            this.addTask()
        });

//présentation et contenu du bouton d'ajout de tâche
            oButtonAddTask.classList.add('btn');
            oButtonAddTask.classList.add('btn-primary');
            oButtonAddTask.classList.add('mt-3'); //marge top de 3
            oButtonAddTask.classList.add('mb-3');
            oButtonAddTask.innerHTML = 'Ajouter';

        this.oToDoList.id = 'toDoList';

        this.oContainer.appendChild(oDivTodoPrompt);

        this.oContainer.appendChild(oButtonAddTask);

        this.oContainer.appendChild(oToDo);

        this.oContainer.appendChild(this.oToDoList);
            this.el.appendChild(this.oContainer);
// définition d'un focus sur le champ prompt, il faut penser à le mettre à la fin sinon KO !!
        this.oTodoPrompt.focus();

//Ajout d'un event listener suite à la levé de touche sur 'Enter', on jouera alors la fonction addTask()
        this.oTodoPrompt.addEventListener('keyup',  (event) => {
            if (event.code === 'Enter') {
                oToDo.innerHTML = 'Tâche(s) à réaliser';
                this.addTask();
            }
        });


    }

    addTask() {
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

        oLiToDoList.innerText = this.oTodoPrompt.value;

    // on vide le champ prompt après sa saisie
    this.oTodoPrompt.value = "";

    this.oToDoList.appendChild(oLiToDoList);
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
            this.oDone.innerHTML = '<h6>Tâche(s) réalisée(s)</h6>';
            this.oDone.className = 'done-task';
            this.oContainer.appendChild(this.oDone);
            oLiDoneList.innerHTML = oLiToDoList.firstChild.textContent;
            this.oContainer.appendChild(this.oDoneList);
            this.oDoneList.appendChild(oLiDoneList);
            oLiDoneList.appendChild(oButtonDeleteDoneTask);
            oLiDoneList.appendChild(oButtonUndoTask);
            oLiToDoList.remove();
                oButtonDeleteDoneTask.addEventListener("click", () => {
                    oLiDoneList.remove();
                });

        oButtonUndoTask.addEventListener('click', () => {
            oLiToDoList.innerHTML = oLiDoneList.firstChild.textContent;
            this.oToDoList.appendChild(oLiToDoList);
            oLiToDoList.appendChild(oButtonDeleteTask);
            oLiToDoList.appendChild(oButtonDoneTask);
            oLiDoneList.remove();
        });
    })
};

}









