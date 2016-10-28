/* 这是Vue2.0 transition 相关的生命周期 
   手册地址：http://vuejs.org/guide/transitions.html
 */


// 进入页面之前做的一些准备
export const beforeEnter = (el) => {
	 $(el).find("._content").removeClass("_effect");
	 Velocity(el.querySelector("._content"),{translateX: "80%"},0);
     Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},0);
     Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:0},0);
} 

// 进入页面时做的一些事情
export const enter = (el,done) => {
	Velocity(el.querySelector("._content"),{translateX: "0%"},350,"ease");
    Velocity(el.querySelector("._title"),{translateX: "0%",opacity:1},350,"ease");
	Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:1},100); 
	done();  //神坑，如果不加上这个的话，路由不会停止。一直保持在class-enter-active状态
}

export const beforeLeave = (el) => {
	$(el).find("._content").addClass('_effect');	
}

// 离开页面时做的一些事情
export const leave = (el,done) => { 
	Velocity(el.querySelector("._content"),{translateX: "100%"},350,"ease");
    Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},350,"ease");
	Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:0},350,"ease");
	setTimeout(()=> {
	 	done();  //神坑，如果不加上这个的话，路由不会停止。一直保持在class-leave-active状态,并且不会消失
	},350)  //等待200毫秒是为了让动画执行结束
}
