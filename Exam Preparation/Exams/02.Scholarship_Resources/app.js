window.addEventListener("load", solve);

function solve() {
  const inputTextStudentElement = document.getElementById('student')
  const inputTextUniversityElement = document.getElementById('university')
  const inputTextScoreElement = document.getElementById('score')
  const buttonNextElement = document.getElementById('next-btn')
  const previewListElement = document.getElementById('preview-list')
  const candidatesListElement = document.getElementById('candidates-list')

  buttonNextElement.addEventListener('click', () => {
    const articleElement = document.createElement('article')
    const h4Element = document.createElement('h4')
    const pUniversityElement = document.createElement('p')
    const pScoreElement = document.createElement('p')

    const textContentH4Element = inputTextStudentElement.value
    const textContentPUniversityElement = inputTextUniversityElement.value
    const textContentPScoreElement = inputTextScoreElement.value

    h4Element.textContent = `${textContentH4Element}`
    pUniversityElement.textContent = `University: ${textContentPUniversityElement}`
    pScoreElement.textContent = `Score: ${textContentPScoreElement}`

    articleElement.appendChild(h4Element)
    articleElement.appendChild(pUniversityElement)
    articleElement.appendChild(pScoreElement)

    const btnEdit = document.createElement('button')
    const btnApply = document.createElement('button')

    btnEdit.classList.add('action-btn', 'edit')
    btnApply.classList.add('action-btn', 'apply')

    btnEdit.textContent = 'edit'
    btnApply.textContent = 'apply'

    const liElement = document.createElement('li')

    liElement.classList.add('application')

    liElement.appendChild(articleElement)
    liElement.appendChild(btnEdit)
    liElement.appendChild(btnApply)
    
    if (inputTextStudentElement.value === '' ||
    inputTextUniversityElement.value === '' ||
    inputTextScoreElement.value === '') {
      return
    }

    previewListElement.appendChild(liElement)

    buttonNextElement.setAttribute('disabled', 'disabled')
    inputTextStudentElement.value = ''
    inputTextUniversityElement.value = ''
    inputTextScoreElement.value = ''

    btnEdit.addEventListener ('click', () => {
      inputTextStudentElement.value = textContentH4Element
      inputTextUniversityElement.value = textContentPUniversityElement
      inputTextScoreElement.value = textContentPScoreElement
      previewListElement.innerHTML = ''
      buttonNextElement.removeAttribute('disabled')
      



    })

    btnApply.addEventListener ('click', () => {

      previewListElement.innerHTML = ''

      btnEdit.remove()
      btnApply.remove()

      candidatesListElement.appendChild(liElement)
      buttonNextElement.removeAttribute('disabled')
      

    })


  })

}
