//https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s number of squares on each chocolate
 *  2. INTEGER d rons birth day //sum
 *  3. INTEGER m rons birth month //length
 */

function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    //console.log('d-', d, 'm-', m);
    const possibleSect = s.length + 1 - m; //How many sections to look at
    //console.log('possibleSect', possibleSect);
    for (let x=0; x < possibleSect; x++) {
        const evalSect = s.slice(x,(x + m)); //Slice piece of s to look at
        const sumSect = evalSect.reduce((a,b) => a + b);
        //console.log('evalSect', evalSect, 'sumSect', sumSect);
        if (sumSect === d) count++;
    };
    return count;
}
