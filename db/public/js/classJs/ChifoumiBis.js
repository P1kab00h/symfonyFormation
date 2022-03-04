export default class Chifoumi {
    constructor() {
        // Soit this.player le choix du joueur 'physique'
        this.player;

        this.playerChoice = document.querySelectorAll('button');

// this.random nous servira pour la décision de la machine
        this.random;
// computer sera la variable du 'choix' du joueur ordinateur
        this.computerChoice = document.getElementById('computerChoice');

        this.resultat = document.getElementById('resultat');

        this.scorePlayer = document.getElementById('scorePlayer');

        this.scoreComputer = document.getElementById('scoreComputer');

        this.final = document.getElementById('main');

        /*const finalContainer = document.createElement("p");*/

        this.refresh = document.createElement("button");
        this.refresh.textContent = "Rafraîchir";
        this.refresh.classList.add('btn');
        this.refresh.classList.add('btn-primary');
        this.refresh.classList.add('btn-x1');
        this.refresh.classList.add('px-lg-5')
        this.refresh.classList.add('text-center')
        this.refresh.classList.add('px-4')
    }

    createDom() {
        this.game();
    }

    game() {
        // définition du this de la class en variable pour plus de facilité
        let oThis = this;

        // demandez à l'utilisateur son choix (pierre, feuille ou ciseaux)
        for (let i = 0; i < oThis.playerChoice.length; i++) {
            oThis.playerChoice[i].addEventListener('click', function (e) {
                oThis.player = oThis.playerChoice[i].innerHTML;
                // console.log(oThis.player);
                /*

                oThis.player = window.prompt('Choisissez pierre feuille ou ciseaux');
                // modifier la casse en minuscule
                */
                oThis.player = oThis.player.toLowerCase();
// Math.random() retournera une valeur aléatoire entre 0 et 1 à la variable random
                this.random = Math.random(); // nous allons séparer le résultat en 3 tiers
// si 1/3 affectez pierre à la variable computer et le display dans le doc
                if (this.random < 1 / 3) {
                    oThis.computerChoice.innerHTML = 'pierre';
                }
// sinon si 2/3 affectez feuille à la variable computer et le display dans le doc
                else if (this.random < 2 / 3) {
                    oThis.computerChoice.innerHTML = 'feuille';
                }
// sinon affectez ciseaux à la variable computer et le display dans le doc
                else {
                    oThis.computerChoice.innerHTML = 'ciseaux';
                }

                // Vérifier si il y a une égalité
                if (oThis.computerChoice.innerHTML === oThis.player) {
                    // et l'afficher
                    oThis.resultat.innerHTML = "c'est une égalité";
                } else {
                    // Nous allons faire nos vérification en nous basant sur le 'oThis.computerChoice'
                    switch (oThis.computerChoice.innerHTML) {
                        // Cas de la pierre
                        case 'pierre':
                            // Si le oThis.player a choisi 'feuille' alors il gagne
                            if (oThis.player == 'feuille') {
                                oThis.resultat.innerHTML = "Le joueur gagne, " + oThis.player + " remporte face à " + oThis.computerChoice.innerHTML;
                                oThis.scorePlayer.innerHTML++

                                // sinon il ne reste que le cas ciseaux, alors le joueur perd
                            } else {
                                oThis.resultat.innerHTML = "L'ordinateur gagne, " + oThis.computerChoice.innerHTML + " remporte face à " + oThis.player;
                                oThis.scoreComputer.innerHTML++
                            }
                            break;
                        // Cas feuille similaire pierre avec adaptation selon les régles
                        case 'feuille':
                            if (oThis.player == 'ciseaux') {
                                oThis.resultat.innerHTML = "Le joueur gagne, " + oThis.player + " remporte face à " + oThis.computerChoice.innerHTML;
                                oThis.scorePlayer.innerHTML++
                            } else {
                                oThis.resultat.innerHTML = "L'ordinateur gagne, " + oThis.computerChoice.innerHTML + " remporte face à " + oThis.player;
                                oThis.scoreComputer.innerHTML++
                            }
                            break;
                        // Cas ciseaux similaire pierre avec adaptation selon les régles
                        case 'ciseaux':
                            if (oThis.player == 'pierre') {
                                oThis.resultat.innerHTML = "Le joueur gagne, " + oThis.player + " remporte face à " + oThis.computerChoice.innerHTML;
                                oThis.scorePlayer.innerHTML++
                            } else {
                                oThis.resultat.innerHTML = "L'ordinateur gagne, " + oThis.computerChoice.innerHTML + " remporte face à " + oThis.player;
                                oThis.scoreComputer.innerHTML++
                            }
                            break;
                    }
                    if (3 == oThis.scoreComputer.innerHTML) {

                        oThis.resultat.classList.add('px-lg-5')
                        oThis.resultat.classList.add('text-center')
                        oThis.resultat.classList.add('px-4')


                        oThis.resultat.innerHTML = '\tVictoire de la machine sur l\'homme, quel humiliation !! <br>'

                        /*document.body.appendChild(oThis.refresh);*/

                        oThis.resultat.append(oThis.refresh);
                        oThis.refresh.addEventListener('click', () => history.go(0));
                        /*                oThis.resultat.innerHTML = "<input type="button" value="Rafraîchir" onClick="history.go(0)"/>"*/

                    } else if (3 == oThis.scorePlayer.innerHTML) {

                        oThis.resultat.classList.add('px-lg-5')
                        oThis.resultat.classList.add('text-center')
                        oThis.resultat.classList.add('px-4')

                        oThis.resultat.innerHTML = '\tVictoire de l\'homme sur la machine, appelez-moi Neo !! <br>'

                        oThis.resultat.append(oThis.refresh);
                        // document.body.appendChild(oThis.refresh);
                        oThis.refresh.addEventListener('click', () => history.go(0));
                    }
                }


            }/*.bind(this)*/)
        }

    }
}










