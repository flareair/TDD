/**
 * Array helper class, includes several useful helpers
 */

let ArrayHelper = (function() {

    function ArrayHelper() {
        /**
         * Calculate sum of array items
         * @param  {array} arr input array
         * @return {number} result of operation
         */
        this.sum = function sum(arr) {

            if (!Array.isArray(arr)) {
                throw new TypeError('Expect array, instead get ' + typeof arr);
            }

            if (arr.length <= 0) {
                throw new TypeError('Array can not be empty');
            }

            return arr.reduce((total, current) => {
                if (Number(current) !== current) {
                    throw new TypeError('Array contain not number values');
                }
                return total + current;
            }, 0);
        };
    }

    return ArrayHelper;
})();
