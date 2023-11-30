const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "The average cat can jump 6 times its body length in one leap.",
  "Cats have five toes on their front paws, but only four on their back paws.",
];

// Function to display a random cat fact
function displayRandomFact() {
  const factsList = document.getElementById("factsList");
  const randomIndex = Math.floor(Math.random() * catFacts.length);
  const fact = document.createElement("li");
  fact.textContent = catFacts[randomIndex];
  factsList.appendChild(fact);
}

// Event listener for the button to get new cat facts
document
  .getElementById("newFactBtn")
  .addEventListener("click", displayRandomFact);

function checkUserInfo() {
  const userName = prompt("Please enter your name:");
  const userAge = prompt("Please enter your age:");

  // Check if both name and age are provided
  if (userName && userAge) {
    // Check if age is a valid number
    if (!isNaN(userAge)) {
      console.log(`Welcome, ${userName}! You are ${userAge} years old.`);
      // Here you can use the userName and userAge variables as needed
    } else {
      console.log("Please enter a valid age.");
    }
  } else {
    console.log("Please provide both your name and age.");
  }
}

// Call the function to check user info
checkUserInfo();
