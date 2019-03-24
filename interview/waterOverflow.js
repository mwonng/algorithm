#!/usr/bin/env node

// water overflow problem

// empty all cups

function generateAllCups(row) {
  let cupArray = [];
  for (i = 0; i < row ; i++) {
    cupArray[i]=[]
    for ( j = 0; j <= i ; j ++) {
      cupArray[i].push(0);
      // process.stdout.write("*");
    }
    // process.stdout.write("\n");
  }
  // console.log(cupArray);
  return cupArray;
}

function pourWater(liter, cupArray) {
  console.log("pouring water %s ml", liter);
  let row = cupArray.length;
  cupArray[0][0] = liter;
  // console.log("row ->", row);
  for (i = 0; i < row ; i++) {
    for ( j = 0; j <= i ; j ++) {
      if (cupArray[i][j] > 250) {
        // console.log("i->%s, j->%s", i, j);
        cupArray[i+1][j] += (cupArray[i][j] - 250 )/ 2
        cupArray[i+1][j+1] += (cupArray[i][j] - 250 )/ 2
        cupArray[i][j] = 250;
      }
    }
  }
  return cupArray;
}

// console.log(generateAllCups(16));


console.log(pourWater(1000,generateAllCups(16)));

