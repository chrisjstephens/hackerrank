//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let diffA = Math.abs(x - z); //2
    let diffB = Math.abs(y - z); //1

    if (diffA === diffB) {
        return "Mouse C";
    } else if (diffA > diffB) {
        return "Cat B";
    } else {
        return "Cat A";
    }
}
