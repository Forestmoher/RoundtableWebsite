instructions = `Write a function that takes a two-digit number and determines 
if it's the largest of two possible digit swaps.
If 27 is our input, we should return false because swapping the digits gives us 72, 
and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.`

example = ` 
largestSwap(27) ==> false <br>
largestSwap(43) ==> true 
`


function largestSwap(num) {
    var swapped = num.toString().split('').reverse().join('');
    return [swapped, swapped <= num];
}

//Output to window here:

var num = 98

document.getElementById("instructions-text").innerHTML = instructions;
document.getElementById("example-text").innerHTML = example;
document.getElementById("result-box").innerHTML = `${num} is larger than ${largestSwap(num)[0]}?: ${largestSwap(num)[1]}`; 