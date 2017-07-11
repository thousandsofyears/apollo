'use strict'

// index.js

/**
 * Module dependencies.
 */


const router = require('koa-router'),
    MethodView = require('../core/view'),
    Blueprint = require('../core/blueprint'),
    request = require('bluebird').promisifyAll(require('request')),
    apis = require('../core/apis.js'),
    bp_index = new Blueprint;


const indexView = new MethodView(['GET']);

indexView.get = function* (){
    const api = apis.HeraclesAPI();
    var data = yield api.path('blogs').get();
    yield this.render('index', {title: '123'});
}


bp_index.add('/', indexView.as_view);
bp_index.add('/blogs', indexView.as_view);

module.exports = bp_index;
