function solve(input) {
    const words = input.split(' ')
    const result = {}

    for (const word of words) {
        if (!result.hasOwnProperty(word.toLowerCase())) {
            result[word.toLowerCase()] = 0;
        }


        result[word.toLowerCase()]++;

    }

    const totralResult = [];
    for (const word in result) {
        if (result[word] % 2 !== 0) {
            totralResult.push(word)

        }
    }
    console.log(totralResult.join(' '));
    
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

solve('Cake IS SWEET is Soft CAKE sweet Food')