function solve(input) {
    n = Number(input.shift())

    riders = {}

    for (let i = 0; i < n; i++) {
        const [nameRider, fuelCapacity, currentPosition] = input[i].split('|').shift()

        riders[nameRider] = {
            fuelCapacity,
            currentPosition: Number(currentPosition)
        }
    }

    let commandLine = input.shift()

    while (commandLine != 'Finish') {
        const [command, name, firstArgs, secondArgs] = commandLine.split(' - ')
        rider = riders[name]

        if (command === 'StopForFuel') {
            let minimumFuel = firstArgs
            let changedPosition = secondArgs
            

            if (rider.fuelCapacity < minimumFuel) {
                console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}."`);
            } else {
                console.log(`${name} does not need to stop for fuel!`);
            }

        } else if (command === 'Overtaking') {
            nameRider2 = firstArgs

            if (riders[name].currentPosition > riders[nameRider2].currentPosition) {

                riders[name], riders[nameRider2] = riders[nameRider2], riders[name]
                console.log(`${name} overtook ${nameRider2}!`);
            }

        } else if (command === 'EngineFail') {
            lapsLeft = firstArgs
            riders[name].remove()

            console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            
        }

        console.log(`"${name}\n   Final position: ${rider.position}"`);

        let commandLine = input.shift()

    }


}



solve((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
)


