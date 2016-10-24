/* 这个API有详情，稍后再做 */
"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "965953e7351f72fcdae4e22a13939725";
let league = "中超"; //英超，西甲，德甲，意甲，法甲，中超
let result = "";
let port = 8090;

const onRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': "*" })
        /* 足球联赛赛事查询 */
    let league = encodeURI(url.parse(req.url, true).query.league);
    console.log("league", league);
    if (req.url !== "/favicon.ico") {

        superagent.get('http://op.juhe.cn/onebox/football/league?key=' + appId + '&league=' + league).end((err, response) => {
            if (err) console.log(err);
            result = response.text;
            res.write(result);
            res.end();
        })
    }
}


http.createServer(onRequest).listen(port);
open(`http://localhost:${port}?league=${league}`);
console.log("Server Start!");
