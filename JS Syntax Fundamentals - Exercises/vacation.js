function solve (peopleGroup, typeGroup, dayWeek) {
    let totalPrice
    switch (dayWeek) {
        case 'Friday':
            if (typeGroup === 'Students') {
                totalPrice = peopleGroup * 8.45
                if (peopleGroup >= 30){
                    totalPrice *= 0.85
                }
            } else if (typeGroup === 'Business') {
                totalPrice = peopleGroup * 10.90
                if (peopleGroup >= 100){
                    totalPrice -= 10 * 10.90
                }
            } else if (typeGroup === 'Regular') {
                totalPrice = peopleGroup * 15
                if (peopleGroup >= 10 && peopleGroup <=20) {
                    totalPrice *= 0.95
                }
            }
            break;
            case 'Saturday':
                if (typeGroup === 'Students') {
                    totalPrice = peopleGroup * 9.80
                    if (peopleGroup >= 30){
                        totalPrice *= 0.85
                    }
                } else if (typeGroup === 'Business') {
                    totalPrice = peopleGroup * 15.60
                    if (peopleGroup >= 100){
                        totalPrice -= 10 * 15.60
                    }
                } else if (typeGroup === 'Regular') {
                    totalPrice = peopleGroup * 20
                    if (peopleGroup >= 10 && peopleGroup <=20) {
                        totalPrice *= 0.95
                    }
                }
            break;
            case 'Sunday':
                if (typeGroup === 'Students') {
                    totalPrice = peopleGroup * 10.46
                    if (peopleGroup >= 30){
                        totalPrice *= 0.85
                    }
                } else if (typeGroup === 'Business') {
                    totalPrice = peopleGroup * 16
                    if (peopleGroup >= 100){
                        totalPrice -= 10 * 16
                    }
                } else if (typeGroup === 'Regular') {
                    totalPrice = peopleGroup * 22.50
                    if (peopleGroup >= 10 && peopleGroup <=20) {
                        totalPrice *= 0.95
                    }
                }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
    )
solve(40,
    "Regular",
    "Saturday"
    )