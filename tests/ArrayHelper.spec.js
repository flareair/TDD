/*global ArrayHelper*/

describe('ArrayHelper test', () => {
    let arrHelper;

    beforeEach(() => {
        arrHelper = new ArrayHelper();
    });

    it('should exist', () => {
        assert.isDefined(ArrayHelper);
        assert.isDefined(arrHelper);
    });

    describe('sum() method', () => {
        it('should exist', () => {
            assert.isDefined(arrHelper.sum);
        });

        it('should return sum of array items', () => {
            assert.strictEqual(arrHelper.sum([1, 2, 3]), 6);
            assert.strictEqual(arrHelper.sum([20, -3, 3]), 20);
            assert.strictEqual(arrHelper.sum([123, -100, 3]), 26);
        });

        it('should throw error if argument is not array', () => {
            assert.throws(() => {
                arrHelper.sum();
            }, TypeError, 'Expect array, instead get');

            assert.throws(() => {
                arrHelper.sum('bla');
            }, TypeError, 'Expect array, instead get');
        });

        it('should throw error if array is empty', () => {
            assert.throws(() => {
                arrHelper.sum([]);
            }, TypeError, 'Array can not be empty');
        });

        it('should throw error if array have not only numbers', () => {
            assert.throws(() => {
                arrHelper.sum([1, 3 , '123123']);
            }, TypeError, 'Array contain not number values');

            assert.throws(() => {
                arrHelper.sum([{a: 1}]);
            }, TypeError, 'Array contain not number values');

            assert.throws(() => {
                arrHelper.sum([1, 2, NaN]);
            }, TypeError, 'Array contain not number values');
        });


    });
});
