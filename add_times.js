const liArr = [...document.querySelectorAll('[data-time]')];

const timeArr = liArr
                    .map(num => num.dataset.time)
                    .map(time => {
                        const [min, sec] = time.split(':').map(parseFloat);
                        return (min*60) + sec;                       
                    });
totalSecs = timeArr.reduce((a,b) => a+b, 0);
totalMins = Math.floor(totalSecs / 60);
totalHours = Math.floor(totalSecs / 3600);

totalTime = `${totalHours} : ${totalMins % 60} : ${totalSecs % 60}`;