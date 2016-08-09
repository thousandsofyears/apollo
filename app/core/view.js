'use strict'

function MethodView(methods){
    let cls = this;

    cls.methos = methods || ['GET', 'POST', 'PUT', 'POST'];

    cls.dispatch = function* (globals){
        globals.view = cls;
        yield this[globals.method.toLowerCase()].call(globals);
    }

    cls.as_view = function* (next){
        yield cls.dispatch(this);
    }

    return cls
}

module.exports = MethodView;
