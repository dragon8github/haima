"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "61c775c89ae83fc589416096acdc8a5b";
let result = "";
let port = 8090;

const onRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': "*" })

    let page = encodeURI(url.parse(req.url, true).query.page);
    let pagesize = encodeURI(url.parse(req.url, true).query.pagesize);

    if (req.url !== "/favicon.ico") {
        superagent.get(`http://v.juhe.cn/weixin/query?key=${appId}&pno=${page}&ps=${pagesize}`).end((err, response) => {
            if (err) console.log(err);
            result = response.text;
            res.write(result);
            res.end();
        })
    }
}


http.createServer(onRequest).listen(port);
open(`http://localhost:${port}?pno=1&ps=20`);
console.log("Server Start!");
