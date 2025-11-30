// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
function easyProblem1(guestStatus, age) {
    if (guestStatus === "Connoisseur" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 1 - Test 1:", easyProblem1("Connoisseur", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Connoisseur", 20)); // "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
function easyProblem2(guestStatus, age) {
    if (age === 21 && guestStatus !== "Connoisseur") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 2 - Test 1:", easyProblem2("Enthusiast", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Connoisseur", 21)); // "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
function mediumProblem(guestStatus, age) {
    if (guestStatus === "Connoisseur" && age === 21) {
        return "can access";
    } else if (age === 21 && guestStatus !== "Connoisseur") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Medium - Test 1:", mediumProblem("Connoisseur", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Novice", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("Expert", 25)); // "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
function hardProblem(guestStatus, age) {
    if (age === 21) {
        if (guestStatus === "Connoisseur") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Tests
console.log("Hard - Test 1:", hardProblem("Connoisseur", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Enthusiast", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("Connoisseur", 19)); // "go home"
console.log("Hard - Test 4:", hardProblem("Beginner", 18)); // "go home"
