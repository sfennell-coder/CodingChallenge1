// Scott Fennell (U86364709)
//CC_1 Steven's Tip Calculator

/* 1.Determine the tip amount based on the bill using a 
ternary operator instead of a if/esle statement. Function named calcTip.*/

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// Test witha bill value of 100
const bills = [100];
const tips = [calcTip(bills[0])];
const totals = [bills[0] +tips[0]];

console.log("The bill was $", bills, ", the tip was $",tips, ", and the total cost was $", totals, ".");
