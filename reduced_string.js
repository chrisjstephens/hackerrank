//https://www.hackerrank.com/challenges/reduced-string/problem
function superReducedString(s) {
    let newArray = s.split("");
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === newArray[i + 1]) {
            newArray.splice(i, 2);
            i = -1;
        }
    }
    if (newArray.length === 0) {
        return "Empty String";
    } else {
        return newArray.join("");
    }
}
