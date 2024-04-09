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

        if (command === 'Prepare') {
            shift = firstargs
            coffeeType = secondArgs
          
            if (barista.shift === shift && barista.coffee.includes(coffeeType)) {
                console.log(`${currentBarista} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${currentBarista} is not available to prepare a ${coffeeType}.`);
            }

        }else if (command === 'Change Shift'){
            shift = firstargs
            barista.shift = shift

            console.log(`${currentBarista} has updated his shift to: ${shift}`);

        }else if (command === 'Learn'){
            coffeeType = firstargs

            if (barista.coffee.includes(coffeeType)) {
                console.log(`${currentBarista} knows how to make ${coffeeType}.`)
            } else {
                console.log(`${currentBarista} has learned a new coffee type: ${coffeeType}.`);
                barista.coffee.push(coffeeType)

            }
        }else if (command === 'Closed') {
            for (const baristaName in persons) {
               console.log(`Barista: ${baristaName}, Shift: ${persons[baristaName].shift}, Drinks: ${persons[baristaName].coffee.join(', ')}`);

            }
            return
        }
        
    }

}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    )


// solve(['4',
// 'Alice day Espresso,Cappuccino',
// 'Bob night Latte,Mocha',
// 'Carol day Americano,Mocha',
// 'David night Espresso',
// 'Prepare / Alice / day / Espresso',
// 'Change Shift / Bob / day',
// 'Learn / Carol / Latte',
// 'Prepare / Bob / night / Latte',
// 'Learn / David / Cappuccino',
// 'Prepare / Carol / day / Cappuccino',
// 'Change Shift / Alice / night',
//  'Learn / Bob / Mocha',
// 'Prepare / David / night / Espresso',
// 'Closed']
// )