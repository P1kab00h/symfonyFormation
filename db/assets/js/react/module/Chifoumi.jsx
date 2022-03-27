import React/*, {useState}*/ from "react";

export default function Chifoumi() {

    /*game()
    {
        // définition du this de la class en variable pour plus de facilité
        let oThis = this;

        // demandez à l'utilisateur son choix (pierre, feuille ou ciseaux)
        for (let i = 0; i < oThis.playerChoice.length; i++) {
            oThis.playerChoice[i].addEventListener('click', function (e) {
                oThis.player = oThis.playerChoice[i].innerHTML;
                // console.log(oThis.player);
                /!*

                oThis.player = window.prompt('Choisissez pierre feuille ou ciseaux');
                // modifier la casse en minuscule
                *!/
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

                        /!*document.body.appendChild(oThis.refresh);*!/

                        oThis.resultat.append(oThis.refresh);
                        oThis.refresh.addEventListener('click', () => history.go(0));
                        /!*                oThis.resultat.innerHTML = "<input type="button" value="Rafraîchir" onClick="history.go(0)"/>"*!/

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


            }/!*.bind(this)*!/)
        }

    }*/




    return <>
        <div className="card">
            <h2 className="card-header">Chifoumi</h2>
            <div className="card-body">
                <div className="col-sm-2">
                    <h3>Choix du joueur :</h3>
                    <ul>
                        <button className="col text-white border-white btn btn-dark-moon m-1" id="pierre">Pierre
                        </button>
                        <button className="col text-white border-white btn btn-dark-moon m-1" id="feuille">Feuille
                        </button>
                        <button className="col text-white border-white btn btn-dark-moon m-1" id="ciseaux">Ciseaux
                        </button>
                    </ul>

                    <h3>Choix de l'ordinateur :</h3>
                    <p></p>

                    <h3>Résultat :</h3>
                    <p></p>

                    <div>
                        <h3> Score :</h3>
                        <div>
                            <h4>Joueur</h4>
                        </div>
                        <div>
                            <h4>Ordinateur</h4>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}