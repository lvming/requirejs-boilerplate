/*global define */
define([
    'module',
    'underscore',
    'jquery',
    'async',
    'backbone',
    'knockout',
    'bootstrap',
    'css!./main.css'
], function (module, _, $, async, Backbone, ko) {
    "use strict";
    console.assert(_, 'underscore is undefined.');
    console.assert($, 'jquery is undefined.');
    console.assert(async, 'async is undefined.');
    console.assert(Backbone, 'Backbone is undefined.');
    console.assert(ko, 'Knockout is undefined.');
    console.log(module.config());
});