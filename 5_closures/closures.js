/*
Functions zijn in JavaScript ook 'closures'. Dit houdt in dat de functie ook toegang heeft tot
variabelen die buiten de body van de functie gedeclareerd zijn.
*/

// Een voorbeeld:
let ik = 'Kris Kuiper';

function groetMij() {
    console.log('Hallo ' + ik + '!');
}

groetMij(); // deze functie print 'Hallo Kris Kuiper!' in de console.

ik = 'Henk Fledderus';

groetMij(); // echter, deze call print 'Hallo Henk Fledderus' in de console omdat de variabele aangepast is.

/* 
Het laat dus zien dat functies, ondanks dat ze eerder gedeclareerd zijn, toegang hebben tot
die variabelen. Een verdere uitleg van hoe closures precies werken vind je hier:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/