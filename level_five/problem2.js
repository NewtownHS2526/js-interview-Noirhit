// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
function easyProblem1(memberRank, age) {
    if (memberRank === "Commodore" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 1 - Test 1:", easyProblem1("Commodore", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("commodore", 21)); // "go home"

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
function easyProblem2(memberRank, age) {
    if (age === 21 && memberRank !== "Commodore") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 2 - Test 1:", easyProblem2("Captain", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Commodore", 21)); // "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
function mediumProblem(memberRank, age) {
    if (memberRank === "Commodore" && age === 21) {
        return "can access";
    } else if (age === 21 && memberRank !== "Commodore") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Medium - Test 1:", mediumProblem("Commodore", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Member", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("Commodore", 20)); // "go home"
console.log("Medium - Test 4:", mediumProblem("Officer", 25)); // "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
function hardProblem(memberRank, age) {
    if (age === 21) {
        if (memberRank === "Commodore") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Tests
console.log("Hard - Test 1:", hardProblem("Commodore", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Captain", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("Commodore", 19)); // "go home"
console.log("Hard - Test 4:", hardProblem("Member", 21)); // "can sign in"
console.log("Hard - Test 5:", hardProblem("Commodore", 22)); // "go home"
