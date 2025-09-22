const baseValue = 5;
const heightValue = 10;

// calculate the area of triangle
const area = (baseValue* heightValue)/2
console.log(`The area of triangle is ${area}`);
// Output: The area of triangle is 25

// Example 2: Area When All Sides are Known
const sideA = 5;
const sideB = 6;
const sideC = 7;
const s = (sideA + sideB + sideC) / 2; // semi-perimeter
const area2 = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
console.log(`The area of triangle is ${area2}`);
// Output: The area of triangle is 14.696938456699069