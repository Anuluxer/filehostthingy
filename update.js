var UPDATEVER = 1.0
if (UPDATEVER > CURRVER) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("update").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "https://cdn.jsdelivr.net/gh/Anuluxer/filehostthingy@main/update.html", true);
    xhttp.send();
}
