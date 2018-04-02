// 创造指定长度的缓存区 第二个参数是赋值
const buf1 = Buffer.alloUnsafe(10, 3);

// 创造指定长度的零填充
const buf2 = Buffer.alloc(10);

// Buffer.write(string[, offset[, length]][, encoding]);
const buf3 = Buffer.allocUnsafe(100);
const len = buf3.write('welcomeuser', 2, 5, 'utf8');