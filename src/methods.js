/* 定义一些transitions 生命周期对应绑定的函数，不一定要使用这些名字
   手册地址：http://vuejs.org/guide/transitions.html
   神坑：注意这些transition函数必须绑定才可以调用
   <transition name="slide-fade"  v-on:before-enter="beforeEnter"
									   v-on:enter="enter"
									   v-on:leave="leave">
				<router-view keep-alive></router-view>
	</transition>
 */


// 进入页面之前做的一些准备
export const beforeEnter = (el) => {
	 $(el).find("._content").removeClass("_effect");//临时补丁
	 Velocity(el.querySelector("._content"),{translateX: "80%"},0);
     Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},0);
} 

// 进入页面时做的一些事情
export const enter = (el,done) => {
	Velocity(el.querySelector("._content"),{translateX: "0%"},350,"ease");
    Velocity(el.querySelector("._title"),{translateX: "0%",opacity:1},350,"ease");
	setTimeout(()=> {
		done();   //神坑，如果不加上这个的话，路由不会停止。一直保持在class-enter-active状态
	},350) 
}


// 离开页面时做的一些事情
export const leave = (el,done) => { 
	Velocity(el.querySelector("._content"),{translateX: "100%",opacity:1},350,"ease");
    Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},350,"ease");
	setTimeout(()=> {
	 	done();  //神坑，如果不加上这个的话，路由不会停止。一直保持在class-leave-active状态,并且不会消失
	},350)  //等待200毫秒是为了让动画执行结束
}
