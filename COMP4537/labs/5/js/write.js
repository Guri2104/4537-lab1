function writeDB(){
    const xhttp = new XMLHttpRequest();
    const name = document.getElementById("name").value;
    let score = document.getElementById("score").value;

    if(Number.isInteger(score) === false){
        score = 0;
    }
    
    xhttp.open("GET", "https://karelc.com/COMP4537/labs/5/writeDB?name=" + name + "&score=" + score, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("result-msg").innerHTML = xhttp.responseText
        }
    }
}