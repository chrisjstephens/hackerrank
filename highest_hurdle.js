//https://www.hackerrank.com/challenges/the-hurdle-race
// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    let magicPotion = 0;
    let highestHurdle = 0;

    for (let x of height) {
        if (x > highestHurdle) {
            highestHurdle = x;
        }
    }

    if (highestHurdle > k) {
        magicPotion = highestHurdle - k;
    }

    return magicPotion;
}
