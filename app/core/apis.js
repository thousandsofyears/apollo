'use strict'

const request = require('bluebird').promisifyAll(require('request')),
    config = require('../config.js');

function ApiBase(host, port, version, paths){
    this.host = host;
    this.port = port;
    this.version = version;
    this.paths = [this.version].concat(paths || []);
}

ApiBase.prototype.path = function(path){
    let paths = this.paths.concat([path]);
    return new ApiBase(this.host, this.port, this.version, paths);
}

ApiBase.prototype.handle = function*(method, data){
    method = method.toLowerCase() + 'Async';
    method = request[method];
    data = data || {};
    yield method(this.url(), data);
}

ApiBase.prototype.get = function* (data){
    yield this.handle('get', data);
}

ApiBase.prototype.post = function* (data){
    yield this.handle('post', data);
}

ApiBase.prototype.put = function* (data){
    yield this.handle('put', data);
}

ApiBase.prototype.delete = function* (data){
    yield this.handle('delete', data);
}

ApiBase.prototype.url = function(){
    return 'http://' + this.host + ':' + this.port + '/' + this.paths.filter(
        function(e){return typeof(e) == 'string' && e.length > 0;}).join('/');
}

module.exports.ApiBase = ApiBase;


module.exports.HeraclesAPI = function() {
    return new ApiBase(
        config.heraclesHost, config.heraclesPort, config.heraclesVersion);
};
