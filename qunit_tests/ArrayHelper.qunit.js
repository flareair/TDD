/*global deepEqual, ok, sinon, throws*/
/*global ArrayHelper*/

(function() {
    var arrayHelper;
    var sumStub;
    module('ArrayHelper module', {
        setup: function () {
            // create sinon sandbox
            sinon.sandbox.create();
            arrayHelper = new ArrayHelper();
            sumStub = sinon.stub();
        },

        teardown: function () {
            // restore sandbox
            sinon.sandbox.restore();
        }
    });


    test('Test arrayHelper and it\'s class constructor should exist', () => {
        expect(2);

        ok(ArrayHelper);
        ok(arrayHelper);
    });


    /**
     *  sum() method
     */

    test('Test arrayHelper sum() method should exist', () => {
        expect(1);

        ok(arrayHelper.sum);
    });

    test('Test arrayHelper sum() method should sum array items', () => {
        expect(3);

        deepEqual(arrayHelper.sum([1, 3, 7]), 11);
        deepEqual(arrayHelper.sum([1, 3, 7]), 11);
        deepEqual(arrayHelper.sum([1, 3, 7]), 11);
    });

    test('Test arrayHelper sum() method should throw an error if input array is empty', () => {
        expect(1);

        throws(() => {
            arrayHelper.sum([]);
        },  /Array can not be empty/);
    });

    test('Test arrayHelper sum() method should throw an error if input is not an array', () => {
        expect(2);

        throws(() => {
            arrayHelper.sum();
        },  /Expect array, instead get/);

        throws(() => {
            arrayHelper.sum('bla');
        },  /Expect array, instead get/);
    });

    test('Test arrayHelper sum() method should throw an error if array contains not only numbers', () => {
        expect(3);

        throws(() => {
            arrayHelper.sum([/blablabla/, 1, 3]);
        },  /Array contain not number values/);

        throws(() => {
            arrayHelper.sum([{bla: 123}, 1, 3]);
        },  /Array contain not number values/);

        throws(() => {
            arrayHelper.sum([3123, '1', NaN]);
        },  /Array contain not number values/);
    });


    /**
     *  sumMultiple() method
     */

    test('Test arrayHelper sumMultiple() method should exist', () => {
        expect(1);

        ok(arrayHelper.sumMultiple);
    });

    test('Test arrayHelper sumMultiple() method should use sum method', () => {
        expect(1);

        arrayHelper.sum = sumStub;
        arrayHelper.sumMultiple([1, 2], [3, 1], [2, 5]);

        ok(sumStub.called);
    });


    test('Test arrayHelper sumMultiple() method should return sum of all values of multiple given arrays', () => {
        expect(3);
        arrayHelper.sum = sumStub;

        sumStub.onCall(0).returns(3);
        sumStub.onCall(1).returns(4);
        sumStub.onCall(2).returns(7);
        deepEqual(arrayHelper.sumMultiple([1, 2], [3, 1], [2, 5]), 14);
        // stub will be invoked 2 times, because we pass 2 arrays
        sumStub.onCall(3).returns(20);
        sumStub.onCall(4).returns(33);
        deepEqual(arrayHelper.sumMultiple([20, -3, 3], [33]), 53);
        // only one time now
        sumStub.onCall(5).returns(26);
        deepEqual(arrayHelper.sumMultiple([123, -100, 3]), 26);
    });


    test('Test arrayHelper sumMultiple() method should throw error if there is no args', () => {
        expect(1);

        throws(() => {
            arrayHelper.sumMultiple();
        },  /Expect list of arrays, instead got nothing/);
    });

})();
