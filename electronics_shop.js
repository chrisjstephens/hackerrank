//https://www.hackerrank.com/challenges/electronics-shop/problem
/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let highestValue = -1;
    let tempValue;

    for (let kb of keyboards) {
        for (let dr of drives) {
            tempValue = kb + dr;
            if (tempValue <= b && tempValue > highestValue) {
                highestValue = tempValue;
            }

        }
    }
    return highestValue;
}
