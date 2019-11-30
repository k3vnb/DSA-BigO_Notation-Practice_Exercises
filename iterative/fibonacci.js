// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// Recursive
function fibonacci(num){
    if (num <= 1) return num
    return fibonacci(num -1) + fibonacci(num - 2)
}
// console.log(fibonacci(7))

// This is O(2^n) -- exponential runtime -- the amount of operations doubles everytime the input is increased by one.
// The iterative version is O(n) -- linear runtime -- directly proportional to input size

// Iterative
function fibonacciIterative(num){ //5
    let placeholder
    let lastResult = 0
    let result = 1
    for (let i = 1; i<=num-1; i++){ //4
        placeholder = result  //2
        result = result  + lastResult //3
        lastResult = placeholder //2
    }
    return result
}

console.log(fibonacciIterative(7))