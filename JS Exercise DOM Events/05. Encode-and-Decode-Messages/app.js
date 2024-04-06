function encodeAndDecodeMessages() {
    const textareaInputElement = document.querySelector('#main div:first-child textarea:first-of-type');
    const textareaOutputElement = document.querySelector('#main div:last-child textarea:last-of-type');

    const buttonEncodeElement  = document.querySelector('#main div:first-child button:first-of-type');
    const buttonDecodeElement = document.querySelector('#main div:last-child button:last-of-type');

    let textForEncoding = ''
    let textForDecoding = ''

    textareaInputElement.addEventListener('click', (e) => {
        textareaOutputElement.value = ''
    })

    buttonEncodeElement.addEventListener('click', (e) => {
        textForEncoding = ''

        let textContent = textareaInputElement.value
        for (let i = 0; i < textContent.length; i++) {
            textForEncoding += String.fromCharCode(textContent.charCodeAt(i) + 1)
        }
        textareaOutputElement.value = textForEncoding
        textareaInputElement.value = ''
        
        
    });

    buttonDecodeElement.addEventListener('click', (e) => {
        textForDecoding = ''

        let textContent = textareaOutputElement.value
        for (let i = 0; i < textContent.length; i++) {
            textForDecoding += String.fromCharCode(textContent.charCodeAt(i) - 1)
        }
        textareaOutputElement.value = textForDecoding
        
    })

}