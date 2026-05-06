// Globale variabelen
let commands = ["i", "g", "x", "y", "r"];

const links = {
    g: "http://www.google.com/search?q=",
    y: "http://www.youtube.com/results?search_query=",
    x: "https://x.com/hashtag/",
    i: "http://www.instagram.com/explore/tags/"
};

// Mapping van command naar title
const commandTitles = {
    i: "instagram",
    g: "google",
    x: "x",
    y: "Youtube"
};

const setup = () => {
    document.querySelector('#opslaan').addEventListener('click', opslaan);
    document.querySelector('#leeg').addEventListener('click', arraysleegmaken);
    document.querySelector('#sorteren').addEventListener('click', sorteren);
    beginSituatie();
};

const opslaan = () => {
    let invulVeld = document.getElementById("invulVeld");
    if (!controleInput(invulVeld)) {
        alert("geef een geldig command op volgens het voorbeeld. de commands zijn i, g, x, y");
        return;
    }

    let command = invulVeld.value.substring(1, 2);

    if (command === "r") {
        location.reload();
        return;
    }

    let title = commandTitles[command];
    let tekst = invulVeld.value.substring(3).trim();

    linkOpenen(title, tekst);
    aanmakenSwatchs(title, tekst);
};

const aanmakenSwatchs = (title, tekst) => {
    let container = document.getElementById('container');
    let swatch = document.createElement('div');
    swatch.style.backgroundColor = randomKleur();
    swatch.setAttribute('class', 'onderdeel');

    let titlew = document.createElement('h3');
    let textw = document.createElement('p');
    titlew.textContent = title;
    textw.textContent = tekst;

    let button = aanmakenButton();
    button.addEventListener('click', terugbutton);

    swatch.appendChild(titlew);
    swatch.appendChild(textw);
    swatch.appendChild(button);
    container.appendChild(swatch);

    opslagOpslaan();
};

const aanmakenButton = () => {
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'GO!');
    button.style.backgroundColor = randomKleur();
    return button;
};

const randomKleur = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

const controleInput = (inputveld) => {
    if (inputveld.value.substring(0, 1) !== "/") return false;
    return commands.includes(inputveld.value.substring(1, 2));
};

// Één centrale functie om opslag bij te werken vanuit de DOM
const opslagOpslaan = () => {
    let swatches = document.getElementsByClassName("onderdeel");
    let opslag = Array.from(swatches).map(swatch => ({
        title: swatch.firstChild.textContent,
        tekst: swatch.childNodes[1].textContent
    }));
    localStorage.setItem("opslag", JSON.stringify(opslag));
};

const getOpslag = () => JSON.parse(localStorage.getItem("opslag")) || [];

const beginSituatie = () => {
    getOpslag().forEach(item => aanmakenSwatchs(item.title, item.tekst));
};

const linkOpenen = (title, tekst) => {
    const urls = {
        google: links.g + tekst,
        x: links.x + tekst,
        Youtube: links.y + tekst.replaceAll(" ", "+"),
        instagram: links.i + tekst + "/"
    };
    if (urls[title]) window.open(urls[title]);
};

const terugbutton = (event) => {
    let box = event.target.parentNode;
    linkOpenen(box.firstChild.textContent, box.childNodes[1].textContent);
};

const arraysleegmaken = () => {
    localStorage.setItem("opslag", JSON.stringify([]));
    location.reload();
};

const sorteren = () => {
    let opslag = getOpslag();
    if (!opslag.length) return;

    let dropdown = document.getElementById("dropdown");
    let asc = dropdown.value === "A-Z";

    opslag.sort((a, b) =>
        (asc ? 1 : -1) * (a.title.localeCompare(b.title) || a.tekst.localeCompare(b.tekst))
    );

    localStorage.setItem("opslag", JSON.stringify(opslag));
    location.reload();
};

window.addEventListener("load", setup);