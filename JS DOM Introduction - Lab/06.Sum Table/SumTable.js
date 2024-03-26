function sumTable() {
    const productElements = document.querySelectorAll('tr td:last-child:not(#sum)')
    const tdSumElement = document.getElementById('sum')

    
    const sum = Array
        .from(productElements)
        .reduce((sum, element) => sum + Number(element.textContent), 0)

    tdSumElement.textContent = sum

}