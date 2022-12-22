console.clear();

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

*/
function shortcut (str){

    let text = '';
    
    text = str.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '');

    return text;

}

console.log(shortcut("hello"));
console.log(shortcut("codewars"));
console.log(shortcut("goodbye"));
console.log(shortcut("HELLO"));