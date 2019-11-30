// What is the Big O of the following: 

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//Answer: O(n) - linear time - speed of operation is directly proportional to the size of the input