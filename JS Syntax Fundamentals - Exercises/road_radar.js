function solve (speed, area) {
    let speeding = 0
    let speedLimit = 0
    let status = ''
    switch (area) {
        case ('motorway'):
            speedLimit = 130
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                speeding = speed - speedLimit
            }
            break;

        case ('interstate'):
            speedLimit = 90
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                speeding = speed - speedLimit
            }
            break;

        case ('city'):
            speedLimit = 50
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                speeding = speed - speedLimit
            }
            break;

        case ('residential'):
            speedLimit = 20
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                speeding = speed - speedLimit
            }
            break;
    }
    if (speeding !== 0) {
        if (speeding <= 20) {
            status = 'speeding'
        } else if (speeding <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')