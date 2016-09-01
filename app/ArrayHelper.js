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
            return arr.reduce((total, current) => {
                return total + current;
            }, 0);
        };
    }

    return ArrayHelper;
})();
