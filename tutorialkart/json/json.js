var jsonData = '{"persons": [{"name": "John", "city": "New York"}, {"name": "Phil", "city": "Ohio"}]}';
var jsonParse = JSON.parse(jsonData);
console.log(jsonParse.persons[0].name);