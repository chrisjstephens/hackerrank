//https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/
function miniMaxSum(arr) {
    // Write your code here
    let sortedarr = arr.sort((a,b) => a-b);
    let min = arr[0];
    let max = arr[arr.length-1];


    let sum = sortedarr.reduce((pv, cv) => pv + cv, 0);

    console.log (sum-max, sum-min);
}
