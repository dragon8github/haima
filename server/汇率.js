"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "4b90957405ac10ec349ab8af0738986c";
let result = "";
let port = 8090;

const onRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': "*" })
    let query = encodeURI(url.parse(req.url, true).query.query);
    let list = encodeURI(url.parse(req.url, true).query.list);
    let currency = encodeURI(url.parse(req.url, true).query.currency);
    let from = encodeURI(url.parse(req.url, true).query.from);
    let to = encodeURI(url.parse(req.url, true).query.to);

    /* 常用汇率查询 */
    if (query != "undefined") {
        superagent.get('http://op.juhe.cn/onebox/exchange/query?key=' + appId).end((err, response) => {
                if (err) console.log(err);
                result = response.text;
                res.write(result);
                res.end();
            })
            /* 货币列表查询 */
    } else if (list != "undefined") {
        superagent.get('http://op.juhe.cn/onebox/exchange/list?key=' + appId).end((err, response) => {
                if (err) console.log(err);
                result = response.text;
                res.write(result);
                res.end();
            })
            /* 实时汇率查询换算 */
    }
    elseif(currency != "undefined" && from != "undefined" && to != "undefined") {
        superagent.get(`http://op.juhe.cn/onebox/exchange/currency?key=${appId}&from=${from}&to=${to}`).end((err, response) => {
            if (err) console.log(err);
            result = response.text;
            res.write(result);
            res.end();
        })
    }


}


http.createServer(onRequest).listen(port);
open(`http://localhost:${port}?query`);
open(`http://localhost:${port}?list`);
open(`http://localhost:${port}?currency&from=CNY&to=USD`);
console.log("Server Start!");
