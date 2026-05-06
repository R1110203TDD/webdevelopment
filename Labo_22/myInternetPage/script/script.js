//globale variabelen
let titles = [];
let texts = [];
let commands = ["i","g","x","y","r"]
let opslag = []


//variable
let links =
    {
        g:"http://www.google.com/search?q=",
        y:"http://www.youtube.com/results?search_query=",
        x:"https://x.com/hashtag/",
        i:"http://www.instagram.com/explore/tags/"
    }


const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
let opslaanButton = document.querySelector('#opslaan');
opslaanButton.addEventListener('click', opslaan);

let sorteerbutton = document.querySelector('#sorteren');
    sorteerbutton.addEventListener('click', sorteren)
beginSituatie()
}


const opslaan = ()=>
{
   let invulVeld = document.getElementById("invulVeld");
    if(controleInput(invulVeld) === true)
    {
        let title;
        let tekst = invulVeld.value.substring(3).trim();
        let site;
        switch(invulVeld.value.substring(1,2))
        {
            case "i":

                title= "instagram"
                break;
            case "g":

                title = "google"
                break;
            case "x":

                title = "x"
                break;
            case "y":

                title = "Youtube"
                break;
            case "r":

                    arraysleegmaken();
                    return;
                    break;
                default:
                    alert("ongeldig command input");
                    break;



        }
        linkOpenen(title,tekst);
        aanmakenSwatchs(title, tekst)

    }
    else
    {
        alert("geef een geldig command op volgens het voorbeeld. de commands zijn i, g, x, y")
    }


}



const aanmakenSwatchs = (title, tekst)=>
{
   let container = document.getElementById('container');
    let swatch = document.createElement('div');



    swatch.style.backgroundColor = randomKleur();
    swatch.setAttribute('class', 'onderdeel');
    let button = aanmakenButton();
    let titlew = document.createElement('h3');
    let textw = document.createElement('p');
    titlew.textContent = title;
    textw.textContent = tekst;


    swatch.appendChild(titlew);
    swatch.appendChild(textw);
    swatch.appendChild(button);

    container.appendChild(swatch);
    button.addEventListener('click', terugbutton);
    arraysVernieuwen();
}

const aanmakenButton = () =>
{
    let button = document.createElement('input');


    button.setAttribute('type', 'button');
    button.setAttribute('value', 'GO!');
    button.style.backgroundColor = randomKleur();


    return button;
}




const randomKleur = () =>
{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return "rgb(" + red + "," + green + "," + blue + ")";


}


const controleInput = (inputveld) => {
    if (inputveld.value.substring(0,1) === "/")
    {
        for( let i = 0; i < commands.length; i++)
        {
            if(commands[i] === inputveld.value.substring(1,2))
            {
                return true
            }
        }
    }
    else
    {
        return false;
    }
}

const arraysVernieuwen = () =>
{

    opslag = [];

    let swatches = document.getElementsByClassName("onderdeel");
    for( let i = 0; i < swatches.length; i++)
    {
        let variable =
            {
                title:swatches[i].firstChild.textContent,
                tekst: swatches[i].childNodes[1].textContent
            }
        titles.push(swatches[i].firstChild.textContent);
        texts.push(swatches[i].childNodes[1].textContent);
        opslag.push(variable);
    }


    localStorage.setItem("opslag", JSON.stringify(opslag));

}
const beginSituatie = ()    =>
{
    if(localStorage.getItem("opslag") == null) return;

    let opslag =JSON.parse( localStorage.getItem("opslag")) || [];

    for( let i = 0; i < opslag.length; i++)
    {
        aanmakenSwatchs(opslag[i].title, opslag[i].tekst);
    }


}
const linkOpenen = (title, tekst) =>
{
    switch(title){
    case "google" :
        window.open(links.g + tekst)
    break;
        case "x":
                window.open(links.x + tekst)
            break;
        case "Youtube":
                    window.open(links.y + tekst.replaceAll(" ","+"))
            break;
                    case "instagram":
                        window.open(links.i + tekst + "/")
            break;

    }

}
const terugbutton = (event) =>
{
    let box= event.target.parentNode;
    let title = box.firstChild.textContent;
    let tekst = box.childNodes[1].textContent;
    linkOpenen(title, tekst);
}
const arraysleegmaken = () =>
{

    let opslag = [];

    localStorage.setItem("opslag", JSON.stringify(opslag));
    location.reload();
}

const sorteren = () => {
    if (localStorage.getItem("opslag") == null) return;

    opslag = JSON.parse(localStorage.getItem("opslag"));
    let dropdown = document.getElementById("dropdown");

    if (dropdown.value === "A-Z") {
        opslag.sort((a, b) =>
            a.title.localeCompare(b.title) || a.tekst.localeCompare(b.tekst)
        );
    } else {
        opslag.sort((a, b) =>
            b.title.localeCompare(a.title) || b.tekst.localeCompare(a.tekst)
        );
    }

    localStorage.setItem("opslag", JSON.stringify(opslag));
    location.reload();
}

window.addEventListener("load", setup);





