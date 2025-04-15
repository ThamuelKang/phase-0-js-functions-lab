function calculateTax(amount) {
    return amount * .1
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function isPalindrome(word) {
    const reverse = word.split('').reverse().join('')
    return word === reverse
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage * .01)
    return originalPrice - discountAmount
}

console.log(calculateDiscountedPrice(100, 100))


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };