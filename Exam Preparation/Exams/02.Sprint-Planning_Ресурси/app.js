window.addEventListener('load', solve);

function solve() {
    const titleInputElement = document.getElementById('title')
    const descriptionInputElement = document.getElementById('description')
    const pointsInputElement = document.getElementById('points')
    const assigneeInputElement = document.getElementById('assignee')
    const selectElement = document.getElementById('label')

    const sectionElement = document.getElementById('tasks-section')

    const createTaskBtnElement = document.getElementById('create-task-btn')
    const deleteTaskBtnElement = document.getElementById('delete-task-btn')
    const totalPointsElement = document.getElementById('total-sprint-points')

    let counter = 0
    let totalPoints = 0

    deleteTaskBtnElement.setAttribute('disabled', 'disabled')

    createTaskBtnElement.addEventListener('click', () => {

        if (titleInputElement.value === ''
            || descriptionInputElement.value === ''
            || pointsInputElement.value === ''
            || assigneeInputElement.value === '') {
            return
        }

        counter += 1
        totalPoints += Number(pointsInputElement.value)
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`

        const articleElement = document.createElement('article')
        
        articleElement.setAttribute('id', `task-${counter}`)
        articleElement.classList.add('task-card')

        const currentSlectElement = selectElement.value 


        const divCardLabel = document.createElement('div')
        if (selectElement.value === 'Feature') {
            divCardLabel.classList.add('task-card-label', 'feature')
            divCardLabel.textContent = 'Feature ⊡'

        } else if (selectElement.value === 'Low Priority Bug') {
            divCardLabel.classList.add('task-card-label', 'low-priority')
            divCardLabel.textContent = 'Low Priority Bug ☉'

        } else {
            divCardLabel.classList.add('task-card-label', 'high-priority')
            divCardLabel.textContent = 'High Priority Bug ⚠'
        }
        
        const h3TitleElement = document.createElement('h3')
        h3TitleElement.classList.add('task-card-title')
        h3TitleElement.textContent = titleInputElement.value

        const pDescriptionElement = document.createElement('p')
        pDescriptionElement.classList.add('task-card-description')
        pDescriptionElement.textContent = descriptionInputElement.value

        const pointDivElement = document.createElement('div')
        const currentPointElement = pointsInputElement.value // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
        pointDivElement.classList.add('task-card-points')
        pointDivElement.textContent = `Estimated at ${pointsInputElement.value} pts`
        pointsInputElement.setAttribute('value', currentPointElement) //!!!!!!!!!!!!!!!!!!!!!

        const assigneeDivElement = document.createElement('div')
        assigneeDivElement.classList.add('task-card-assignee')
        const currentAssignee = assigneeInputElement.value
        assigneeDivElement.textContent = `Assigned to: ${assigneeInputElement.value}`

        const actionDivElement = document.createElement('div')
        actionDivElement.classList.add('task-card-actions')
        const buttonDeleteElement = document.createElement('button')
        buttonDeleteElement.textContent = 'Delete'
        actionDivElement.appendChild(buttonDeleteElement)

        articleElement.appendChild(divCardLabel)
        articleElement.appendChild(h3TitleElement)
        articleElement.appendChild(pDescriptionElement)
        articleElement.appendChild(pointDivElement)
        articleElement.appendChild(assigneeDivElement)
        articleElement.appendChild(actionDivElement)

        sectionElement.appendChild(articleElement)

        clearInput()

        buttonDeleteElement.addEventListener('click', () => {

            titleInputElement.value = h3TitleElement.textContent
            descriptionInputElement.value = pDescriptionElement.textContent
            pointsInputElement.value = currentPointElement
            assigneeInputElement.value = currentAssignee
            selectElement.value = currentSlectElement
            

            createTaskBtnElement.setAttribute('disabled', 'disabled')
            deleteTaskBtnElement.removeAttribute('disabled')

            const inputTaskId = document.getElementById('task-id')
            inputTaskId.setAttribute('value', `task-${counter}`)
            const currId = articleElement.getAttribute('id') //!!!!!!!!!!!!!!!!

            titleInputElement.setAttribute('disabled', 'disabled')
            descriptionInputElement.setAttribute('disabled', 'disabled')
            pointsInputElement.setAttribute('disabled', 'disabled')
            assigneeInputElement.setAttribute('disabled', 'disabled')
            selectElement.setAttribute('disabled', 'disabled')

            deleteTaskBtnElement.removeAttribute('disabled')
            createTaskBtnElement.setAttribute('disable', 'disable')

        deleteTaskBtnElement.addEventListener('click', () => {

            document.querySelector(`#${currId}`).remove()

            totalPoints -= Number(pointsInputElement.getAttribute('value'))
            totalPointsElement.textContent = `Total Points ${totalPoints}pts`
            pointsInputElement.removeAttribute('value')

            deleteTaskBtnElement.setAttribute('disabled', 'disabled')
            createTaskBtnElement.removeAttribute('disabled')

            titleInputElement.removeAttribute('disabled')
            descriptionInputElement.removeAttribute('disabled')
            pointsInputElement.removeAttribute('disabled')
            assigneeInputElement.removeAttribute('disabled')
            selectElement.removeAttribute('disabled')


            clearInput()
        })
            
        })

    })

   



    function clearInput() {
        titleInputElement.value = ''
        descriptionInputElement.value = ''
        pointsInputElement.value = ''
        assigneeInputElement.value = ''
        selectElement.value = ''
    }
}