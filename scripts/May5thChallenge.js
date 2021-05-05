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

function validWords(array, string){
    //code goes here
}

//Output to window here:
document.getElementById("result-box").innerHTML = 'Your answer here'