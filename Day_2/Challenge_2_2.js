// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
console.log(hitungJumlahKata('Lucas Kalasuvich dnfjksdf skdjfnksjdf ksdnfkjs ksdnfkn')); // 6

function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    //buat inisiallisasi dengan diawali dari 0
    var totalKalimat=0;
    //lakukan loop panjang setiap karakter dalam kalimat
    for(var i=0; i<kalimat.length; i++){
        if(kalimat[i] === " "){ //jika karakter dalam posisi i berupa spasi, itu menandakan akhir dari satu kata
            totalKalimat++; //lalu ditambah 1
        }
    }
    return totalKalimat+1; //lalu return total kalimat. penambahan 1 dilakukan karna tidak diikuti spasi.
}