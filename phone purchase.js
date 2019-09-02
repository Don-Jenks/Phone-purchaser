
/* This is the original version of this challenge that I came up with,
the problem is really that it would print the wrong total amount,
I solved it with the next version. */

//variables
let phone = 0;
let accessory = 0;
let account = 500.00;
const tax = 0.08;
const phonePrice = 99.99;
const accessPrice = 19.99;
const mentalSpending = 150.00;


//while loop to calculate total
while(account > phonePrice) {
account = account - phonePrice;
phone++;
document.write("You bought a phone!<br>");
if(account > mentalSpending) {
account = account - accessPrice;
accessory++;
document.write("You bought an accessory!<br>");
} else {
document.write("You can no longer purchase any more accessories.<br>");
}
}
document.write("You can no longer purchase any more phones.<br>");
let total = (account * tax).toFixed(2);
document.write("Your total is, $" + total + " plus tax");
document.write("You bought " + phone + " phones and " + accessory + " accessories.");

