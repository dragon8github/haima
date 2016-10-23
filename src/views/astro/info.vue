<template>
	<div class="container_inner">
				<nav-header :_title="mytitle" ></nav-header> 
				<div class="mui-content _content">
					<div class="mui-card">
						<div class="mui-card-header mui-card-media">
							<img :src="astroImage" id="img" />
							<div class="mui-media-body">
								星座运势
								<p>有效日 {{ DateStr }}</p>
							</div>
						</div>
						<div class="mui-card-content">
							<div class="mui-row">
								<div class="mui-col-sm-6 mui-col-xs-6">
									<li class="mui-table-view-cell">
										星座：{{ mytitle }}
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										工作：{{ work }}
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										幸运颜色：{{ color }}
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6">
									<li class="mui-table-view-cell">
										爱情：{{ love }}
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										cp星座：{{ QFriend }}
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										财运：{{ money }}
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										幸运数字：{{ number}}
									</li>
								</div>

								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										总评：{{all}}
									</li>
								</div>

							</div>
							<div class="mui-card-footer">
							[详解]：{{summary}}
							</div>
						</div>
				</div>
			</div>
		</div>
</template>

<script>
 import navHeader from 'components/navHeader'
 export default {
 	data () {
 		return {
 			mytitle:"",
 			DateStr:"",
 			consName :"",
 			all:"",
 			love:"",
 			money:"",
 			number:"",
 			work:"",
 			QFriend:"",
 			summary:"",
 			color:"",
 			astroImage:require(`./images/${this.$route.params.consName}.png`)
 		} 		
 	},
 	components:{
 		navHeader
 	},
	created () {
		let self = this;
		let date = new Date();
		let year = date.getFullYear();
		let money = money = date.getMonth() + 1;
		let day = day = date.getDate();
		let week = date.getDay(); 

		self.DateStr = `${year}年${money}月${day}日`;
		self.consName = self.$route.params.consName;  //获取参数
		self.mytitle = self.$route.params.consName;
		
		
		var request = new XMLHttpRequest();
		request.open('GET', `http://localhost:8090?consName=${this.consName}`, true);
		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    var resp = request.responseText;
		    var json = JSON.parse(resp);
		    self.QFriend = json.QFriend;
		    self.all = json.all;
		    self.color = json.color;
		    self.love = json.love;
		    self.money = json.money;
		    self.summary = json.summary;
		    self.work = json.work;
		    self.number = json.number;

		  } else {
		    console.log("We reached our target server, but it returned an error");
		  }
		};
		request.onerror = function() {
		    console.log("error");
		};
		request.send();
	},
 	beforeRouteEnter (to, from, next) {
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不！能！获取组件实例 `this`
		// 因为当钩子执行前，组件实例还没被创建
		next( vm => {
		vm.$parent.route_pipe(true);
		});
	},
	beforeRouteLeave (to, from, next) {
		this.$parent.route_pipe(false);
		next();
	}
 }
</script>

<style>
	.mui-table-view-cell{
	    height: 55px;
	    white-space: nowrap;
	    overflow: hidden;
	}
</style>