//https://www.hackerrank.com/challenges/sherlock-and-squares/
// Complete the squares function below.
function squares(a, b) {
    let count = 0;

    for (let x = a; x <= b; x++) {
        for (let xInc = 1; xInc * xInc <= x; xInc++) {
            if (xInc * xInc === x) {
                count++;
            }
        }
    }

    return count;
}
