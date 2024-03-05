function solve(wordsInput, template) {
    const words = wordsInput.split(', ')
    let startIndex = -1
    let endIndex = -1

    for (let i = 0; i <template.length; i++) {
        if (template[i] === '*') {
            if (startIndex < 0) {
                startIndex = i
                endIndex = 1
            } else {
                endIndex = i
            }
        } else {
            if (startIndex >= 0) {
                let length = endIndex - startIndex;
                startIndex = -1
                endIndex = -1
            } 
        }
    }
    
}