//https://www.hackerrank.com/challenges/three-month-preparation-kit-diagonal-difference
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let firstDiag = 0;
    let secondDiag = 0;

    for (let x = 0; x < arr.length; x++) {
        firstDiag += arr[x][x];
        secondDiag += arr[x][arr.length - 1 - x];
    }

    return Math.abs(firstDiag - secondDiag);
}
