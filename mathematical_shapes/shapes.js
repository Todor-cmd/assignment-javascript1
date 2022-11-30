const shapes = {
    diagonal : function(side1, side2) {
        return Math.sqrt(side1 ** 2 + side2 ** 2);
    },

    triangelArea : function(side1, side2, side3) {
        return (this.diagonal(side1, side2) * side3) / 2;
    },

    circumference : function(radius) {
        return Math.PI * 2 * radius;
    },

    circleArea : function(radius) {
        return Math.PI * (radius ** 2);
    }
}

const questionA = `The diagonal of a square with side length of 9 is: ${shapes.diagonal(9, 9)}`;

const questionB = `The area of a triangle with side lengths 5,6 and 7 is: ${shapes.triangelArea(5, 6, 7)}`;

const questionC = `The circumference of a circle with radius 4 is : ${shapes.circumference(4)}, The area of this circle is: ${shapes.circleArea(4)}`;

console.log(questionA);
console.log(questionB);
console.log(questionC);