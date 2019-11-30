// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

// RECURSIVE:
function countSheep(num){
    console.log(`${num}: Another sheep jumps over the fence`)
    
    if (num > 0){
        countSheep(num-1)
    } else {
        console.log('All sheep jumped over the fence')
    }
}

// countSheep(5)

// It is O(n) -- linear time, as the run time is directly proportional to the size of the input


//ITERATIVE:

function countIterativeSheep(num){
    for (let i = num; i > 0; i--){
        console.log(`${i}: Another sheep...`)
    }
    console.log('All the sheep...')
}

countIterativeSheep(5)