function addItem() {
    const input = document.getElementById('newItemText')
    const itemListElement = document.getElementById('items');

    const newInputElement = document.createElement('li')
    
    newInputElement.textContent = input.value

    itemListElement.appendChild(newInputElement)

    input.value = ''
    
}