export const beforeEnter = (el) => {
	 Velocity(el.querySelector("._content"),{translateX: "80%"},0);
     Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},0);
     Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:0},0);
} 

export const enter = (el,done) => {
	Velocity(el.querySelector("._content"),{translateX: "0%"},350,"ease");
    Velocity(el.querySelector("._title"),{translateX: "0%",opacity:1},350,"ease");
	Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:1},100); 
	done();  //神坑，如果不加上这个的话，路由不会停止。一直保持在class-enter-active状态
}

export const leave = (el,done) => {
	Velocity(el.querySelector("._content"),{translateX: "100%"},350,"ease");
    Velocity(el.querySelector("._title"),{translateX: "50%",opacity:0},350,"ease");
	Velocity(el.querySelector("._leftIco,_rightIco"),{opacity:0},350,"ease");
	setTimeout(()=> {
	 	done();  //神坑，如果不加上这个的话，路由不会停止。一直保持在class-leave-active状态,并且不会消失
	},200)
}
