<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">驾证考题</h1>
			<button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right" @click="getJoke">刷新题库</button>
		</header>

		<div class="mui-content mui-scroll-wrapper"  id="pullrefresh" >
		  <div class="mui-scroll">
				<div class="mui-card" v-for="(item,index) in items">
					<div class="mui-card-header">
						<div>
							<span class="mui-icon mui-icon-paperclip"></span>
							<span>{{ item.question }}</span>
						</div>
					</div>
					<div style="padding-top:5px;text-align: center;">
						<img :src="item.url" draggable="false" />
					</div>

					<div class="mui-card-content">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell">A:{{ item.item1 }}</li>
							<li class="mui-table-view-cell">B:{{ item.item2 }}</li>
							<li class="mui-table-view-cell">C:{{ item.item3 }}</li>
							<li class="mui-table-view-cell">D:{{ item.item4 }}</li>
						</ul>
					</div>
					<!--页脚，放置补充信息或支持的操作-->
					<div class="mui-card-footer">
						[{{item.answer}}] : {{item.explains }} 
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* 
	由于接口是一次性返回了100条数据。我的想法是:
	1、先把这100条雪藏到result[]。并且默认将前十条塞入items[]
	2、当触发“上拉加载更多”时，items[]再次从result[]中索要10条。
	3、当触发“下拉刷新时”，重新调用接口，清空result[]和items[]。然后重复第一条操作
 */
export default {
  data () {
    return {	
 		items:[],
 		result:[]
    };
  },
  methods : {
  	 getJoke () {
  	 	let self = this;  	 
  	 	$.ajax({
				type:"get",
				url:`http://localhost:8090/?subject=1&model=c1`, 
				success (data) {
					let list = JSON.parse(data).result;					
					self.result = list;
					self.items = [];
					self.push_array_top();
  	 				mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
				}
		})
  	 },
  	 pulldownRefresh () {
  	 	setTimeout(() => {
  	 		this.getJoke();
  	 	},500)
  	 },
  	 pullupRefresh () {
  	 	setTimeout( () => {
  	 		this.push_array_top();
  	 		mui('#pullrefresh').pullRefresh().endPullupToRefresh(this.result.length === 0);
  	 	},1500)
  	 },
  	 push_array_top () {
  	 	let Top_ten_data = this.result.slice(0, 10);
  	 	Top_ten_data.map(function(item){
  	 		let i = parseInt(item.answer) - 1;
  	 		return item.answer = ["A","B","C","D"][i];
  	 	})
		this.result.splice(0,10);
		this.items = this.items.concat(Top_ten_data); 
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

