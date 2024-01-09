// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('Lucas')); // false
console.log(palindrome('Kalasuvich')); // false

function palindrome(kata) {
    // you can only write your code here!
    //pertama kita kasih variable ln diinisial dengan indeks karakter terakhir dari string kata
    let ln= kata.length-1;
    //kita lakukan loop, dengan panjang string kata dibagi 2 agar memeriksa setengah palidromnya dengan membandingkan setengah string
    for(let i =0; i < kata.length/2; i++){
        //perbandingan kalau mereka tidak sama maka akan false dan sebaliknya
        if(kata[i] != kata[ln]){ //kenapa i dan ln: karna membandingkan karakter diposisi sesuai dari karakter akhir ln
            return false;
        }else{
            return true;
        }
    }
}