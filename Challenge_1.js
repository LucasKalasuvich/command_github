// TEST CASE
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

function bandingkanAngka(angka1, angka2) {
    // you can only write your code here!
    // for(let i = 0; i < angka1.length; i++){
        if(angka2>angka1){
            return true;
        }else if(angka2<angka1){
            return false;
        }else{
            return -1;
        }
    // }
  }