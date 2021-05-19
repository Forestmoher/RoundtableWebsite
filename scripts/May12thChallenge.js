// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.
 
function addBinary(num1,num2) {
    return (num1 + num2).toString(2);
}

//Output to window here:
document.getElementById("result-box").innerHTML = `512 + 200 in binary = ${addBinary(512,200)}<br>
                                                    17 + 19 in binary = ${addBinary(17,19)}<br>
                                                    3000 + 487 in binary = ${addBinary(3000,487)}`