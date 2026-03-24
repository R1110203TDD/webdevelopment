const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
let p = document.querySelectorAll('p')[0];


p.textContent = "Goed gedaan"
}
window.addEventListener("load", setup);






