const navItems = [...document.querySelectorAll('.set-time')];
const userInput = document.querySelector('#enter-time');
const body = document.querySelector('body');

const countdownTime = document.querySelector('#countdown');
const returnTime = document.querySelector('#return-time');
let countdown;

countdownTime.innerText = '00:00';

navItems.forEach(item => item.addEventListener('click', (e) => timer(e.target.dataset.time)));

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    countdown = setInterval(() => {
        const remaining = Math.round((then - Date.now()) / 1000);
        if (remaining < 0) {
            clearInterval(countdown);
            return;
        } displayTimeLeft(remaining);
    }, 1000);

}

function displayTimeLeft(remaining) {
    console.log(remaining);
    
    let hours = Math.floor(remaining / 3600).toString();
    let minutes = Math.floor(remaining / 60).toString();
    let seconds = (remaining % 60).toString();
    console.log(`${hours} : ${minutes} : ${seconds}`);
    
    if (hours == 0) {
        hours = ''; 
    } else if (hours < 10) {
        hours = '0' + hours + ':';
    } else {hours += ';'} 
    if (minutes < 10) {
        minutes = '0' + minutes;
    } if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    let finalTime = hours + minutes + ':' + seconds;
    
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