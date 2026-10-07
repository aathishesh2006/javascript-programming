/*
2b. You're at a restaurant with 2 friends (3 people in total) and make the
same order as 2a. Calculate how much each person pays.
*/

console.log("Order List");

let orderlist = {
    soup: 10,
    burger: 8,
    icecream: 5
};

console.log(orderlist);

let orderprice = 10 + (3 * 8) + 5;

console.log("Total order price is");
console.log(orderprice);

console.log("Totally 3 people");

let share = orderprice/3;

console.log("Each person pays");
console.log(share);