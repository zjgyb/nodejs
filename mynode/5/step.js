var fs = require('fs'),
    step = require('step');

try {
    step (
        function readData() {
            fs.readFile('./data/data1.txt', 'utf8', this);
        },
        function modify(err, text) {
            if (err) {
                throw err;
            }
            return text.replace(/burningbird\.net/g, 'somecompany.com');
        },
        function writeData(err, text) {
            if (err) {
                throw err;
            }
            fs.writeFile('./data/data1.txt', text, this);
        }
    )
} catch(err) {
    console.log(err);
}