// Part 1: Variables & Conditionals
document.getElementById("check-number").addEventListener("click", function() {
    let userNumber = Number(document.getElementById("user-number").value); // variable declaration
    let resultText = "";

    if (userNumber > 10) {
        resultText = "Your number is greater than 10!";
    } else if (userNumber === 10) {
        resultText = "Your number is exactly 10!";
    } else {
        resultText = "Your number is less than 10!";
    }

    document.getElementById("number-result").textContent = resultText;
});


// Part 2: Functions

// Function 1: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

document.getElementById("greet-btn").addEventListener("click", function() {
    let greeting = greetUser("Student");
    document.getElementById("greet-result").textContent = greeting;
});

// Function 2: Sum two numbers
function sumNumbers(a, b) {
    return a + b;
}
console.log("Sum Example (2 + 3):", sumNumbers(2, 3)); // just to show usage


// Part 3: Loops

document.getElementById("loop-btn").addEventListener("click", function() {
    let numbers = "";
    
    // Using for loop
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }

    document.getElementById("loop-result").textContent = numbers;
});

// Another loop example using while
let counter = 1;
while (counter <= 3) {
    console.log("While Loop Count:", counter);
    counter++;
}

// Part 4: DOM Manipulation

// 1. Change title color
document.getElementById("change-title-btn").addEventListener("click", function() {
    let title = document.getElementById("main-title");
    title.style.color = title.style.color === "blue" ? "black" : "blue"; // toggle color
});

// 2. Add a list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function() {
    let ul = document.getElementById("item-list");
    let li = document.createElement("li");
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
});

// 3. Another DOM interaction: log all list items
console.log("Current list items:", document.getElementById("item-list").children);
