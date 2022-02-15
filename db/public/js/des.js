// On définit un choix de dès en dur pour plus de simplicité => 1D6+3D4
let dices = '1D6+3D4' ;
// On a pouvoir 'spliter' notre résultat avec le '+' en guise de separateur => ['1D6', '3D4']
let diceList = dices.split('+');


let total = 0;

// Pour chaque valeur dans dicelist ou i représentant l'index
for(let i in diceList) {
    let diceValues = diceList[i].split('D');

    if (diceValues.length > 1) {
        for(let i = 0; i < diceValues[0]; i++) {
            total += Math.floor((Math.random() * diceValues[1]) + 1);
        }
    } else {
        total += diceValues[0];
    }
}

console.log(total);








/*
//On sépare la chaîne de l'utilisateur en utilisant les + comme séparateur
$diceList = explode("+", mb_strtoupper($dice));
//on se prépare à compter
$total = 0;
//pour chaque dè dans notre tableau de valeurs de dès
foreach ($diceList as $die) {
    //on sépare le nombre de lancers du nombre de faces
    $dieValues = explode("D", $die);
    //si on a plusieurs valeurs, c'est qu'il s'agit bien d'un dè et non d'une valeur unique
    if (count($dieValues) > 1) {
        //dans ce cas on lance autant de dès que nécessaire
        for ($i = 0; $i < $dieValues[0]; $i++) {
            $total += rand(1, $dieValues[1]);
        }
    } else {
        $total += $dieValues[0];
    }
}

echo $total;
*/

































