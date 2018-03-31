var c = 0;
function printIn() {
    console.log(c);
}

function plus(callback) {
    setTimeout(() => {
        c += 1;
        callback();
    }, 1000);
}

plus(printIn); 