"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "ec486ec76421561f1f4fd78e01e935cc";
let result = "";
let port = 8090;

const onRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': "*" })
    let info = encodeURI(url.parse(req.url, true).query.info);
    console.log(info);
    if (req.url !== "/favicon.ico") {

        superagent.get('http://op.juhe.cn/robot/index?info=' + info + '&key=' + appId).end((err, response) => {
            if (err) console.log(err);
            result = response.text;
            res.write(result);
            res.end();
        })

    }
}


http.createServer(onRequest).listen(port);
open(`http://localhost:${port}?info=你好`);
console.log("Server Start!");

/*
{
    "reason": "成功的返回", 
    "result": {
        "code": 100000, 
        "text": "嘿嘿，你好我好，大家都好~"
    }, 
    "error_code": 0
}
*/
