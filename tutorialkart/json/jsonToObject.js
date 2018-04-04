const fs = require('fs');

var jsonData = '{"persons": [{"name": "John", "city": "New York"}, {"name": "Phil", "city": "Ohio"}]}';

var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);

fs.writeFile("output.json", jsonContent, 'utf8', err => {
    if(err) {
        console.log("An error occured while writing JSON object to file");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
    
})
