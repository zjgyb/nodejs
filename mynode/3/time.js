// node学习指南page40有问题，少了一个括号
function on_OpenAndReadFile(filename, res) {
    console.log('opening ' + filename);
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            res.write('Could not find or open file for reading\n');
        } else {
            res.write(data);
        }
        res.end();
    })
}
setTimeout(on_OpenAndReadFile, 2000, filename, res);
