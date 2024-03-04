function solve (text, singleWord) {
    let result = text
    .split(' ')
    .filter(element => element === singleWord)
    .length;

    console.log(result);

}

solve('This is a word and it also is a sentence',
'is'
)