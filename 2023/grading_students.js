//https://www.hackerrank.com/challenges/three-month-preparation-kit-grading
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    for (let x=0; x < grades.length; x++) {
        if (grades[x] >= 38 && (grades[x] % 5 >= 3)) {
            let remainderValue = grades[x] % 5;
            grades[x] = grades[x] + (5 -remainderValue);
        }
    }
    return grades;
}
