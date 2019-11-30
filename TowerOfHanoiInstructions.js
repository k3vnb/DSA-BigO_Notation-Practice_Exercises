// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
// Input:

// Rod A	Rod B	Rod C
// ----		
// ---------		
// -------------		
// Output:

// Rod A	Rod B	Rod C
// ----
// ---------
// -------------
// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?

function makeStacks(num){
    const stackA = []
    const stackB = []
    const stackC = []

    for (i = 1; i <= num; i++){stackA.push(i)}
    console.log('\nA:\n', makeDashes(stackA), '\nB:\n', makeDashes(stackB), '\nC:\n', makeDashes(stackC))
    tower(num, stackA, stackB, stackC, lineBreak())
}

function lineBreak(){
    return '\n\t+++++++++++++++++++++++++++++++++++++++++++++++++\n\t======================++++++=====================\n\t+++++++++++++++++++++++++++++++++++++++++++++++++\n'
}

function makeDashes(arr){
    let dashes= ''
    arr.forEach(i => {
        for (let j = 0; j<i; j++){
            dashes+='_'
        }
        dashes+='\n'
    })
    return dashes
}

function tower(num, src, dest, aux){
    if (num === 1){
        move(src, dest)
        console.log('\nA:\n', makeDashes(src), '\nB:\n', makeDashes(dest), '\nC:\n', makeDashes(aux), lineBreak())
    }
    else {
        tower(num - 1, src, aux, dest)
        move(src, dest)
        console.log('\nA:\n', makeDashes(src), '\nB:\n', makeDashes(dest), '\nC:\n', makeDashes(aux), lineBreak())
        tower(num - 1, aux, dest, src)
    }
}

function move(A, B){
    B.unshift(A.shift())
}

console.log(makeStacks(5))