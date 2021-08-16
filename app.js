const navItems = [...document.querySelectorAll('.set-time')];
const userInput = document.querySelector('#enter-time');
const body = document.querySelector('body');

const countdownTime = document.querySelector('#countdown');
const returnTime = document.querySelector('#return-time');


navItems.forEach(item => item.addEventListener('click', (e) => {
    countdownTime.innerText = e.target.dataset.time;

    let today = new Date();
    let s_then = today.getSeconds();
    let m_then = today.getMinutes();
    let h_then = today.getHours();

    let elapsed = today.getSeconds() - s_then;
    console.log(elapsed);
}));


