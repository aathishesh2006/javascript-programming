/*
2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and
1 ice cream for $5. Use JavaScript to calculate the cost of the order.
*/
console.log("Order list");

let orderlist = {
    soup: 10,
    burger: 8,
    icecream: 5
};

console.log(orderlist);

let Totalcost = 10 + (3 * 8) + 5;   

console.log("The total bill");
console.log(Totalcost);