window.onload = function(){

    var appTens = document.getElementById("tens");
    var appSeconds = document.getElementById("seconds");
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset")
    var btnMark = document.getElementById("mark");
    var tens = 0;
    var seconds = 0;
    var intervalo;




    btnStart.addEventListener("click", function(){
        clearInterval(intervalo);
        setInterval(playTimer, 10)
    })

    btnStop.addEventListener("click", function(){
        clearInterval(intervalo)
    })

    function playTimer() {
        tens++;


        if (tens <= 9){
            appTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appTens.innerHTML = tens;
        }

        if (tens > 99){
            seconds++
            tens = 0;
            appTens.innerHTML = "0" + tens;
            appSeconds.innerHTML = "0" + seconds;
        }
    }









}