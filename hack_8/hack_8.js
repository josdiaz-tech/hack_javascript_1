/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for(let i = 1; i<4; i++){
    result.push(arr[i]);
}

// map doesnt modify the original array so we need to asign it to result
result = result.map(item => item.replace('a','@').replace('qux','QUX'));


//export result
module.exports = result;