function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks'

    const inputTitelElement = document.getElementById('title')
    const textAreaDescriptionElement = document.getElementById('description')

    const buttonLoadElement = document.getElementById('load-board-btn')
    const buttonCreateElement = document.getElementById('create-task-btn')

    const toDoTaskElement = document.querySelector('#board-section #todo-section .task-list')
    const progressTaskElement = document.querySelector('#board-section #in-progress-section .task-list')
    const reviewTaskElement = document.querySelector('#board-section #code-review-section .task-list')
    const doneTaskElement = document.querySelector('#board-section #done-section .task-list')
    


    const LoadBoard = async () => {
        const response = await fetch(baseURL);
        const data = await response.json();

        for (const board of Object.values(data)) {

            const liElement = document.createElement('li')
            liElement.classList.add('task')

            const h3Element = document.createElement('h3')
            h3Element.textContent = board.title

            const pElement = document.createElement('p')
            pElement.textContent = board.description

            const buttonMoveElement = document.createElement('button')
            const statusServer = board.status

            const boardId = board._id

            if (statusServer ==='ToDo') {
                liElement.id = `${boardId}`
                buttonMoveElement.textContent = 'Move to In Progress'

            } else if (statusServer === 'In Progress') {
                liElement.id = `${boardId}`
                buttonMoveElement.textContent = 'Move to Code Review'

            } else if (statusServer === 'Code Review') {
                liElement.id = `${boardId}`
                buttonMoveElement.textContent = 'Move to Done'

            }else {
                buttonMoveElement.textContent = 'Close'
            }

            liElement.appendChild(h3Element)
            liElement.appendChild(pElement)
            liElement.appendChild(buttonMoveElement)
            
            if (statusServer === 'ToDo') {
                toDoTaskElement.appendChild(liElement)

            } else if (statusServer === 'In Progress') {
                progressTaskElement.appendChild(liElement)

            } else if (statusServer === 'Code Review') {
                reviewTaskElement.appendChild(liElement)

            } else if (statusServer === 'Done') {
                doneTaskElement.appendChild(liElement)
            }

            buttonMoveElement.addEventListener('click', async () => {
                if (buttonMoveElement.textContent === 'Move to In Progress') {
                    progressTaskElement.appendChild(liElement)
                    document.getElementById(`${li_id}`).remove()
                    buttonMoveElement.textContent = 'Move to Code Review'
                    let status = 'In Progress'
                    sendPatch(status, li_id)

                } else if (buttonMoveElement.textContent === 'Move to Code Review') {
                    reviewTaskElement.appendChild(liElement)
                    document.getElementById(`${li_id}`).remove()
                    buttonMoveElement.textContent = 'Move to Done'
                    let status = 'Code Review'
                    sendPatch(status, li_id)

                } else if (buttonMoveElement.textContent === 'Move to Done') {
                    doneTaskElement.appendChild(liElement)
                    document.getElementById(`${li_id}`).remove()
                    buttonMoveElement.textContent = 'Close'
                    let status = 'Done'
                    sendPatch(status, li_id)

                }
            })
        }

    }
    buttonLoadElement.addEventListener('click', LoadBoard)

    const sendPatch = async (status, id) => {
        const response = await fetch(`${baseURL}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                status
            })
        });
    }

    
}

attachEvents();