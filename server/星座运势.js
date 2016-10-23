/* 这个API有详情，稍后再做 */
"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "9937bd625f16c26bed24daf312aa362d";
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})

	let consName = encodeURI(url.parse(req.url,true).query.consName);
	console.log(consName);
	superagent.get('http://web.juhe.cn:8080/constellation/getAll?consName=' + consName+'&type=today&key=' + appId).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
	})
	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}?consName=白羊座`);
console.log("Server Start!");

/*

{
    "date": 20161022, 
    "name": "白羊座", 
    "datetime": "2016年10月22日", 
    "all": "40%", 
    "color": "淡蓝色", 
    "health": "70%", 
    "love": "40%", 
    "money": "40%", 
    "number": 9, 
    "QFriend": "天蝎座", 
    "summary": "这个周末你可能有些慵懒，家反而是你最舒适放松的地方。虽然和身边的恋人，家人朋友有许多联络，聊天过程中也会有许多新的想法出现。但有些人需要注意，情绪化的表达可能会让关系出现裂缝，甚至分手。", 
    "work": "40%", 
    "resultcode": "200", 
    "error_code": 0
}
*/