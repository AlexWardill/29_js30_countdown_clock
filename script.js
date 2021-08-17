const navItems = [...document.querySelectorAll('.set-time')];
const userInput = document.querySelector('#enter-time');
const body = document.querySelector('body');

const countdownTime = document.querySelector('#countdown');
const returnTime = document.querySelector('#return-time');
let countdown;

countdownTime.innerText = '00:00';

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
    countdownTime.innerText = remaining;
}

timer(10);