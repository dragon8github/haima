/* 这个API有详情，稍后再做 */
"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "2693ea802b98ae56d668a279e139c750";
let qq = "928532756";  
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})

	let qq = encodeURI(url.parse(req.url,true).query.qq);
	console.log("league",qq);
	superagent.get('http://japi.juhe.cn/qqevaluate/qq?key=' + appId +'&qq=' + qq).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
	})
	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}?qq=${qq}`);
console.log("Server Start!");

/*
{
    "error_code": 0, 
    "reason": "success", 
    "result": {
        "data": {
            "conclusion": "[凶]波澜重迭，常陷穷困，动不如静，有才无命", 
            "analysis": "越是对命运的抗争，越是使自已陷入困境，常常想靠自已改变命运，却一次次使自已的生活走入穷困，还不如听天由命，安于本份。"
        }
    }
}
*/
