
//https://www.hackerrank.com/challenges/diagonal-difference/
function diagonalDifference(arr) {
    let firstX = 0;
    let secondX = 0;

    for (let x = 0; x < arr.length; x++) {
        firstX += arr[x][x];
        secondX += arr[x][Math.abs(x - (arr.length - 1))];
    }

    return Math.abs(firstX - secondX);
}
