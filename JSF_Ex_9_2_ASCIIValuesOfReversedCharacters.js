function asciiValuesOfReversedCharacters(a, b, c){
    console.log(c + b + a);
    console.log(`${c.charCodeAt(0)} ${b.charCodeAt(0)} ${a.charCodeAt(0)}`);  
}

asciiValuesOfReversedCharacters('a', 'b', 'c')
//cba
//99 98 97
asciiValuesOfReversedCharacters('%', '2', 'o')
//o2%
//111 50 37
asciiValuesOfReversedCharacters('1', '5', 'p')
//p51
//112 53 49)

// [old version]
// function charToString(a, b, c){
//     let str = a + b + c;
//     console.log(str);
// }

// charToString('a', 'b', 'c') //abc
// charToString('%', '2', 'o') //%2o
// charToString('1', '5', 'p') //15p