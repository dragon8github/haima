import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [

	/* test 页面 */
	{path:'/index',redirect: '/'},
	{path:'/',component:require('./views/test/index')},
	{path:'/order',component:require('./views/test/order'),children:[{path:'/form',component:require('./views/test/form')}]},			
	{path:'/card',component:require('./views/test/card')},
	{path:'/add',component:require('./views/test/add')},
	{path:'/repay',component:require('./views/test/repay')},
	{path:'/protocol',component:require('./views/test/protocol')},	

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
	{path:'/robot',component:require('./views/robot/index')}
]	


/* 实例化路由 */
const router = new VueRouter({
	mode: 'history',
	routes : map
})



router.beforeEach((to, from, next) => {
	//console.log(to,from);
	next();
})


// 这个是用来动态获取和设置后退地址的
router.afterEach((to, from) => {
	//获取来路(未使用)
    let fromPath = from.path || '/';
    //获取跳转页
    //let toPath = to.path;
    //获取上一层(有可能为空),这个是为将来区别四大界面的路由使用的
    //let backPath = toPath.slice(0, toPath.lastIndexOf('/'));
    //调用Vuex
    store.dispatch('set_back_path', fromPath);
})




export default router;