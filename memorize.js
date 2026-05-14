/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        // Create unique key from arguments
        const key = JSON.stringify(args);

        // Return cached result if exists
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Call function and store result
        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}