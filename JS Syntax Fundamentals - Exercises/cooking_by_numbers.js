function solve (num, param1, param2, param3, param4, param5) {
    let stringText = param1[0] + param2[0] + param3[0] + param4[0] + param5[0]
    let number = Number(num)
    for (i = 0; i <= stringText.length; i++) {
        if (stringText[i] === 'c'){
            number /= 2
            console.log(number);
        } else if (stringText[i] === 'd') {
            number = Math.sqrt(number)
            console.log(number);
        } else if (stringText[i] === 's') {
            number += 1
            console.log(number);
        } else if (stringText[i] === 'b') {
            number *= 3
            console.log(number);
        } else if (stringText[i] === 'f') {
            number *= 0.8
            console.log(number.toFixed(1));
        }

    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')