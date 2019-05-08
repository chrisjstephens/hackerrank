//https://www.hackerrank.com/challenges/marcs-cakewalk/problem
// Complete the marcsCakewalk function below.
function marcsCakewalk(calorie) {
    let minCal = 0;

    calorie.sort(function (a, b) { return b - a });

    for (let x = 0; x < calorie.length; x++) {
        minCal += Math.pow(2, x) * calorie[x];
    }

    return minCal;
}
