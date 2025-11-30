// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
function easyProblem1(playerStatus, age) {
    if (playerStatus === "HighRoller" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("HighRoller", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("highroller", 21)); // "go home"

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
function easyProblem2(playerStatus, age) {
    if (age === 21 && playerStatus !== "HighRoller") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Regular", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("HighRoller", 21)); // "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
function mediumProblem(playerStatus, age) {
    if (playerStatus === "HighRoller" && age === 21) {
        return "can access";
    } else if (age === 21 && playerStatus !== "HighRoller") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("HighRoller", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("HighRoller", 20)); // "go home"
console.log("Medium - Test 4:", mediumProblem("VIP", 25)); // "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
function hardProblem(playerStatus, age) {
    if (age === 21) {
        if (playerStatus === "HighRoller") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("HighRoller", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Regular", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("HighRoller", 19)); // "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 21)); // "can sign in"
console.log("Hard - Test 5:", hardProblem("HighRoller", 22)); // "go home"
