const setup = () => {
let sliders = document.getElementsByClassName("slider");

for (let i = 0; i < sliders.length; i++)
{
    sliders[i].addEventListener("change",sync)
    sliders[i].addEventListener("input", sync)
}

savebtn = document.getElementById("btnSave")
    savebtn.addEventListener("click", save)


    sync()

// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
}
const sync = () =>
{
    let rood = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;


    document.getElementById("lblRed").innerHTML =rood;
    document.getElementById("lblGreen").innerHTML =green;
    document.getElementById("lblBlue").innerHTML =blue;


    let swatch = document.getElementById("swatch");

    swatch.style.backgroundColor = "rgb( "+ rood + ", " + green + ", " + blue + ")";

}


const save = () =>
{
 let  box = aanmakenSwatch()
    let rood = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    box.setAttribute("rood", rood)
    box.setAttribute("green", green)
    box.setAttribute("blue", blue)
    box.addEventListener("click", oldColor)

    box.style.backgroundColor = "rgb( "+ rood + ", " + green + ", " + blue + ")";

  let  cirkel = document.getElementById("swatchComponents");
   cirkel.appendChild(box)


}

const aanmakenSwatch = () =>
{

 let   box = document.createElement("div");
    box.className = "swatch";

  let  btnDelete = document.createElement("input");


    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "x");
    btnDelete.addEventListener("click", deleteknop)

    box.appendChild(btnDelete);
    return box
}

const deleteknop = (event) =>
{
   let cirkel = document.getElementById("swatchComponents");
  let   btndelete = event.target;
    let box = btndelete.parentNode;

    let swatch = document.getElementById("swatch");

    swatch.style.backgroundColor = "rgb( 128 , 128, 128)";
    cirkel.removeChild(box)
}

const oldColor = (event) =>
{
    let box = event.target;
    let red = box.getAttribute("rood");
    let green = box.getAttribute("green");
    let blue = box.getAttribute("blue");

     document.getElementById("sldRed").value = red;
     document.getElementById("sldGreen").value = green ;
     document.getElementById("sldBlue").value = blue;

    let swatch = document.getElementById("swatch");

    swatch.style.backgroundColor = "rgb( "+ red + ", " + green + ", " + blue + ")";
    document.getElementById("lblRed").innerHTML =red;
    document.getElementById("lblGreen").innerHTML =green;
    document.getElementById("lblBlue").innerHTML =blue;

}

window.addEventListener("load", setup);