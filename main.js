//prezzo orario
const sviluppoBackEnd = 20.5;
const sviluppoFrontEnd = 15.3;
const projectAnalist = 33.6;

//codici sconti
let listaSconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


//calcolo prezzo lavoro
function calcoloPrezzo() {
    event.preventDefault();

    let ore = document.getElementById("ore").value; //ore richieste
    ore = parseInt(ore);
    console.log("ore " + ore);

    let lavoro = document.getElementById("lavoro").value; //tipo di lavoro
    console.log(typeof lavoro);
    console.log("lavoro " + lavoro);

    let valoreSconto = sales(listaSconti);
    console.log("valore sconto " + valoreSconto);

    if (valoreSconto == null) {
        alert("Codice sconto inserito non valido.");
    }
    let prezzo, prezzofin;
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
    console.log("prezzo finale " + prezzofin);

    document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzofin + "\u20AC";
}


//funzione per capire se ha diritto ad uno sconto
function sales(lista) { 

    let sconto = document.getElementById("sconto").value; //codice sconto
    sconto = sconto.toUpperCase();
    console.log("nome sconto " + sconto);

    let valoreSconto = 0;

    let bool = false; 
    for (let i = 0; i < lista.length; i++){//verifica del codice sconto


        if (sconto == lista[i]) { //lo sconto esiste

            //ha diritto ad uno sconto
            bool = true;
            valoreSconto = 0.25;
            break;

        } else if (sconto == "") { //casella sconto vuoto
            
            bool = true;
            break;

        }

    } //se non trova il codice, esce dal for con valoreSconto = 0 e bool = false

    if (bool == false) {
        valoreSconto = null;
    }
    return valoreSconto;
}