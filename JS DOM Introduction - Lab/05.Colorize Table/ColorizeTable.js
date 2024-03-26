function colorize() {
    const trTableElement = document.querySelectorAll('table tr')

    for (let i = 0; i < trTableElement.length; i++) {
        if (i % 2 !== 0) {
            trTableElement[i].style.backgroundColor = 'Teal'
        }
    }

    console.log(trTableElement);
}