<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<button @click="model" class=" mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left"><span class="mui-icon mui-icon-left-nav"></span>{{ modelName }}</button>
			<h1 class="mui-title">笑话大全</h1>
		</header>
		<div class="mui-content mui-scroll-wrapper" id="pullrefresh" >
		  <div class="mui-scroll">
				<div class="mui-card" v-for="item in items">
						<div class="mui-card-header mui-card-media" style="">
						<div class="mui-card-content-inner">
								<p style="color: #333;">{{ item.content }}</p>
							</div>
						</div>
						<div class="mui-card-content" v-if="item.url">
							<img :src=" item.url " width="100%" height="100%"  draggable="false"/> 
						</div>
						<div class="mui-card-footer">
							Posted on {{ item.updatetime }}
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
 		items:[],
 		page :1,
 		pagesize:5,
 		count:0,
 		modelName:"图文"
    };
  },
  methods : {
  	 getJoke () {
  	 	let self = this;  	 
  	 	var model = self.modelName == "图文" ? "pic" : "";	
  	 	$.ajax({
				type:"get",
				url:`http://localhost:8090?${model}&page=${self.page}&pagesize=${self.pagesize}`, 
				success (data) {
					let json = JSON.parse(data).result.data;
					self.items = self.items.concat(json);  // 合并并且返回一个新数组
					self.page += 1;				
					self.count += 10;
					mui('#pullrefresh').pullRefresh().endPullupToRefresh(self.count >= 1000);
				}
		})
  	 },
  	 model () {
  	 	this.modelName = this.modelName == "图文" ? "文字" : "图文";
  	 	this.items = [];
  	 	this.getJoke();	
  	 },
  	 pulldownRefresh () {
  	 	setTimeout(() => {
  	 		mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
  	 	},1500)
  	 },
  	 pullupRefresh () {
  	 	this.getJoke();
  	 }
  },
  created () {
  	let self = this;
	mui.ready(function(){
		mui.init
		({
		    pullRefresh: 
		    {
		      container: '#pullrefresh',
		      down: {
		        callback: self.pulldownRefresh
		      },
		      up: {
		        contentrefresh: '正在加载...',
		        callback: self.pullupRefresh
		      }
		    } 
		});	

		self.getJoke(); 
	})
	
  }
};
</script>

<style lang="css" scoped>
	.mui-card:nth-last-child(1){margin-bottom:70px;}
	.mui-card-header>img:first-child{width:100%;height: 100%;}
	.mui-pull-bottom-pocket{position:inherit}
</style>

