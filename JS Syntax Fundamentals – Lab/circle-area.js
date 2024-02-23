function solve (arguments) {
    if (typeof(arguments) === 'number') {
        area = 3.14159265359 * arguments ** 2
        console.log(area.toFixed(2));
    } else console.log(`We can not calculate the circle area, because we receive a ${typeof(arguments)}.`);
}

solve('name')