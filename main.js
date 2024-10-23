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
In mathematics the term Delta (∆) means difference. Create a JavaScript function delta(a, b) which returns the value of a - b.

Slope of a line is calculated as 
𝑚
=
Δ
𝑦
Δ
𝑥
m= 
Δx
Δy
​
 . Create the function slope(x1, y1, x2, y2) which receives the points (x1, y1), (x2, y2) and returns the slope. Do not round the result. You must use your delta function from #1 for this.

The average of two numbers is as simple as 
𝑛
1
+
𝑛
2
2
2
n1+n2
​
 
Create the function average(n1, n2) which returns the average of the two numbers.

The input box rounding will contain how many decimals the user wants for anwers. We will use this a lot, so we should make a function to help ourselves. Create the function round_user(value) which takes the value and rounds it to the user's request number of decimals, returning the answer.
For example, if the user has 4 in the rounding input box and we call round_user(Math.PI) we get back 3.1416.

The length of a line segment is extremely similar to Pythagoras' Theorem: 
𝑙
=
(
Δ
𝑥
)
2
+
(
Δ
𝑦
)
2
l= 
(Δx) 
2
 +(Δy) 
2
 
​
 

You must use your delta function from #1 for this.      
// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

