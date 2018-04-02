const buf = Buffer.from('welcome to learn node.js');
const len = buf.length;

const buf1 = Buffer.alloc(50);
const bytesWritten = buf.write('welcome to learn node.js');
const len1 = buf1.length;

console.log(len);
console.log(len1);

