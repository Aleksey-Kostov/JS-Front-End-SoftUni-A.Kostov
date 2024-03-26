function extractText() {
    elementsTextContent = document.querySelectorAll('#items li')
    textArea = document.getElementById('result')
    result = ''
    textArea.value = ''


    for (element of elementsTextContent) {
        result = element.textContent
        textArea.value += `${result}\n`
    }

   
}