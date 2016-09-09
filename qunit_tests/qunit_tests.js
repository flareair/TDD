requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '../',

    paths: {
        'sinon': 'node_modules/sinon/pkg/sinon-1.17.5',
    },
    
    deps: ['ArrayHelper.qunit.js']

});

