/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

//function to convert digit to word
const digitToWord = num => ['zero','one','two','three','four', 'five','six','seven','eight','nine'][num];

//produces [ 'one', 2, 'three', 4, 'five' ]
numberArray = numberArray.map( num => {
    if(num%2 != 0){
        num = digitToWord(num);
        return num;
    }
    return num;
});

//produces [ 'f00', 'Bar', 'b@z', 'quX', '3ch0' ]
stringArray = stringArray.map( (item) => {
    return item.replaceAll('o','0').replace('e','3').replace('x','X').replace('bar', 'Bar').replace('baz','b@z')
});

//construc the new array
result.push('h@ck', numberArray, 'h@ck', stringArray, 'h@ck');

result = result.flat();

//console.log(result);
//export result
module.exports = result;