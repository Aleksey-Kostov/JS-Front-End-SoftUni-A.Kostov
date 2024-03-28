function deleteByEmail() {
    const inputElement = document.querySelector('input')
    const buttonDelete = document.querySelector('button')
    const mail = document.querySelectorAll('table tbody tr')
    const resultElement = document.getElementById('result');

    const resultTrElement = Array
        .from(mail).find(trElement => trElement.children[1].textContent.includes(inputElement.value))
    if (resultTrElement) {
        // Delete table row
        resultTrElement.remove();
        
        // Show deleted text
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}