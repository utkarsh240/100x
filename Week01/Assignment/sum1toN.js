function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Example usage
console.log(sum(10)); // Output: 55
