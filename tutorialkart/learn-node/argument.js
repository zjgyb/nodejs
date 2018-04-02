/* 0：是node.exe的路径
 * 1：文件所在的位置
 * 2：之后提供的第一个参数
 * ...
 */
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});