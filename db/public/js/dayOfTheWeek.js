let day = prompt("Jour (numérique)");
let month = prompt("Mois (numérique)");
let year = prompt("Année (numérique)");

let week = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];



Math.fmod = function (a, b)
{
    return Number((a - (Math.floor(a / b) * b)).toPrecision(8));
};

if ( month < 3) {
    let firstPart = Math.floor(((23 * parseInt(month)) / 9)) + parseInt(day) + 4 + parseInt(year) + Math.floor(((parseInt(year) - 1) / 4)) - Math.floor(((parseInt(year) - 1) / 100)) + Math.floor(((parseInt(year) - 1) / 400));
    console.log(firstPart)
    let dayIndex = Math.fmod(firstPart, 7);

    console.log(week[dayIndex]);
} else {
    let firstPart =  Math.floor(((23 * parseInt(month)) / 9)) + parseInt(day) + 2 + parseInt(year) + Math.floor(((parseInt(year) - 1) / 4)) - Math.floor(((parseInt(year) - 1) / 100)) + Math.floor(((parseInt(year) - 1) / 400))
    console.log(firstPart)
    let dayIndex = Math.fmod(firstPart, 7);

    console.log(week[dayIndex]);
}


/*
$dayOfTheWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi',];

if ($month < 3) {
    $firstPart = fmod(floor(((23 * $month) / 9)) + $day + 4 + $year + floor((($year - 1) / 4)) - floor((($year - 1) / 100)) + floor((($year - 1) / 400)), 7);
    echo '<p>' .
        $dayOfTheWeek[$firstPart] .
    '</p>';
} else {
    $firstPart = fmod(floor(((23 * $month) / 9)) + $day + 2 + $year + floor((($year) / 4)) - floor((($year) / 100)) + floor((($year) / 400)), 7);
    echo '<p>' .
        $dayOfTheWeek[$firstPart] .
    '</p>';
}
*/
