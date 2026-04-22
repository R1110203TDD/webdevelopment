const setup = () => {
let sliders = document.getElementsByClassName("slider");


for (let i = 0; i < sliders.length; i++)
{
    sliders[i].addEventListener("change", update)
    sliders[i].addEventListener("input", update)

}
update()

let button = document.getElementById("save");
button.addEventListener("click", save)
}
const update = () =>
{
    let rood= document.getElementById("sldRed").value
    let groen = document.getElementById("sldGreen").value
    let blauw = document.getElementById("sldBlue").value

document.getElementById("lblRed").innerHTML = rood;
    document.getElementById("lblGreen").innerHTML = groen;
    document.getElementById("lblBlue").innerHTML = blauw;

     let back =document.getElementById("swatch")
    back.style.backgroundColor="rgb("+ rood + "," + groen + ","+ blauw + ")";
}

const save = () =>
{
    let rood= document.getElementById("sldRed").value
    let groen = document.getElementById("sldGreen").value
    let blauw = document.getElementById("sldBlue").value

let opslag = document.getElementById("opslag")

   let box = aanmakenNewEl()
    box.setAttribute("waardeRood", rood);
    box.setAttribute("waardeGroen", groen);
    box.setAttribute("waardeBlauw", blauw);

    box.style.backgroundColor="rgb("+ rood + "," + groen + ","+ blauw + ")";

    opslag.appendChild(box)
}


const aanmakenNewEl = () =>
{
    let newEl =document.createElement("div")
    newEl.setAttribute("class", "opslagEL")

    newEl.addEventListener("click", heropvragen)




    let delBut = document.createElement("input")
    delBut.setAttribute("type", "button")
    delBut.setAttribute("value", "X")
    delBut.addEventListener("click", delButn)

    newEl.appendChild(delBut)


    return newEl
}

const delButn = (event) =>
{
let opslag = document.getElementById("opslag")
    let button = event.target
    let box = button.parentNode

    opslag.removeChild(box)


}


const heropvragen = (event) =>
{
    let box = event.target
    let rood = box.getAttribute("waardeRood")
    let groen = box.getAttribute("waardeGroen")
    let blauw = box.getAttribute("waardeBlauw")


document.getElementById("sldRed").value = rood
document.getElementById("sldGreen").value = groen
document.getElementById("sldBlue").value = blauw
    let back = document.getElementById("swatch")


    back.style.backgroundColor = "rgb("+ rood + "," + groen + ","+ blauw + ")";

    document.getElementById("lblRed").innerHTML = rood;
    document.getElementById("lblGreen").innerHTML = groen;
    document.getElementById("lblBlue").innerHTML = blauw;

}
window.addEventListener("load", setup);



