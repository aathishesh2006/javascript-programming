/*
2h. Calculate the 10% tax exactly.
Hint: use Math.round()
*/


console.log("Orde List");
let orderlist = {
    toaster: 18.50,
    shirt: 7.50
};
console.log(orderlist);

console.log("Order Price");
let orderprice = (18.50 + 7.50 + 7.50)*100;
console.log(orderprice);

let final = orderprice / 100;
console.log(final);

console.log("The total price after Math.round() used");

let final2 = Math.round(final);
console.log(final2);