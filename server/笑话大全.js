"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "1626f1dfaba32dfcb9cd8759c326afe8";
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})

	let pic = encodeURI(url.parse(req.url,true).query.pic);
	let page = encodeURI(url.parse(req.url,true).query.page);
	let pagesize = encodeURI(url.parse(req.url,true).query.pagesize);


	/* 最新笑话 */
	if(pic === 'undefined' && page != 'undefined' && pagesize != 'undefined') {
		superagent.get(`http://japi.juhe.cn/joke/content/text.from?key=${appId}&page=1&pagesize=10`).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
		})
	/* 最新趣图 */
	} else if(pic != 'undefined' && page != 'undefined' && pagesize != 'undefined'){
		superagent.get(`http://japi.juhe.cn/joke/img/text.from?key=${appId}&page=1&pagesize=10`).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
		})
	}

	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}/?page=1&pagesize=10`);
open(`http://localhost:${port}/?pic&page=1&pagesize=10`);
console.log("Server Start!");