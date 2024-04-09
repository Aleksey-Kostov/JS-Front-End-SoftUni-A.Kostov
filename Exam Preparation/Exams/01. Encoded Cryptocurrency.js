function solve(arr) {
    let formatedElements = arr.shift()
    let fullArr = Array.from(formatedElements)
    
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'TakeEven') {
            formatedElements = ''
            for (let i = 0; i < fullArr.length; i++){
                if (i % 2 === 0) {
                    formatedElements += fullArr[i]
                }
            }
            console.log(formatedElements);
            fullArr = Array.from(formatedElements)

        } else if (arr[i].includes('ChangeAll?')){
            [command, subString, replacement] = arr[i].split('?')
            formatedElements = formatedElements
                .split(subString)
                .join(replacement)
            console.log(formatedElements);
            fullArr = Array.from(formatedElements)

        } else if (arr[i].includes('Reverse?')) {
            [command, string] = arr[i].split('?')
            if (formatedElements.includes(string)) {
                formatedElements = formatedElements.replace(string, '')
                string = string.split("").reduce((acc, char) => char + acc, "");
                formatedElements += string
                console.log(formatedElements);
                fullArr = Array.from(formatedElements)
            }else {
                console.log('error');

            }

        } else if (arr[i] === 'Buy'){
            console.log(`The cryptocurrency is: ${formatedElements}`);
            return
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