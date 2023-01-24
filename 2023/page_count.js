//https://www.hackerrank.com/challenges/three-month-preparation-kit-drawing-book
/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    //n - number of pages, p - page to turn to
    let frontMoves = Math.floor(p / 2);
    let backMoves = Math.ceil((n - p - (n % 2)) / 2);
    //console.log('front', frontMoves, 'backmoves', backMoves);
    return frontMoves > backMoves ? backMoves : frontMoves;
}
