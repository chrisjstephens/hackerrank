//https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/
function plusMinus(arr) {
    // Write your code here
    let count = arr.length;

    const zero = arr.filter( arr => arr === 0 );
    const positive = arr.filter( arr => arr > 0 );
    const negative = arr.filter( arr => arr < 0 );

    console.log((positive.length / count).toFixed(6));
    console.log((negative.length / count).toFixed(6));
    console.log((zero.length / count).toFixed(6));
}
