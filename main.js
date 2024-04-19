// Numbers in JavaScript

// // ask for 2 numbers and then do all the math things with them together
// var num1 = parseInt(prompt("enter number 1"));
// var num2 = parseInt(prompt("enter number 2"));
// let sum = `${num1} + ${num2} = ${num1 + num2}`;
// alert(sum);
// let diff = `${num1} - ${num2} = ${num1 - num2}`;
// alert(diff);
// let product = `${num1} x ${num2} = ${num1 * num2}`;
// alert(product);
// let qou = `${num1} / ${num2} = ${num1 / num2}`;
// alert(qou);
// let allOutput = `${sum} \n ${diff} \n ${product} \n ${qou}`;
// alert(allOutput);

// // powers / exponents
// var num1 = parseInt(prompt("enter a number"));
// let exp = ` ${num1} to the power of 1 is ${
//   num1 ** 1
// } \n ${num1} to the power of 2 is ${
//   num1 ** 2
// } \n ${num1} to the power of 3 is ${
//   num1 ** 3
// } \n ${num1} to the power of 4 is ${
//   num1 ** 4
// } \n ${num1} to the power of 5 is ${
//   num1 ** 5
// }  \n ${num1} to the power of 25 is ${num1 ** 25}`;
// alert(exp);

// // remainders
// var num1 = parseInt(prompt("enter a number"));
// let output = `${num1} divided by 5 is ${
//   (num1 - (num1 % 5)) / 5
// } with a remainder of ${num1 % 5}`;
// alert(output);

// // circumfrence and area of o
// var rad = parseInt(prompt("Please state a number"));
// let output = `the circumfrence is ${(2 * Math.PI * rad).toFixed(
//   2
// )} and the area is ${(Math.PI * rad ** 2).toFixed(2)}`;
// alert(output);

// // inches to feet and inches
// var num1 = parseInt(prompt("enter a your height in inches"));
// let output = `${num1} in feet and inches is ${(num1 - (num1 % 12)) / 12}'${
//   num1 % 12
// }"`;
// alert(output);

// parseint vs parsefloat

// parse int string into integer
// parse float turns string into a decimal
// + operator does both

// // length and width of room = area
// var length = parseFloat(prompt("please enter the length of your room"));
// var width = parseFloat(prompt("please enter the width of your room"));
// let output = `The perimeter is ${(length * 2 + width * 2).toFixed(
//   1
// )} and the area is ${(length * width).toFixed(1)}`;
// alert(output);

// // volume and sa of a cylinder
// var rad = parseFloat(prompt("please enter the radius for your cylinder"));
// var hei = parseFloat(prompt("please enter the height for your cylinder"));
// let output = `The Volume of your cylinder is ${(
//   Math.PI *
//   rad ** 2 *
//   hei
// ).toFixed(2)} and the surface area is ${(
//   2 * Math.PI * rad * hei +
//   2 * Math.PI * rad ** 2
// ).toFixed(2)}`;
// alert(output);

// // a squared + b squared = c squared
// var a = parseFloat(prompt("enter side A"));
// var b = parseFloat(prompt("enter side B"));
// let output = `The hypotenuse is ${Math.sqrt(a ** 2 + b ** 2).toFixed(1)}`;
// alert(output);

// // Slope calc
// var x1 = parseFloat(prompt("enter the first x coordinate"));
// var y1 = parseFloat(prompt("enter the first y coordinate"));
// var x2 = parseFloat(prompt("enter the second x coordinate"));
// var y2 = parseFloat(prompt("enter the second y coordinate"));
// let output = `The slope is ${((y2 - y1) / (x2 - x1)).toFixed(0)}`;
// alert(output);

// // distance travel from meters to km and meters
// var meters = parseFloat(prompt("How many meters did you travel"));
// let output = `Your trip was ${(meters - (meters % 1000)) / 1000}km and ${
//   meters % 1000
// }m`;
// alert(output);

