window.onload = function(){

    var appTens = document.getElementById("tens");
    var appSeconds = document.getElementById("seconds");
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset")
    var btnMark = document.getElementById("mark");
    var markUl = document.getElementById("mark-ul");
    var markId = 0;
    var tens = 0;
    var seconds = 0;
    var intervalo;




    btnStart.addEventListener("click", function(){
        clearInterval(intervalo);
        intervalo = setInterval(playTimer, 10)
    })

    btnStop.addEventListener("click", function(){
        clearInterval(intervalo);
        console.log("ok!")
    })

    btnReset.addEventListener("click", function(){
        clearInterval(intervalo)
        tens = 0;
        seconds = 0;
        markId = 0;
        appSeconds.innerHTML = "00";
        appTens.innerHTML = "00";
        while (markUl.hasChildNodes){
            markUl.removeChild(markUl.firstChild)
        }
    })


    btnMark.addEventListener("click", function(){
        markId++;
        let id = document.createElement('li');
        let mark = document.createElement('li');
        let div = document.createElement("div");
        let idText = document.createTextNode("#" + markId);
        let markText;
        console.log(seconds);
        



        if(seconds > 9){
            if (tens <= 9){
                markText = document.createTextNode(seconds + ":" + "0" + tens);
            }else{
                markText = document.createTextNode(seconds + ":" + tens);
            }


        }else{
            if (tens <= 9){
                markText = document.createTextNode("0" + seconds + ":" + "0" + tens);
            }else if(tens == 0 && seconds ==0){
                markText = document.createTextNode("00:00")

            } else{
                markText = document.createTextNode("0" + seconds + ":" + tens);
                console.log(seconds)
            }
            
        }

        id.appendChild(idText);
        mark.appendChild(markText);
        div.appendChild(id)
        div.appendChild(mark)
        markUl.appendChild(div)

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

        if (seconds > 9){
            appSeconds.innerHTML = seconds;
        }
    }









}