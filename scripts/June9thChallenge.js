instructions = `A man has a rather old car worth $2000. He saw a secondhand car on sale for $8000. He wants to keep his old car until he can buy the secondhand one.
He thinks he can save $1000 each month, but the prices of his old car and of the new one decrease by 1.5% per month. 
Furthermore this percentage of loss increases by 0.5% at the end of every two months. 
Write a function that returns how many months it will take him to save up enough money to buy the car he wants, and how much money will he have left over.
Your function should take in 4 parameters: Old car price, new car price, savings per month, and percent decrease per month.`

example = `monthsTillNewCar(2000, 8000, 1000, 1.5) ==> returns(6, 766) <br>
//meaning it will take 6 months, and he will have $766 dollars left over after buying the car.`


function monthsTillNewCar(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    var result = [];
    var months = 0;
    var remainder = 0;
    var savings = 0;
    percentLossByMonth = percentLossByMonth * .01
    if (startPriceOld >= startPriceNew){
      return [0, startPriceOld-startPriceNew]
    }
    while ((startPriceOld + savings) < startPriceNew){
      months++;
      if (months > 1 && months % 2 == 0){
        percentLossByMonth += .005
      }
     startPriceOld = startPriceOld - (startPriceOld * percentLossByMonth);
     startPriceNew = startPriceNew - (startPriceNew * percentLossByMonth);
     savings += savingperMonth;
     console.log(startPriceNew,startPriceOld,savings)
    }
    remainder = Math.round((startPriceOld + savings) - startPriceNew, 0);
    result.push(months,remainder);
    return result;
  }

//Output to window here:
document.getElementById("instructions-text").innerHTML = instructions;
document.getElementById("example-text").innerHTML = example;
document.getElementById("result-box").innerHTML = `
Old care price: $2000 <br>
New Car Price: $8000 <br>
Savings per month: $1000 <br>
Value decrease each month: 1.5% (+.5% every 2 months) <br>
Months till purchase: ${monthsTillNewCar(2000, 8000, 1000, 1.5)[0]} <br>
Amount left over after purchase: ${monthsTillNewCar(2000, 8000, 1000, 1.5)[1]}`;