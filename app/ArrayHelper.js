let ArrayHelper = (function() {

    function ArrayHelper() {

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
