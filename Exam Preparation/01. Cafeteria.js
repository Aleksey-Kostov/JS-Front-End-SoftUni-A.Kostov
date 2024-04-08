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

        let [command, currentBarista, ...args] = input[i].split(' / ')

        let barista = persons[currentBarista]

        if (command === 'Prepare') {
          

            if (barista.shift === args[0] && barista.coffee.includes(args[1])) {
                console.log(`${currentBarista} has prepared a ${args[1]} for you!`);
            } else {
                console.log(`${currentBarista} is not available to prepare a ${args[1]}.`);
            }

            // for (obj in persons) {
            //     if (obj.name === currentBarista && obj.shift === currentshift && obj.coffee.includes(currentCoffe)) {
            //         console.log(`${currentBarista} has prepared a ${currentCoffe} for you!`);
            //         break
            //     }else {
            //         console.log(`${currentBarista} is not available to prepare a ${currentCoffe}.`);
            //         break
            //     }
            // }

        }else if (command === 'Change Shift'){
            
            barista.shift = args[0]
            console.log(`${currentBarista} has updated his shift to: ${args[0]}`);


        }else if (command === 'Learn'){
            if (barista.coffee.includes(args[0])) {
                console.log(`${currentBarista} knows how to make ${args[0]}.`)
            } else {
                console.log(`${currentBarista} has learned a new coffee type: ${args[0]}.`);
                barista.coffee.push(args[0])
            }
        }else if (command === 'Closed') {
            for (obj in persons) {
               console.log(`Barista: ${obj}, Shift: ${obj.shift}, Drinks: ${obj}`);

            }
            return
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