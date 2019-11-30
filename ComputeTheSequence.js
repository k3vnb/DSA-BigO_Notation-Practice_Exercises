// What do the following algo do and what is its runtime complexity?

function compute(num){
    let result = []
    for (let i = 1; i <= num; i++){
        if (i === 1){
            result.push(0)
        }
        else if (i == 2){
            result.push(1)
        }
  
        else {
            result.push(result[i - 2] + result[i - 3])
        }
    }
    return result
}
console.log(compute(25))

// What's it do? creates an array that is the fibonacci sequence up to the num input
// what is it's runtime complexity? O(n) - linear time - it's run time is directly porportional to the num input 'size'

