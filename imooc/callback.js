function learn(something) {
    console.log(something);
}

function my(callback, something) {
    something += ' is cool.';
    callback(something);
}

my(learn, 'nodejs');