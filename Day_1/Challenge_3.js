// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

function konversiMenit(menit) {
    // you can only write your code here!
    //untuk membulatkan dari hasil pembagian menit dengan 60
    let time = Math.floor(menit/60);
    //jika menit kurang dari 10 maka tambahkan 0 agar tetap 2 digit
    let reTime = menit % 60 < 10 ? '0' + menit % 60 : menit % 60;
    return `${time}:${reTime}`;
  }