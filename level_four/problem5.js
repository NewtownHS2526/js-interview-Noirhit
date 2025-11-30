// ============================================
// EASY PROBLEM 1: Simple if with two conditions
// ============================================
function easyProblem1(servicePackage, age) {
    if (servicePackage === "Royal" && age === 21) {
        return "can access";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 1 - Test 1:", easyProblem1("Royal", 21)); // "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Royal", 20)); // "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Standard", 21)); // "go home"

// ============================================
// EASY PROBLEM 2: If-else with !== operator
// ============================================
function easyProblem2(servicePackage, age) {
    if (age === 21 && servicePackage !== "Royal") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Easy 2 - Test 1:", easyProblem2("Premium", 21)); // "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Royal", 21)); // "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Basic", 19)); // "go home"

// ============================================
// MEDIUM PROBLEM: Complete conditional chain
// ============================================
function mediumProblem(servicePackage, age) {
    if (servicePackage === "Royal" && age === 21) {
        return "can access";
    } else if (age === 21 && servicePackage !== "Royal") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Tests
console.log("Medium - Test 1:", mediumProblem("Royal", 21)); // "can access"
console.log("Medium - Test 2:", mediumProblem("Premium", 21)); // "can sign in"
console.log("Medium - Test 3:", mediumProblem("Royal", 19)); // "go home"
console.log("Medium - Test 4:", mediumProblem("Deluxe", 21)); // "can sign in"
console.log("Medium - Test 5:", mediumProblem("Standard", 25)); // "go home"

// ============================================
// HARD PROBLEM: Advanced nested conditions
// ============================================
function hardProblem(servicePackage, age) {
    if (age === 21) {
        if (servicePackage === "Royal") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Tests
console.log("Hard - Test 1:", hardProblem("Royal", 21)); // "can access"
console.log("Hard - Test 2:", hardProblem("Premium", 21)); // "can sign in"
console.log("Hard - Test 3:", hardProblem("Royal", 20)); // "go home"
console.log("Hard - Test 4:", hardProblem("Deluxe", 21)); // "can sign in"
console.log("Hard - Test 5:", hardProblem("Standard", 30)); // "go home"
console.log("Hard - Test 6:", hardProblem("Basic", 21)); // "can sign in"
