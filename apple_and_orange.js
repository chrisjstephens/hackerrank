//https://www.hackerrank.com/challenges/apple-and-orange/problem
// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let app of apples) {
        let location = a + app;
        if (location >= s && location <= t) {
            appleCount++;
        }
    }

    for (let org of oranges) {
        let location = b + org;
        if (location >= s && location <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}
