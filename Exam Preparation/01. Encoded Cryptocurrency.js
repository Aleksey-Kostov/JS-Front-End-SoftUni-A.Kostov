function solve(arr) {
    let fullArr = Array.from(arr.shift())
    let formatedElements = ''
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'TakeEven') {
            formatedElements = ''
            for (let i = 0; i < fullArr.length; i++){
                if (i % 2 === 0) {
                    formatedElements += fullArr[i]
                }
            }
            console.log(formatedElements);
            fullArr = formatedElements

        } else if (arr[i].includes('ChangeAll?')){
            [command, subString, replacement] = arr[i].split('?')
            formatedElements = formatedElements.replace(subString, replacement)
            console.log(formatedElements);
            fullArr = formatedElements

        } else if (arr[i].includes('Reverse?')) {
            [command, subString] = arr[i].split('?')
            if (formatedElements.includes(subString)) {
                formatedElements = formatedElements.replace(subString, '')
                subString = subString.split("").reduce((acc, char) => char + acc, "");
                formatedElements += subString
                console.log(formatedElements);
                fullArr = formatedElements
            }else {
                console.log('error');

            }

        } else if (arr[i] === 'Buy'){
            console.log(`The cryptocurrency is: ${formatedElements}`);
        }
    }
}

// solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
// "TakeEven",
// "Reverse?!nzahc",
// "ChangeAll?m?g",
// "Reverse?adshk",
// "ChangeAll?z?i",
// "Buy"])
// )

solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
)