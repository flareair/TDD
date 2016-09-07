/*global requirejs*/

requirejs.config({
    'baseUrl': './',
    'paths': {
        'app': './'
    },
    'shim': {
    }
});

// Load the main app module to start the app
requirejs(['app/main']);
