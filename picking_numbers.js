https://www.hackerrank.com/challenges/picking-numbers/problem
/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function pickingNumbers(a) {
    // Write your code here
    a.sort((a, b) => a - b);
    let x = [];
    let max = 0;

    for (let y = 0; y < a.length; y++) {
        x = [];
        for (let z = y; z < a.length; z++) {
            if (Math.abs(a[y] - a[z]) <= 1) {
                x.push(a[z]);
            }
        }

        if (x.length > max) {
            max = x.length;
        }
    }
    return max;
}
