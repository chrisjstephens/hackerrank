//https://www.hackerrank.com/challenges/strange-advertising
// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    let likesCount = 0;
    let shared = 5;
    let likes = 0;

    for (let x = 0; x < n; x++) {
        let likes = Math.floor(shared / 2);
        likesCount += likes;
        shared = likes * 3;
    }
    return likesCount;
}
