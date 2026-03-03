const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    const opvallends = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < opvallends.length; i++) {
        opvallends[i].classList.add("opvallend");
    }

};
window.addEventListener("load", setup);

