//https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer
/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    const s = new Set()

    a.forEach(number => {
        if (s.has(number)) s.delete(number)
        else s.add(number)
    })

    return Array.from(s)[0]
}
