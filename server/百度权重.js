"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "f496c599616017b2a435d98a58347a54";
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})
	let domain = encodeURI(url.parse(req.url,true).query.domain);
	superagent.get(`http://op.juhe.cn/baiduWeight/index?key=${appId}&domain=${domain}`).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
	})
	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}?domain=juhe.cn`);
console.log("Server Start!");


/*
{"reason":"成功的返回","result":{"Weight":"4","From":"512","To":"950"},"error_code":0}
*/