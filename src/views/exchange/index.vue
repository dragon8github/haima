<template>
	<div>
		<div class="container">
			<nav-header 
						:_title="'汇率'" 
						:_left="false" 
						:_right="true" 
						:_decline ="decline" 
						:_rightLink="'/exchange/conversion'"
						:_rightText="'货币转换'">							
			</nav-header>
			<div class="mui-content _effect" :class="{'_effect--30':decline}">
				    <div class="mui-card" v-for="(item,index) in items">
							<div class="mui-card-header">{{ item[0] }} <img :src="getImages(item[0])"/> </div>
							<div class="mui-card-content">
								<div class="mui-row">
											<div class="mui-col-sm-6 mui-col-xs-6">
												<li class="mui-table-view-cell">
													中间价：{{ item[2] }}			
												</li>
											</div>
											<div class="mui-col-sm-6 mui-col-xs-6">
												<li class="mui-table-view-cell"> 
													现汇买入价：{{ item[3] }}
												</li>
											</div>
											<div class="mui-col-sm-6 mui-col-xs-6">
												<li class="mui-table-view-cell">
													现钞买入价：{{ item[4] }}
												</li>
											</div>
											<div class="mui-col-sm-6 mui-col-xs-6">
												<li class="mui-table-view-cell">
													卖出价：{{ item[5] }}
												</li>
											</div>
								</div>
							</div>
							<div class="mui-card-footer">{{ DateStr }}</div>
					</div>
			</div>
			
			<transition name="slide-fade"  v-on:before-enter="beforeEnter"
										   v-on:enter="enter"
										   v-on:leave="leave">
					<router-view keep-alive></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
 
 import navHeader from 'components/navHeader'
 import {beforeEnter,enter,leave} from 'methods' 


export default {
  data () {
    return {
    	items:[],
    	img:[],
    	DateStr:"",
		decline:false,
    };
  },
  methods : {
  	 beforeEnter,enter,leave,
  	 getExchange () {
  	 	let self = this;  	 
  	 	$.ajax({
				type:"get",
				url:`http://localhost:8090?query`, 
				success (data) {
					let list = JSON.parse(data).result.list;
					self.items = list;
				}
		})
  	},
  	route_pipe (b) {
	    this.decline = b;
	},
  	getImages ( name ) {
		return require(`../../assets/images/${name}.png`);
 	},
	getTime () {
		let date = new Date();
		let year = date.getFullYear();
		let money = money = date.getMonth() + 1;
		let day = day = date.getDate();
		let hour = date.getHours();
	    let minute = date.getMinutes();
	    let week = ['一','二','三','四','五','六','日'][date.getDay() - 1];
	    this.DateStr = `${year}-${money}-${day} ${hour}:${minute} 星期${week}`
	}
  },
  components:{
  	navHeader
  },
  created () {
  	this.getExchange();
  	this.getTime();
  }
};
</script>

<style lang="css" scoped>
.mui-card{margin: 20px 0}
.mui-table-view-cell{padding: 11px 0px 11px 11px;}
</style>