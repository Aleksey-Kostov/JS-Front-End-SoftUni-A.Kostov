function solve (number){
    let sum = 0
    let isTrue = false
    for (i = 0; i <= toString(number).length; i++) {
        sum += Number(number[i])

    }
    console.log(sum);
}

solve(2222222)
solve(1234)