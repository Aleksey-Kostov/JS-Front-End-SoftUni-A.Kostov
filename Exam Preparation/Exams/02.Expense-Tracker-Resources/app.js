window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn')
    const inputTypeExpenseElement = document.getElementById('expense')
    const inputTypeAmountElement = document.getElementById('amount')
    const inputTypeDateElement = document.getElementById('date')
    const ulPreviwElement = document.getElementById('preview-list')
    const ulexpensesElement = document.getElementById('expenses-list')
    const deleteButtonElement = document.querySelector('.btn.delete')

    addButtonElement.addEventListener('click', () => {

        const btnEdit = document.createElement('button')
        const btnOK = document.createElement('button')

        btnEdit.textContent = 'edit'
        btnOK.textContent = 'ok'

        btnEdit.classList.add('btn', 'edit')
        btnOK.classList.add('btn', 'ok')

        const divElement = document.createElement('div')
        divElement.classList.add('buttons')

        divElement.appendChild(btnEdit)
        divElement.appendChild(btnOK)

        const pTypeElement = document.createElement('p')
        const pAmountElement = document.createElement('p')
        const pDateElement = document.createElement('p')

        const expense = inputTypeExpenseElement.value
        const amount = inputTypeAmountElement.value
        const date = inputTypeDateElement.value

        pTypeElement.textContent = `Type: ${expense}`
        pAmountElement.textContent = `Amount: ${amount}$`
        pDateElement.textContent = `Date: ${date}`

        const articleElement = document.createElement('article')

        articleElement.appendChild(pTypeElement)
        articleElement.appendChild(pAmountElement)
        articleElement.appendChild(pDateElement)

        const liElement = document.createElement('li')
        liElement.classList.add('expense-item')

        liElement.appendChild(articleElement)
        liElement.appendChild(divElement)

        ulPreviwElement.appendChild(liElement)

        addButtonElement.setAttribute('disabled', 'disabled')
        inputTypeExpenseElement.value = ''
        inputTypeAmountElement.value = ''
        inputTypeDateElement.value = ''

        btnEdit.addEventListener('click', () => {

            inputTypeExpenseElement.value = expense
            inputTypeAmountElement.value = amount
            inputTypeDateElement.value = date

            ulPreviwElement.innerHTML = ''
            addButtonElement.removeAttribute('disabled')

        })

        btnOK.addEventListener('click', () => {
            divElement.remove()

            ulexpensesElement.appendChild(liElement)

            ulPreviwElement.innerHTML = ''

        })

        deleteButtonElement.addEventListener('click', () => {

            ulexpensesElement.innerHTML = ''
            addButtonElement.removeAttribute('disabled')

        })



    })


} 

