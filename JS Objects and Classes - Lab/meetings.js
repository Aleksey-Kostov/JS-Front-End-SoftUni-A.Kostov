function solve(appointments) {
    const meeting = {}

    Array.from(appointments)
        .map(elements => elements.split(' '))
        .forEach(([day, name]) => {
            if (meeting[day]) {
                console.log(`Conflict on ${day}!`);
            }else { 
                meeting[day] = name
                console.log(`Scheduled for ${day}`);
            }
        })

    for (weekday in meeting) {
        console.log(`${weekday} -> ${meeting[weekday]}`);
    }

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)