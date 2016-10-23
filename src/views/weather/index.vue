<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">天气预报</h1>
		</header>

		<div class="mui-content">
			<div class="mui-card">
				<!--页眉，放置标题-->
				<div class="mui-card-header">
					今天 2016-10-23 星期日
				</div>
				<!--内容区-->
				<div class="mui-card-content">
					<div class="mui-row">
						<div class="mui-col-xs-12">
							<div class="mui-row">
									<ul class="mui-table-view ">
										<li class="mui-table-view-cell ">
											白天 : 1级风力  , 微风多云 , 平均气温15摄氏度
										</li>
										<li class="mui-table-view-cell ">
											傍晚 : 1级风力  , 微风多云 , 平均气温15摄氏度
										</li>
										<li class="mui-table-view-cell ">
											晚上 : 1级风力 , 微风多云 , 平均气温5摄氏度
										</li>
									</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="child_card">
					<!--页眉，放置标题-->
					<div class="mui-card-header ">
						<span class="mui-icon mui-icon-paperplane "><span class="title">生活小贴士</span></span>
					</div>
					<!--内容区-->
					<div class="mui-card-content ">
						<div class="mui-row ">
							<div class="mui-col-xs-12 ">
								<ul class="mui-table-view ">
									<li class="mui-table-view-cell ">穿衣[较冷]：建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。</li>
									<li class="mui-table-view-cell ">健康[预防]：天气较凉，较易发生感冒，请适当增加衣服。体质较弱的朋友尤其应该注意防护。</li>
									<li class="mui-table-view-cell ">空调[较少开启]：您将感到很舒适，一般不需要开启空调。</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="mui-card">
				<!--页眉，放置标题-->
				<div class="mui-card-header">
					   明天 2016-10-23 星期一
					<!--<span class="mui-icon mui-icon-paperplane"><span class="title">天气</span></span>-->
				</div>
				<!--内容区-->
				<div class="mui-card-content">
					<div class="mui-row">
						<div class="mui-col-xs-12">
							<div class="mui-row">
									<ul class="mui-table-view ">
										<li class="mui-table-view-cell ">
											白天 : 1级风力  , 微风多云 , 平均气温15摄氏度
										</li>
										<li class="mui-table-view-cell ">
											傍晚 : 1级风力  , 微风多云 , 平均气温15摄氏度
										</li>
										<li class="mui-table-view-cell ">
											晚上 : 1级风力 , 微风多云 , 平均气温5摄氏度
										</li>
									</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="child_card">
					<!--页眉，放置标题-->
					<div class="mui-card-header ">
						<span class="mui-icon mui-icon-home "><span class="title">生活</span></span>
					</div>
					<!--内容区-->
					<div class="mui-card-content ">
						<div class="mui-row ">
							<div class="mui-col-xs-12 ">
								<ul class="mui-table-view ">
									<li class="mui-table-view-cell ">穿衣[较冷]：建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。</li>
									<li class="mui-table-view-cell ">健康[预防]：天气较凉，较易发生感冒，请适当增加衣服。体质较弱的朋友尤其应该注意防护。</li>
									<li class="mui-table-view-cell ">空调[较少开启]：您将感到很舒适，一般不需要开启空调。</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
  data () {
    return {
    	weatherImage:require('./images/rain.png')
    }
  },
  created () {
	let self = this;
	var request = new XMLHttpRequest();
	request.open('GET', `http://localhost:8090?cityname=北京`, true);
	request.onload = function() { 
	  if (request.status >= 200 && request.status < 400) {
	    var resp = request.responseText;
	    var json = JSON.parse(resp).result.data;
	    console.log(json);
	  } else {
	    console.log("We reached our target server, but it returned an error");
	  }
	};
	request.onerror = function() {
	    console.log("error");
	};
	request.send();
  }
};
</script>

<style  scoped>
.title{font-size:18px;margin-left:5px;}
.child_card{margin-top:15px;}
.mui-table-view {background: transparent;}

@-webkit-keyframes animate-cloud{from{background-position:600px 100%}
to{background-position:0 100%}
}
@-moz-keyframes animate-cloud{from{background-position:600px 100%}
to{background-position:0 100%}
}
@-ms-keyframes animate-cloud{from{background-position:600px 100%}
to{background-position:0 100%}
}
@-o-keyframes animate-cloud{from{background-position:600px 100%}
to{background-position:0 100%}
}
@keyframes animate-cloud{from{background-position:600px 100%}
to{background-position:0 100%}
}

.mui-table-view  {
    background: url('./images/cloud.png') 0 bottom repeat-x #049ec4;
    -webkit-animation: animate-cloud 20s linear infinite;
    -moz-animation: animate-cloud 20s linear infinite;
    -ms-animation: animate-cloud 20s linear infinite;
    -o-animation: animate-cloud 20s linear infinite;
    animation: animate-cloud 20s linear infinite;
    width: 100%;
    height: 100%;
    height: auto;
} 
</style>