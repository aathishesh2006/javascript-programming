/*
2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1 / 100,
so 20% = 20 / 100 = 0.2).
*/

console.log("Order List");
let orderlist = {
    Toaster: 18.50,
    shirt: 7.50
}
console.log(orderlist);

console.log("Total cost of item");
let totalcost = 18.50 + (2 * 7.50);
console.log(totalcost);

console.log("Tax Bill");
let tax = (totalcost * 20)/100;
console.log(tax); 

console.log("Final Bill");
let totalbill = totalcost + tax;
console.log(totalbill);