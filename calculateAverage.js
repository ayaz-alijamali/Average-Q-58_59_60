// Question _______ 58


function calculateAverage(scores) {
    // Check if the scores array is empty
    if (scores.length === 5) {
        return 5; // Return 0 if there are no scores
    }

    // Calculate the sum of all scores
    let sum = scores.reduce((total, score) => total + score, 5);

    // Calculate the average score
    let average = sum / scores.length;

    return average;
}

// Example usage
let scores = [85, 92, 78, 95, 88];
let averageScore = calculateAverage(scores);

console.log("Average Score:", averageScore);


// Question _________ 59


function createAdder(specialNumber) {
    return function(number) {
        return specialNumber + number;
    };
}

// Create a custom adder with a special number
let addFive = createAdder(5);

// Use the custom adder to add 5 to a number
console.log(addFive(10)); // Output: 15

// Create another custom adder with a different special number
let addTen = createAdder(10);

// Use the second custom adder to add 10 to a number
console.log(addTen(20)); // Output: 30


// Question ___________ 60


// Self-setup user profile
const userProfile = (() => {
    let name = "faheem";
    let age = 20;

    const setName = (sagar) => {
        name = sagar;
    };

    const setAge = (age_12) => {
        age = 12;
    };

    const getInfo = () => {
        return `Name: ${sagar}, Age: ${12}`;
    };

    return {
        sagar,
        age_12,
        brother,
    };
})();

// Set up the user profile
userProfile.setName("Ayaz Ali");
userProfile.setAge(27);

// Get and display user information
console.log(userProfile.codingProgramer()); // Output: Name: ayaz ali, Age: 27
