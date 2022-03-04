/*
*
* Mise en place de notre class Des
*
* */
// Import de la class Des =>
import Des from '/js/classJs/Des.js';

let idDice = document.getElementById('dice');
let idThrowDice = document.getElementById('throwDice');
let idResult = document.getElementById('result');
let oDes = new Des(idDice, idThrowDice, idResult);
console.log(oDes)
oDes.ev();

/*
*
* Mise en place de notre class ToDO
* Nous passons par la définition d'un querySelector sur l'id (unique) ainsi que le corps de la carte
* le but sera de placer notre contenu dans le corps de la carte pour chaque exercice
*
* */
import ToDoList from '/js/classJs/ToDoList.js';

let idToDoList = document.querySelector('#todo .card-body');
let oToDoList = new ToDoList(idToDoList);
oToDoList.createDom();

/*
*
* Mise en place de notre class TicTacToe
* Nous passons par la définition d'un querySelector sur l'id (unique) ainsi que le corps de la carte
* le but sera de placer notre contenu dans le corps de la carte pour chaque exercice
*
* */
import Tictactoe from '/js/classJs/Tictactoe.js';

let idTicTacToe = document.querySelector('#tictactoe .card-body');
let oTicTacToe = new Tictactoe(idTicTacToe);
oTicTacToe.createGame();

/*
*
* Mise en place de notre class ChiFuMi
* Nous passons par la définition d'un querySelector sur l'id (unique) ainsi que le corps de la carte
* le but sera de placer notre contenu dans le corps de la carte pour chaque exercice
*
* */
import Chifoumi from '/js/classJs/Chifoumi.js';

let idChifumi = document.querySelector('#chifoumi .card-body');
let oChifumi = new Chifoumi(idChifumi);
oChifumi.createDom();



/*
*
* Chifoumi Bis
* */
// import avec alias pour le nom de la class (utilisé pour sa création)
import {default as ChifoumiBis} from '/js/classJs/ChifoumiBis.js'

let oChifoumiBis = new ChifoumiBis();
oChifoumiBis.createDom();


import {ajaxSansFrotter} from '/js/ajaxSuperPropre.js'

ajaxSansFrotter();

