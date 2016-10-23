//variables to use
 var count = 0
 var clearTime
 var seconds = 0
 var minutes = 0
 var hours = 0
 var clearState
 var secs
 var mins
 var getHours

 function stopWatch( ) {
     if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1;}
     mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );
     if ( minutes === 60 ) { minutes = 0; hours = hours + 1; }
     gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds );
}

var x = document .getElementById("timer");
     x.innerHTML = 'Time: ' + gethours + mins + secs
     secs = seconds++

clearTimeout( 'stop', setTimeout)

clearTime = setTimeout( startWatch( ), 1000 )

function startTime( ) {
     if ( seconds === 0 && minutes === 0 && hours === 0)
     var fulltime = document.getElementById( "fulltime")
     fulltime.style.display = "none"
     this.style.display = "none"
}

function startWatch(start) {
     if  (startTime().addEventListener('start', function(start) {
      start = document.getElementById('start').addEventListener( 'click', stopWatch )
     })
