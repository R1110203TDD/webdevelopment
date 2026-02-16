const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    document.getElementById("calculate").addEventListener("click", calculate);
}

const calculate = () =>
{
    const input = document.getElementById("input").value;
    const arg1 = document.getElementById("arg1").value;
    const arg2 = document.getElementById("arg2").value;
    let  output = document.getElementById("output");
    output.textContent = input.substring(arg1,arg2);

};



window.addEventListener("load", setup);