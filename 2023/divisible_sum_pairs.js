/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */
// https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs 
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for (let x = 0; x < ar.length; x++) {
        for (let y = x+1; y < ar.length; y++) {
            if ((ar[x] + ar[y]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}
