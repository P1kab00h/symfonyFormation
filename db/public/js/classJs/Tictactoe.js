export default class Tictactoe {
    constructor(el)
    {
        this.el = el;
        this.isGameActive = true;
        this.joueurActif = 'X';

        //Ici nous listons nos conditions de victoire
// Soit une ligne, soit une colonne, soit une diagonale, en tout 8 possibilités
        this.winingConditions = [
            // cas possible pour les lignes
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // les colonnes
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // les diagonales
            [0, 4, 8],
            [2, 4, 6],
        ]

        // nous permettra d'enregistrer le statut du jeu => soit le nombre de coup joué, sa nature, sa position dans la grille
// L'information sera de type suivant ==>
// ["", "X", "O", "", "X", "", "X", "", "O"] par exemple ou les cases une fois remplie ne devront plus être jouable
        this.gameStatus = ["", "", "", "", "", "", "", "", ""];

// Nos différents messages
        this.winner = () => `Le joueur ${this.joueurActif} a gagné <br>`;
        this.draw = () => `C'est une égalité !! <br>`;
        this.playerTurn = () => `${this.joueurActif} c'est ton tour !! <br>`;


        this.status;
    }

    createGame() {
        // réalisation de notre page en DOM
// nous récupérons la balise main dont l'index est '0'.
        const mainTicTacToe = document.getElementsByTagName('main')[0];

//Création des différents éléments nécessaire à la page
        let oContainer = document.createElement("section");

        let oDivGameGrid = document.createElement("div");
        let oDivGameCell = document.createElement("div");
        let oH3 = document.createElement("h7");
        let oButtonRestart = document.createElement("button");

// Ajout du titre au container (ici on précise la balise 'h1')
        oContainer.innerHTML = '<h6>A game of Tic-Tac-Toe</h6>';
// définition de l'id
        oContainer.id = 'game';


        oDivGameGrid.id = 'game--grid';

        oButtonRestart.innerHTML = 'Redémarrer le jeu';
        oButtonRestart.id = 'restart';
        oButtonRestart.className = 'game--restart btn btn-primary m-1';

        oH3.className = 'game--status';

// ajout du container à la fin de la blaise main (vide).
        this.el.appendChild(oContainer);

//Boucle pour la génération de notre tableau de morpion
        for (let i = 0; i < 9; i++) {
            oDivGameCell = document.createElement("div");
            oDivGameCell.className = 'cell';
            oDivGameCell.dataset.cellIndex = i;
            oDivGameGrid.appendChild(oDivGameCell);
        }
// les ajouts divers au container dans l'ordre souhaité
        oContainer.appendChild(oDivGameGrid);
        oContainer.appendChild(oH3);
        oContainer.appendChild(oButtonRestart);

// On va charger nos infos utiles
        this.status = document.querySelector("h7");
// Cette ligne va nous permettre de display dans notre balise h3 (le querySelector est positionné sur h3) le joueur dont c'est le tour de jeu
        this.status.innerHTML = this.playerTurn();

// Nous allons sélectionner toutes nos 'cell', et pour chacunes d'elles nous aurons un eventListener au click qui appelera la fonction clickCellManagement
        document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click", (e) => this.clickCellManagement(e)))

// Ici nous récupérons l'élement dont l'id est 'restart' soit notre bouton pour redémarrer un jeu, au click nous appelerons la fonction restartGame
        document.getElementById('restart').addEventListener("click", () => this.restartGame())
    }

    // création de la fonction 'clickCellManagement'
    clickCellManagement(e) {
        // un console.log sur this nous permettra de détecter lors des tests sur quel case nous cliquons, ici avec l'ajout de dataset.cellIndex nous aurons l'index de la case sur laquelle nous cliquons, attention dans le console.log la donnée récupérée n'est pas un integer
        //console.log(this.dataset.cellIndex);

        let cellIndex = parseInt(e.target.dataset.cellIndex);

        // ici nous allons faire une verification de gameStatus sur un index de case donnée, si il n'est pas vide OU si le jeu n'est pas actif
        if (this.gameStatus[cellIndex] != "" || !this.isGameActive) {
            // alors on ne fait rien on sort du if
            return;
        }
        // Sinon nous allons remplir le tableau gameStatus avec l'information figurant le joueur actif (soit X ou O)
        this.gameStatus[cellIndex] = this.joueurActif;
        // Dans le même temps nous allons ajouter à this (la case cliqué) le signe (X || O) du this.joueurActif
        e.target.innerHTML = this.joueurActif;

        // Appel de la fonction winCheck
        this.winCheck()

    }

// création d'un fonction pour verifier si le jeu a été gagné, ou en égalité ou que des tours reste à jouer
    winCheck() {
        let winningTurn = false;
        //ici une des parties les plus complexes on fait une boucle for ou l'on vérifie chacunes des conditions de victoires possible (donc pour une condition de victoire il faut que les 3 cases soit coché par le même joueur)
        for (let winingCondition of this.winingConditions) {
            let val1 = this.gameStatus[winingCondition[0]];
            let val2 = this.gameStatus[winingCondition[1]];
            let val3 = this.gameStatus[winingCondition[2]];

            // si l'une des trois valeurs n'est pas remplie alors on continue (conditon de victoire non remplis pour ce cas
            if (val1 === "" || val2 === "" || val3 === "") {
                continue;
            }
            // cependant, si la donnée dans val1 est égale à val2 qui est lui-même égale à val3 alors cela veut dire que c'est le même joueur qui a coché ces cases donc nous sommes dans un tour gagnant, modification de winningTurn
            if (val1 === val2 && val2 === val3) {
                winningTurn = true;
                break;
            }
        }
        // Somme-nous sur un tour gangant ? si oui alors => Victoire pour le joueur courant (c'est le dernier coup qui détermine la victoire donc le dernier joueur courant est forcément celui victorieux)
        if (winningTurn) {
            this.status.innerHTML = this.winner();
            // On arrête alors la partie
            this.isGameActive = false;
            return;
        }
        // Si nous ne sommes pas sur un tour gagnant, mais que la grille est pleine (!gameStatus.includes("") donc pas vide ^^)
        if (!this.gameStatus.includes("")) {
            this.status.innerHTML = this.draw();
            this.isGameActive = false;
            return;
        }
        // enfin si nous ne sommes dans aucuns des cas ci-dessus la partie est toujours en cours il nous faut donc changer de joueur, utilisation d'un ternaire
        // si
        this.joueurActif = this.joueurActif === "X" ? "O" : "X";
        // nous allons modifier notre affichage afin que le tour du joueur soit indiqué correctement
        this.status.innerHTML = this.playerTurn();
    };

// création de la fonction restartGame, ici la fonction consistera à "restaurer" les valeurs par défaut (soit les valeurs au début d'une partie
    restartGame() {
        // le joueur Actif repasse à "X"
        this.joueurActif = "X";
        // la jeu sera actif à nouveau
        this.isGameActive = true;
        // on réinitialise le statut du jeu (un des éléments le plus important!!) si on l'oublie les mouvements avant reinisiallisation seront toujours enregistré
        this.gameStatus = ["", "", "", "", "", "", "", "", ""];
        // On affiche le joueur dont c'est le tour
        this.status.innerHTML = this.playerTurn();
        //et on vide les cases déjà remplis
        document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");

    }
}




