<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">新华字典</h1>
			<a href="javascript:;" class="mui-icon mui-icon-info mui-pull-right"></a>
		</header>
		<div class="mui-content">
			<div class="mui-content-padded" style="margin: 25px;">
				<div class="mui-input-row mui-search">
					<input type="search" @keyup.enter="search_word" class="mui-input-clear" placeholder="请输入要查询的字" v-model="word">
				</div>
			</div>
		</div>
		
		<div class="mui-card" v-show="xiangjie != '' && jijie != '' ">
				<div class="mui-card-header mui-card-media">
					<img src="../../assets/images/touxiang.jpg" />
					<div class="mui-media-body" > 
						{{ Title }}
						<p>截至于 {{DateStr}}</p>
					</div>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						[简介]： {{ jijie }}
					</div>
				</div>		
		</div>
		
		<div class="mui-card" v-show="xiangjie != '' && jijie != '' ">
			<div class="mui-card-header mui-card-media">
					<img src="../../assets/images/touxiang.jpg" />
					<div class="mui-media-body"> 
						详解
						<p>截至于 {{DateStr}}</p>
					</div>
				</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
				 	{{ xiangjie }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				Title:"",
				xiangjie:"",
				jijie:"",
				word:"",
				DateStr:""
			}
		},
		methods: {
			search_word () {
				let self = this;
				if(this.word === '') return false;
				var request = new XMLHttpRequest();
				request.open('GET', `http://localhost:8090?word=${this.word}`, true);
				request.onload = function() {
				  if (request.status >= 200 && request.status < 400) {
				    var resp = request.responseText;
				    var json = JSON.parse(resp).result;
				    self.jijie = json.jijie;
				    self.xiangjie = json.xiangjie;
				    self.Title = `${json.zi} 拼音:${json.py} 五笔:${json.wubi} 部首:${json.bushou} 笔画:${json.bihua}`;
				    console.log( self.Title);
				  } else {
				    console.log("We reached our target server, but it returned an error");
				  }
				};
				request.onerror = function() {
				    console.log("error");
				};
				request.send();
				self.setDate(); 
			},
			conversion (num) {
				num = num - 1;
				if(num < 0) return "一";
				var china = new Array('一','二','三','四','五','六','日');
				return china[num];  
			},
			setDate () {
				let self = this;
				let date = new Date();
				let year = date.getFullYear();
				let money = money = date.getMonth() + 1;
				let day = day = date.getDate();
				let hour = date.getHours();
		        let minute = date.getMinutes();
		        let week = this.conversion(date.getDay()); 

		        self.DateStr = `${year}-${money}-${day} ${hour}:${minute} 星期${week}`
			}	
		}
	}
</script>