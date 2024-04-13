function solve(input) {
    const num = Number(input.shift())
    let persons = {}

    for (let i = 0; i < num; i++) {
        const [baristaName, shift, coffee] = input.shift().split(' ')
        persons[baristaName] = {
            shift,
            coffee: coffee.split(',')
        }

    }

    for (let i = 0; i < input.length; i++) {

        let [command, currentBarista, firstargs, secondArgs] = input[i].split(' / ')

        let barista = persons[currentBarista]

        if (command === 'Prepare') {}
    }

}


solve()


solve()