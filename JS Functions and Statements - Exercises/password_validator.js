function solve(password) {
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password)
    const isStrong = password => password
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;

    let isValid = true;

    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false
    }

    if (!isAlphaNumerical(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false
    }

    if (!isStrong(password)) {
        console.log('Password must have at least 2 digits');
        isValid = false
    }

    if (isValid) {
        console.log('Password is valid');
    }
}