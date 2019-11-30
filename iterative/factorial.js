// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// RECURSIVE
function factorial(num){
    if (num === 1){
        return 1
    }

    return num * factorial(num - 1)
}

// console.log(factorial(10))

// This is O(n) -- linear runtime --- operations are directly proportional to size of input

// ITERATIVE

function factorialIterative(num){
    let result = num
    let placeholder = num - 1
    while (placeholder > 1) {
        result*= placeholder
        placeholder = placeholder - 1
    }
    
    return result
}

console.log(factorialIterative(3))