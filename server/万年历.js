/* 这个API有详情，稍后再做 */
"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "1c2947c805700b9abc2535aae9d7a2a0";
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})
	 var year =  encodeURI(url.parse(req.url,true).query.year);
    if(req.url!=="/favicon.ico")
    {
    	let date = new Date();
    	if(year != "undefined"){
    		let date_para = `${date.getFullYear()}`;
    		superagent.get(`http://japi.juhe.cn/calendar/year?year=${date_para}&key=${appId}`).end((err,response) => {
					if(err) console.log(err);
					console.log("response.text",response.text);
					result = response.text; 
					res.write(result);
					result = "";
					res.end();
			})
    	}
    	else{
	    	let date_para = `${date.getFullYear()}-${date.getMonth() + 1}`;
			superagent.get(`http://japi.juhe.cn/calendar/month?year-month=${date_para}&key=${appId}`).end((err,response) => {
					if(err) console.log(err);
					console.log("response.text",response.text);
					result = response.text; 
					res.write(result);
					result = "";
					res.end();
			})
		}
	}
}


http.createServer(onRequest).listen(port);  
console.log("Server Start!");
