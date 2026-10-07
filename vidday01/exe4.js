/*
2d. Calculate a 10% tax for the total in exercise 2c.
*/
console.log("Order List");

let orderlist = {
    Toaster: 18.50,
    shirt: 7.50
};
console.log(orderlist);

console.log("Total cost");

let totalbill = 18.50 + (2 * 7.50);
console.log(totalbill);

console.log("Tax Amount");

let taxbill = (totalbill * 10)/100;
console.log(taxbill);

console.log("Final Bill");
let finalbill = totalbill + taxbill;
console.log(finalbill);