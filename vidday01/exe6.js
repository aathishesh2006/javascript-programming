/*
2f. Calculate the cost of the products
(before shipping and taxes).
Hint: calculate in cents to avoid
inaccuracies.
*/

console.log("Order List:");
let orderlist = {
    Toaster: 18.50,
    Shirt: 7.50
}
console.log(orderlist);

console.log("Bill of the items:");
let totalcost = 18.50 + (7.50 * 2);
console.log(totalcost);

console.log("Tax service:");
let tax = (totalcost * 20)/100;
console.log(tax);

console.log("Total cost of items:");
let bill = totalcost + tax;
console.log(bill);

console.log("Shipping Price:");
let shipping = 4.78;
console.log(shipping);

console.log("Total bill:");
let totalbill = bill + shipping;
console.log(totalbill);