var hora = document.getElementById("hora");
var minuto = document.getElementById("minuto");
var segundo = document.getElementById("segundo");

var relogio = setInterval(function time() {
    var data_now = new Date();
    var hr = data_now.getHours();
    var min = data_now.getMinutes();
    var sec = data_now.getSeconds();

    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = sec;
}, 1000);