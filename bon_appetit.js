//https://www.hackerrank.com/challenges/bon-appetit/problem
// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let actualBill = 0;

    for (let x = 0; x < bill.length; x++) {
        if (x != k) {
            actualBill += bill[x];
        }

    }

    if (actualBill / 2 === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - actualBill / 2);
    }
}
