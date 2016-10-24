var h1 = document.getElementById('display')
var start = document.getElementById('start')
var pause = document.getElementById('pause')
var clear = document.getElementById('clear')
var seconds = 0
var minutes = 0
var hours = 0
var interval = null

//my function to add time and correctly display once it reaches a certain level of time (i.e. when there's 60 seconds, and one minute, etc.)
function timeAddition() {
    seconds = seconds + 1
    if (seconds >= 60) {
        seconds = 0
        minutes++
        if (minutes >= 60) {
            minutes = 0
            hours++
        }
    }

    var sec = seconds.toFixed(0);
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (sec > 9 ? sec : "0" + seconds);
}


//start button
start.addEventListener('click', function() {
    interval = setInterval(timeAddition, 1000)
})


//clear button
clear.addEventListener('click', function() {
    clearInterval(interval);
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
})


//pause button
pause.addEventListener('click', function() {
    clearTimeout(interval)
})
