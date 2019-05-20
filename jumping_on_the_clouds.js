//https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let energy = 100;

    for (let x = 0; x < c.length; x++) {
        if (x % k === 0) {
            energy--;
            if (c[x] === 1) {
                energy = energy - 2;
            }
        }

    }

    return energy;
}
