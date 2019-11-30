// What is the Big 0 Notation of the following:

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// Answer: O(n) - linear time - operation time is directly proportional to the size of the input array