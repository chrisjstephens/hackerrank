//https://www.hackerrank.com/challenges/the-birthday-bar
// Complete the birthday function below.
function birthday(s, d, m) {
    let length = s.length;
    let pieces = 0;


    for (let x = 0; x < s.length; x++) {
        let sum = 0;

        for (let j = x; j < m + x; j += 1) {
            sum += s[j];
        }

        if (sum === d) {
            pieces++;
        }
     }
    return pieces;
}
