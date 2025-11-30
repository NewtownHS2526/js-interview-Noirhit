// ============================================
// EASY PROBLEM 1: Simple if with two conditions
// ============================================
function easyProblem1(bidderStatus, age) {
    if (bidderStatus === "VIP" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 1 - Test 1:", easyProblem1("VIP", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("VIP", 20)); // "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Regular", 21)); // "go home"

// ============================================
// EASY PROBLEM 2: If-else with !== operator
// ============================================
function easyProblem2(bidderStatus, age) {
    if (age === 21 && bidderStatus !== "VIP") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 2 - Test 1:", easyProblem2("Registered", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("VIP", 21)); // "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Guest", 19)); // "go home"

// ============================================
// MEDIUM PROBLEM: Complete conditional chain
// ============================================
function mediumProblem(bidderStatus, age) {
    if (bidderStatus === "VIP" && age === 21) {
        return "can access";
    } else if (age === 21 && bidderStatus !== "VIP") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Medium - Test 1:", mediumProblem("VIP", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Registered", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("VIP", 19)); // "go home"
console.log("Medium - Test 4:", mediumProblem("Guest", 21)); // "can sign in"
console.log("Medium - Test 5:", mediumProblem("Member", 25)); // "go home"

// ============================================
// HARD PROBLEM: Advanced nested conditions
// ============================================
function hardProblem(bidderStatus, age) {
    if (age === 21) {
        if (bidderStatus === "VIP") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Tests
console.log("Hard - Test 1:", hardProblem("VIP", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Registered", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("VIP", 20)); // "go home"
console.log("Hard - Test 4:", hardProblem("Guest", 21)); // "can sign in"
console.log("Hard - Test 5:", hardProblem("Member", 30)); // "go home"
console.log("Hard - Test 6:", hardProblem("Regular", 21)); // "can sign in"
