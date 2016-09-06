/*global deepEqual, equal, ok, sinon, throws*/
/*global ArrayHelper*/

(function() {
    var arrayHelper;

    module('ArrayHelper module', {
        setup: function () {
            // create sinon sandbox
            sinon.sandbox.create();
            arrayHelper = new ArrayHelper();
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

})();
