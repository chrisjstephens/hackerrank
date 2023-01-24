//https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1
/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    let arrayValues = Array(100).fill(0);;

    for (let x = 0; x < arr.length; x++) {
        arrayValues[arr[x]] +=1;
    }

    return arrayValues;
}
