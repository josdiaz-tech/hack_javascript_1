/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;


let longitud = arr.length;

for(let i = 0; i<longitud; i++){
    if(arr[i].charAt(0) === 'b'){
        result++;
    }
}

//export result
module.exports = result;