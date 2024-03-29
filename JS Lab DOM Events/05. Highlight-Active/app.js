function focused() {
    const inputFields = document.querySelectorAll('input[type=text]')

    Array.from(inputFields).forEach(inputElement => inputElement.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focused');
    }));

    Array.from(inputFields).forEach(inputElement => inputElement.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focused');
    }));
}