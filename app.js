//basic requirement for nodejs
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
//using express-useragent for easy parsing of response
var useragent = require('express-useragent');
var app = module.exports = express();
app.use(bodyparser.json());
app.use(cors());
app.use(useragent.express());

//api url
var api = '/api/whoami';
app.get(api,function(req,res,next){
    var language = req.acceptsLanguages();
    var software = "OS: "+req.useragent.os + ", Browser: " +req.useragent.browser;
    //req.headers['user-agent']
    var ipaddress = req.ip;
    res.json({'ipaddress':ipaddress,'language':language[0],'software':software});
});

app.listen(3000,function(){
    console.log("working");
});