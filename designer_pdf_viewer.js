// https://www.hackerrank.com/challenges/designer-pdf-viewer
// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let height = 0;
    let width = word.length;

    for (let x = 0; x < width; x++) {
        let charNum = word[x].charCodeAt(0) - 97
        if (h[charNum] > height) {
            height = h[charNum];
        }
    }

    return height * width;
}
