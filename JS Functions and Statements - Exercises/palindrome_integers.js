
function solve(numbers) {
    // numbers.forEach(number => console.log(isPalindrome(number)))
    numbers.forEach(printPalindromResult)

    function isPalindrome(number) {
        const forwardNumber = number.toString();
        const backwardNumber = forwardNumber.split('').reverse().join('');
    
        return forwardNumber === backwardNumber
    
    }
    
    function printPalindromResult(number) {
        console.log(isPalindrome(number));
    }
    
}