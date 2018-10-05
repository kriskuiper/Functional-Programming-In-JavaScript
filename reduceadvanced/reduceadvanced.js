import fs from 'fs';

fs.readFileSync('data.txt', 'utf8')
    .trim() // Haal de laatste enter weg uit het .txt bestand
    .split('\n') // Split de string in een array
    .map(line => line.split('\t'))
    .reduce((klant) => {
        klanten[line[0]] = klanten[line[0]] || []; // als er al een regel is bouw je hier op voort, anders start je vanaf een lege array
        klanten[line[0]].push({
            naam: line[1],
            prijs: line[2],
            aantal: line[3],
        });
        return klanten;
    }, {/* dit is een leeg object */}); // neem een leeg object als startpunt