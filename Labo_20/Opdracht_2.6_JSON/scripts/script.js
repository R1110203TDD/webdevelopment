const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen

        let student = {
            voornaam: "Jan",
            familienaam: "Janssens",
            geboorteDatum: new Date("1993-12-31"),
            adres: { // een object
                straat: "Kerkstraat 13",
                postcode: "8500",
                gemeente: "Kortrijk"
            },
            isIngeschreven: true,
            namenVanExen:
                ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
            aantalAutos: 2

        }

            let textJSON = JSON.stringify(student)

        console.log(textJSON)



    //deel 2
    let omvorming  = JSON.parse(textJSON)

    console.log(omvorming.voornaam)
    console.log(omvorming.familienaam)
    console.log(omvorming.geboorteDatum)
    console.log(omvorming.adres.straat)
    console.log(omvorming.adres.postcode)
    console.log(omvorming.adres.gemeente)
    console.log(omvorming.isIngeschreven)
    console.log(omvorming.namenVanExen)
    console.log(omvorming.aantalAutos)
}
window.addEventListener("load", setup);