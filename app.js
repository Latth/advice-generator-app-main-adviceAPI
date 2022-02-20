function generateAdvice() {

    let randomNum = Math.floor(Math.random() * 224);

    var apiLink = `https://api.adviceslip.com/advice/${randomNum}`;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var text = document.querySelector("#advice-text");
            var textID = document.querySelector("#advice-id");
            text.innerHTML= `"${data.slip.advice}"`;
            textID.innerHTML= `ADVICE #${data.slip.id}`;
        }
    };


    xhttp.open("GET", apiLink, true);
    xhttp.send();

}

document.querySelector('#advice-get').addEventListener('click', generateAdvice);