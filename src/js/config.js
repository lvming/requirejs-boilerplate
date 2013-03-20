/*global require */
require.config({
    baseUrl: 'js/',
    packages: [
        'bootstrap'
    ],
    paths: {
    },
    map: {
        '*': {
            'css': 'require-css/css',
            'less': 'require-less/less'
        }
    },
    shim: {
        'underscore': {exports: '_'},
        'backbone': {deps: ['underscore'], exports: 'Backbone'},
        'bootstrap': ['jquery']
    }
});