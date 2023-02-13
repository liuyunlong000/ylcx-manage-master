<template>
  <div class="home">
    <div class="header">
      <div class="logo" @click="gotoIndex">
        <img src="/images/logo.png" alt="" />
      </div>
      <ul class="nav">
        <li
            :id="item.value"
            v-for="item in navList"
            :key="item.value"
            :class="item.value == activeIndex ? 'active' : ''"
            @click="changeIndex(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="center">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
    import Cookies from "js-cookie";
    export default {
        name: "Index",
        components:{
        },
        data() {
            return {
                zoomScale: "",
                navList: [
                    {
                        value: "index",
                        label: "首页",
                    },
                    {
                        value: "survey",
                        label: "研究院概况",
                    },
                    {
                        value: "news",
                        label: "新闻中心",
                    },
                    {
                        value: "scientific",
                        label: "科学研究",
                    },
                    {
                        value: "innovate",
                        label: "技术创新",
                    },
                    {
                        value: "innovatePlatform",
                        label: "创新平台",
                    },
                    {
                        value: "product",
                        label: "产品介绍",
                    },
                    {
                        value: "talent",
                        label: "人才队伍",
                    },
                ],
                activeIndex: Cookies.get("active")?Cookies.get("active"):"index",
            };
        },
        methods: {
            changeIndex(val) {
                if(val!=this.activeIndex){
                    let seconds = 60;
                    let expires = new Date(new Date() * 1 + seconds * 1000);
                    this.activeIndex = val;
                    this.$router.push("/" + val);
                    /*Cookies.set("active", val, { expires});*/
                }
            },
            gotoIndex(){
                this.$router.push("/index")
                this.activeIndex = "index"
            }
        },
        mounted() {
            const route=this.$route;
            if(route.path=='/home/swapper' || route.path=='/home/scientificDynamic' || route.path=='/home/friendlyLinks'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('index').className='active';
                this.activeIndex='index';
            }
            if(route.path=='/survey/company'|| route.path=='/survey/org' || route.path=='/survey/leader'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('survey').className='active';
                this.activeIndex='survey';
            }
            if(route.path=='/news/newscore'|| route.path=='/news/notice'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('news').className='active';
                this.activeIndex='news';
            }
            if(route.path=='/scientific'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('scientific').className='active';
                this.activeIndex='scientific';
            }
            if(route.path=='/innovate'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('innovate').className='active';
                this.activeIndex='innovate';
            }
            if(route.path=='/innovatePlatform'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('innovatePlatform').className='active';
                this.activeIndex='innovatePlatform';
            }
            if(route.path=='/product'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('product').className='active';
                this.activeIndex='product';
            }
            if(route.path=='/talent/talent'|| route.path=='/talent/recruit' || route.path=='/talent/dynamic'){
                if(this.activeIndex){
                    document.getElementById(this.activeIndex).className='';
                }
                document.getElementById('talent').className='active';
                this.activeIndex='talent';
            }

        },
        beforeUnmount() {},
    };
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .header {
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 4vw;
    // box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    display: flex;
    .logo {
      cursor: pointer;
      width: 400px;
      height: 100%;
      //   background: url("@/assets/logo.jpg") no-repeat;
      //   background-size: 100% 100%;
      display: flex;
      flex:3.2;
      align-items: center;
      justify-content: center;
      img {
        height: 2.5vw;
      }
    }
    .nav {
      height: 100%;
      flex: 6.8;
      display: flex;
      justify-content: space-around;
      height: 100%;
      align-items: center;
      padding: 0;
      margin: 0;
      background: url("/images/navBg.jpg") no-repeat;
      background-size: 100% 100%;
      list-style: none;
      li {
        padding: 0.2vw 1.2vw;
        border-radius: 6px;
        transition: all 0.3s;
        color: #fff;
        line-height: 2.2vw;
        font-size: 1.4vw;
        list-style-type: none;
        cursor: pointer;
        &:hover {
          color: #4b68d3 !important;
          background-color: #57d7e4;
        }
      }
    }
  }
  .active {
    color: #4b68d3 !important;
    background-color: #57d7e4;
  }
  .center {
    width: 100%;
    height: auto;
    margin-top: 4vw;
  }
}
</style>