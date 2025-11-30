// Level Four - Problem Set 1: Art Gallery Exclusive Access
// Logic Rules:
// - If patronLevel is "Collector" AND age is 21 → return "can access"
// - If age is 21 AND patronLevel is NOT "Collector" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
function easyProblem1(patronLevel, age) {
    if (patronLevel === "Collector" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Collector", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Collector", 20)); // "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
function easyProblem2(patronLevel, age) {
    if (age === 21 && patronLevel !== "Collector") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Member", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Collector", 21)); // "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
function mediumProblem(patronLevel, age) {
    if (patronLevel === "Collector" && age === 21) {
        return "can access";
    } else if (age === 21 && patronLevel !== "Collector") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Collector", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Visitor", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("Student", 25)); // "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
function hardProblem(patronLevel, age) {
    if (age === 21) {
        if (patronLevel === "Collector") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Collector", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Member", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("Collector", 19)); // "go home"
console.log("Hard - Test 4:", hardProblem("Guest", 15)); // "go home"
