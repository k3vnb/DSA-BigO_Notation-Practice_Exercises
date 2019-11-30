// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

// RECURSIVE
function powerCalculator(base, exp){
    console.log(base, exp)
    if (exp < 0){
        return 'Exponent should be >=0'
    }
    else if (exp === 1){
        return base
    }
    return base * powerCalculator(base, exp - 1)
}

// console.log(powerCalculator(10, 3))

// This is O(n)- linear time. The number of operations is directly proportional to the size of the expondent

// ITERATIVE
function powerCalculatorIterative(base, exp){
    let result = base
    for (let i = 1; i < exp; i++){
        result*= base
    }
    return result
}

console.log(powerCalculatorIterative(5, 3))