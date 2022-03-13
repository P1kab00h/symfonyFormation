let oForm = document.querySelector('form');
let oEmail = document.getElementById("email");


oForm.addEventListener('submit', (e) => {
    //le type 'submit' va envoyer les informations à symfony par défaut
    e.preventDefault();// le e.preventDefault() aura pour effet d'annuler le comportement par défaut.

    let erreur = 0;
    let erreurCouleur = '#fedede';

    let oNom = document.getElementById("nom");
    let oPrenom = document.getElementById("prenom");

    let oTelephone = document.getElementById("telephone");
    let oPseudo = document.getElementById("pseudo");
    let oPassword = document.getElementById("password");

    let oNomDiv = document.querySelector('.nomDiv');
    let oPrenomDiv = document.querySelector('.prenomDiv');
    let oEmailDiv = document.querySelector('.emailDiv');
    let oTelephoneDiv = document.querySelector('.telephoneDiv');
    let oPseudoDiv = document.querySelector('.pseudoDiv');
    let oPasswordDiv = document.querySelector('.passwordDiv');


    let erreurNom = 0;
    let erreurPrenom = 0;
    let erreurEmail = 0;
    let erreurTelephone = 0;
    let erreurPseudo = 0;
    let erreurPassword = 0;




    if (oNom && (!oNom.value || oNom.value.length < 3)) {
        oNom.style.backgroundColor = erreurCouleur;
        erreur++
        erreurNom++
        erreurMessage = "veuillez renseigner le champ Nom";


    } else {
        oNom.style.backgroundColor = 'transparent';
        oNomDiv.innerHTML ="";
    }

    if (oPrenom && (!oPrenom.value || oPrenom.value.length < 3)) {
        oPrenom.style.backgroundColor = erreurCouleur;
        erreur++
        erreurPrenom++
    } else {
        oPrenom.style.backgroundColor = 'transparent';
        oPrenomDiv.innerHTML = "";
    }

        if (/*oEmail && (!oEmail.value || oEmail.value.length < 3) && */!validateEmail(oEmail.value)) {
        oEmail.style.backgroundColor = erreurCouleur;
        erreur++
        erreurEmail++
    } else {
        oEmail.style.backgroundColor = 'transparent';
        oEmailDiv.innerHTML = "";
    }

    if (oTelephone && (!oTelephone.value || oTelephone.value.length < 8)) {
        oTelephone.style.backgroundColor = erreurCouleur;
        erreur++
        erreurTelephone++
    } else {
        oTelephone.style.backgroundColor = 'transparent';
        oTelephoneDiv.innerHTML = "";
    }

    if (oPseudo && (!oPseudo.value || oPseudo.value.length < 8)) {
        oPseudo.style.backgroundColor = erreurCouleur;
        erreur++
        erreurPseudo++
    } else {
        oPseudo.style.backgroundColor = 'transparent';
        oPseudoDiv.innerHTML = "";
    }

    if (oPassword && (!oPassword.value || oPassword.value.length < 8)) {
        oPassword.style.backgroundColor = erreurCouleur;
        erreur++
        erreurPassword++
    } else {
        oPassword.style.backgroundColor = 'transparent';
        oPseudoDiv.innerHTML = "";
    }

    //e.submit(); // le e.submit() lui nous permettra de submit notre event

    if (0 ===erreur) {
        // e.target.submit();
        console.log('Success !!');
    } else {
        if(erreurNom) {
            oNomDiv.innerHTML = erreurMessage;
            oNom.focus();
        }
        if(erreurPrenom) {
            oPrenomDiv.innerHTML = "veuillez renseigner le champ prenom"
            oPrenom.focus();
        }
        if(erreurEmail) {
            oEmailDiv.innerHTML = "veuillez renseigner le champ email"
            oEmail.focus();
        }
        if(erreurTelephone) {
            oTelephoneDiv.innerHTML = "veuillez renseigner le champ telephone"
            oTelephone.focus();
        }
        if(erreurPseudo) {
            oPseudoDiv.innerHTML = "veuillez renseigner le champ pseudo"
            oPseudo.focus();
        }
        if(erreurPassword) {
            oPasswordDiv.innerHTML = "veuillez renseigner le champ password"
            oPassword.focus();
        }
    }
})



let regExEmail = ``;

function validateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(oEmail.value))
/*    if (regExEmail.test(oEmail.value))*/
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

