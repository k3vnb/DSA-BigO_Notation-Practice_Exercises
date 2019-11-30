(function(){
    let count = 0
    function makeStacks(num){
        const stackA = []
        const stackB = []
        const stackC = []

        for (i = 1; i <= num; i++){stackA.push(i)}
        console.log('\nA:\n', makeDashes(stackA), '\nB:\n', makeDashes(stackB), '\nC:\n', makeDashes(stackC), lineBreak())
        tower(num, stackA, stackB, stackC)
    }

    function lineBreak(){
        return `\n\t+++++++++++++++++++++++++++++++++++++++++++++++++\n\t======================${count}=====================\n\t+++++++++++++++++++++++++++++++++++++++++++++++++\n`
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
            count++
            console.log('\nA:\n', makeDashes(src), '\nB:\n', makeDashes(dest), '\nC:\n', makeDashes(aux), lineBreak())
        }
        else {
            tower(num - 1, src, aux, dest)
            move(src, dest)
            count++
            console.log('\nA:\n', makeDashes(src), '\nB:\n', makeDashes(dest), '\nC:\n', makeDashes(aux), lineBreak())
    
            tower(num - 1, aux, dest, src)
        }
    }


    function move(A, B){
        B.unshift(A.shift())
    }

makeStacks(12)
})()

// This algorithm is O(2^n) - exponential time - for every 'disk' added to the stack, it exponentially increases the processing power by 2 to the next power. Essentially, every new disk doubles the amount of moves as the previous disk.