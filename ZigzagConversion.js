/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    const rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (const ch of s) {
        rows[currentRow] += ch;

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};
