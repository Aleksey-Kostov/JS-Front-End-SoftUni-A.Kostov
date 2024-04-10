baseUrl = 'http://localhost:3030/jsonstore/tasks'

const nameInputElement = document.getElementById('name')
const daysInputElement = document.getElementById('num-days')
const dateInputElement = document.getElementById('from-date')

const loadButtonElement = document.getElementById('load-vacations')
const addVacationElement = document.getElementById('add-vacation')
const editVacationElement = document.getElementById('edit-vacation')

const vacantionListElement = document.getElementById('list')

const formIdElement = document.querySelector('form')

const loadVacations = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    vacantionListElement.innerHTML = ''

    for (const vacation of Object.values(data)) {

        const divElement = document.createElement('div')
        divElement.classList.add('container')

        const nameH2Element = document.createElement('h2')
        const dateH3Element = document.createElement('h2')
        const daysH3Element = document.createElement('h2')

        nameH2Element.textContent = vacation.name  // ne e sigurno
        dateH3Element.textContent = vacation.date
        daysH3Element.textContent = vacation.days

        const changeButtonElement = document.createElement('button')
        const doneButtonElement = document.createElement('button')

        changeButtonElement.classList.add('change-btn')
        doneButtonElement.classList.add('done-btn')

        changeButtonElement.textContent = 'Change'
        doneButtonElement.textContent = 'Done'

        divElement.appendChild(nameH2Element)
        divElement.appendChild(dateH3Element)
        divElement.appendChild(daysH3Element)
        divElement.appendChild(changeButtonElement)
        divElement.appendChild(doneButtonElement)

        vacantionListElement.appendChild(divElement)

        editVacationElement.setAttribute('disabled', 'disabled')

        changeButtonElement.addEventListener ('click', () => {

            nameInputElement.value = vacation.name
            daysInputElement.value = vacation.date
            dateInputElement.value = vacation.days
            formIdElement.setAttribute('data-id', vacation._id)

            divElement.remove()

            editVacationElement.removeAttribute('disabled')
            addVacationElement.setAttribute('disabled' , 'disabled')
            
        })

        doneButtonElement.addEventListener ('click', async () => {
            await fetch(`${baseUrl}/${vacation._id}`, {
                method: 'DELETE'
            });

            divElement.remove()
        })

    }
}

loadButtonElement.addEventListener('click', loadVacations)

addVacationElement.addEventListener('click', async () => {
    newVacation = getInputData()

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newVacation),
    });

    if (!response.ok) {
        return;
    }

    clearInputData()

    loadVacations()

})

editVacationElement.addEventListener('click', async () => {
    const { name, date, days } = getInputData()

    const vacantionId = formElementId.getAttribute('data-id')

    const response = await fetch(`${baseURL}/${vacantionId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: vacantionId,
            name,
            date,
            days,
        })
    });

    if (!response.ok) {
        return;
    }

    formIdElement.removeAttribute('data-id')

    editVacationElement.setAttribute('disabled', 'disabled')

    addVacationElement.removeAttribute('disabled')

    clearInputData()

    loadVacations()

})


function getInputData() {
    const name = foodInputElement.value;
    const date = timeInputElement.value;
    const days = caloriesInputElement.value;

    return { name, date, days };
}

function clearInputData() {
    nameInputElement.value = ''
    daysInputElement.value = ''
    dateInputElement.value = ''
}
