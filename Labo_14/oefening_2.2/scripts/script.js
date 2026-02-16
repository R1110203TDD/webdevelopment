const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
}
window.addEventListener("load", setup);


let familieNamen = ['De Decker','snoer','De bosere','Vandoorne','De Grootte']
//oefening 1
console.log(familieNamen.length)
//oefening 2
console.log(familieNamen[0]);
console.log(familieNamen[2]);
console.log(familieNamen[4]);

//oefening 3
const VoegNaamToe = () => {
    let naam = prompt('Wat is je naam?')
    familieNamen.push(naam);
    console.log(naam);
}


//oefening 4
console.log(familieNamen);