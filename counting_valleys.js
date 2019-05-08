//https://www.hackerrank.com/challenges/counting-valleys/problem
// Complete the countingValleys function below.
function countingValleys(n, s) {
    let lowestPoint = 0;
    let currentPosition = 0;
    let valleyCount = 0;

    for (let x = 0; x < s.length; x++) {
        if (s[x] === 'U') {
            currentPosition++;
        } else if (s[x] === 'D') {
            if (currentPosition === 0) {
                valleyCount++;
            }
            currentPosition--;
    }

    return valleyCount;
}
