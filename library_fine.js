//https://www.hackerrank.com/challenges/library-fine/problem
function libraryFine(d1, m1, y1, d2, m2, y2) {
    //d1, m1, y1: was returned date day, month and year
    //d2, m2, y2: due date day, month and year
    //fine = 0, ontime
    //fine = 15 * DAY, within same month
    //fine = 500 * month, after month same year
    //fine = 10000 after that year
    let fine = 0;

    if (y1 > y2) {
        fine += 10000;
    } else if (d1 > d2 && m1 == m2 && y1 === y2) {
        fine += 15 * (d1 - d2);
    } else if (m1 > m2 && y1 === y2) {
        fine += 500 * (m1 - m2);
    }

    return fine;
}
