function add(a, b) {
    return a + b;
}

let result = add(5, 10);
document.getElementById("result").innerHTML = "The result is: " + result;
//this is a function with two parameters a and b. when the function is working (when the page is done loading), it will return, so execute in this case, an addition, a + b. A and B are defined in the let as 5 and 10 so it will show: "the result is : 15"  