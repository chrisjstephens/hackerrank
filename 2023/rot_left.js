//https://www.hackerrank.com/challenges/ctci-array-left-rotation
/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
    // Write your code here
    for (let x = 0; x < d; x++) {
        let temp = a.shift();
        a.push(temp);
    }
    return a;
}
