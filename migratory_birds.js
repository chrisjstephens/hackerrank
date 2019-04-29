//https://www.hackerrank.com/challenges/migratory-birds/problem
// Complete the migratoryBirds function below.
//This solution was constantly failing/timing out on one of the test cases
function migratoryBirds(arr) {
    let length = arr.length;
    let birdsArr = new Array(length).fill(0);

    for (let x = 0; x < length; x++) {
        let position = arr[x];
        birdsArr[position]++;
    }

    return birdsArr.indexOf(Math.max(...birdsArr));
}
