instructions = `In a small restaurant, there are A tables for one person and B tables for two persons.<br><br>
It is known that (n) groups of people come today, each consisting of one or two people.<br><br>
If a group consists of one person, it is seated at a vacant one-seater table (A). If there are none of them, it is seated at a vacant two-seater table (B). 
If there are none of them, it is seated at a two-seater table occupied by a single person. If there are still none of them, the restaurant denies service to this group.<br><br>
If a group consists of two people, it is seated at a vacant two-seater table (B). If there are none of them, the restaurant denies service to this group.<br><br>
You are given a chronological order of groups coming. You are to determine the total number of people the restaurant denies service to.<br><br>
The input contains two integers A and B - the number of one-seater and the number of two-seater tables respectively, and a list of integers - the number of people in each group of clients in chronological order of their arrival.<br><br>
Return the total number of people the restaurant denies service to.`

example =
    `
restaurant(1, 2, [1, 2, 1, 1])  =>  0  <br>
// In this example, there is 1 A table and 2 B tables. The array represents the groups coming into the restaurant.<br><br>
restaurant(1, 1, [1, 1, 2, 1])  =>  2
`

var restaurant = (tableA, tableB, groups) => {
    var unseated = 0;
    for (var group of groups) { 
        switch (group) {
            case 1:
                if (tableA > 0) {
                    tableA -= 1;
                } else if (tableA === 0 && tableB >= .5) {
                    tableB -= .5;
                } else if (tableA === 0 && tableB < .5) {
                    unseated += 1;
                }
                break;
            case 2:
                if (tableB >= 1) {
                    tableB -= 1;
                } else if (tableB < 1) {
                    unseated += 2
                }
                break
            default:
                unseated += 0;
        }
    }
    console.log(unseated)
    return unseated;
}

console.log(restaurant(1, 1, [1, 1, 2, 1]));


//Output to window here:
document.getElementById("instructions-text").innerHTML = instructions;
document.getElementById("example-text").innerHTML = example;
document.getElementById("result-box").innerHTML = restaurant(1, 1, [1, 1, 2, 1]);