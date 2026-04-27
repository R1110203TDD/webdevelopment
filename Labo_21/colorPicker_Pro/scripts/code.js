// GLOBALE VARIABELEN
let lijstr = [];
let lijstG = [];
let lijstB = [];

// SETUP
const setup = () => {
    const sliders = document.querySelectorAll(".slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", sync);
        sliders[i].addEventListener("input", sync);
    }

    document.getElementById("btnSave").addEventListener("click", save);

    sync();
    kleurenToevoegen();
};

// SYNC - sliders naar swatch
const sync = () => {
    const { r, g, b } = getRGB();

    document.getElementById("lblRed").innerHTML   = r;
    document.getElementById("lblGreen").innerHTML = g;
    document.getElementById("lblBlue").innerHTML  = b;

    setSwatch("swatch", r, g, b);
};

// HELPERS
const getRGB = () => {
    const obj = {
        r: document.getElementById("sldRed").value,
        g: document.getElementById("sldGreen").value,
        b: document.getElementById("sldBlue").value
    };
    return obj;
}

const setSliders = (r, g, b) => {
    document.getElementById("sldRed").value       = r;
    document.getElementById("sldGreen").value     = g;
    document.getElementById("sldBlue").value      = b;
    document.getElementById("lblRed").innerHTML   = r;
    document.getElementById("lblGreen").innerHTML = g;
    document.getElementById("lblBlue").innerHTML  = b;
};

const setSwatch = (id, r, g, b) => {
    document.getElementById(id).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

const maakSwatchDiv = (r, g, b) => {
    const div = document.createElement("div");
    div.className = "swatch";
    div.setAttribute("rood",  r);
    div.setAttribute("green", g);
    div.setAttribute("blue",  b);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    div.addEventListener("click", oldColor);

    const btnDelete = document.createElement("input");
    btnDelete.setAttribute("type",  "button");
    btnDelete.setAttribute("value", "x");
    btnDelete.addEventListener("click", deleteknop);
    div.appendChild(btnDelete);

    return div;
};

// OPSLAAN
const save = () => {
    const { r, g, b } = getRGB();
    const div = maakSwatchDiv(r, g, b);
    document.getElementById("swatchComponents").appendChild(div);
    arrayVernieuwen();
};
const startPos = ()=>
{
    setSwatch("swatch", 128, 255, 128);
    setSliders(128,255,128);

}

// VERWIJDEREN
const deleteknop = (event) => {
    event.stopPropagation();
    const box = event.target.parentNode;
    document.getElementById("swatchComponents").removeChild(box);
    startPos()
    arrayVernieuwen();
};

// OUDE KLEUR LADEN
const oldColor = (event) => {
    const box = event.currentTarget;
    const r = box.getAttribute("rood");
    const g = box.getAttribute("green");
    const b = box.getAttribute("blue");

    setSliders(r, g, b);
    setSwatch("swatch", r, g, b);
};

// LOCALSTORAGE - schrijven
const arrayVernieuwen = () => {
    lijstr = [];
    lijstG = [];
    lijstB = [];

    const divkes = document.querySelectorAll("#swatchComponents div");
    for (let i = 0; i < divkes.length; i++) {
        lijstr.push(divkes[i].getAttribute("rood"));
        lijstG.push(divkes[i].getAttribute("green"));
        lijstB.push(divkes[i].getAttribute("blue"));
    }

    localStorage.setItem("lijstr", JSON.stringify(lijstr));
    localStorage.setItem("lijstG", JSON.stringify(lijstG));
    localStorage.setItem("lijstB", JSON.stringify(lijstB));
};

// LOCALSTORAGE - lezen bij opstart
const kleurenToevoegen = () => {
    if (localStorage.getItem("lijstr") === null) return;

    lijstr = JSON.parse(localStorage.getItem("lijstr")) || [];
    lijstG = JSON.parse(localStorage.getItem("lijstG")) || [];
    lijstB = JSON.parse(localStorage.getItem("lijstB")) || [];

    const container = document.getElementById("swatchComponents");
    for (let i = 0; i < lijstr.length; i++) {
        container.appendChild(maakSwatchDiv(lijstr[i], lijstG[i], lijstB[i]));
    }
};

// START
window.addEventListener("load", setup);