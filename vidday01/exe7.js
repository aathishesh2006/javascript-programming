/*
2g. Calculate the Total before tax.
*/

console.log("orderlist");

let orderlist = {
    toaster: 18.50,
    shirt: 7.50
};
console.log(orderlist);

let orderprice = 18.50 + (2 * 7.50) * 100;
console.log ("orderprice is ");

console.log("The total price without taxes and shipment cost is");
console.log(orderprice/100);