const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let listitems = document.querySelectorAll('li');
    let body = document.querySelector('body');

    for (let i = 0; i < listitems.length; i++)

    {
        listitems[i].style.color = "red";
        listitems[i].classList.add('listitem');
    }

    let img = document.createElement("img")
    img.setAttribute("src", "../../../Labo_3/Personal_HomePage_Assignment/image/Schermafbeelding%202025-10-07%20170705.png")
    body.append(img)
}
window.addEventListener("load", setup);






