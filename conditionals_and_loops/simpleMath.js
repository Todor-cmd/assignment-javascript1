const simpleMath = {
    findLarger : (num1, num2) => {
        if (num1 > num2) {
            return num1;
        }
        return num2;
    },

    isEvenOrOdd : num => {
        if (num % 2 == 0) {
            return "Even";
        }
        return "Odd";
    }
}

console.log(simpleMath.findLarger(-5, 3))
console.log(simpleMath.findLarger(-5, -30))
console.log(simpleMath.isEvenOrOdd(-31))
console.log(simpleMath.isEvenOrOdd(48))