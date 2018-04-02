const buf1 = Buffer.allocUnsafe(13);

const len = buf1.write('welcomeuser');
for(const bye of buf1.values()) {
    console.log(bye);
}