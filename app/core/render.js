'use strict'


// render.js

/**
 * Module dependencies.
 */

const render = require('koa-swig'),
    config = require('../config.js'),
    path = require('path');


function static_file(file){

    return []
}

module.exports = render({
    root: path.join(__dirname, '../templates'),
    autoescape: true,
    ext: 'html',
    cache: 'memory', // disable, set to false 
});
