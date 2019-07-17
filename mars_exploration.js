//https://www.hackerrank.com/challenges/mars-exploration/problem
// Complete the marsExploration function below.
function marsExploration(s) {
    let count = 0;
    s = s.split('');

    for (let i = 0; i < s.length; i += 3) {
        let newArr = s.slice(i, i + 3);
        if (newArr[0] != 'S')  count++;
        if (newArr[1] != 'O')  count++;
        if (newArr[2] != 'S')  count++;
    }
    return count;
}
