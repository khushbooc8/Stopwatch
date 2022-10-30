//define vars to hold im values

let seconds = 0;
let minutes = 0;
let hours = 0;

let DispSec = 0;
let DespMin = 0;
let DispHr = 0;


//define var to hold etInterval() function
let interval = null;

let pressed = "stopped";


//the function that runs the stop watch; no parameters.
function stopWatch(){

    seconds++;

    if (seconds/60 == 1){
        seconds = 0;
        minutes++;

        if (minutes/60 == 1){
            minutes = 0;
            hours++;
            
        }

    }


//if any values are only one digit(ie, 0 to 9, add a leading zero to the value)

    if (seconds<10){
        DispSec = "0" + seconds.toString();
    } else{
        DispSec = seconds;
    }

    if (minutes<10){
        DispMin = "0" + minutes.toString();
    } else{
        DispMin = minutes;
    }

    if (hours<10){
        DispHr = "0" + hours.toString();
    } else{
        DispHr = hours;
    }


    //display values on screen, change every second
    document.getElementById("display").innerHTML = DispHr + ":" + DispMin + ":" + DispSec;
    
}





function startStop(){

    if (pressed == "stopped"){
    
        //start the stopwatch
        interval = window.setInterval(stopWatch, 1000);

        document.getElementById("startStopButton").innerHTML = "STOP";

        //pressed means stopwatch started 
        pressed = "started";


    }

    else{

        window.clearInterval(interval);
        document.getElementById("startStopButton").innerHTML = "START";
        pressed = "stopped";



    }

}


//reset function
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStopButton").innerHTML = "START";



}