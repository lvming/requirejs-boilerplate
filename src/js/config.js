/*global require */
require.config({
    baseUrl: 'js/',
    enforceDefine: false,
    waitSeconds: 10,
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
    },
    config: {
        'app/main': {
            apiUrlRoot: 'api/'
        }
    }
});