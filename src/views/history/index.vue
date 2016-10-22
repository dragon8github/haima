<template>
	<div>
		<header class="mui-bar mui-bar-nav">
	    <h1 class="mui-title">历史上的今天</h1>
	    <a href="javascript:;" class="mui-icon mui-icon-info mui-pull-right"></a>
		</header>
		
		<div class="mui-content">
		    <ul class="mui-table-view">
		            <li class="mui-table-view-divider">
		                    <span>今天的</span> 
		                    <span id="currentDateStr" class="mui-badge mui-badge-blue">
		                    	{{ DateStr }}
		                    </span>
		                    <span style="margin-left: 50px;"></span>
		                    
		                    <span>星期</span>
		                    <span id="currentWeekStr" class="mui-badge mui-badge-red">
		                    	{{ WeekStr }}
		                    </span>
		            </li>
	        </ul>
	        <ul class="mui-table-view">
	                <li  v-for="item in items" class="mui-table-view-cell">
	                        <h4>{{ item.title }}</h4>
	                        <span>{{ item.des }}</span>
	                </li> 
	            </ul>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				items : [],
				DateStr : "",
				WeekStr :""
			}
		},
		methods : {
			conversion (num) {
				num = num - 1;
				if(num < 0) return "一";
				var china = new Array('一','二','三','四','五','六','日');
				return china[num];  
			}
		},
		created () {
			let self = this;
			let date = new Date();
			let year = date.getFullYear();
			let money = money = date.getMonth() + 1;
			let day = day = date.getDate();
			let week = date.getDay(); 

			self.DateStr = `${year}-${money}-${day}`;
			self.WeekStr = this.conversion(week);
			
			var request = new XMLHttpRequest();
			request.open('GET', `http://localhost:8090?money=${money}&day=${day}`, true);
			request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
			    var resp = request.responseText;
			    var json = JSON.parse(resp).result;
			    self.items = json;
			  } else {
			    console.log("We reached our target server, but it returned an error");
			  }
			};
			request.onerror = function() {
			    console.log("error");
			};
			request.send();
		}
	}
</script>