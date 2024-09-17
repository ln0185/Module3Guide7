let numbers = [1, 2, 3, 4, 5];
let listHTML = "";

for (let i = 0; i < numbers.length; i++) {
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}

document.getElementById("numberList").innerHTML = listHTML;
//this a for loop that iterates from number 1 to 5. let i = 0 refers to the index. 1 is index 0, 2 is index 1, etc etc. From index 0 to as long as the index i inferior to 4, it will iterate, meaning it will add the index everytime the function works until it reaches index 4/number 5. it is sent in a list form so it will show a list that says "number at index 0 is 1" and so on until the last one that says "number at index 4 is 5". So i refers to the index and numbers[i] to the number associated to the index.
