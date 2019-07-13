//https://www.hackerrank.com/challenges/repeated-string/problem
//Not passing all tests due to timeout when I submit solution, need to make this more efficient
function repeatedString(s, n) {
    let spacesLeft = n - s.length;
    let newString = s;
    let y = 0;
    let counter = 0;

    for (let x = 0; x < spacesLeft; x++) {
        if (y === s.length) y = 0;
        newString += s[y];
        y++;
        //console.log(newString, y, s.length);
    }

    for (let z = 0; z < newString.length; z++) {
        if (newString[z] === 'a') {
            counter++;
        }
    }

    return counter;
}
