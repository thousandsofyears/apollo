'use strict'

// index.js

/**
 * Module dependencies.
 */


const router = require('koa-router'),
    MethodView = require('../core/view'),
    Blueprint = require('../core/blueprint'),
    request = require('bluebird').promisifyAll(require('request')),
    bp_index = new Blueprint;


const indexView = new MethodView(['GET']);

indexView.get = function* (){
    this.body = yield request.getAsync('');
}


bp_index.add('/', indexView.as_view);

module.exports = bp_index;
