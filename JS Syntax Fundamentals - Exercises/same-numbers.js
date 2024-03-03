function solve (number){
    let sum = 0
    let isSame = true
    let stringNum = number.toString()
    let currentDigit = stringNum[0]
    for (i = 0; i < stringNum.length; i++) {
        
        if (currentDigit !== stringNum[i]) {
            isSame = false
        }

        currentDigit = stringNum[i]
        sum += Number(currentDigit)
    }
    console.log(isSame);
    console.log(sum);
}

solve(2222222)
solve(1234)