//prezzo orario
const sviluppoBackEnd = 20.5;
const sviluppoFrontEnd = 15.3;
const projectAnalist = 33.6;

let listaSconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//calcolo prezzo lavoro
function calcoloPrezzo() {
    event.preventDefault();

    let ore = document.getElementById("ore").value; //ore richieste
    ore = parseInt(ore);
    console.log(typeof ore);
    console.log(ore);

    let lavoro = document.getElementById("lavoro").value; //tipo di lavoro
    console.log(typeof lavoro);
    console.log(lavoro);

    let sconto = document.getElementById("sconto").value; //codice sconto
    console.log(typeof sconto);

    let prezzofin;

    switch (lavoro) {
        case "1": //sviluppo BackEnd
            prezzofin = ore * sviluppoBackEnd;
            
            break;
        case "2": //sviluppo FrontEnd
            prezzofin = ore * sviluppoFrontEnd;

            break;
        case "3":
            prezzofin = ore * projectAnalist;

            break;
    }

    prezzofin = prezzofin.toFixed(2);
    console.log(prezzofin);

    document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzofin + "\u20AC";
}