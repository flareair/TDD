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

        it('should throw proper error if argument is not array', () => {
            assert.throws(() => {
                arrHelper.sum();
            }, TypeError);
        });

    });
});
