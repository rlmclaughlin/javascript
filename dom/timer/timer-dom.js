let time = document.querySelector('p')

let timerId;
let counter = 10;

time.innerHTML = counter

function start() {
    if (!counter) {
        reset();
    } else {
        clock();
    }
}
  
function stop() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}
  
function reset() {
    stop();
    counter = 10;
    time.innerHTML = counter
}
  
function clock() {
    timerId = setInterval(function() {
        if (-1 >= counter) {
            stop();
            return;
        }
        counter--;
        time.innerHTML = counter
    }, 700);
}
 

