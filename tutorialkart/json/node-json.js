var fs = require('fs');
fs.readFile('sample.json',
    (err, data) => {
        var jsonData = data;
        var jsonParsed = JSON.parse(jsonData);
        console.log(jsonParsed.persons[0].name + "'s office phone number is " + jsonParsed.persons[0].phone.office);
        console.log(jsonParsed.persons[1].name + " is from " + jsonParsed.persons[0].city);
    }
);