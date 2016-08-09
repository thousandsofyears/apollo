'use strict'


const koa = require('koa'),
    body = require('koa-better-body'),
    logger = require('koa-logger'),
    mounter = require('koa-mount'),
    statics = require('koa-static'),
    path = require('path'),
    router = require('koa-router'),
    render = require('./core/render'),
    app = koa(),
    r = router(app);

const bp_index = require('./views/index');

app
    .use(logger())
    .use(body())
    .use(mounter('/static', statics(path.join(__dirname, '../static/dist'))))
    .use(r.routes());

app.context.render = render;

bp_index.attach(r);

module.exports = app;
