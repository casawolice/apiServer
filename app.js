let fs = require("fs"),
    url = require("url"),
    path = require("path"),
    express = require('express'),
    app = express(),
    Mock = require('mockjs');

app.use('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let data = handleReq(req);
    if (data !== null) {

        res.send(Mock.mock(data));
    }
    res.end();

});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

function handleReq(request) {
    if (request.url !== "/favicon.ico") {

        let reqUrl = url.parse(request.url),
            urlpath = (url.format(reqUrl.path)).substr(1);
            return getData(urlpath);

    }
    return null;

}

function getData(route) {
    
    route=path.resolve(__dirname,`json`,route);
    let filePath = path.dirname(route)+`/${ path.basename(route,path.extname(route))}`;
    if (fs.existsSync(`${filePath}.js`)) filePath = `${filePath}.js`
    else if (fs.existsSync(`${filePath}.json`)) filePath = `${filePath}.json`;
    else if (fs.existsSync(`${filePath.replace(/\//g,"-")}.js`)) filePath = `${filePath.replace(/\//g,"-")}.js`;
    else if (fs.existsSync(`${filePath.replace(/\//g,"-")}.json`)) filePath = `${filePath.replace(/\//g,"-")}.json`;
    else filePath = path.resolve(__dirname,`./json/error.json`);
     
   return require(filePath);

}