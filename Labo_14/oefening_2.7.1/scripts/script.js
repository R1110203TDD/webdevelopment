const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);



}
const kopieer = () => {
    let txt = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    txt.innerHTML = tekst;
    console.log(tekst);
};
    window.addEventListener("load", setup);