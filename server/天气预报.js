"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');

const appId = "4c78786afc1db5675f848742a98fbd85";
const port = 8090;
let result = "";
const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})
	 var cityname =  encodeURI(url.parse(req.url,true).query.cityname);
     
    if(req.url!=="/favicon.ico") {
    	superagent.get('http://op.juhe.cn/onebox/weather/query?cityname=' + cityname + '&key=' + appId).end((err,response) => {
    			if(err) console.log("err",err);
    			result = response.text;
                console.log("cityname",cityname);
                //console.log(req.url);
               
    	})  
    }
    res.write(result);
    res.end();
}


http.createServer(onRequest).listen(port);  
console.log("Server Start!");

