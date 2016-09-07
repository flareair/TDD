/*global define*/

define(['./ArrayHelper'], (ArrayHelper) => {
    var arrayHelper = new ArrayHelper();

    console.log(arrayHelper.sum([1, 2, 3]));
    console.log(arrayHelper.sumMultiple([1, 2, 3], [7, 7], [3, 12]));
});
