// TODO:
function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks'

    const inputTitelElement = document.getElementById('title')
    const textAreaDescriptionElement = document.getElementById('description')

    const buttonLoadElement = document.getElementById('load-board-btn')
    const buttonCreateElement = document.getElementById('create-task-btn')


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
            
        }
    }

}

attachEvents();