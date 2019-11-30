// In this example, we return to the problem of searching using a more sophisticated approach than in naive search. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item){
    let minIndex = 0
    let maxIndex = array.length - 1
    let currentIndex
    let currentElement

    while(minIndex <= maxIndex){
        currentIndex = Math.floor((minIndex + maxIndex) / 2)
        currentElement = array[currentIndex]

        if (currentElement < item){
            minIndex = currentIndex + 1
        }
        else if (currentElement > item){
            maxIndex = currentIndex - 1
        }
        else {
            return currentIndex
        }
    }
    return -1
}

// This is O(log n), logarithmic runtime -- because, since the array is sorted, it does a binary search, cutting the array in half on each iterance of the loop rather than running on each element in the array.