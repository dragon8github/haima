/* 这个API有详情，稍后再做 */
"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "2693ea802b98ae56d668a279e139c750";
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})
	let qq = encodeURI(url.parse(req.url,true).query.qq);
	console.log("QQ",qq);
    if(req.url!=="/favicon.ico")
    {
		superagent.get(`http://japi.juhe.cn/qqevaluate/qq?qq=${qq}&key=${appId}`).end((err,response) => {
				if(err) console.log(err);
				console.log("response.text",response.text);
				result = response.text; 
				res.write(result);
				result = "";
				res.end();
		})
	}
}


http.createServer(onRequest).listen(port);  
// open(`http://localhost:${port}?qq=928532756`);
console.log("Server Start!");
