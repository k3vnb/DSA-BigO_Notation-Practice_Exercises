// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

// RECURSIVE
function reverseStr(str, newStr = ''){
    if (!str.length){
        return newStr
    }
    const arr = str.split('')
    const lastLetter = arr.pop()
    newStr+= lastLetter
    return reverseStr(arr.join(''), newStr)
}

// console.log(reverseStr('hello'))

//This is O(n) - linear time - because the run time is directly proportional the length of the string provided

//ITERATIVE
function reverseIterativeStr(str){
    let newStr = ''
    const arr = str.split('')
    for (let i = arr.length - 1; i >= 0; i--){
        newStr+= arr[i]
    }
    return newStr
}

console.log(reverseIterativeStr('hello'))