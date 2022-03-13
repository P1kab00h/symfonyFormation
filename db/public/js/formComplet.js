let oForm = document.querySelector('form');

oForm.addEventListener('submit', checkBeforeSubmit);

let oSexe = document.getElementsByName('sexe');
oSexe[0].checked = true;

function checkBeforeSubmit(e) {

    e.preventDefault(); // annule le comportement par défaut (soit submit ici)


    //checkbox inversion sélection
    let oInvertChoice = document.getElementById('invertChoice');

    if (oInvertChoice.checked) {
        // pour une liste à choix unique
        let oBiere = document.getElementById('biere');
        for (let i in oBiere) {
            if ("IPA" === oBiere.options[i].value) {
                oBiere.options[i].selected = true;
                break;
            }

            /*            for (let i = 0; i < oBiere.length; i++) {
                            if ("IPA" === oBiere.options[i].value) {
                                oBiere.options[i].selected = true;
                                break;
                            }
                        }*/


            /*          if (oBiere.selectedIndex = 2) {
                            oBiere.selectedIndex = 3;
                            document.getElementById('biereResult').innerHTML =
                                `Bière = Prennez plutôt une ${oBiere.value}`;
                        } else {
                            document.getElementById('biereResult').innerHTML =
                                `Bière = ${oBiere.value}<br> index selectionné : ${oBiere.selectedIndex}`;
                        }*/

            // pour les listes de choix multiple
            let oCocktail = document.getElementById('cocktail');
            let selectedCocktail = '';
            Array.from(oCocktail.options).map((e) => {
                e.selected = !e.selected;
            });

            document.getElementById('cocktailResult').innerHTML =
                `Ingrédients de votre cocktail : ${selectedCocktail}`;


            // pour les boutons radio
            let oSexe = document.getElementsByName('sexe');
            let selectedSex = '';

            if (oSexe[0].checked) {
                oSexe[1].checked = true;
            } else {
                oSexe[0].checked = true;
            }
/*

                document.getElementById('sexResult').innerHTML =
                    `Genre choisi : ${selectedSex}`;*/

            // pour les boutons checkbox
            let oVehicule = document.getElementsByName('vehicule');
            let selectedVehicule = '';
            Array.from(oVehicule).map((e) => {
                if (e.checked) {
                    e.checked = false;
                } else {
                    e.checked = true;
                    selectedVehicule += `${e.value} `;
                }
            });
            document.getElementById('vehiculeResult').innerHTML =
                `Véhicule selectionné : ${selectedVehicule}`;
        }

    } else {
        // pour une liste à choix unique
        let oBiere = document.getElementById('biere');
        document.getElementById('biereResult').innerHTML =
            `Bière = ${oBiere.value}<br> index selectionné : ${oBiere.selectedIndex}`;


        // pour les listes de choix multiple
        let oCocktail = document.getElementById('cocktail');
        let selectedCocktail = '';
        Array.from(oCocktail.options).map((e) => {
            if (e.selected) {
                selectedCocktail += `${e.value} `;
            }
        });
        document.getElementById('cocktailResult').innerHTML =
            `Ingrédients de votre cocktail : ${selectedCocktail}`;


        // pour les boutons radio
        let oSexe = document.getElementsByName('sexe');
        let selectedSex = '';
        Array.from(oSexe).map((e) => {
            if (e.checked) {
                selectedSex = `${e.value} `;
            }
        });
        document.getElementById('sexResult').innerHTML =
            `Genre choisi : ${selectedSex}`;


        // pour les boutons checkbox
        let oVehicule = document.getElementsByName('vehicule');
        let selectedVehicule = '';
        Array.from(oVehicule).map((e) => {
            if (e.checked) {
                selectedVehicule += `${e.value} `;
            }
        });
        document.getElementById('vehiculeResult').innerHTML =
            `Véhicule selectionné : ${selectedVehicule}`;
    }

}


//ajax();

function ajax() {
    var oFormData = new FormData(oForm);
    oFormData.append('test', 'formulaire de test')

    fetch("/traiteajax", {
        method: 'post',
        body: oFormData
    }) // on lui donne l'adresse
        .then((reponse) => { // on vérifie la réponse donnée du site
            if (reponse.ok) {
                reponse.json().then((monJson) => {
                    document.getElementById("messageErreur").innerHTML = monJson;
                    console.log(monJson)
                });// on recupere les données au format json si tout va bien
            }
        }).catch((e) => { // en cas d'une erreur interne
        alert(e.message);
    });
}