//https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant
/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    const sockMap = new Map();
    let uniquePairs = 0;

    for (let s of ar) {
        sockMap.set(s, sockMap.get(s) + 1 || 1)

        if(sockMap.get(s) % 2 == 0) {
            uniquePairs++;
        }
    }
    return uniquePairs
}
