"use strict";
const http = require('http');
const url = require('url');
const util = require('util');
const superagent = require('superagent');
const open = require("open");

const appId = "4c78786afc1db5675f848742a98fbd85";
let cityname = "北京";
let result = "";
let port = 8090;

const onRequest = (req,res) => {
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':"*"})
	let cityname = encodeURI(url.parse(req.url,true).query.cityname);
	superagent.get('http://op.juhe.cn/onebox/weather/query?cityname=' + cityname + '&key=' + appId).end((err,response) => {
			if(err) console.log(err);
			result = response.text;
	})
	res.write(result);
	res.end();

}


http.createServer(onRequest).listen(port);  
open(`http://localhost:${port}?cityname=${cityname}`);
console.log("Server Start!");

/*
{
    "reason": "successed!", 
    "result": {
        "data": {
            "realtime": {
                "city_code": "101010100", 
                "city_name": "北京", 
                "date": "2016-10-21", 
                "time": "23:00:00", 
                "week": 5, 
                "moon": "九月廿二", 
                "dataUptime": 1477064163, 
                "weather": {
                    "temperature": "10", 
                    "humidity": "95", 
                    "info": "阵雨", 
                    "img": "3"
                }, 
                "wind": {
                    "direct": "东北风", 
                    "power": "1级", 
                    "offset": null, 
                    "windspeed": null
                }
            }, 
            "life": {
                "date": "2016-10-22", 
                "info": {
                    "chuanyi": [
                        "较冷", 
                        "建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。"
                    ], 
                    "ganmao": [
                        "较易发", 
                        "天气较凉，较易发生感冒，请适当增加衣服。体质较弱的朋友尤其应该注意防护。"
                    ], 
                    "kongtiao": [
                        "较少开启", 
                        "您将感到很舒适，一般不需要开启空调。"
                    ], 
                    "xiche": [
                        "不宜", 
                        "不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。"
                    ], 
                    "yundong": [
                        "较适宜", 
                        "天气较好，但考虑气温较低，推荐您进行室内运动，若户外适当增减衣物并注意防晒。"
                    ], 
                    "ziwaixian": [
                        "最弱", 
                        "属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"
                    ]
                }
            }, 
            "weather": [
                {
                    "date": "2016-10-22", 
                    "info": {
                        "dawn": [
                            "7", 
                            "小雨", 
                            "10", 
                            "无持续风向", 
                            "微风", 
                            "17:26"
                        ], 
                        "day": [
                            "1", 
                            "多云", 
                            "14", 
                            "", 
                            "微风", 
                            "06:32"
                        ], 
                        "night": [
                            "1", 
                            "多云", 
                            "7", 
                            "", 
                            "微风", 
                            "17:25"
                        ]
                    }, 
                    "week": "六", 
                    "nongli": "九月廿二"
                }, 
                {
                    "date": "2016-10-23", 
                    "info": {
                        "dawn": [
                            "1", 
                            "多云", 
                            "7", 
                            "无持续风向", 
                            "微风", 
                            "17:25"
                        ], 
                        "day": [
                            "0", 
                            "晴", 
                            "15", 
                            "", 
                            "微风", 
                            "06:33"
                        ], 
                        "night": [
                            "0", 
                            "晴", 
                            "6", 
                            "", 
                            "微风", 
                            "17:23"
                        ]
                    }, 
                    "week": "日", 
                    "nongli": "九月廿三"
                }, 
                {
                    "date": "2016-10-24", 
                    "info": {
                        "dawn": [
                            "0", 
                            "晴", 
                            "6", 
                            "无持续风向", 
                            "微风", 
                            "17:23"
                        ], 
                        "day": [
                            "2", 
                            "阴", 
                            "14", 
                            "", 
                            "微风", 
                            "06:34"
                        ], 
                        "night": [
                            "2", 
                            "阴", 
                            "7", 
                            "", 
                            "微风", 
                            "17:22"
                        ]
                    }, 
                    "week": "一", 
                    "nongli": "九月廿四"
                }, 
                {
                    "date": "2016-10-25", 
                    "info": {
                        "dawn": [
                            "2", 
                            "阴", 
                            "7", 
                            "无持续风向", 
                            "微风", 
                            "17:22"
                        ], 
                        "day": [
                            "0", 
                            "晴", 
                            "16", 
                            "", 
                            "微风", 
                            "06:35"
                        ], 
                        "night": [
                            "1", 
                            "多云", 
                            "8", 
                            "", 
                            "微风", 
                            "17:21"
                        ]
                    }, 
                    "week": "二", 
                    "nongli": "九月廿五"
                }
            ], 
            "f3h": {
                "temperature": [
                    {
                        "jg": "20161021990000", 
                        "jb": "10"
                    }, 
                    {
                        "jg": "20161022020000", 
                        "jb": "13"
                    }, 
                    {
                        "jg": "20161022050000", 
                        "jb": "12"
                    }, 
                    {
                        "jg": "20161022080000", 
                        "jb": "12"
                    }, 
                    {
                        "jg": "20161022110000", 
                        "jb": "11"
                    }, 
                    {
                        "jg": "20161022140000", 
                        "jb": "12"
                    }, 
                    {
                        "jg": "20161022170000", 
                        "jb": "12"
                    }, 
                    {
                        "jg": "20161022200000", 
                        "jb": "10"
                    }, 
                    {
                        "jg": "20161022230000", 
                        "jb": "11"
                    }
                ], 
                "precipitation": [
                    {
                        "jg": "20161021990000", 
                        "jf": "1.4"
                    }, 
                    {
                        "jg": "20161022020000", 
                        "jf": "0"
                    }, 
                    {
                        "jg": "20161022050000", 
                        "jf": "0"
                    }, 
                    {
                        "jg": "20161022080000", 
                        "jf": "0.3"
                    }, 
                    {
                        "jg": "20161022110000", 
                        "jf": "0"
                    }, 
                    {
                        "jg": "20161022140000", 
                        "jf": "0"
                    }, 
                    {
                        "jg": "20161022170000", 
                        "jf": "0"
                    }, 
                    {
                        "jg": "20161022200000", 
                        "jf": "0"
                    }, 
                    {
                        "jg": "20161022230000", 
                        "jf": "0"
                    }
                ]
            }, 
            "pm25": {
                "key": "Beijing", 
                "show_desc": 0, 
                "pm25": {
                    "curPm": "45", 
                    "pm25": "31", 
                    "pm10": "0", 
                    "level": 1, 
                    "quality": "优", 
                    "des": "可正常活动。"
                }, 
                "dateTime": "2016年10月21日23时", 
                "cityName": "北京"
            }, 
            "jingqu": "", 
            "jingqutq": "", 
            "date": "", 
            "isForeign": "0"
        }
    }, 
    "error_code": 0
}
*/