<template>
	<div class="container_inner">
		<nav-header :_title="'请选择货币类型'" ></nav-header> 
		<div class="mui-content _content" >
			<div class="mui-indexed-list" id="list">
				<div class="mui-indexed-list-search mui-input-row mui-search">
					<input type="search" v-model="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索货币类型">
				</div>
				<div class="mui-indexed-list-bar">
					<a v-for="e in en" class="en">{{ e }}</a>
				</div>

				<div class="mui-indexed-list-alert"></div>
				<div class="mui-indexed-list-inner">
					<div v-for="(val,key) in arr">
						<li :data-group="key"  class="mui-table-view-divider mui-indexed-list-group">
							{{ key }}
							<li @click="select_items" class="mui-table-view-cell mui-indexed-list-item" v-for="v in val">{{ v }}
							</li>
						</li> 
					</div> 
				</div>
			</div>
		</div>
	</div>
</template>

<script>
 import navHeader from 'components/navHeader'
 import selectMethods from './selectMethods.js'

export default {
  data () {
    return {
    	en:[],
    	items:[],
    	arr:{},
    	search:""
    };
  },
  components : {
	navHeader
  },
  methods: {
  	 getExchange () {
  	 	let self = this;  	 
  	 	$.ajax({
			type:"get",
			url:`http://localhost:8090?list`, 
			success (data) {
				let list = JSON.parse(data).result.list;
				self.items = list;
				let i = 0;
				self.items.map(function(item){
					//获取首个字母
					let zimu = selectMethods.query(item.name).substr(0,1);
					//插入字母索引列表
					if(self.en.indexOf(zimu) < 0) self.en.push(zimu);
					// 插入主数据列表
					if( typeof(self.arr[zimu]) === "undefined" ){						
						self.arr[zimu] = [item.name + item.code];
					}else{
						if(self.arr[zimu].indexOf(item.name + item.code) >=0 ) return false;
						self.arr[zimu].push(item.name + item.code);
					}
				})
				// 为字母索引列表排序
				self.en.sort();

				// 为主数据列表排序
				let new_arr = {};  		
		  		for(let i in self.en)
		  		{
		  			let en = self.en[i];
		  			new_arr[en] = self.arr[en];
		  		}

		  		// 将排序好的数组替换主数据源
		  		self.arr = new_arr;
		  	}
		})
  	},
  	select_items (e) {
  		this.$parent.shouchi = e.target.innerText;
  	}
  },
  created () {
 	this.getExchange(); 	
  },
   beforeRouteEnter (to, from, next) {
	next( vm => {
		vm.$parent.route_pipe(true);

		require("js/mui.indexedlist.js")
		require('css/mui.indexedlist.css') 
		var header = document.querySelector('header.mui-bar');
		var list = document.getElementById('list');
		list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
		window.indexedList = new mui.IndexedList(list);
		$("body").css("overflow","hidden"); 
	});
  },
  beforeRouteLeave (to, from, next) {
		this.$parent.route_pipe(false);
		next();
  }
 
};
</script>

<style lang="css" scoped>
.mui-bar{-webkit-box-shadow:none;box-shadow:none}
.en{height:4.74%}
</style>