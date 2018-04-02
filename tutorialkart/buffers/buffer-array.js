// 116 50 145
let arr = [0x74, 0x32, 0x91];
// 74 32 91
arr = [74, 32, 91];
// 1 1 0
arr = [true, true, false];
const buf = Buffer.from(arr);
for(const bye of buf.values()) {
    console.log(bye);
}