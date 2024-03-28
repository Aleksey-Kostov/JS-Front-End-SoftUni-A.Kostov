function solve(string) {
    const stringObject = JSON.parse(string)

    Object.keys(stringObject)
        .forEach(object => console.log(`${object}: ${stringObject[object]}`))
}