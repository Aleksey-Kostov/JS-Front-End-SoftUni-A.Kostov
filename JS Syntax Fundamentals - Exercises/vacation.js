function solve (peopleGroup, typeGroup, dayWeek) {
    let totalPrice
    switch (dayWeek) {
        case 'Friday':
            if (typeGroup === 'Students') {
                totalPrice = peopleGroup * 8.45
            } else if (typeGroup === 'Business') {
                totalPrice = peopleGroup * 10.90
            } else if (typeGroup === 'Regular') {
                totalPrice = peopleGroup * 15
            }
            break;
            case 'Saturday':
                if (typeGroup === 'Students') {
                    totalPrice = peopleGroup * 9.80
                } else if (typeGroup === 'Business') {
                    totalPrice = peopleGroup * 15.60
                } else if (typeGroup === 'Regular') {
                    totalPrice = peopleGroup * 20
                }
            break;
            case 'Sunday':
                if (typeGroup === 'Students') {
                    totalPrice = peopleGroup * 10.46
                } else if (typeGroup === 'Business') {
                    totalPrice = peopleGroup * 16
                } else if (typeGroup === 'Regular') {
                    totalPrice = peopleGroup * 22.50
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