//https://www.hackerrank.com/challenges/circular-array-rotation
//Having some issues with this solution timeingout with the compiler on half of the test cases
// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    for (let x = 0; x < k; x++) {
        a.unshift(a.pop());
    }
    let val = queries.map((v) => {
        return a[v];
    })

    return val;
}
