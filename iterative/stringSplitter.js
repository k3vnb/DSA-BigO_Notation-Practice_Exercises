// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]


//RECURSIVE
function strSplitter(str, separator, chunk='', arr=[]){
    if (str === '') {
        arr.push(chunk)
        return arr
    }
    let firstLetter = str.charAt(0)
    if (firstLetter !== separator){
        chunk+= firstLetter
    } else {
        arr.push(chunk)
        chunk = ''
    }
    strSplitter(str.substr(1), separator, chunk, arr)
    return arr
}

// console.log(strSplitter('20/12/2019', '/'))

// This is O(n) -- linear time - because the run time operation is directly proportional to the length of the string

//ITERATIVE
function strSplitterIterative(str, separator){
    let chunk = ''
    const arr = []
    for (let i = 0; i<str.length; i++){
        if (str.charAt(i) !== separator){
            chunk+= str.charAt(i)
        } else {
            arr.push(chunk)
            chunk = ''
        }
    }
    arr.push(chunk)
    return arr
}

console.log(strSplitterIterative('hello/world/hhh', '/'))