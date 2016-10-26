<template>

<div>
    <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title">Vue - 实验楼</h1>
    </header>



    <nav class="mui-bar mui-bar-tab ">
      <a class="mui-tab-item" href="#Popover_0">手册 </a>
      <a class="mui-tab-item" href="#Popover_1">攻略 </a>
      <a class="mui-tab-item" href="#Popover_2">关于 </a>
    </nav>



    <div class="mui-content">
       <div class="mui-content-padded">
          <div id="Gallery" class="mui-slider" style="margin-top:15px;">
            <div class="mui-slider-group">
              <div class="mui-slider-item">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="astro">
                      <span><img src="../assets/images/a58.png" alt=""></span>
                      <div class="mui-media-body">星座运势</div>
                    </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="history">
                     <span><img src="../assets/images/a63.png" alt=""></span>
                      <div class="mui-media-body">历史上的今天</div>
                    </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="weather">
                      <span><img src="../assets/images/a73.png" alt=""></span>
                      <div class="mui-media-body">天气预报</div>
                    </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="joke">
                      <span><img src="../assets/images/a95.png" alt=""></span>
                      <div class="mui-media-body">笑话大全</div>
                     </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="robot">
                      <span><img src="../assets/images/a112.png" alt=""></span>
                      <div class="mui-media-body">图灵机器人</div>
                     </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="weixin">
                      <span><img src="../assets/images/a147.png" alt=""></span>
                      <div class="mui-media-body">微信精选</div>
                     </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="dictionary">
                       <span><img src="../assets/images/a156.png" alt=""></span>
                      <div class="mui-media-body">新华字典</div>
                     </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="qq">
                       <span><img src="../assets/images/a166.png" alt=""></span>
                      <div class="mui-media-body">QQ占卜</div>
                     </router-link>
                  </li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="driving">
                      <span><img src="../assets/images/a183.png" alt=""></span>
                      <div class="mui-media-body">驾证题库</div>
                     </router-link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
       </div>
    </div>   




    <div id="Popover_0" class="mui-popover mui-bar-popover">
      <div class="mui-popover-arrow"></div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell"><a href="http://vuejs.org/" target="_blank">Vue2.0 </a>
        </li>
        <li class="mui-table-view-cell"><a href="http://vuex.vuejs.org" target="_blank">Vuex2.0 </a>
        </li>
        <li class="mui-table-view-cell"><a href="http://router.vuejs.org " target="_blank">Vue-router2.0 </a>
        </li>
      </ul>
    </div>
    <div id="Popover_1" class="mui-popover mui-bar-popover">
      <div class="mui-popover-arrow"></div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell"><a href="#">仿IOS转场过度 </a>
        </li>
        <li class="mui-table-view-cell"><a href="#">Vuex的套路 </a>
        </li>
        <li class="mui-table-view-cell"><a href="#">Vue-router的配置指南 </a>
        </li>
        <li class="mui-table-view-cell"><a href="#">Webpack常用格式 </a>
        </li>
      </ul>
    </div>
    <div id="Popover_2" class="mui-popover mui-bar-popover">
      <div class="mui-popover-arrow"></div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell"><a href="#">UI框架 </a>
        <li class="mui-table-view-cell"><a href="#">layer弹窗 </a>
        </li>
      </ul>
    </div>
    
</div>
</template>


<script>
  export default {
    created () {
        mui.ready(function() {
          var slider = document.getElementById('Gallery');
          var group = slider.querySelector('.mui-slider-group');
          var items = mui('.mui-slider-item', group);
          //克隆第一个节点
          var first = items[0].cloneNode(true);
          first.classList.add('mui-slider-item-duplicate');
          //克隆最后一个节点
          var last = items[items.length - 1].cloneNode(true);
          last.classList.add('mui-slider-item-duplicate');
          var sliderApi = mui(slider).slider();
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-grid-view.mui-grid-9{background: transparent;}
.mui-popover.mui-bar-popover .mui-table-view{width: auto}
</style>
