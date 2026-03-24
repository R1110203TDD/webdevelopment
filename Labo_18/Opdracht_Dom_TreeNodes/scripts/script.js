const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let p =document.getElementById("abc");
    let parent = p.parentNode
    let child = p.childNodes[0].nodeValue


    let childDoc = document.childNodes
    let  parentDoc = parent.parentNode

}
window.addEventListener("load", setup);






