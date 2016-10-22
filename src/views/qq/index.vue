<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">QQ号码测今日吉凶</h1>
			<a href="javascript:;" class="mui-icon mui-icon-info mui-pull-right"></a>
		</header>
		<div class="mui-content">
			<div class="mui-content-padded" style="margin: 25px;">
				<div class="mui-input-row mui-search">
					<input type="search" @keyup.enter="search_qq" class="mui-input-clear" placeholder="请输入QQ号码" v-model="qq" />
				</div>
			</div>
		</div>

		<div class="mui-card" v-show="conclusion != '' &&  analysis != '' ">
				<div class="mui-card-header mui-card-media">
					<img src="../../assets/images/qq.png" />
					<div class="mui-media-body">
						今日QQ吉凶
						<p>发表于 {{ DateStr }}</p>
					</div>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						{{ conclusion }}
					</div>
				</div>
				<div class="mui-card-footer">
					[分析]：{{ analysis }}
				</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
			return {
				DateStr : "",
				conclusion :"",
				analysis:"",
				qq:""
			}
	},
	methods : {
			conversion (num) {
				num = num - 1;
				if(num < 0) return "一";
				var china = new Array('一','二','三','四','五','六','日');
				return china[num];  
			},
			search_qq () {
				let self = this;
				if(this.word === '') return false;
				var request = new XMLHttpRequest();
				request.open('GET', `http://localhost:8090?qq=${this.qq}`, true);
				request.onload = function() { 
				  if (request.status >= 200 && request.status < 400) {
				    var resp = request.responseText;
				    var json = JSON.parse(resp).result.data;
				    var conclusion = json.conclusion;
					var analysis = json.analysis;
					self.conclusion  = conclusion;
					self.analysis = analysis;
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
	},
	created () {
		
	}
}
</script>