//https://www.hackerrank.com/challenges/service-lane/problem
// Complete the serviceLane function below.
function serviceLane(n, cases, width) {
    //n: an integer denoting the size of the  array
    //cases: a two dimensional array of integers where each element is an array of two integers representing starting and ending indices for a segment to consider.
    return cases.map((x) => {
        return Math.min(...width.slice(x[0], x[1] + 1))
    })
}
