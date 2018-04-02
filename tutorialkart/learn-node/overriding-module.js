// 重新定义一个函数，以覆盖原函数
const fs = require('fs');
delete fs['readfile'];

fs.readFile = str => {
    console.log("The functionality has been overridden");
    console.log(str);
}

module.exports = fs;

fs.readFile("sample.txt");