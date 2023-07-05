//https://www.hackerrank.com/challenges/find-digits/problem
/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    let digits = n.toString().split('');
    let count = 0;

    for (let x = 0; x < digits.length; x++) {
        if (n % digits[x] === 0) {
            count++;
        }
    }
    return count;
}
