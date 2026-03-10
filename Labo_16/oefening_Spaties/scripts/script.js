const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
        document.getElementById("button").addEventListener("click", maakMetSpaties )
}

const maakMetSpaties = () =>
{
    let tekst = document.getElementById("input").value;
    let tekstZS = tekst.replace(" ","");
    let antwoord = tekstZS.split("").join(" ")
    document.getElementById("span").innerHTML =  antwoord;
    console.log(antwoord);

}
window.addEventListener("load", setup);