"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "ea714dc624b3fcf7d8c7e82a512bde6e";
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})

	let q = encodeURI(url.parse(req.url,true).query.q);

	superagent.get(`http://v.juhe.cn/dream/query?key=${appId}&q=${q}&full=1`).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
	})
	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}?q=黄金`);
console.log("Server Start!");
