// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
function easyProblem1(attendeeType, age) {
    if (attendeeType === "Speaker" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 1 - Test 1:", easyProblem1("Speaker", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Speaker", 20)); // "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Attendee", 21)); // "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
function easyProblem2(attendeeType, age) {
    if (age === 21 && attendeeType !== "Speaker") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 2 - Test 1:", easyProblem2("Attendee", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Speaker", 21)); // "go home"
console.log("Easy 2 - Test 3:", easyProblem2("VIP", 19)); // "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
function mediumProblem(attendeeType, age) {
    if (attendeeType === "Speaker" && age === 21) {
        return "can access";
    } else if (age === 21 && attendeeType !== "Speaker") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Medium - Test 1:", mediumProblem("Speaker", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Attendee", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("Speaker", 19)); // "go home"
console.log("Medium - Test 4:", mediumProblem("VIP", 21)); // "can sign in"
console.log("Medium - Test 5:", mediumProblem("Student", 20)); // "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
function hardProblem(attendeeType, age) {
    if (age === 21) {
        if (attendeeType === "Speaker") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Tests
console.log("Hard - Test 1:", hardProblem("Speaker", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Attendee", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("Speaker", 20)); // "go home"
console.log("Hard - Test 4:", hardProblem("VIP", 21)); // "can sign in"
console.log("Hard - Test 5:", hardProblem("Student", 18)); // "go home"
console.log("Hard - Test 6:", hardProblem("Regular", 21)); // "can sign in"
