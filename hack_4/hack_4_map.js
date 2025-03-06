/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let arr = [];

for(let i = 1; i <8; i+=2){
    result.push(i);
}
// arr = [1,3,5,7]
arr.map(num => result.push(num));



//export result
module.exports = result;