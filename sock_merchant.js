//https://www.hackerrank.com/challenges/sock-merchant/problem
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let sockPairs = [];
    let pairsAmt = 0;
    for (let sock of ar) {
        if (sockPairs[sock]) {
            sockPairs[sock] = 0;
            pairsAmt++;
        } else if (!sockPairs[sock]) {
            sockPairs[sock] = 1;
        }
    }
    return pairsAmt;
}
