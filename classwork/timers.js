// var name = 'Christy'
//
// function runsLater(){
//     alert(name)
// }
// var firstTimeout = setTimeout(runsLater, 5000)
// console.log(firstTimeout)
//
// var secondTimeout = setTimeout(function(){
//     alert('This comes later')
// }, 5000)
// console.log(secondTimeout)
//
// clearTimeout(firstTimeout)



// var actionTimer //global function has to be outside a function
// var counter = 0
// document.getElementById('action').addEventListener('click', function(){
//     counter++
//     this.innerHTML = counter
//     clearTimeout(actionTimer) //if it's undefined, it ignores it
//     actionTimer = setTimeout(() => {
//         this.innerHTML = '0'
//         counter = 0
//         console.log('Happened once.')
//     }, 2000)
// })

// setInterval()//runs something every __.

// var counter = 0
//
// function doThis(){
//     counter++
//     console.log(counter)
// }
// var timer
// function start(){
//     timer = setInterval(doThis, 1000)
// }
//
//
// document.getElementById('action').addEventListener('click', function(){
//         clearInterval(timer)
//
//         if(this.innerHTML === 'Paused'){
//             start()
//             this.innerHTML = 'Pause'
//         }
//         else {
//             this.innerHTML = 'Paused'
//         }
//
//     })
//
//     start()

//a recursive loop
var animationId
function animationLoop() {
    var button = document.getElementById('action')
    var width = Number(getComputedStyle(button).width.replace('px', ''))

    if (width >= 300) {
        width = 0
    }
    button.style.borderRadius = '50%'
    button.style.width =  width + 1 + 'px'
    button.style.height = button.style.width

    animationId = requestAnimationFrame(animationLoop)

}

animationLoop()
