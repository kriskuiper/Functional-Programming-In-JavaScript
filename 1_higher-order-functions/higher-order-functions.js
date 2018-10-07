// normale functie:
function triple(x) {
    return x * 3;
}

// functie expressie
let triple = function(x) {
    return x * 3;
}

let waffle = triple

waffle(30) // = 90

// =======================================

/*

Functies zijn 'waarden'. Dit maakt het mogelijk om ze aan een andere variabele toe te kennen, of
gebruiken in andere functies. Dit laatste noem je 'higher order functions'. Je gebruikt ze voor
de compositie van je code. Het maakt het namelijk mogelijk om meerdere kleine functies in één
grote functie te stoppen.

Eén van de meest nuttige higher order functions is de .filter() method. Die method wordt vaak
gebruikt op een array, neemt een andere functie als z'n parameter en returned een gefilterde ver-
sie van die array. Een voorbeeld zie je onderstaand.

*/

let dieren = [
    { name: Jerro, species: konijn },
    { name: Hendrik, species: draak },
    { name: Goofy, species: hond },
    { name: ScoobyDoo, species: kat },
    { name: DJ, species: hond },
    { name: Jimmy, species: kat },
]

// Zo filter je de honden eruit zonder .filter()

let hondenhok = []; // maak een lege array die bestemd is voor de honden

for (let i = 0; i < dieren.length; i++) { // loop over de dieren array
    if (dieren.species === 'hond') { // als de species gelijk is aan hond
        hondenhok.push(dieren[i]); // stop die dan in het hondenhok
    }
}

// En zo filter je de honden eruit met .filter()

/* 
.filter() loopt over de dieren array en stopt ze in de callback functie (de 
functie binnen de parameters) en maakt zo een nieuwe array.
*/

let alleHonden = dieren.filter(function(hond) {
    return hond.species === 'hond';
    // in die nieuwe array zet hij alleen de objecten waarbij species === 'hond'
});

// Wat je ook zou kunnen doen is dit: de callback loskoppelen van de .filter() method
const isHond = function(hond) {
    return hond.species === 'hond';
}

let alleHonden = dieren.filter(isHond);