// Your goal is to write a function that will receive an array of strings as its 
// argument and returns an array of strings each representing the longest substring
// of contiguous vowels  ( aeiouAEIOU ).

// For example:
var str1 = "what a beautiful day today"
var str2 = "it's okay, but very breezy"

var strArray = [str1, str2]

// contiguousVowels(strArray) ==> ['eau', 'ee']  

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

contiguousVowels(strArray)


// Output to window here:
document.getElementById("result-box").innerHTML = `[${contiguousVowels(strArray)}]`;