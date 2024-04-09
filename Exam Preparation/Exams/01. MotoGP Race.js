function solve(input) {
    const n = Number(input.shift())

    const riders = {}

    for (let i = 0; i < n; i++) {
        const [nameRider, fuelCapacity, currentPosition] = input.shift().split('|');

        riders[nameRider] = {
            fuelCapacity,
            currentPosition: Number(currentPosition)
        }
    }

    let commandLine = input.shift()

    while (commandLine !== 'Finish') {
        const [command, name, firstArgs, secondArgs] = commandLine.split(' - ');
        const rider = riders[name]

        if (command === 'StopForFuel') {
            let minimumFuel = Number(firstArgs)
            let changedPosition = secondArgs
            

            if (rider.fuelCapacity < minimumFuel) {
                rider.currentPosition = changedPosition
                console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${name} does not need to stop for fuel!`);
            }

        } else if (command === 'Overtaking') {
            nameRider2 = firstArgs

            if (riders[name].currentPosition < riders[nameRider2].currentPosition) {

                const currentRider = riders[nameRider2]
                riders[nameRider2] = riders[name]
                riders[name] = currentRider
                
                console.log(`${name} overtook ${nameRider2}!`);
            }

        } else if (command === 'EngineFail') {
            lapsLeft = firstArgs
            delete riders[name]

            console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            
        }

        commandLine = input.shift()

    }

    for (const rider in riders) {
        console.log(`${rider}\n   Final position: ${riders[rider].currentPosition}`)
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


solve ((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
)


