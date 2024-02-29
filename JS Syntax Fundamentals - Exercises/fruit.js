function solve (typeFruit, weigth, price) {
    let weigthKg = 0
    let money = 0
    weigthKg = weigth / 1000
    money = weigthKg * price
    console.log(`I need $${money.toFixed(2)} to buy ${weigthKg.toFixed(2)} kilograms ${typeFruit}.`);
}