import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [

	/* 主页与重定向 */
	{path:'/index',redirect: '/'},{path:'/',component:require('./views/index')}, 

	/* 历史上的今天 */ 
	{path:'/history',component:require('./views/history/index')},

	/* QQ号码测今日吉凶 */
	{path:'/qq',component:require('./views/qq/index')},

	/* 新华字典 */
	{path:'/dictionary',component:require('./views/dictionary/index')},

	/* 星座运势 */
	{path:'/astro',component:require('./views/astro/index'),children:[{path:':consName',component:require('./views/astro/info')}]},

	/* 天气预报 */
	{path:'/weather',component:require('./views/weather/index')},

	/* 笑话大全 */
	{path:'/joke',component:require('./views/joke/index')},

	/* 机器人 */
	{path:'/robot',component:require('./views/robot/index')},

	/* 微信精选 */
	{path:'/weixin',component:require('./views/weixin/index')},

	/* 驾证题库 */
	{path:'/driving',component:require('./views/driving/index')},

	/* 汇率 */
	{path:'/exchange',component:require('./views/exchange/index'),
		children:[{path:'conversion',component:require('./views/exchange/conversion'),
			children:[{path:"select",component:require('./views/exchange/select')}]
		}]		
	}

]	


/* 实例化路由 */
const router = new VueRouter({
	mode: 'history',
	routes : map
})


/* 暂时没什么用 */
router.beforeEach((to, from, next) => {
	//console.log(to,from);
	next();
})


// 这个是用来动态获取和设置后退地址的
router.afterEach((to, from) => {
	//获取来路(未使用)
    let fromPath = from.path || '/';
    //获取跳转页
    let toPath = to.path;
    //获取上一层(有可能为空),这个是为将来区别四大界面的路由使用的
    let backPath = toPath.slice(0, toPath.lastIndexOf('/')); 
    //调用Vuex
    store.dispatch('set_back_path', backPath);
})




export default router;