function solve(number) {

    const evenSum= calculateDigitsSum(number, x => x % 2 === 0)
    const oddSum= calculateDigitsSum(number, x => x % 2 !== 0)

   printResult(oddSum, evenSum)

   function calculateDigitsSum(number, filter){
    const digits = number
        .toString()
        .split('')
        .map(digit => Number(digit))
        .filter(filter)

    const sum = digits.reduce((acc, digit) => acc + digit, 0)

    return sum

}

function printResult(oddSum, evenSum) {
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
    
}