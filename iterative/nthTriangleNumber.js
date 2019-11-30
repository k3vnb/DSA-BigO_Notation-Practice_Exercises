// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

// Recursive
function findTriangleNumber(num){
    if (num === 1) return 1
    return num + findTriangleNumber(num - 1)
}

// console.log(findTriangleNumber(6))

// This is O(n) - linear time - because the the runtime operation is directly proportional to to the size of the input

//Iterative
function findTriangleNumberIterative(num){
    let placeholder = 1
    for (let i = 2; i <= num; i++){
        placeholder+= i
    }
    return placeholder
}

console.log(findTriangleNumberIterative(8))