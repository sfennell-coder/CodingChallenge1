// Scott Fennell (U86364709)
//CC_1 Steven's Tip Calculator

/* 1.Write a function named calcTip that accepts any bill amount
and returns the bill, tip and total cost.*/

//Ternary operator instead of if/else statement
const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

/*2. Construct arrays named bills, tips, and totals. Call calcTip in the
tips array for each bill vallue*/

// Bills array. Test data set 1: Bill Values of 275, 40, and 430
const bills = [275, 40, 430];
//Bill array. Test data set 2: Bill values of 125, 555, and 44
// const bills = [125, 555, 44];

//Tips array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Totals array
const totals = [bills[0] +tips[0], bills[1] +tips[1], bills[2] +tips[2]];

//Output
console.log("The bill was $", bills, ", the tip was $",tips, ", and the total cost was $", totals, ".");