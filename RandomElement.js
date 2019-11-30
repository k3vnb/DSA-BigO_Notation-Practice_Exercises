// what's the following algo do? What's it's BigO?

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(isWhat(8191))

// This algorithm checks for prime numbers
// It is O(n), linear runtime, because in the worst case scenario, ie a very large prime number, the amount of times the loop will run is directly proportional to the size of the input.
