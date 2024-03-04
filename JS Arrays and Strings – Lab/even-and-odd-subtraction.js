function solve(inputArr) {
    let oddSum = 0
    let evenSum = 0
    for (i = 0; i < inputArr.length; i++) {
        if (Number(inputArr[i]) % 2 === 0) {
            evenSum += inputArr[i]
        } else if (Number(inputArr[i]) % 2 !== 0) {
            oddSum += inputArr[i]
        }
    }

    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6])
solve([3,5,7,9])