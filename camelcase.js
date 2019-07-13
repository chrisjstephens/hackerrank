//https://www.hackerrank.com/challenges/camelcase/problem
// Complete the camelcase function below.
function camelcase(s) {
    let count = 1;
    for (let x = 0; x < s.length; x++) {
        if (s[x] === s[x].toUpperCase()) count ++
    }
    return count;
}
