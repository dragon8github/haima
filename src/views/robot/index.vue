<template>
	<div>
		<div data-role="page">
			<div class="header linear-g">
		        <a data-iconpos="notext" class="glyphicon glyphicon-th-large col-xs-2 text-right"> </a>
		        <a class="text-center col-xs-8">{{ state }}</a>
		        <a  data-iconpos="notext" class="glyphicon glyphicon-user col-xs-2 text-left"> </a>
		    </div>
		    </div> 

			
			
		    <div data-role="content" class="container" role="main">
		        <ul class="content-reply-box mg10" id="chatbox">
		            <li :class="[item.name == '我' ? 'even' : 'odd']" v-for="(item,index) in items">
		                <a class="user" href="#"><img class="img-responsive avatar_" src="../../assets/images/avatar-1.png" alt=""><span class="user-name">{{ item.name}}</span></a>
		                <div class="reply-content-box">
		                	<span class="reply-time">{{ item.time }}</span>
		                    <div class="reply-content pr">
		                    	<span class="arrow">&nbsp;</span>
		                    	{{ item.text }}
		                    </div>
		                </div>
		            </li>
		        </ul>
				
			    <nav class="navbar navbar-default navbar-fixed-bottom">
					 <div class="input-group" style="padding:15px;">
						  <input @keyup.enter="send" v-model="text" type="text" class="form-control" placeholder="Say SomeThing...">
						  <span class="input-group-btn">
							<button class="btn btn-default" type="button" @click="send">Go!</button>
						  </span>
					</div>			
				</nav>

		    </div>
		</div>
	</div>
</template>

<script>
require("css/bootstrap.min.css");
require("css/style.css");
require("css/jquerymobile.css");

export default { 
  data () {
    return {
    	text:"",
    	items:[],
    	state : "机器人6634"
    };
  },
  methods : {
  	send () {  		
  		if(this.text == "") return false;
  		this.pushItems();
  		let text = this.text.substr(0);
  		this.text = "";
  		this.robot(text); 
  	},
  	robot (text) {
  		let self = this;  	 
  		self.state = "对方正在输入..."
  	 	$.ajax({
			url:`http://localhost:8090/?info=${text}`, 
			success (data) {
				let robot_reply = JSON.parse(data).result.text;
		  		setTimeout(() => {
					self.items.push({text:robot_reply,time:self.getTime(),name:"6634"});
					self.state = "机器人6634";					
					self.scrollToBottom();
		  		},1500)
			}
		})
  	},
  	getTime () {
		let date = new Date();
		let hour = date.getHours();
	    let minute = date.getMinutes();
	    let second = date.getSeconds();
	    return `${hour}:${minute}:${second}`;
  	},
  	pushItems () {
  		this.items.push({text:this.text,time:this.getTime(),name:"我"});
  		this.scrollToBottom();
  	},
  	scrollToBottom () {
  		setTimeout( () => {
  			document.body.scrollTop = document.body.scrollHeight; 
  		},0) 
  	}
  },
  created () {
  		this.items.push({text:"你好，我是机器人6634，很高兴为你服务",time:this.getTime(),name:"6634"});
  }
};
</script>



<style lang="css" scoped>
.glyphicon:empty{width:16.666666666666664%}
.btn{font-size:19px;border-radius: 5px;background: #fefefe;border:1px solid #ccc;}
.linear-g {    position: fixed;    z-index: 19930710;}
.mg10 {    margin: 80px 0;}
</style>