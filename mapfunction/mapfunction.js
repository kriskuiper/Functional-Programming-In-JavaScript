/*

.map() is eveneens een higher order function. De .map() method
gaat, net als .filter() door een array. Echter, in tegenstelling
tot filter gooit .map() geen dingen weg, het transformeert ze.

*/

let dieren = [
    { name: Jerro, species: konijn },
    { name: Hendrik, species: draak },
    { name: Goofy, species: hond },
    { name: ScoobyDoo, species: kat },
    { name: DJ, species: hond },
    { name: Jimmy, species: kat },
]

// Zo zou je alle dieren printen zonder .map()
let dierenNamen = []; // een lege array waar alle dierennamen in terecht gaan komen.

for (let i = 0; i < dieren.length; i++) { // loop over de dieren array
    nieuweDieren.push(dieren[i].name); // haal alle namen eruit en stop ze in een nieuwe array
}

// En zo met .map()
let dierenNamen = dieren.map(function(dier) { // loop over de dieren array
    return dier.name; // maak een nieuwe array met alle namen van de dieren
})

// En zo wanneer de callback losgekoppeld is van .map()
let maakDierenNamen = function(dier) {
    return dier.name;
}

let dierenNamen = dieren.map(maakDierenNamen);

// Je kan .map() ook gebruiken om een compleet nieuwe array te maken vanuit je 'oude' array:
let dierenNamen = dieren.map(function(dier) { // loop over de dieren array
    return dier.name + 'is een ' + dier.species; // maak een nieuwe array met alle namen van de dieren met hun soort
})

// Omdat de return statement zo kort is (en op één lijn past) kan je er ook een arrow function van maken:
let dierenNamen = dieren.map((dier) => dier.name); // dit is vele malen korter en simpeler te lezen dan de for loop hierboven.