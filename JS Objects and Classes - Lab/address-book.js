function solve(arr) {
    const information = {}

    Array.from(arr)
        .map(elements => elements.split(':'))
        .forEach(([name, adres]) => information[name] = adres)

    Object
        .entries(information)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, adres]) => console.log(`${name} -> ${adres}`))
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)