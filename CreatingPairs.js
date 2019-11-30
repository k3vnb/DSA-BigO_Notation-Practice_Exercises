// what is the big o of the following:

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// O(n^2) - polynomial time - total pair potential is determined exponentially - in this case squared - compared to size of inputs (n)