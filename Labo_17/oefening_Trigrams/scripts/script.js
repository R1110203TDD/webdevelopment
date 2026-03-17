const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen

let tekst = document.getElementById("tekst").textContent;
let antwoord = ""


for (let i = 0; i < tekst.length-2; i++)
{

        antwoord += tekst.substring(i,i+3) + " "


}
document.getElementById("antwoord").innerHTML = antwoord;
console.log(antwoord)



}


window.addEventListener("load", setup);