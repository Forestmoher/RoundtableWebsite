instructions = `Your goal is to write a function that will receive an array of strings as its 
argument and returns an array of strings each representing the longest substring
of contiguous vowels  ( aeiouAEIOU ).`

example = `
var str1 = "what a beautiful day today" <br>
var str2 = "it's okay, but very breezy" <br>
var strArray = [str1, str2] <br>
contiguousVowels(strArray) ==> ['eau', 'ee']  
`


function contiguousVowels(strArr) {
    var result = []
    const hasVowel = /[aeiouAEIOU]+/g;
    for (let i in strArray) { 
        const letters = strArray[i].match(hasVowel);
        if (letters) {
            const longest = letters.reduce((acc, val) => acc.length > val.length ? acc : val, '');
            result.push(longest);
        }
    }
    return result;
}

var str1 = "what a beautiful day today"
var str2 = "it's okay, but very breezy"
var strArray = [str1, str2]
contiguousVowels(strArray)


// Output to window here:
document.getElementById("instructions-text").innerHTML = instructions;
document.getElementById("example-text").innerHTML = example;
document.getElementById("result-box").innerHTML = `[${contiguousVowels(strArray)}]`;