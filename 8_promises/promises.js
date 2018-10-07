/*
Een promise is, zoals het woord al zegt, een belofte die danwel vervuld wordt (resolve) of niet vervuld (reject).
Hoe het precies werkt zie je onderstaand. 

Een promise zit eigenlijk zo in elkaar dat als dit ene (bijv het laden van een afbeelding) gedaan is, doe 
dan pas het volgende. Dat is hetzelfde als een callback functie alleen dan een stuk eleganter en meer
modular.
*/

// Een voorbeeld van het laden van afbeeldingen met callbacks:

// Voeg een afbeelding toe aan de HTML
let voegAfbeeldingToe = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    document.body.appendChild(imgElement);
}

// De callback function voor het laden van de afbeelding
function laadAfbeeldingCallbacked(url, callback) {
    let afbeelding = new Image();

    afbeelding.onload = () => {
        callback(null, afbeelding);
    }

    afbeelding.onerror = () => {
        let errorBericht = 'Sorry, de afbeelding kon niet geladen worden van: ' + url;
    callback(new Error(msg));
    }

    afbeelding.src = url;
}

laadAfbeeldingCallbacked('images/kat1.jpeg', (error, img1) => {
    if (error) throw error; // Dit is best wel super ruk, je moet dus op elke call checken of er een error is...
    voegAfbeeldingToe(img1.src); // Als dit voorbij is doe dan het volgende:
    laadAfbeeldingCallbacked('images/kat2.jpeg', (error, img2) => {
        if (error) throw error;
        voegAfbeeldingToe(img2.src); // En dan het volgende:
        laadAfbeeldingCallbacked('images/kat3.jpeg', (error, img3) => {
            if (error) throw error;
            voegAfbeeldingToe(img3.src);
        });
    });
});

/*
De bovenstaande code is extreem klote om überhaupt al te schrijven, laat staan fixen. Nou is het nog
redelijk te lezen omdat het maar drie levels diep zit, maar stel je voor dat je 20 callbacks achter
elkaar hebt. De code kan ook nog nieteens paralel aan elkaar uitgevoerd worden, de tweede afbeelding
wordt pas geladen als de eerste afbeelding geladen is. Daarom kan je dus beter promises gebruiken.
*/

// De laadAfbeelding functie op de 'promise manier'.

function laadAfbeelding(url) {
    return new Promise((resolve, reject) => { 
            // De parameters resolve en reject zijn beiden functies. De resolve functie roep je aan
            // wanneer je belofte nagekomen is (a.k.a. je success value), de reject functie roep je
            // aan wanneer je belofte niet is nagekomen (a.k.a. je )
            
        let afbeelding = new Image();

        afbeelding.onload = () => {
            resolve(afbeelding); 
        }
        // De resolve functie wordt dus ook alleen met de succeswaarde als parameter aangeroepen.

        afbeelding.onerror = () => {
            let errorBericht = 'Sorry, de afbeelding kon niet geladen worden van: ' + url;
        reject(new Error(errorBericht));
        }
        // De reject functie wordt echter enkel aangeroepen met de foutwaarde als parameter.

        afbeelding.src = url;
    });
}

// Onderstaand wordt de nieuwe laadAfbeelding 'promise manier' functie aangeroepen
laadAfbeelding('images/kat1.jpeg').then((img1) => {
    voegAfbeeldingToe(img1.src);
    laadAfbeelding('images/kat2.jpeg').then((img2) => {
        voegAfbeeldingToe(img2.src); // En dan het volgende:
        laadAfbeelding('images/kat3.jpeg').then((img3) => {
            voegAfbeeldingToe(img3.src);
        });
    });
});

/*
De bovenstaande code is nog steeds aardig onleesbaar, het voordeel van promises is
dat we het ook zo neer kunnen zetten:
*/

Promise.all([ // Dit zijn alle promises
    laadAfbeelding('images/kat1.jpeg'),
    laadAfbeelding('images/kat2.jpeg'),
    laadAfbeelding('images/kat3.jpeg'),
]).then((afbeeldingen) => { // Als je alle afbeeldingen geladen hebt, doe dan dit voor elk van de afbeeldingen:
    afbeeldingen.forEach(afb => voegAfbeeldingToe(afb.src));
}).catch(error) => {
    // Doe error handling dingen.
}
