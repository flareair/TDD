/*global ArrayHelper*/

describe('ArrayHelper test', () => {
    let arrHelper;

    beforeEach(() => {
        // create test sandbox
        sinon.sandbox.create();
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


    describe('sumMultiple() method', () => {
        let sumStub;

        beforeEach(() => {
            // create stub of sum() method
            sumStub = sinon.stub();
            arrHelper.sum = sumStub;
        });

        it('should exist', () => {
            assert.isDefined(arrHelper.sumMultiple);
        });


        it('should use sum method', () => {
            arrHelper.sumMultiple([1, 2], [3, 1], [2, 5]);
            // check that stab was called
            assert.isTrue(sumStub.called);
        });


        it('should return sum of all values of multiple given arrays', () => {
            // stub will be invoked 3 times, because we pass 3 arrays
            sumStub.onCall(0).returns(3);
            sumStub.onCall(1).returns(4);
            sumStub.onCall(2).returns(7);
            assert.strictEqual(arrHelper.sumMultiple([1, 2], [3, 1], [2, 5]), 14);
            // stub will be invoked 2 times, because we pass 2 arrays
            sumStub.onCall(3).returns(20);
            sumStub.onCall(4).returns(33);
            assert.strictEqual(arrHelper.sumMultiple([20, -3, 3], [33]), 53);
            // only one time now
            sumStub.onCall(5).returns(26);
            assert.strictEqual(arrHelper.sumMultiple([123, -100, 3]), 26);
        });

        it('should throw error if there is no args', () => {
            assert.throws(() => {
                arrHelper.sumMultiple();
            }, TypeError, 'Expect list of arrays, instead got nothing');
        });
    });

    afterEach(() => {
        // restore sandbox every time
        sinon.sandbox.restore();
    });
});
