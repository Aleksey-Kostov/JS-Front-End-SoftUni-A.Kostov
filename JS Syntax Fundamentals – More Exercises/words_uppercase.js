function solve (text) {
    let allText = ''
    for (i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() !== text[i].toUpperCase() || Number(text[i])) {
            allText += text[i].toUpperCase()
        } else if (allText.charAt(allText.length - 1) !== ' '){
            allText += ' '
        } 
    }
    console.log(allText
        .trim()
        .split(' ')
        .join(', '));
}


solve('Functions in JS can be nested, i.e. hold other functions')
solve('l l    l,,,,,,,,,,2')
solve('Hi, how are you?')

// else if (allText.charAt(allText.length - 1) !== ' ' && i < text.length - 1) {
//     allText += ', '