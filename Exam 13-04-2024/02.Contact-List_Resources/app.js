window.addEventListener("load", solve);

function solve() {
    const inputTextElement = document.getElementById('name')
    const inputPhoneElement = document.getElementById('phone')
    const optionCategoryElement = document.getElementById('category')

    const addButtonElement = document.getElementById('add-btn')

    const ulElement = document.getElementById('check-list')
    const ulContactList = document.getElementById('contact-list')

    addButtonElement.addEventListener('click', () => {

      if (inputPhoneElement.value === '' || inputTextElement.value === '' || optionCategoryElement.value === '' ) {
        return
      }

      const liMainElement = document.createElement('li')

      const articleElement = document.createElement('article')

      const pNameElement = document.createElement('p')
      pNameElement.textContent = `name:${inputTextElement.value}`
      let currentPnameElement = inputTextElement.value
      const pPhoneElement = document.createElement('p')
      pPhoneElement.textContent = `phone:${inputPhoneElement.value}`
      let currentpPhoneElement = inputPhoneElement.value
      const pcategoryElement = document.createElement('p')
      pcategoryElement.textContent = `category:${optionCategoryElement.value}`
      let currentCategoryElement = optionCategoryElement.value
      articleElement.appendChild(pNameElement)
      articleElement.appendChild(pPhoneElement)
      articleElement.appendChild(pcategoryElement)
     
      const divElement = document.createElement('div')
      divElement.classList.add('buttons')
      const editButton = document.createElement('button')
      editButton.classList.add('edit-btn')
      const saveButtonElement = document.createElement('button')
      saveButtonElement.classList.add('save-btn')
      divElement.appendChild(editButton)
      divElement.appendChild(saveButtonElement)

      liMainElement.appendChild(articleElement)
      liMainElement.appendChild(divElement)

      ulElement.appendChild(liMainElement)
      addButtonElement.setAttribute('disabled', 'disabled')
      clearInput()



      editButton.addEventListener('click', () => {
        inputTextElement.value = currentPnameElement
        inputPhoneElement.value = currentpPhoneElement
        optionCategoryElement.value = currentCategoryElement

        ulElement.innerHTML = ''
      })

      saveButtonElement.addEventListener('click', () => {
        divElement.remove()
        const buttonDeleteElement = document.createElement('button')
        buttonDeleteElement.classList.add('del-btn')
        
        liMainElement.appendChild(buttonDeleteElement)
        ulContactList.appendChild(liMainElement)
        ulElement.innerHTML = ''
        addButtonElement.setAttribute('disabled', 'disabled')

        buttonDeleteElement.addEventListener('click', () => {
          ulContactList.innerHTML = ''
        })
        
      })




    })


  function clearInput () {
    inputPhoneElement.value = ''
    inputTextElement.value = ''
    optionCategoryElement.value = ''
  }

  }
  