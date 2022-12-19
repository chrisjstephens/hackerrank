//https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion
function timeConversion(s) {
    // Write your code here
    const result = s.indexOf('PM');
    const amResult = s.indexOf('AM');

    const newString = s.slice(0, -2);
    const slicedTime = newString.slice(0, 2);

    if (result > -1 && slicedTime !=12) {
        const newTime = parseInt(slicedTime) + 12;
        const updatedString = newTime + newString.substring(2);

        return updatedString;
    }
    if (amResult > -1 && slicedTime === '12') {
        const updatedString = '00' + newString.substring(2);

        return updatedString;
    }
    return newString;
}
