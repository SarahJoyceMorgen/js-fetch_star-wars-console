console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {  // musste meine Function async schreiben
    const response = await fetch (url); //sonst funktioniert await nicht
    const data = await response.json()  //da fetch asyncron ist, müssen wir awaiten
                                        //warte auf die antwort des Servers. Json ist ein Datenformat wie Daten übertragen werden!
    console.log(data);
}

await fetchData();  //wäre auch ohne gegangen.
