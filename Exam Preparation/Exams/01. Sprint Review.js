function solve(input) {
    const n = Number(input.shift())
    persons = {}

    for (let i = 0; i < n; i++) {
        const [name, personId, title, status, points] = input.shift().split(':')
        persons[name] = [personId, title, status, points]

    }

    // let command = input.shift().split(' ')

    for (let i = 0; i < input.length; i++) {
        const [command, ...args] = input[i].split(':')

        if (command === 'Add New') {
            const [assignee, taskId, title, status, estimatedPoints] = args
            console.log(assignee);
            console.log(taskId);

        } else if (command === 'Change Status') {
            const [assignee, taskId, newStatus] = args


        } else if (command === 'Remove Task') {
            const [assignee, index] = args

        }
    }





}



solve(    [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
)