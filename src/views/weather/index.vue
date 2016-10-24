<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<button id="left" class="mui-btn  mui-btn-link  mui-pull-left"><span class="mui-icon mui-icon-location-filled"></span>东莞</button>
			<h1 class="mui-title">天气预报</h1>
			<button id="right" class="mui-btn  mui-btn-link  mui-pull-right" @click="getlife"><span class="mui-icon mui-icon-paperplane"></span>生活</button>
		</header>

		<div class="mui-content">
			<div class="mui-card" v-for="(item,index) in items">
				<!--页眉，放置标题-->
				<div class="mui-card-header">
					{{ day[index] +  item.date }}
				</div>
				<!--内容区-->
				<div class="mui-card-content">
					<div class="mui-row">
						<div class="mui-col-xs-12">
							<div class="mui-row">
								<div class="mui-col-xs-3" style="top:10px;text-align: center;border: 5px;">
			    						<img style=" border-radius: 50%;" :src="weatherImage" />
					    		</div>		
					    		<div class="mui-col-xs-9">					
									<ul class="mui-table-view ">
										<li class="mui-table-view-cell ">
											白天 : {{ item.info.day[4] }}  , {{ item.info.day[1] }} , 平均气温{{ item.info.day[2] }}摄氏度
										</li>
										<li class="mui-table-view-cell ">
											晚上 : {{ item.info.night[4] }}  , {{ item.info.night[1] }} , 平均气温{{ item.info.night[2] }}摄氏度
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>				
			</div>
		</div>
	</div>
</template>


<script>
export default {
  data () {
    return {
    	weatherImage:require('./images/rain.png'),
    	day:['今天	','明天	','后天	'],
    	items:[],
    	life:{},
    	DateStr:""
    }
   },
   methods : {
   		conversion (num) {
				num = num - 1;
				if(num < 0) return "一";
				var china = new Array('一','二','三','四','五','六','日');
				return china[num];  
		},
    	getlife () {
    		//页面层
		    layer.open({
			    type: 1,
			    content:`<div class="child_card">
							<div class="mui-card-content ">
								<div class="mui-row ">
									<div class="mui-col-xs-12 ">
										<ul class="mui-table-view ">
											<li class="mui-table-view-cell "><i class="icon iconfont">&#xe60c;</i> 穿衣 [${this.life.chuanyi[0]}]：<p style="margin: 15px;    word-break: break-all;">${this.life.chuanyi[1]}</p></li>
											<li class="mui-table-view-cell ">  <i class="icon iconfont">&#xe60a;</i> 感冒 [${this.life.ganmao[0]}]：<p style="margin: 15px;    word-break: break-all;">${this.life.ganmao[1]}</p></li>
											<li class="mui-table-view-cell "><i class="icon iconfont">&#xe60d;</i> 运动 [${this.life.yundong[0]}]：<p style="margin: 15px;    word-break: break-all;">${this.life.yundong[1]}</p></li>
											<li class="mui-table-view-cell "><i class="icon iconfont">&#xe609;</i> 空调 [${this.life.kongtiao[0]}]：<p style="margin: 15px;    word-break: break-all;">${this.life.kongtiao[1]}</p></li>
											<li class="mui-table-view-cell "> <i class="icon iconfont">&#xe60b;</i> 紫外线 [${this.life.ziwaixian[0]}]：<p style="margin: 15px;    word-break: break-all;">${this.life.ziwaixian[1]}</p></li>
										</ul>
									</div>
								</div>
							</div>
						</div>`
				,anim: 'up'
   				,style: 'width:80%; -webkit-animation-duration: .5s; animation-duration: .5s;font-family: microsoft yahei;'
   				,btn: '我知道了'
   				,shadeClose: false 
   				,title:`生活小贴士`  				
			});
    	}
  },
  created () {
	let self = this;
	let date = new Date();
	let year = date.getFullYear();
	let money = money = date.getMonth() + 1;
	let day = day = date.getDate();
	let hour = date.getHours();
    let minute = date.getMinutes();
    let week = this.conversion(date.getDay()); 
    self.DateStr = `${year}-${money}-${day} ${hour}:${minute} 星期${week}`


	var request = new XMLHttpRequest();
	request.onloadstart = function(){
		window.layer.open({type: 2,shadeClose: false,content: `<span style="color:#fff">加载中</span>`});
	}
	request.open('GET', `http://localhost:8090?cityname=揭阳`, true); 
	request.onload = function() { 
	  if (request.status >= 200 && request.status < 400) {
	    var resp = request.responseText;
	    var json = JSON.parse(resp).result.data.weather.splice(0,3); 
	    console.log(json);
	    self.life = JSON.parse(resp).result.data.life.info;
	    self.items = json;
	  } else {
	    console.log("We reached our target server, but it returned an error");
	  }
	};
	request.onloadend = function(){
		setTimeout(() => {
			window.layer.closeAll()
		},1500)
	}
	request.onerror = function() {
	    console.log("error");
	};
	request.send();
  }
};
</script>

<style  scoped>
.child_card{margin-top:15px;}
.mui-table-view {background: transparent;}
.mui-content{margin-bottom:30px;}
.mui-card{margin:25px 10px;}
#left,#right{color:#000;}
</style>