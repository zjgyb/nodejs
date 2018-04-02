const msg = '{"name": "John", "age": "22"}';
var jsonObj = JSON.parse(msg);
var jsonStr = JSON.stringify(jsonObj);
const buf = Buffer.from(jsonStr);

console.log(buf.length);