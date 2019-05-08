//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies
// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    //i: the starting day number
    //j: the ending day number
    //k: the divisor
    let max = 0;

    for (let x = i; x <= j; x++) {
        x = x + "";
        let reverseNum = x.split("").reverse().join("");
        if (Math.abs(x - reverseNum) % k === 0) {
            max++;
        }
    }
    return max;
}
