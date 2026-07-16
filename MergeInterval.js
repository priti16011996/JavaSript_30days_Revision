/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (let interval of intervals) {
        // If result is empty OR no overlap
        if (
            result.length === 0 ||
            result[result.length - 1][1] < interval[0]
        ) {
            result.push(interval);
        } else {
            // Merge intervals
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }

    return result;
};
