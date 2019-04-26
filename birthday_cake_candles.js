//https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let length = ar.length;
    let highestValue = 0;
    let highestCount = 0;

    for (let x = 0; x < length; x++) {
        if (ar[x] > highestValue) {
            highestValue = ar[x];
            highestCount = 1;
        } else if (ar[x] === highestValue) {
            highestCount++;
        }
    }
    return highestCount;
}
