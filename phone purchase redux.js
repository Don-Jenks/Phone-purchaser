
//constants
const tax = 0.08;
const phonePrice = 99.99;
const accessPrice = 9.99;
const mentalSpending = 300.00;

//variables
let phone = 0;
let accessory = 0;
let amount = 0.00;
let balance = 500.00;

//while loop to add to your amount, there's a problem where it will go over your balance though...
while(amount < balance) {
amount = amount + phonePrice;
phone++;
document.write("You bought a phone!<br>");
if(amount < mentalSpending) {
amount = amount + accessPrice;
accessory++;
document.write("You bought an accessory!<br>");
} else {
document.write("You can no longer purchase any more accessories.<br>"); // I need to fix this as it will keep printing ad nauseum, maybe just take it out all together
}
total = (amount + (amount * tax)).toFixed(2); //This may need to be moved higher up in the function? Testing needed.
}
document.write("You can no longer purchase any more phones.<br>");
document.write("Your total is, $" + total + " plus tax<br>");
document.write("You bought " + phone + " phones and " + accessory + " accessories.");
