var fs = require('fs');
try {
    fs.readFile('./apples2.txt', 'utf-8', (err, data) => {
        if(err) {
            throw err;
        }
        var adjData = data.replace(/[A|a]pple/g, 'orange');
        fs.writeFile('./oranges2.txt', adjData, (err) => {
            if(err) throw eer;
        });
    });
} catch(err) {
    console.error(err);
}