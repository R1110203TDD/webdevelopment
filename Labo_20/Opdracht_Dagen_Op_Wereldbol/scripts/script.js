const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen

    let geboortedatum = new Date(2007,2,5);
    let datumV = new Date()
    let dagenMili = datumV - geboortedatum
    let dagen = dagenMili/1000/60/60/24



console.log(dagen)



}
window.addEventListener("load", setup);