/*global define*/

define(() => {
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

        /**
         * Sums values in multiple arrays
         * @return {number} sum result
         */
        this.sumMultiple = function sumMultiple() {

            if (arguments.length <= 0) {
                throw new TypeError('Expect list of arrays, instead got nothing');
            }

            let arrays = Array.prototype.slice.call(arguments);
            let sums = arrays.map(this.sum.bind(this));

            return sums.reduce((sum, current) => sum + current, 0);
        };
    }

    return ArrayHelper;
});


