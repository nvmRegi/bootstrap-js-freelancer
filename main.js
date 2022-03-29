//prezzo orario
const sviluppoBackEnd = 20.5;
const sviluppoFrontEnd = 15.3;
const projectAnalist = 33.6;

//codici sconti
let listaSconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//dichiarazioni variabili
let ore, lavoro, prezzo, prezzofin, sconto, valoreSconto;

//calcolo prezzo lavoro
function calcoloPrezzo() {
    event.preventDefault();

    ore = document.getElementById("ore").value; //ore richieste
    ore = parseInt(ore);
    console.log(typeof ore);
    console.log(ore);

    lavoro = document.getElementById("lavoro").value; //tipo di lavoro
    console.log(typeof lavoro);
    console.log(lavoro);

    valoreSconto = sales();

    switch (lavoro) {
        case "1": //sviluppo BackEnd
            prezzo = (ore * sviluppoBackEnd);
            prezzofin = prezzo - (prezzo * valoreSconto);
            break;
        case "2": //sviluppo FrontEnd
            prezzo = ore * sviluppoFrontEnd;
            prezzofin = prezzo - (prezzo * valoreSconto);

            break;
        case "3":
            prezzo = ore * projectAnalist;
            prezzofin = prezzo - (prezzo * valoreSconto);
            
            break;
    }

    prezzofin = prezzofin.toFixed(2);
    console.log(prezzofin);

    document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzofin + "\u20AC";
}


//funzione per capire se ha diritto ad uno sconto
function sales() { 

    sconto = document.getElementById("sconto").value; //codice sconto
    sconto = sconto.toUpperCase();
    console.log(typeof sconto);
    console.log(sconto);

    valoreSconto = 0;

    for (let i = 0; i < listaSconti; i++){
        if (sconto == listaSconti[i]) {
            //ha diritto ad uno sconto
            valoreSconto = 0.25;
            break;
        }
    } //se non trova il codice, esce dal for con valoreSconto = 0

    return valoreSconto;
}