<template>
	<div class="container_inner">
		<nav-header :_title="'请选择货币类型'" ></nav-header> 
		<div class="mui-content _content">
			<div id='list' class="mui-indexed-list">
				<div class="mui-indexed-list-search mui-input-row mui-search">
					<input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索货币类型">
				</div>
				<div class="mui-indexed-list-bar">
					<a v-for="e in en">{{ e }}</a>
				</div>

				<div class="mui-indexed-list-alert"></div>

				<div class="mui-indexed-list-inner">

					<div class="mui-indexed-list-empty-alert">没有数据</div>

					<ul class="mui-table-view">
						<!-- <li data-group="A" class="mui-table-view-divider mui-indexed-list-group">A</li> -->
						<li class="mui-table-view-cell mui-indexed-list-item" v-for="(key,val) in obj2">
							{{ val }}
						</li>
					</ul>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
 import navHeader from 'components/navHeader'
 import selectMethods from './selectMethods.js'



// console.log("selectMethods",selectMethods.query("李钊鸿"));


export default {
  data () {
    return {
    	items : [],
    	en:[],
    	obj:[],
    	obj2:{}    	
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
				self.en_sort();
			}
		})
  	},
  	select_items (e) {
  		console.log(e.target.innerText,e.target.getAttribute("data-value"))
  	},
  	en_sort () {
  		let self = this;
  		let name = self.items.map((item) =>{
					var zimu =  selectMethods.query(item.name).substr(0,1);
					if(self.en.indexOf(zimu) >= 0) return false;
					self.en.push(zimu);		
		})
		self.en.sort();
  	}
  },
  created () {

  	this.obj2["a"] = "AAA"
  	this.obj2["B"] = "AAA"
  	this.obj2["C"] = "AAA"

  	this.obj["a"] = "AAA"
  	this.obj["B"] = "AAA"
  	this.obj["C"] = "AAA"
  	
  	console.log(this.obj,this.obj2);

  	var self = this;
  	 mui.ready(function() {



  	 		require("js/mui.indexedlist.js")
 			require('css/mui.indexedlist.css')
			var header = document.querySelector('header.mui-bar');
			var list = document.getElementById('list');
			list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
			window.indexedList = new mui.IndexedList(list);

  	 		setTimeout( ()=>{
  	 			self.getExchange();
  	 		},200 )
			
	});
  }
};
</script>

<style lang="css" scoped>
html,
body {
height: 100%;
overflow: hidden;
}
.mui-bar {
-webkit-box-shadow: none;
box-shadow: none;
}
</style>