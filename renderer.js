// renderer.js

let tempo = (25*60);
let interval;

document.addEventListener("DOMContentLoaded", function() {
    let setTime = document.getElementById("time");


    function start() {
        sTempo();
        interval = setInterval(sTempo, 1000);
    }

    function stop(){
        clearInterval(interval);
    }

    function reset(){
        tempo = (25*60);
        let minutos = Math.floor(tempo/60);
        let minutosF = String(minutos).padStart(2, '0');

        let segundos = (tempo % 60);
        let segundosF = String(segundos).padStart(2, '0');

        setTime.innerHTML = `${minutosF}:${segundosF}`;
        clearInterval(interval);

    }

    function sTempo() {
        let minutos = Math.floor(tempo/60);
        let minutosF = String(minutos).padStart(2, '0');

        let segundos = (tempo % 60);
        let segundosF = String(segundos).padStart(2, '0');

        setTime.innerHTML = `${minutosF}:${segundosF}`;
        tempo -= 1;
        console.log("ola")
    }


    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", start);

    const stopButton = document.getElementById("stopButton");
    stopButton.addEventListener("click", stop);

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", reset);
});



