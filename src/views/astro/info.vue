<template>
	<div class="container_inner">
				<header class="app-header mui-bar mui-bar-nav">
					<nav-header :_title="mytitle" ></nav-header> 
				</header>
				<div class="mui-content _content">
					<div class="mui-card">
						<div class="mui-card-header mui-card-media">
							<img src="images/touxiang.jpg" />
							<div class="mui-media-body">
								星座运势
								<p>有效日 2016年10月22日</p>
							</div>
						</div>
						<div class="mui-card-content">
							<div class="mui-row">
								<div class="mui-col-sm-6 mui-col-xs-6">
									<li class="mui-table-view-cell">
										星座：白羊座
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										工作：40%
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										幸运颜色：淡蓝色
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6">
									<li class="mui-table-view-cell">
										爱情：40%
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										cp星座：天蝎座
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										财运：40%
									</li>
								</div>
								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										幸运数字：9
									</li>
								</div>

								<div class="mui-col-sm-6 mui-col-xs-6" >
									<li class="mui-table-view-cell">
										总评：40%
									</li>
								</div>

							</div>
							<div class="mui-card-footer">
							[详解]：这个周末你可能有些慵懒，家反而是你最舒适放松的地方。虽然和身边的恋人，家人朋友有许多联络，聊天过程中也会有许多新的想法出现。但有些人需要注意，情绪化的表达可能会让关系出现裂缝，甚至分手。
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
 			mytitle : "白羊座"
 		} 		
 	},
 	components:{
 		navHeader
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