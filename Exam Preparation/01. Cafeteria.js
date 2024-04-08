function solve(input) {
    const num = Number(input.shift())
    let persons = []

    for (let i = 0; i < num; i++) {
        const [baristaName, shift, coffee] = input.shift().split(' ')
        const person = {
           name: baristaName,
            shift,
            coffee: coffee.split(','),
        }

        persons.push(person)

    }

    for (let i = 0; i < input.length; i++) {
        const line = input[i].split(' / ')
        const command = line[0]

        if (command === 'Prepare') {
            let currentBarista = line[1]
            let currentshift = line[2]
            let currentCoffe = line[3]

            for (obj of persons) {
                if (obj.name === currentBarista && obj.shift === currentshift && obj.coffee.includes(currentCoffe) ) {
                    console.log(`${currentBarista} has prepared a ${currentCoffe} for you!`);
                } else {
                    console.log(`${currentBarista} is not available to prepare a ${currentCoffe}.`);
                }
            }

        }else if (command === 'Change Shift'){

        }else if (command === 'Learn'){

        }else if (command === 'Closed') {

        }
        
    }

    console.log(persons);


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


solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
)