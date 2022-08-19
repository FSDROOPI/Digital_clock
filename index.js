const hourVar = document.getElementById("hour");
const minuteVar = document.getElementById("minutes");
const secondsVar = document.getElementById("seconds");
const ampmvar = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }

    hourVar.innerText = h;
    minuteVar.innerText = m;
    secondsVar.innerText = s;
    ampmvar, (innerText = ampm);
    setTimeout(() =>{
        updateClock();
    },1000)
}

updateClock ();