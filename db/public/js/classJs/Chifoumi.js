export default class Chifoumi {
    constructor(el) {
        this.el = el;

        this.oResultat;
        this.oScore;
        this.oChoix;

        this.score = [0, 0];
        this.possibilite = ['pierre', 'feuille', 'ciseaux'];
        this.resultatTab = ['égalité', 'perd', 'gagne'];
    }

    createDom() {
        // d'abord je crée tous les elements dont j'ai besoin
        // un container qui sera un div dont je vais mettre un autre div qui va contenir un champ de type input text, puis j'ajoute un boutton
        // une fois que j'ai ajouté les attributs de chaque élément alors j'insére dans le body le container
        let oContainer = document.createElement('div');
        let oDivChoix = document.createElement('div');
        this.oChoix = document.createElement('input');
        let oValid = document.createElement('button');
        this.oResultat = document.createElement('div');
        this.oScore = document.createElement('div');


        oContainer.innerHTML = '<h6>Jeu de chifoumi</h6>';
        oContainer.className = 'container-sm';

        oDivChoix.className = "col-sm-3";

        this.oChoix.id = "choix";
        this.oChoix.type = "text";
        this.oChoix.className = "form-control";

        oValid.id = "valid";
        oValid.textContent = "Joue";
        oValid.className = "btn btn-primary m-2";

        // l'étape suivante sera d'ajouter un évenement sur le bouton qui va me permettre de lire la valeur de mon champ
        // On fonctionne avec une arrow function
        oValid.addEventListener('click', () => this.afficheScore(this.oChoix.value));

        oDivChoix.appendChild(this.oChoix);
        oContainer.appendChild(oDivChoix);
        oContainer.appendChild(oValid);
        oContainer.appendChild(this.oResultat);
        oContainer.appendChild(this.oScore);
        this.el.appendChild(oContainer);
    }

    /*
     * Calcul aléatoire de ce que va jouer l'ordinateur
     */
    ordi() {
        return Math.round(Math.random() * 2);
    }

    /*
    * Analyse et comparaison entre le choix du joueur et le choix de l'ordi    *
    * */
    analyse(choixPersonne, choixOrdi) {
        let result = -1;

        if (choixPersonne !== choixOrdi) {
            result = 0;
            switch (choixPersonne) {
                case 0: // pierre
                    if (1 === choixOrdi) {
                        result = 1;
                    }
                    break;
                case 1: // feuille
                    if (2 === choixOrdi) {
                        result = 1;
                    }
                    break;
                case 2: //ciseaux
                    if (0 === choixOrdi) {
                        result = 1;
                    }
            }
        }
        return result;
    }

    /*
    * Définition du choix de la personne, pourrait être remplacé par la method array.includes()
    * */
    /*    personne(choix)
    {
        let result = 0;

        for(let i = 0; i < this.possibilite.length; i++) {
            if(choix === this.possibilite[i]) {
                result = i;
                break;
            }
        }

        return result;
    }*/

    /*
    * Method final permettant de lancer le choix de l'ordi, la vérif du choix joueur, puis l'analyse entre le choix joueur vs choix ordi
    * */
    afficheScore(choixJoueur) {
        let choixOrdi = this.ordi();
        let choixPersonne;
        if (this.possibilite.includes(choixJoueur)) {
            choixPersonne = this.possibilite.indexOf(choixJoueur);
        } else {
            alert('veuillez choisir l\'une des trois valeurs possible');
            return;
        }

        let resultatAnalyse = this.analyse(choixJoueur, choixOrdi);

        console.log(this.possibilite.includes(choixJoueur), choixPersonne)


        if (1 === resultatAnalyse) {
            this.score[0]++;
        } else if (0 === resultatAnalyse) {
            this.score[1]++;
        }

        this.oResultat.innerHTML = `Le choix de l'ordi : ${this.possibilite[choixOrdi]} vs le choix de Guy : ${this.possibilite[choixPersonne]} ${this.resultatTab[resultatAnalyse + 1]}`;
        this.oScore.innerHTML = `score de l'ordi : ${this.score[0]} vs Guyyyy : ${this.score[1]}`;

        if (this.score[0] > 2) {
            this.oScore.innerText = "TU as perdu espece de naze ! ";
        } else if (this.score[1] > 2) {
            this.oScore.textContent = "I WIN";
        }
    }

}



