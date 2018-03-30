var fs = require('fs');

var writeStream = fs.createWriteStream('./log.txt', {
    'flags' : 'a',
    'encoding' : 'utf8',
    'mode' : 0666
});

try {
    fs.readdir('./data/', (err, files) => {
        files.forEach(name => {
            fs.readFile('./data/' + name, 'utf8', (err, data) => {
                if(err) throw err;
                var adjData = data.replace(/somecompany\.com/g, 'burningbird.net');
                fs.writeFile('./data/' + name, adjData, err => {
                    if(err) throw err;
                    writeStream.write('changed ' + name + '\n', 'utf8', err => {
                        if(err) throw err;
                        console.log('finished ' + name);
                    })
                })
            })
        });
        console.log('all finished');
    })
} catch(err) {
    console.error(util.inspect(err));
}