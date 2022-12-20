//https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays
/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */
function matchingStrings(strings, queries) {
    // Write your code here
    let results = [];

    for (let x = 0; x < queries.length; x++) {
        let count = 0;
        for (let y = 0; y < strings.length; y++) {
            if (queries[x] === strings[y]) {
                count++;
            }
        results[x] = count;
        }
    }
    return results;
}
