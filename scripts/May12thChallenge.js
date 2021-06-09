instructions = `Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition. The binary number returned should be a string.`

example = `addBinary(512,200) ==> 1011001000 <br>
                addBinary(17,19) ==> 100100`

 
function addBinary(num1,num2) {
    return (num1 + num2).toString(2);
}

//Output to window here:
document.getElementById("instructions-text").innerHTML = instructions;
document.getElementById("example-text").innerHTML = example;
document.getElementById("result-box").innerHTML = `512 + 200 in binary = ${addBinary(512,200)}<br>
                                                    17 + 19 in binary = ${addBinary(17,19)}<br>
                                                    3000 + 487 in binary = ${addBinary(3000,487)}`