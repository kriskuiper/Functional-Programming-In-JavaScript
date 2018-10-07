/* 
Recursion is dat een functie zichzelf aanroept totdat de functie dat niet meer doet. Het klinkt misschien nog heel vaag
maar wellicht wordt het duidelijker door te kijken naar de onderstaande voorbeelden.
*/

const telAf = (getal) => {
    if (getal === 0) { // Dit if/else statement is de stopconditie, dit hoef je niet altijd te gebruiken bij recursion
        return;
    }
    console.log(getal);
    telAf(getal - 1); // De functie roept zichzelf aan totdat de stopconditie true is.
}

telAf(10);

// Cool, maar wat hebben we hier aan? Check deze array:

const categorieën = [
    { id: 'dieren', vader: null },
    { id: 'zoogdieren', vader: null },
    { id: 'katten', vader: 'zoogdieren' },
    { id: 'honden', vader: 'zoogdieren' },
    { id: 'chihuahua', vader: 'honden' },
    { id: 'labrador', vader: 'honden' },
    { id: 'siamese', vader: 'katten' },
    { id: 'perzische', vader: 'katten' },
]

// Die gaan we omzetten in zoiets:
/*
{
    'dieren' {
        'zoogdieren' {
            'katten' {
                'siamese': null
                'perzische': null
            }
            'honden' {
                'chihuahua': null
                'perzische': null
            }
        }
    }
    
}
*/

const maakTabelWeergave = (categorieën, vader) => {
    let node = {};
    categorieën // omdat we meerdere methods toepassen op deze parameter maken we gebruik van linebreaks om de leesbaarheid te bevorderen.
        .filter(c => c.vader === vader) // c staat hier voor categorieën
        .forEach(c => node[c.id] =
            maakTabelWeergave(categorieën, c.id)); // yay, recursion
    return node
}

console.log(JSON.stringify( // Zet alles om in een string in de console.
    maakTabelWeergave(categorieën, null
    , null, 2)
    )
);