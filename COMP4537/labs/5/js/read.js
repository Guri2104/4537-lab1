function readDB(){
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://karelc.com/COMP4537/labs/5/readDB", true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            const response = JSON.parse(xhttp.responseText);
            console.log(response);
            response.forEach(row => {
                document.getElementById("values").innerHTML += row["name"] + ": " + row["score"] + "<br>";
            });
        }
    }
}

window.onload = readDB;