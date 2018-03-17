var eventEmitter = require('events').EventEmitter;
var counter = 0;
var em = new eventEmitter();
var timer = setInterval(() => {
    em.emit('timed', counter++);
}, 3000);

em.on('timed', (data) => {
    if(data > 10) {
        clearInterval(timer);
    }
    console.log('timed ' + data);
})