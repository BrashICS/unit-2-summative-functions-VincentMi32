/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

}
 

    
// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

//      
import readlineSync from 'readline-sync';

function findQuadraticZeros(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        return [];
    }
}

const a = parseFloat(readlineSync.question('Enter coefficient a: '));
const b = parseFloat(readlineSync.question('Enter coefficient b: '));
const c = parseFloat(readlineSync.question('Enter coefficient c: '));

const zeros = findQuadraticZeros(a, b, c);
if (zeros.length > 0) {
    console.log('The zeros of the quadratic are:', zeros);
} else {
    console.log('There are no real zeros for the given quadratic.');
}

document.getElementById("find the zeros").addEventListener("click", find zeros) 
// Determine the vertex of a quadratic using user-inputs for a, b, and 




