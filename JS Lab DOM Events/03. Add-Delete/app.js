function addItem() {
    const itemsElemets = document.getElementById('items')
    const textContentInputElemnts = document.getElementById('newItemText')

    const newItemElement = document.createElement('li')
    const newItemElementA = document.createElement('a')
    newItemElement.textContent = textContentInputElemnts.value
    newItemElementA.textContent = '[Delete]'
    newItemElementA.href = '#'

    newItemElementA.addEventListener('click', () => {
        newItemElement.remove();
    });

    newItemElement.appendChild(newItemElementA)
    itemsElemets.appendChild(newItemElement)

    
    

    textContentInputElemnts.value = ''
    

}