//https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys
/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let valleyCount = 0;
    let currentLevel = 0;
    let belowLevel = false;

    for (let x=0; x < path.length; x++) {
        if (path[x] == 'U') {
            currentLevel++;
        } else {
            currentLevel--;
        }
        if (currentLevel < 0) {
            belowLevel = true;
        } else {
            belowLevel = false;
        }
        if (currentLevel == 0 && path[x] ==='U' && !belowLevel) {
            valleyCount++;
        }
        console.log('valleycount', valleyCount);
    }

    return valleyCount;
}
