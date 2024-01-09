console.log(stringToArray('aqrst,ukaei,ffooo'))

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray('qwer,tyui,asdf,ghjk'))

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]

function stringToArray(string) {
    // write your code here
    //array untuk menyimpan
    const hasil = [];
    //merepresentasikan setiap bari dari hasil
    let row = [];
    //mengumpulkan karakter
    let currentWord = '';
    //buat looping setiap karakter dalam string
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        //loop jika karakternya hasilnya koma maka dia akhir dari kata
        if (char === ',' || i === string.length - 1) {
            //jika akhir dari string maka dia akhir dari kata
            if (i === string.length - 1) {
                currentWord += char;
                // console.log("\n");
            }
            //lalu melakukan push untuk menambahkan karakter ke dalam current
            row.push(currentWord);
            currentWord = '';
            //lalu lakukan push untuk menambahkan kata ke dalam array
            if (char === ',' || i === string.length - 1) {
                hasil.push(row);
                row = [];
            }//proses jika tidak ada koma
        } else {
            currentWord += char;
        }
    }

    return hasil;
}