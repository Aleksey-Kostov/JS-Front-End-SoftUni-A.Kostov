function solve(first, second, third) {
    const sum = (a, b) => a + b;
    const substract = (a, b) => a - b;

    const result = substract(sum(first, second), third)
    console.log(result);
}
