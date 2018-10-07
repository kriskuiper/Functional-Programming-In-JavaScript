/*
.reduce() is een soort 'multitool' voor het transformeren van array's.
Hoe het precies in z'n werk gaat zie je onderstaand.
*/

// Een voorbeeld array van objecten
let bestellingen = [
    { prijs: 400 },
    { prijs: 360 },
    { prijs: 120 },
    { prijs: 302 },
    { prijs: 293 },
]

// De totaalprijs berekenen zonder .reduce()
let totaalPrijs = 0

for (let i = 0; i < bestellingen.length; i++) {
    totaalPrijs += bestellingen[i].prijs;
}

// De totaalprijs berekenen met .reduce()

/* 
In tegenstelling tot .map() en .filter() heeft .reduce() twee parameters nodig.
De eerste hiervan is de som die die moet berekenen, de tweede is elk item uit
de array (de enige die je zou invullen bij .map() of .filter()).
*/

let totaalPrijs = bestellingen.reduce(function(som, bestelling) {
    // console.log("Het bedrag is nu: ", som, bestelling); 
    return som + bestelling.prijs;
}, 0) 

/* 
De 0 is hier het startpunt van de totaalPrijs, .reduce() itereert over de bestellingen array en voegt
bij elke iteratie de prijs toe, zodat je uiteindelijk een totaalbedrag krijgt. Om dit duidelijk te
maken kan je de console.log() boven de return statement uncommenten.
*/

// De bovenstaande functie kunnen we weer als arrow function neerzetten:
let totaalPrijs = bestellingen.reduce((som, bestelling) => som + bestlling.prijs, 0);