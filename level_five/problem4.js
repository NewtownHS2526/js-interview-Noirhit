// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
function easyProblem1(clientLevel, age) {
    if (clientLevel === "Platinum" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 1 - Test 1:", easyProblem1("Platinum", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Platinum", 20)); // "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Gold", 21)); // "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
function easyProblem2(clientLevel, age) {
    if (age === 21 && clientLevel !== "Platinum") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 2 - Test 1:", easyProblem2("Gold", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Platinum", 21)); // "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Silver", 19)); // "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
function mediumProblem(clientLevel, age) {
    if (clientLevel === "Platinum" && age === 21) {
        return "can access";
    } else if (age === 21 && clientLevel !== "Platinum") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Medium - Test 1:", mediumProblem("Platinum", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Gold", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("Platinum", 19)); // "go home"
console.log("Medium - Test 4:", mediumProblem("Silver", 21)); // "can sign in"
console.log("Medium - Test 5:", mediumProblem("Bronze", 25)); // "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
function hardProblem(clientLevel, age) {
    if (age === 21) {
        if (clientLevel === "Platinum") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Tests
console.log("Hard - Test 1:", hardProblem("Platinum", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Gold", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("Platinum", 20)); // "go home"
console.log("Hard - Test 4:", hardProblem("Silver", 21)); // "can sign in"
console.log("Hard - Test 5:", hardProblem("Bronze", 18)); // "go home"
console.log("Hard - Test 6:", hardProblem("Diamond", 21)); // "can sign in"
