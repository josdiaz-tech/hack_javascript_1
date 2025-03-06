/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

let longitud = arr.length;
for(let i = 0; i<longitud; i++){
    //mayus primera letra
    let capitalizedWord = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    //agregar al arreglo
    result.push(capitalizedWord); 
}

//export result
module.exports = result;