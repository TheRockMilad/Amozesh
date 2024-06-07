const progressBar = require('progress')

const bar = new progressBar(':bar',{total : 30})
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        console.log("Complete\n");
        clearInterval(timer)
    }
}, 100);

// =============----------  برای ساخت از اینا