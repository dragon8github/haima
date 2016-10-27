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
						<li data-group="A" class="mui-table-view-divider mui-indexed-list-group">A</li>
							<li class="mui-table-view-cell mui-indexed-list-item">澳大利亚元AUD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">阿尔及利亚第纳尔DZD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">阿根廷比索ARS</li>
							<li class="mui-table-view-cell mui-indexed-list-item">埃及镑EGP</li>
							<li class="mui-table-view-cell mui-indexed-list-item">阿联酋迪拉姆AED</li>
							<li class="mui-table-view-cell mui-indexed-list-item">阿曼里亚尔OMR</li>
							<li class="mui-table-view-cell mui-indexed-list-item">澳大利亚元AUD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">澳门元MOP</li>

						<li data-group="B" class="mui-table-view-divider mui-indexed-list-group">B</li>
							<li class="mui-table-view-cell mui-indexed-list-item">白俄罗斯卢布BYR</li>
							<li class="mui-table-view-cell mui-indexed-list-item">巴林第纳尔BHD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">保加利亚列弗BGN</li>
							<li class="mui-table-view-cell mui-indexed-list-item">巴西雷亚尔BRL</li>
							<li class="mui-table-view-cell mui-indexed-list-item">冰岛克朗ISK</li>
							<li class="mui-table-view-cell mui-indexed-list-item">波兰兹罗提PLN</li>

						<li data-group="D" class="mui-table-view-divider mui-indexed-list-group">D</li>	
							<li class="mui-table-view-cell mui-indexed-list-item">丹麦克朗DKK</li>

						<li data-group="E" class="mui-table-view-divider mui-indexed-list-group">E</li>
							<li class="mui-table-view-cell mui-indexed-list-item">俄罗斯卢布RUB</li>

						<li data-group="F" class="mui-table-view-divider mui-indexed-list-group">F</li>
							<li class="mui-table-view-cell mui-indexed-list-item">菲律宾比索PHP</li>						
						<li data-group="G" class="mui-table-view-divider mui-indexed-list-group">G</li>
							<li class="mui-table-view-cell mui-indexed-list-item">港币HKD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">港币HKD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">哥伦比亚比索COP</li>
							<li class="mui-table-view-cell mui-indexed-list-item">哥斯达黎加科朗CRC</li>

						<li data-group="H" class="mui-table-view-divider mui-indexed-list-group">H</li>
							韩元KRW

						<li data-group="J" class="mui-table-view-divider mui-indexed-list-group">J</li>
							<li class="mui-table-view-cell mui-indexed-list-item">加拿大元CAD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">柬埔寨瑞尔KHR</li>
							<li class="mui-table-view-cell mui-indexed-list-item">捷克克朗CZK</li>


						<li data-group="K" class="mui-table-view-divider mui-indexed-list-group">K</li>
							<li class="mui-table-view-cell mui-indexed-list-item">克罗地亚库纳HRK</li>
							<li class="mui-table-view-cell mui-indexed-list-item">肯尼亚先令KES</li>
							<li class="mui-table-view-cell mui-indexed-list-item">科威特第纳尔KWD</li>

						<li data-group="L" class="mui-table-view-divider mui-indexed-list-group">L</li>
							<li class="mui-table-view-cell mui-indexed-list-item">老挝基普LAK</li>
							<li class="mui-table-view-cell mui-indexed-list-item">离岸人民币CNH</li>
							<li class="mui-table-view-cell mui-indexed-list-item">黎巴嫩镑LBP</li>
							<li class="mui-table-view-cell mui-indexed-list-item">林吉特MYR</li>
							<li class="mui-table-view-cell mui-indexed-list-item">罗马尼亚列伊RON</li>

						<li data-group="M" class="mui-table-view-divider mui-indexed-list-group">M</li>
							<li class="mui-table-view-cell mui-indexed-list-item">美元USD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">缅甸元BUK</li>
							<li class="mui-table-view-cell mui-indexed-list-item">摩洛哥道拉姆MAD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">墨西哥元MXN</li>

						<li data-group="N" class="mui-table-view-divider mui-indexed-list-group">N</li>
							<li class="mui-table-view-cell mui-indexed-list-item">南非兰特ZAR</li>
							<li class="mui-table-view-cell mui-indexed-list-item">挪威克朗NOK</li>

						<li data-group="O" class="mui-table-view-divider mui-indexed-list-group">O</li>
							<li class="mui-table-view-cell mui-indexed-list-item">欧元EUR</li>

						<li data-group="P" class="mui-table-view-divider mui-indexed-list-group">P</li>
							<li class="mui-table-view-cell mui-indexed-list-item">卡塔尔里亚尔QAR</li>


						<li data-group="R" class="mui-table-view-divider mui-indexed-list-group">R</li>
							<li class="mui-table-view-cell mui-indexed-list-item">人民币CNY</li>
							<li class="mui-table-view-cell mui-indexed-list-item">日元JPY</li>
							<li class="mui-table-view-cell mui-indexed-list-item">瑞典克朗SEK</li>
							<li class="mui-table-view-cell mui-indexed-list-item">瑞士法郎CHF</li>

						<li data-group="S" class="mui-table-view-divider mui-indexed-list-group">S</li>
							<li class="mui-table-view-cell mui-indexed-list-item">塞尔维亚第纳尔RSD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">沙特里亚尔SAR</li>
							<li class="mui-table-view-cell mui-indexed-list-item">斯里兰卡卢比LKR</li>

						<li data-group="T" class="mui-table-view-divider mui-indexed-list-group">T</li>
								<li class="mui-table-view-cell mui-indexed-list-item">泰国铢THB</li>
								<li class="mui-table-view-cell mui-indexed-list-item">坦桑尼亚先令TZS</li>


						<li data-group="W" class="mui-table-view-divider mui-indexed-list-group">W</li>
								<li class="mui-table-view-cell mui-indexed-list-item">文莱元BND"
								<li class="mui-table-view-cell mui-indexed-list-item">乌干达先令UGX"

						<li data-group="X" class="mui-table-view-divider mui-indexed-list-group">X</li>
							<li class="mui-table-view-cell mui-indexed-list-item">新的赞比亚克瓦查ZMK</li>
							<li class="mui-table-view-cell mui-indexed-list-item">新加坡元SGD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">新台币TWD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">新土耳其里拉TRY</li>
							<li class="mui-table-view-cell mui-indexed-list-item">新西兰元NZD</li>
							<li class="mui-table-view-cell mui-indexed-list-item">匈牙利福林HUF</li>
							<li class="mui-table-view-cell mui-indexed-list-item">叙利亚镑SYP</li>

						<li data-group="Y" class="mui-table-view-divider mui-indexed-list-group">Y</li>
							<li class="mui-table-view-cell mui-indexed-list-item">英镑GBP</li>
							<li class="mui-table-view-cell mui-indexed-list-item">伊拉克第纳</li>
							<li class="mui-table-view-cell mui-indexed-list-item">印度卢比IN</li>
							<li class="mui-table-view-cell mui-indexed-list-item">英镑GBP</li>
							<li class="mui-table-view-cell mui-indexed-list-item">印尼卢比ID</li>
							<li class="mui-table-view-cell mui-indexed-list-item">以色列新锡</li>
							<li class="mui-table-view-cell mui-indexed-list-item">约旦第纳尔</li>
							<li class="mui-table-view-cell mui-indexed-list-item">越南盾VND</li>
						<li data-group="Z" class="mui-table-view-divider mui-indexed-list-group">Z</li>
							<li class="mui-table-view-cell mui-indexed-list-item">智利比索CLP</li>


					</ul>

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
    	arr : [],
    	en:[],
    	A:[],  	
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
					console.log(self.items);
					self.items.map(function(item){
						let zimu = selectMethods.query(item.name).substr(0,1);
						if( typeof(self.arr[zimu]) === "undefined" )
						{
							self.arr[zimu] = [item.name + item.code];
						}
						else
						{
							let new_arr = self.arr[zimu];
							new_arr.push(item.name + item.code);
							self.arr[zimu] = new_arr;
						}
					})
				console.log(self.arr);
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
 	this.getExchange();
  	mui.ready(function(){
		require("js/mui.indexedlist.js")
		require('css/mui.indexedlist.css')
		var header = document.querySelector('header.mui-bar');
		var list = document.getElementById('list');
		list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
		window.indexedList = new mui.IndexedList(list);
 
  	})

	
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