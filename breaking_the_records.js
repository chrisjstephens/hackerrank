//https://www.hackerrank.com/challenges/breaking-best-and-worst-records
// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let length = scores.length;
    let highest = scores[0];
    let highestCtr = 0;
    let lowest = scores[0];
    let lowestCtr = 0;

    for (let i = 0; i < length; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
            highestCtr++;
        } else if (scores[i] < lowest) {
            lowest = scores[i];
            lowestCtr++;
        }

    }
    return [highestCtr, lowestCtr];
}
