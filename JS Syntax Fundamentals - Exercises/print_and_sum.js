function solve (start, end) {
    let currentSum = 0
    let result = ""
    for (let i = start; i <= end; i++ ) {
        currentSum += i
        result += i + ' '
    }
    console.log(result.trim());
    console.log(`Sum: ${currentSum}`);
}