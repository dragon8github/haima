
"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "f1ef10a641f5f7b02e716d3c3faa1fc2";
let result = "";
let port = 8090;

/*
top(头条),
shehui(社会),
guonei(国内),
guoji(国际),
yule(娱乐),
tiyu(体育)
junshi(军事),
keji(科技),
caijing(财经),
shishang(时尚)
*/
 
const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})
	let type = encodeURI(url.parse(req.url,true).query.type);
	superagent.get(`http://v.juhe.cn/toutiao/index?type=${type}&key=${appId}`).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
	})
	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}?type=top`);
console.log("Server Start!");