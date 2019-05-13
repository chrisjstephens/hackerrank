//https://www.hackerrank.com/challenges/angry-professor
// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    let validStudents = 0;

    for (let x = 0; x < a.length; x++) {
        if (a[x] <= 0) {
            validStudents++;
        }
    }

    if (validStudents >= k) {
        return "NO";
    } else {
        return "YES";
    }
}
