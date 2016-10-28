<template>
	<div class="container_inner">
		<div class="container"> 
			<nav-header :_title="'货币转换'" ></nav-header> 
			<div class="mui-content _content _effect" :class="{'_effect--30':decline}">
				<form id='login-form' class="mui-input-group">
					<div class="mui-input-row">
						<label>金额</label> 
						<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入金额">
					</div>
					<div class="mui-input-row">
						<label>手持</label>
						<input v-model="shouchi" type="text" class="mui-input-clear mui-input" readonly placeholder="请选择持有货币">
					</div>
					<div class="mui-input-row">
						<label>待兑</label>
						<router-link  to="conversion/select" class="gotoselect"> 
						<input v-model="daidui" style="padding:0" type="text" class="mui-input-clear mui-input" readonly placeholder="请选择兑换货币"></router-link> 
					</div>
					<div class="mui-input-row">
						<label>结果</label>
						<input id='password' type="password" class="mui-input-clear mui-input" placeholder="">
					</div>
				</form>
				<div class="mui-content-padded">
					<button id='login' class="mui-btn mui-btn-block mui-btn-red">计算</button>
				</div>
			</div>
		</div>
		<transition name="slide-fade"  v-on:before-enter="beforeEnter"
									   v-on:enter="enter"
									   v-on:leave="leave">
				<router-view keep-alive></router-view>
		</transition>
	</div>
</template>

<script>
 import navHeader from 'components/navHeader'
 import {beforeEnter,enter,beforeLeave,leave} from 'methods'
export default {
  data () {
    return {
		decline:false,
		daidui:"",
		shouchi:""
    };
  },
  methods: {
  	beforeEnter,enter,leave,beforeLeave,
  	set_daidui (v) {
  		this.daidui(v)
  	},
  	set_shouchi (v) {
  		this.shouchi(v)
  	},
  	route_pipe (v) {
	    this.decline = v;
    }
  },
  components : {
	navHeader
  },  
  beforeRouteEnter (to, from, next) {
	next( vm => {
	vm.$parent.route_pipe(true);
	});
  },
  beforeRouteLeave (to, from, next) {
		this.$parent.route_pipe(false);
		next();
  }
};
</script>

<style lang="css" scoped>
.ui-page-login,body{width:100%;height:100%;margin:0;padding:0}
.mui-content{height:100%}
.area{margin:20px auto 0 auto}
.mui-input-group{margin-top:10px}
.mui-input-group:first-child{margin-top:20px}
.mui-input-group label{width:22%}
.mui-input-row label~input,.mui-input-row label~select,.mui-input-row label~textarea{width:78%}
.mui-checkbox input[type=checkbox],.mui-radio input[type=radio]{top:6px}
.mui-content-padded{margin-top:25px}
.mui-btn{padding:10px}
.link-area{display:block;margin-top:25px;text-align:center}
.spliter{color:#bbb;padding:0 8px}
.oauth-area{position:absolute;bottom:20px;left:0;text-align:center;width:100%;padding:0;margin:0}
.oauth-area .oauth-btn{display:inline-block;width:50px;height:50px;background-size:30px 30px;background-position:center center;background-repeat:no-repeat;margin:0 20px;border:solid 1px #ddd;border-radius:25px}
.oauth-area .oauth-btn:active{border:solid 1px #aaa}
.oauth-area .oauth-btn.disabled{background-color:#ddd}
.gotoselect{ position: absolute; height: 100%; width: 100%; }
</style>