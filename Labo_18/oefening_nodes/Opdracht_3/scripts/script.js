const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen

    let but = document.querySelector("button");


        but.addEventListener('click', button)


}
let button = (event) =>
{
    let div = document.querySelector('div');
    let p = document.createElement("p");
    p.textContent = "test 1234";
    div.appendChild(p);

}


window.addEventListener("load", setup);






