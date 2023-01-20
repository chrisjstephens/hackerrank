//https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams
/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let newString = s.split(" ").join("").toLowerCase();;

    const values = new Set(newString);

    return values.size == '26' ? "pangram" : "not pangram";
}
