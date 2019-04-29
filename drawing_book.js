//https://www.hackerrank.com/challenges/drawing-book/problem
/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    let front = Math.floor(p / 2);
    let back = 0;

    if (n % 2 === 0) {
        back= Math.floor(n / 2 - p / 2 + 1 / 2);
    } else {
        back = Math.floor((n / 2 - p / 2));
    }

    const value = front > back ? back : front;

    return value;
}
