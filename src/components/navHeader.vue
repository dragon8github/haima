<template>
	<header class="app-header _effect mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center " :class="{'_opacity_0':_decline}" >
		<a v-show = "_left" class="_leftIco mui-left mui-btn-link mui-btn-nav mui-pull-left">
			<router-link :to="backPath" class="mui-icon" :class="_lefticon"></router-link>
		</a>

		<div class="mui-center mui-title">
			<h1 class="_title _effect" v-text="_title">标题 </h1>
		</div>

		<router-link :to="_rightLink" class="_rightIco mui-btn mui-btn-blue mui-btn-link mui-pull-right"  v-show = "_right" :class="_righticon" v-text="_rightText"></router-link>
	</header>  
</template> 

<script>
	import { mapGetters } from 'vuex'　　
	export default {
		props: {
			//标题
			_title:{type:String,default: '标题'},
			//是否显示左边的图标(默认开启)
			_left:{type:Boolean,default:true},
			//是否显示右边的图标(默认关闭)
			_right:{type:Boolean,default:false},
			//左边的图标
			_lefticon:{type:String,default:"mui-icon-left-nav"},
			//右边的图标
			_righticon:{type:String,default:""},	
			//如果绑定了该属性，则可以通过true/false来执行退场动画
			_decline:{type:Boolean,default:false},
			//右边的文本
			_rightText:{type:String,default:""},
			//右边的链接地址
			_rightLink:{type:String,default:"#"}
		},
		computed: {
		    ...mapGetters([
	          'backPath',  //之后就可以在template中使用了如：:class="{'_effect--50':decline}"  或者script中如 console.log(this.decline);
		    ])
		}
	}
</script>

<style lang="css" scoped>


</style>