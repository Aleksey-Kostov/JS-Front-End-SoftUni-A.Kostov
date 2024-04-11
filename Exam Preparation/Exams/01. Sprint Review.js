function solve(input) {
    const n = Number(input.shift())
    const persons = {}
   
    for (let i = 0; i < n; i++) {
        const [name, personId, title, status, points] = input.shift().split(':')

        if (!persons.hasOwnProperty(name)) {
            persons[name] = []
        }

        persons[name].push({personId, title, status, points: Number(points)})
    }
        
    //     const currentPerson = {}
    //     currentPerson[name] = {
    //         personId,
    //         title,
    //         status,
    //         points
    //     }
    //     persons.push(currentPerson)
    // }

    // let command = input.shift().split(' ')

    for (let i = 0; i < input.length; i++) {
        const [command, ...args] = input[i].split(':')

        if (command === 'Add New') {
            const [assignee, taskId, title, status, estimatedPoints] = args

            if (persons.hasOwnProperty(assignee)) {
                persons[assignee].push({ personId: taskId, title, status, points: Number(estimatedPoints) })
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command === 'Change Status') {
            const [assignee, taskId, newStatus] = args
            if (persons.hasOwnProperty(assignee)) {
                if (persons[assignee].personId !== taskId) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                } else {
                    persons[assignee].status = newStatus
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command === 'Remove Task') {
            const [assignee, index] = args
            if(!persons.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else if((persons[assignee].length - 1) !== Number(index)) {

                console.log(persons[assignee].length - 1);
                console.log('Index is out of range!');
            } else {
                persons[assignee].splice(Number(index), 1)

            }
        }
    }

    for (let person in persons) {
        for (let task in persons[person]) {
            let toDoTasksTotalPoints = 0
            let inProgressTasksTotalPoints = 0
            let codeReviewTasksTotalPoints = 0
            let doneTasksTotalPoints = 0

            if (persons[person][task].status === 'ToDo'){
                toDoTasksTotalPoints += persons[person][task].points
                console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
            }else if (persons[person][task].status === 'In Progress') {
                inProgressTasksTotalPoints += persons[person][task].points
                console.log(`In Progress: ${inProgressTasksTotalPoints}pts`)
            }else if (persons[person][task].status === 'Code Review') {
                codeReviewTasksTotalPoints += persons[person][task].points
                console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
            }else if (persons[person][task].status === 'Done Points') {
                doneTasksTotalPoints += persons[person][task].points
                console.log(`Done Points: ${doneTasksTotalPoints}pts`);
            }

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