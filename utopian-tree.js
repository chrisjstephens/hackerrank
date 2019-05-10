//www.hackerrank.com/challenges/utopian-tree
// Complete the utopianTree function below.
function utopianTree(n) {
    let height = 1;

    for (let x = 0; x < n; x++) {
        if (x % 2 && x != 0) {
            height++;
        } else {
            height = height * 2;

        }
    }

    return height;
}
