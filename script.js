const navItems = [...document.querySelectorAll('.set-time')];
const userInput = document.querySelector('#enter-time');
const body = document.querySelector('body');

const countdownTime = document.querySelector('#countdown');
const returnTime = document.querySelector('#return-time');
let countdown;

countdownTime.innerText = '00:00';

navItems.forEach(item => item.addEventListener('click', (e) => timer(e.target.dataset.time)));

function timer(seconds) {
    displayTimeLeft(seconds);
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    displayEndTime(then);
    
    countdown = setInterval(() => {
        const remaining = Math.round((then - Date.now()) / 1000);
        if (remaining < 0) {
            clearInterval(countdown);
            return;
        } displayTimeLeft(remaining);
    }, 1000);

}

function displayTimeLeft(remaining) {
    
    let hours = Math.floor(remaining / 3600).toString();
    let minutes = Math.floor(remaining / 60 % 60).toString();
    let seconds = (remaining % 60).toString();
    //console.log(`${hours} : ${minutes} : ${seconds}`);
    
    // THIS IS SO UGLY!!
    if (hours == 0) {
        hours = ''; 
    } else if (hours < 10) {
        hours = '0' + hours + ':';
    } else {hours += ':'} 
    if (minutes < 10) {
        minutes = '0' + minutes;

    } if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    let finalTime = hours + minutes + ':' + seconds;
    document.title = finalTime;
    countdownTime.innerText = finalTime;
}

//timer(10);

userInput.addEventListener('change', (e) => {
    e.preventDefault();
    if (e.target.value == '') {
        return;
    }
    timer(e.target.value * 60);
})


function displayEndTime(timestamp) {
    const thenDate = new Date(timestamp);
    const thenHours = thenDate.getHours();
    const thenMinutes = thenDate.getMinutes()
    returnTime.innerText = `Be back here at ${thenHours}:${thenMinutes}`;
}

