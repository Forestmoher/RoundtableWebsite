//Challenge

//You are given a sequence of valid words as a string. 
//Test if the string is made up by one or more of the words from the Array.

//TasK:
//Test if the string can be entirly made formed by concatonating words of the array.

var words = ['The', 'Tech', 'Roundtable']

//test cases:
var sentence1 = 'The Tech Roundtable' //true
var sentence2 = 'The Tech Roundtables'//false
var sentence3 = 'A Tech Roundtable'   //false
var sentence4 = 'Roundtable Tech The' //true
var sentence5 = 'the tech roundtable' //true

function validWords(array, string) {

    string = string.toLowerCase().split(' ').sort();
    array = array.sort();

    return string.length === array.length && string.every((element, index) =>
        element === array[index].toLowerCase());
}

// console.log(validWords(words, sentence1))
// console.log(validWords(words, sentence2))
// console.log(validWords(words, sentence3))
// console.log(validWords(words, sentence4))
// console.log(validWords(words, sentence5))

//Output to window here:
document.getElementById("result-box").innerHTML =
    `Can you build 'sentence' from 'array'? <br><br>

    Array: [${words}] <br> Sentence: ${sentence3} <br> Result: ${validWords(words, sentence3)}`