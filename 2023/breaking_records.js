/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */
//https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records
function breakingRecords(scores) {
    // Write your code here
    let minScore = 0;
    let minScoreCount = 0;
    let maxScore = 0;
    let maxScoreCount = 0;

    for (let x = 0; x < scores.length; x++) {
        if (x == 0) {
            minScore = scores[0];
            maxScore = scores[0];
        }
        if (scores[x] > maxScore) {
            maxScoreCount++;
            maxScore = scores[x];
        }
        if (scores[x] < minScore) {
            minScoreCount++;
            minScore = scores[x];
        }
    }

    return [maxScoreCount, minScoreCount];
}
