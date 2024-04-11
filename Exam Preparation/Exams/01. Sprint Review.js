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

                const findID = persons[assignee].find((t) => t.personId === taskId)

                if (!findID) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                } else {
                    findID.status = newStatus
                }       
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command === 'Remove Task') {
            const [assignee, index] = args
            
            if(!persons.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } 

            else if (persons.hasOwnProperty(assignee)) {
                if ((persons[assignee].length) <= Number(index) || Number(index) < 0) {
                    console.log('Index is out of range!')
                } else {
                    persons[assignee].splice(Number(index), 1)
                }
            }
        }
    }

    let toDoTasksTotalPoints = 0
    let inProgressTasksTotalPoints = 0
    let codeReviewTasksTotalPoints = 0
    let doneTasksTotalPoints = 0

    for (let person in persons) {
        for (let task in persons[person]) {

            if (persons[person][task].status === 'ToDo'){
                toDoTasksTotalPoints += persons[person][task].points
                
            }else if (persons[person][task].status === 'In Progress') {
                inProgressTasksTotalPoints += persons[person][task].points
                
            }else if (persons[person][task].status === 'Code Review') {
                codeReviewTasksTotalPoints += persons[person][task].points
                
            }else if (persons[person][task].status === 'Done') {
                doneTasksTotalPoints += persons[person][task].points
                
            }

        }
       
    }

    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);

    const totalSumOtherTasks = toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints

    if (doneTasksTotalPoints >= totalSumOtherTasks) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }

}



// solve(    [
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ]
// )

solve(  [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]
)