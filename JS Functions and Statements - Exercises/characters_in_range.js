
function solve(firstCharacters, secondCharacters) {

    // const sortedCharacters = getSortedCharacters(firstCharacters, secondCharacters);
    // const start = sortedCharacters[0]
    // const end = sortedCharacters[1]

    const [start, end] = getSortedCharacters(firstCharacters, secondCharacters)

    const result = getCharctersBetween(start, end)

    console.log(result.join(' '));

    function getCharctersBetween(start, end) {

        let characters = []
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++){
            characters.push(String.fromCharCode(i))
        }
    
        return characters
    }
    
    function getSortedCharacters(a, b) {
        const characters = [a, b];
    
        characters.sort();
    
        return characters
    }
}