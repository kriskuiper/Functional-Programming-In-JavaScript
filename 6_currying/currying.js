/*
Currying houdt in dat een functie niet al z'n parameters van te voren krijgt. In plaats daarvan
schrijf je eerst de functie die de eerste parameter krijgt. Die returnt de functie met de tweede
parameter en die returnt weer de functie met de derde parameter. 

Vervolgens returnt de laatste functie de volledige output.
*/

// Dit is een 'normale' functie die niet gecurried is (maar wel als arrow-function geschreven is):
let draakje = (naam, grootte, element) => 
    naam + ' is een ' +
    grootte + ' draak die ' +
    element + ' spuwt!';

console.log(draakje('Pieter', 'grote', 'vuur'));

// Dit is dezelfde soort functie, alleen wordt hier gebruik gemaakt van currying
let anderDraakje = function(naam) { // eerste parameter
    return function(grootte) { // returnt een anonieme functie met de tweede parameter
        return function (element) { // returnt een anonieme functie met de derde parameter
            return naam + ' is een ' + grootte + ' draak die ' + element + ' spuwt!'; // returnt de volledige output
        }
    }
}

console.log(anderDraakje('Henkie')('kleine')('bliksem'));

// Dit is de bovenstaande functie als arrow-function geschreven:
let nogEenAnderDraakje =
    naam =>
        grootte =>
            element =>
                naam + ' is een ' +
                grootte + ' draak die ' +
                element + ' spuwt!';

/* 
Het voordeel van dat een functie niet alle parameters van tevoren krijgt is dat je de parameters
een soort van kan loskoppelen van de functie, een voorbeeld zie je onderstaand:
*/

const jannieDeDraak = nogEenAnderDraakje('Jannie');
console.log(jannieDeDraak('grote')('bliksem'));

// Nog een voorbeeld:
const isEenKleineDraak = jannieDeDraak('kleine');
console.log(isEenKleineDraak('vuur'));

// Wat is het voordeel hiervan?
let draakjes = [
    { naam: 'Doepie', element: 'vuur' },
    { naam: 'Kjell', element: 'ijs' },
    { naam: 'Lark', element: 'vuur' },
    { naam: 'Verdoomenis', element: 'dood en verderf' }
];

// Zonder gebruik te maken van curry
const heeftElement = (element, obj) => obj.element === element;

const spuwenVuur = draakjes.filter(x => heeftElement('vuur', x)); // Filter de draken eruit die vuur spuwen
console.log(spuwenVuur);

// Met curry
const heeftElementCurry =
    element =>
        obj =>
            obj.element === element;

const spuwenIJs = draakjes.filter(heeftElementCurry('ijs')); // Door de functie te curry'en is dit duidelijker
console.log(spuwenIJs);