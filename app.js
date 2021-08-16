const navItems = [...document.querySelectorAll('.set-time')];
const userInput = document.querySelector('#enter-time');
const body = document.querySelector('body');

const countdownTime = document.querySelector('#countdown');
const returnTime = document.querySelector('#return-time');


navItems.forEach(item => item.addEventListener('click', (e) => {
    countdownTime.innerText = e.target.dataset.time;
    // decrement time
        // get current time every second
        // find the diference between current event time
        // when it gets to 0, stop. (use while loop)
    let time_then = getCurrentTime();
    return time_then;
}));


while (countdownTime !== '' || countdownTime !== '00:00') {
    updateClock();
}


function getCurrentTime() {
    let today = new Date();
    let s_then = today.getSeconds();
    let m_then = today.getMinutes();
    let h_then = today.getHours();
    let timeData = {'seconds' : s_then, 'minutes' : m_then, 'hours' : h_then};
    return timeData;
}


function updateClock() {
    time_now = setInterval()
}


