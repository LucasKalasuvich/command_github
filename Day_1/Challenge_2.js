// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

function balikKata(kata) {
    //txt menampung nilai dari parameter
    var txt = kata;
    //splitTxt adalah string kosong yang menampung nilai baru
    var splitTxt = '';
    //lakukan looping untuk pembalikan kata
    for (let i = kata.length - 1; i >= 0; i--) {
      splitTxt = splitTxt + txt[i]; //setiap iterasi karakter dari txt pada indeks ke i ditambahkan ke splitTxt.
    }
    
    return splitTxt;
}