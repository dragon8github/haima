<template>
	<div>
		<div class="container">
			<nav-header :_title="mytitle" :_left="myleft" :_decline ="decline" ></nav-header>
			<div class="mui-content _effect" :class="{'_effect--30':decline}">
				<div class="astronav">
					<router-link v-for="item in computedList" :to="item"></router-link>
				</div>
			</div>
			<transition name="slide-fade"  v-on:before-enter="beforeEnter"
										   v-on:enter="enter"
										   v-on:leave="leave"
			>
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
				myleft: false,
				decline:false,
				mytitle : "星座运势",
				items : ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
			}
		},
		methods:{
			route_pipe (b) {
	    		this.decline = b;
		    },
			beforeEnter,enter,leave
		},
		components:{
 			navHeader
 		},
        computed: {
            computedList: function () {
              var vm = this
              return this.items.map(function(item){
              	return '/astro/' + item;
              })
            }
        }
	}
</script>

<style scoped>
.astronav{display:flex;flex-wrap:wrap;justify-content:space-around}
.astronav a{background:no-repeat url(../../assets/images/icon_astro.gif);width:80px;height:110px;margin:10px 0;display:inline-block}
.astronav a:nth-child(1){background-position:0 0}
.astronav a:nth-child(2){background-position:-82px 0}
.astronav a:nth-child(3){background-position:-164px 0}
.astronav a:nth-child(4){background-position:-246px 0}
.astronav a:nth-child(5){background-position:-328px 0}
.astronav a:nth-child(6){background-position:-410px 0}
.astronav a:nth-child(7){background-position:-492px 0}
.astronav a:nth-child(8){background-position:-574px 0}
.astronav a:nth-child(9){background-position:-656px 0}
.astronav a:nth-child(10){background-position:-738px 0}
.astronav a:nth-child(11){background-position:-820px 0}
.astronav a:nth-child(12){background-position:-902px 0}
.astronav a:nth-child(1):hover{background-position:0 -110px}
.astronav a:nth-child(2):hover{background-position:-82px -110px}
.astronav a:nth-child(3):hover{background-position:-164px -110px}
.astronav a:nth-child(4):hover{background-position:-246px -110px}
.astronav a:nth-child(5):hover{background-position:-328px -110px}
.astronav a:nth-child(6):hover{background-position:-410px -110px}
.astronav a:nth-child(7):hover{background-position:-492px -110px}
.astronav a:nth-child(8):hover{background-position:-574px -110px}
.astronav a:nth-child(9):hover{background-position:-656px -110px}
.astronav a:nth-child(10):hover{background-position:-738px -110px}
.astronav a:nth-child(11):hover{background-position:-820px -110px}
.astronav a:nth-child(12):hover{background-position:-902px -110px}
</style>