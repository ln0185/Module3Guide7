//try to change the value of "number" by erasing 10 and writing a different number and observe the different output
let number = 5;
if (number > 5) {
    document.getElementById("message").innerHTML = "Number is greater than 5";
} else {
    document.getElementById("message").innerHTML = "Number is 5 or less";
}
//this is a function that shows the message "number is greater than 5, because the defined number in let is 10. if it was inferior to or equal to 5, it will show "number is 5 or less"