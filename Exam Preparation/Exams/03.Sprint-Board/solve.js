// TODO:
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
    
        // mealListElement.innerHTML = ''
    
        for (const board of Object.values(data)) {

            const liElement = document.createElement('li')
            liElement.classList.add('task')

            const h3Element = document.createElement('h3')
            h3Element.textContent = board.title

            const pElement = document.createElement('p')
            pElement.textContent = board.description

            const buttonMoveElement = document.createElement('button')
            const statusServer = board.status

            if (statusServer ==='ToDo') {
                buttonMoveElement.textContent = 'Move to In Progress'
                buttonMoveElement.addEventListener('click', () => {
                    toDoTaskElement.innerHTML = ''
                    progressTaskElement.appendChild(liElement)
                    buttonMoveElement.textContent = 'Move to Code Review'
                })
            } else if (statusServer === 'In Progress') {
                buttonMoveElement.textContent = 'Move to Code Review'
                buttonMoveElement.addEventListener('click', () => {
                    progressTaskElement.innerHTML = 'Move to Code Review'
                    reviewTaskElement.appendChild(liElement)
                    buttonMoveElement.textContent = 'Move to Done'

                })
            } else if (statusServer === 'Code Review') {
                buttonMoveElement.textContent = 'Move to Done'
                buttonMoveElement.addEventListener('click', () => {
                    reviewTaskElement.innerHTML = ''
                    doneTaskElement.appendChild(liElement)
                    buttonMoveElement.textContent = 'Close'

                })
            } else {
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
            
        }
    }

    buttonLoadElement.addEventListener('click', LoadBoard)

}

attachEvents();