/* 这个API有详情，稍后再做 */
"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "c02104249b1ba5151c679054305e1551";
let word = "张冠李戴";  
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})

	let word = encodeURI(url.parse(req.url,true).query.word);
	console.log(word);
	superagent.get('http://v.juhe.cn/chengyu/query?key=' + appId + '&word=' + word).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
	})
	res.write(result);
	res.end();
}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}?word=${word}`);
console.log("Server Start!");

/*
{
    "reason": "success", 
    "result": {
        "bushou": "弓", 
        "head": "张", 
        "pinyin": "zhāng guān lǐ dài", 
        "chengyujs": " 把姓张的帽子戴到姓李的头上。比喻认错了对象，弄错了事实。", 
        "from_": " 明·田艺蘅《留青日札》卷二十二《张公帽赋》：“谚云：‘张公帽掇在李公头上。’有人作赋云：‘物各有主，貌贵相宜。窃张公之帽也，假李老而戴之。’”", 
        "example": " 但老船夫却作错了一件事情，把昨晚唱歌人“～”了。 沈从文《边城》十四", 
        "yufa": " 联合式；作谓语、状语；含贬义", 
        "ciyujs": "(1) [put Zhang's hat on Li's head; confuse one thing for another]∶把姓张的帽子戴在姓李的头上。比喻名不副实或误甲为乙", 
        "yinzhengjs": "把姓 张 的帽子戴到姓 李 的头上。比喻认错了对象或弄错了事实。有时亦有掉包舞弊之意。 宋 钱希言 《戏瑕》卷三：“ 张公 帽儿 李公 戴。” 明 田艺蘅 《留青日札·张公帽赋》：“谚云：‘ 张公 帽掇在 李公 头上。’有人作赋云：‘物各有主，貌贵相宜；窃 张公 之帽也，假 李老 而戴之。’”中国近代史资料丛刊《辛亥革命·武汉革命团体文学社之历史》：“如某报所云，未免 张 冠 李 戴，谬误殊甚。” 清 孙承泽 《天府广记·锦衣卫》：“彼卑官小卒，以衙门为活计，惟知嗜利，鲜有良心……甚至 张 冠 李 戴，增少为多，或久禁暗处，或苦打屈服。”", 
        "tongyi": [
            "破绽百出", 
            "似是而非"
        ], 
        "fanyi": [
            "无可非议", 
            "毫厘不爽"
        ]
    }, 
    "error_code": 0
}
*/