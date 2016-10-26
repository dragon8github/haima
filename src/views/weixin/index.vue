<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">微信精选</h1>
		</header>
		<div class="mui-content mui-scroll-wrapper" id="pullrefresh" >
		  <div class="mui-scroll">
				<div class="mui-card" v-for="item in items">
						<div class="mui-card-header">
							<img :src="item.firstImg " width="100%" height="100%"  draggable="false"/> 
						</div>
						<div class="mui-card-content-inner">
							<p></p>
							<p style="color: #333;">{{ item.title }}</p>
						</div>
						<div class="mui-card-footer">
							<a class="mui-card-link" target="_blank" :href="item.url">Read more</a>
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
 		pagesize:10,
 		count:0,
 		totalPage:50   
    };
  },
  methods : {
  	 getJoke () {
  	 	let self = this;  	 
  	 	$.ajax({
				type:"get",
				url:`http://localhost:8090?page=${self.page}&pagesize=${self.pagesize}`, 
				success (data) {
					let result = JSON.parse(data).result;
					let list = result.list;
					let totalPage = result.totalPage;  
					self.items = self.items.concat(list);  // 合并并且返回一个新数组
					self.page += 1;				
					self.count += self.pagesize;
					mui('#pullrefresh').pullRefresh().endPullupToRefresh(self.count >= self.totalPage);
				}
		})
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

