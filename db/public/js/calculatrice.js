// méthode usine à gaz
/*

let calculString = prompt("Saisissez votre calcul");

let operateur;
let operande;
let result;

if (calculString.indexOf('+') !== -1)
{
    operateur = '+';
} else if (calculString.indexOf('-') !== -1)
{
    operateur = '-';
} else if (calculString.indexOf('*') !== -1)
{
    operateur = '*';
} else if (calculString.indexOf('/') !== -1)
{
    operateur = '/';
}

switch (operateur) {
    case '+':
        operande = calculString.split('+');
        result = parseInt(operande[0]) + parseInt(operande[1]);
        console.log(result);
        break;

    case '-':
        operande = calculString.split('-');
        result = parseInt(operande[0]) - parseInt(operande[1]);
        console.log(result);
        break;

    case '*':
        operande = calculString.split('*');
        result = parseInt(operande[0]) * parseInt(operande[1]);
        console.log(result);
        break;

    case '/':
        operande = calculString.split('/');

        if (0 === parseInt(operande[1]))
        {
            console.log("Navré la divison par zéro n'est toujours pas possible ...");
        } else {
            let result = parseInt(operande[0]) / parseInt(operande[1]);
            console.log(result);
            break;
        }

}
*/



// Seconde méthode =>

let calculString = prompt("Saisissez votre calcul");

if (calculString.indexOf('+') !== -1)
{
    let operande = calculString.split('+');
    let result = parseInt(operande[0]) + parseInt(operande[1]);
    console.log(result);
} else if (calculString.indexOf('-') !== -1)
    {
    let operande = calculString.split('-');
    let result = parseInt(operande[0]) - parseInt(operande[1]);
    console.log(result);
} else if (calculString.indexOf('*') !== -1)
    {
    let operande = calculString.split('*');
    let result = parseInt(operande[0]) * parseInt(operande[1]);
    console.log(result);
} else if (calculString.indexOf('/') !== -1)
    {
    let operande = calculString.split('/');
        if (0 === parseInt(operande[1]))
        {
        console.log("Navré la divison par zéro n'est toujours pas possible ...");
        } else {
    let result = parseInt(operande[0]) / parseInt(operande[1]);
    console.log(result);
        }
}


// Première méthode =>
/*
let operande1 = Number(prompt("Entrez la première valeur"));
let operande2 = Number(prompt("Entrez la seconde valeur"));
let operateur = prompt("Saisissez l'opérande");

if (operateur === '+')
{
    console.log(operande1 + operande2);
}

if (operateur === '-')
{
    console.log(operande1 - operande2);
}


if (operateur === '*')
{
    console.log(operande1 * operande2);
}


if (operateur === '/')
{
    if(0 === operande2)
    {
        console.log("Division par zéro impossible")
    } else {
        console.log(operande1 / operande2);
    }
}
*/

// En php =>
/*
<?php

if (isset($_POST['a']) && isset($_POST['operation']) && isset($_POST['b'])) {
    // si la valeur n'est pas un nombre
    if (!is_numeric($_POST['a']) || !is_numeric($_POST['b'])) {
        // alors retourne cette erreur :
        echo "Valeur numérique uniquement";
        // Sinon on fait le calcul :
    } else {
        // nos conditions pour le calcul (si + ou - ...)
        if ($_POST['operation'] == 'add') {
            echo $_POST['a'] + $_POST['b'];
        }
        if ($_POST['operation'] == 'sub') {
            echo $_POST['a'] - $_POST['b'];
        }
        if ($_POST['operation'] == 'mul') {
            echo $_POST['a'] * $_POST['b'];
        }
        if ($_POST['operation'] == 'div') {
            //la division par 0 étant impossible
            if ($_POST['b'] == 0) {
                echo 'Division par zéro impossible';
            } else {
                echo $_POST['a'] / $_POST['b'];
            }
        }
    }

} else {
    // si le type des 'name' a été modifié :
    echo "Merci de ne pas modifier les propriétés";
}
*/
