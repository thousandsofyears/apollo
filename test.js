console.log(__dirname)

const path = require('path');

console.log(path.join(__dirname, '../static/dist'));


const request = require('request');

test = function* (url, url2){
    var resp = yield new Promise((resolve, reject) => {
        request.get(url, function(error, response, body){
            resolve([error, response, body])
        });
    })
    var resp2 = yield new Promise((resolve, reject) => {
        request.get(url2, function(error, response, body){
            resolve([error, response, body])
        });
    })
    console.log(resp[0]);
    console.log(resp2);
}


r = test('http://www.baidu.com', 'http://www.guokr.com');
a = r.next();
a.value.then(function(data){
    return data;
}).then(function(data){
    var b = r.next(data);
})
c = r.next()
