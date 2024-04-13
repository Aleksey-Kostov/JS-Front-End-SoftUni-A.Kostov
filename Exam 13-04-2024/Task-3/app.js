const baseURL = 'http://localhost:3030/jsonstore/games';

const nameInputElement = document.getElementById('g-name')
const textInputElement = document.getElementById('type')
const numberInputElement = document.getElementById('players')

const buttonAddGameElement = document.getElementById('add-game')
const buttonEditGameElement = document.getElementById('edit-game')

const buttonLoadElement = document.getElementById('load-games')

const divGameListElement = document.getElementById('games-list')
const formElement = document.querySelector('form')


const loadGame = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();

    divGameListElement.innerHTML = ''

    for (const game of Object.values(data)) {
        const divBoardGame = document.createElement('div')
        divBoardGame.classList.add('board-game')

        const divContentElement = document.createElement('div')
        divContentElement.classList.add('content')

        const pNameElement = document.createElement('p')
        pNameElement.textContent = game.name

        const pNumberElement = document.createElement('p')
        pNameElement.textContent = game.players

        const pTextElement = document.createElement('p')
        pTextElement.textContent = game.type

        divContentElement.appendChild(pNameElement)
        divContentElement.appendChild(pNumberElement)
        divContentElement.appendChild(pTextElement)

        const divButtonElement = document.createElement('div')
        divButtonElement.classList.add('buttons-container')

        const changeButtonElement = document.createElement('button')
        changeButtonElement.classList.add('change-btn')
        changeButtonElement.textContent = 'Change'
        const deleteButtonElement = document.createElement('button')
        deleteButtonElement.classList.add('delete-btn')
        deleteButtonElement.textContent = 'Delete'

        divButtonElement.appendChild(changeButtonElement)
        divButtonElement.appendChild(deleteButtonElement)

        divBoardGame.appendChild(divContentElement)
        divBoardGame.appendChild(divButtonElement)

        divGameListElement.appendChild(divBoardGame)


        buttonEditGameElement.setAttribute('disabled', 'disabled')
        changeButtonElement.addEventListener('click', () => {
            formElement.setAttribute('data-id', game._id)

            nameInputElement.value = game.name
            numberInputElement.value = game.players
            textInputElement.value = game.type

            buttonEditGameElement.removeAttribute('disabled')
            buttonAddGameElement.setAttribute('disabled', 'disabled')

            divBoardGame.remove()

        })

        deleteButtonElement.addEventListener('click', async () => {
            await fetch(`${baseURL}/${game._id}`, {
                method: 'DELETE'
            });

            divBoardGame.remove()

        })
    }

}
buttonLoadElement.addEventListener('click', loadGame)

buttonAddGameElement.addEventListener('click', async () => {
    const newGame = getInputData()

    // const { name, type, players } = getInputData

    // if (name === '' || type ==='' || players ==='') {
    //     return
    // }

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newGame),
    })

    if (!response.ok) {
        return;
    }

    clearInputData()

    loadGame()

})

buttonEditGameElement.addEventListener('click', async () => {
    const { name, type, players } = getInputData()

    const gameId = formElement.getAttribute('data-id')

    const response = await fetch(`${baseURL}/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: gameId,
            name,
            type,
            players,
        })
    });

    if (!response.ok) {
        return;
    }

    formElement.removeAttribute('data-id')

    buttonEditGameElement.setAttribute('disabled', 'disabled')

    buttonAddGameElement.removeAttribute('disabled')

    clearInputData()

    loadGame()

})

function getInputData() {
    const name = nameInputElement.value;
    const type = textInputElement.value;
    const players = numberInputElement.value;

    return { name, type, players };
}

function clearInputData() {
    nameInputElement.value = '';
    textInputElement.value = '';
    numberInputElement.value = '';
}