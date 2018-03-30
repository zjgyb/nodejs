var fs = require('fs'),
    async = require('async');

try {
    async.waterfall([
        function readData(callback) {
            // 文件的读取
            fs.readFile('./data/data1.txt', 'utf8', (err, data) => {
                callback(err, data);
            });
        },
        function modify(text, callback) {
            var adjdata = text.replace(/somecompany\.com/g, 'burningbird.net');
            callback(null, adjdata);
        },
        function writeData(text, callback) {
            fs.writeFile('./data/data1.txt', text, (err) => {
                callback(err, text);
            });
        }
    ], (err, result) => {
        if(err) throw err;
        console.log(result);
    });
} catch(err) {
    console.log(err);
}