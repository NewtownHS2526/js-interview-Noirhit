// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
function easyProblem1(inviteType, age) {
    if (inviteType === "Designer" && age === 18) {
        return "can access";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 1 - Test 1:", easyProblem1("Designer", 18)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Guest", 18)); // "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
function easyProblem2(inviteType, age) {
    if (age === 18 && inviteType !== "Designer") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 2 - Test 1:", easyProblem2("VIP", 18)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Designer", 18)); // "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Media", 16)); // "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
function mediumProblem(inviteType, age) {
    if (inviteType === "Designer" && age === 18) {
        return "can access";
    } else if (age === 18 && inviteType !== "Designer") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Medium - Test 1:", mediumProblem("Designer", 18)); // "can access"
console.log("Medium - Test 2:", mediumProblem("VIP", 18)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("Designer", 16)); // "go home"
console.log("Medium - Test 4:", mediumProblem("Guest", 22)); // "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
function hardProblem(inviteType, age) {
    if (age === 18) {
        if (inviteType === "Designer") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Tests
console.log("Hard - Test 1:", hardProblem("Designer", 18)); // "can access"
console.log("Hard - Test 2:", hardProblem("VIP", 18)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("Designer", 17)); // "go home"
console.log("Hard - Test 4:", hardProblem("Media", 18)); // "can sign in"
console.log("Hard - Test 5:", hardProblem("Guest", 20)); // "go home"
