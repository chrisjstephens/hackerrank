//https://www.hackerrank.com/challenges/save-the-prisoner
// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    let x = s + m - 1;
    if (x > n) {
         if (x % n === 0) {
             return n;
         }
         return x % n;
    }

     return x;
}
