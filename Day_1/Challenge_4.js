// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

function xo(str) {
    // you can only write your code here!
    var x=0;
    var o=0;
    for(let i=0; i<str.length; i++){
        //pengembalian nilai true, jadi jika jumlah x sama o sama maka true
        if(str[i] == 'x'){
            x++;
        }else if(str[i] == 'o'){
            o++;
        }
    }
    return x==o;
  }