let time = document.querySelector('p')

let timerId;
let counter = 10;

time.innerHTML = counter

let start = () => {
    if (!counter) {
        reset();
    } else {
        clock();
    }
}
  
let stop = () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}
  
let reset = () => {
    stop();
    counter = 10;
    time.innerHTML = counter
}
  
let clock = () => {
    timerId = setInterval(function() {
        if (0 >= counter) {
            stop();
            return;
        }
        counter--;
        time.innerHTML = counter
    }, 700);
}
 

