//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let count = 0;

    for (let x = 0; x < n; x++) {
        for (let y = x + 1; y < n; y++) {
            if ((ar[x] + ar[y]) % k == 0) {
                count++;
            }
        }
    }

    return count;
}
