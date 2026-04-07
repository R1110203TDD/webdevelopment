let huidigeIndex = -1;
let personen = [


];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    let nieuwPersoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value),
    };

    if (huidigeIndex === -1) {
        if(!controleEmail()){
        personen.push(nieuwPersoon);    // nieuwe persoon
        }
    } else {
        personen[huidigeIndex] = nieuwPersoon;  // persoon bewerken
    }

    toonPersonenInLijst(); // lijst updaten
};





const toonPersonenInLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";


    personen.forEach((p, index) => {
        let option = document.createElement("option");
        option.textContent = p.voornaam + " " + p.familienaam;
        option.value = index;
        lst.appendChild(option);
    });
}

//controle dat je geen 2 de zelfde personen aanmaakt.
const controleEmail = () =>
{
    let i = 0;
    let gevonden = false
    while(i < personen.length && !gevonden)
    {
        if(personen[i].email === document.getElementById("txtEmail").value)
        {
            gevonden = true;
        }
        else
        {
            i ++
        }

    }
    return gevonden;

}





// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    huidigeIndex = -1;

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener("change", (e) => {
        let index = e.target.value;
        huidigeIndex = parseInt(index);
        let p = personen[huidigeIndex];

        document.getElementById("txtVoornaam").value = p.voornaam;
        document.getElementById("txtFamilienaam").value = p.familienaam;
        document.getElementById("txtGeboorteDatum").value = p.geboorteDatum.toISOString().substring(0, 10);
        document.getElementById("txtEmail").value = p.email;
        document.getElementById("txtAantalKinderen").value = p.aantalKinderen;
    });

    toonPersonenInLijst();
};

window.addEventListener("load", setup);