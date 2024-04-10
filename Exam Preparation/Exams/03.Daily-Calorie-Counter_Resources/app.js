const baseURL = 'http://localhost:3030/jsonstore/tasks';

const buttonLoadMealsElement = document.getElementById('load-meals')
const mealListElement = document.getElementById('list')
const addMealButtonElement = document.getElementById('add-meal')
const editMealButtonElement = document.getElementById('edit-meal')
const foodInputElement = document.getElementById('food')
const timeInputElement = document.getElementById('time')
const caloriesInputElement = document.getElementById('calories')
const formElementId = document.querySelector('form')


const laodMeals = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();

    mealListElement.innerHTML = ''

    for (const meal of Object.values(data)) {
        const changeButton = document.createElement('button')
        changeButton.textContent = 'Change'
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'

        changeButton.classList.add('change-meal')
        deleteButton.classList.add('delete-meal')

        const divElementButtons = document.createElement('div')
        divElementButtons.id = 'meal-buttons'

        divElementButtons.appendChild(changeButton)
        divElementButtons.appendChild(deleteButton)

        const divMainElement = document.createElement('div')
        divMainElement.classList.add('meal')

        const h2Products = document.createElement('h2')
        h2Products.textContent = meal.food

        const h3Time = document.createElement('h3')
        h3Time.textContent = meal.time

        const h3Calories = document.createElement('h3')
        h3Calories.textContent = meal.calories

        divMainElement.appendChild(h2Products)
        divMainElement.appendChild(h3Time)
        divMainElement.appendChild(h3Calories)
        divMainElement.appendChild(divElementButtons)

        mealListElement.appendChild(divMainElement)
        

        changeButton.addEventListener('click', () => {

            formElementId.setAttribute('data-id', meal._id)

            foodInputElement.value = meal.food
            timeInputElement.value = meal.time
            caloriesInputElement.value = meal.calories

            editMealButtonElement.removeAttribute('disabled')
            addMealButtonElement.setAttribute('disabled', 'disabled')
            
            divMainElement.remove()
        })

        deleteButton.addEventListener('click', async () => {

            await fetch(`${baseURL}/${meal._id}`, {
                method: 'DELETE'
            });

            divMainElement.remove()
        })

    }
}

buttonLoadMealsElement.addEventListener('click', laodMeals);

addMealButtonElement.addEventListener ('click', async () => {
    const newMeal = getInputData()

    const { food, calories, time } = getInputData();
    if (food === '' || calories ==='' || time ==='') {
        return
    }

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newMeal),
    })

    if (!response.ok) {
        return;
    }

    clearInputData()

    laodMeals()

})

editMealButtonElement.addEventListener('click', async () => {
    const { food, calories, time } = getInputData();

    const mealId = formElementId.getAttribute('data-id')

    const response = await fetch(`${baseURL}/${mealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: mealId,
            food,
            calories,
            time,
        })
    });

    if (!response.ok) {
        return;
    }

    editMealButtonElement.setAttribute('disabled', 'disabled')

    addMealButtonElement.removeAttribute('disabled')

    formElementId.removeAttribute('data-id')

    clearInputData()

    laodMeals()

})


function getInputData() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;

    return { food, time, calories };
}

function clearInputData() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}




