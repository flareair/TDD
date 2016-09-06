/*global ArrayHelper*/
/*global sinon*/
/*global equal*/

(function() {
    var arrayHelper;

    module('ArrayHelper module', {
        setup: function () {
            sinon.sandbox.create();
            arrayHelper = new ArrayHelper();
        },

        teardown: function () {
            sinon.sandbox.restore();
        }
    });


    test('Smoke test', () => {
        equal(1, 1, 'One equal one');
    });

})();
