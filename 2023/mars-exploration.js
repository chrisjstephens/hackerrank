//https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration
/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    let expectedWords = s.length / 3;
    let expectedString = '';
    let changedLetters = 0;

    for (let x = 0; x < expectedWords; x++) {
        expectedString += 'SOS';
    }
    console.log('es', expectedString)
    for (let y = 0; y < s.length; y++){
        if (s[y] != expectedString[y]) {
            changedLetters++;
        }
    }

    return changedLetters;
}
