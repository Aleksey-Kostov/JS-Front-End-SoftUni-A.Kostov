function solve (n, input) {
    let arr = []
    for (let i = 0; i < n; i++){
        arr.push(input[i])
    }
    let reverseArr = ''
    for (let i = n - 1; i >= 0; i--) {
        reverseArr += ' ' + arr[i]
    }
    console.log(reverseArr);
}

solve(3, [10, 20, 30, 40, 50])