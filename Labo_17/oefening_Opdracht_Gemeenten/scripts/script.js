const setup = () => {
    document.getElementById("startButton").addEventListener("click", Toevoegen);
};
const Toevoegen = () => {
    const dropdown = document.getElementById("gemeente");
    const gemeenten = lijstMaken();
    gemeenten.sort().reverse();


    gemeenten.forEach((municipality) => {
        const option = document.createElement("option");
        option.text = municipality;
        option.value = municipality;
        dropdown.add(option, 0);
    });
};
const lijstMaken = () => {
    const lijst = [];
    let keepCollecting = true;
    while (keepCollecting) {
        const input = prompt("Voeg een gemeente toe");
        if (input && input !== "stop") {
            lijst.push(input);
        } else {
            keepCollecting = false;
        }
    }
    return lijst;
};
window.addEventListener("load", setup);