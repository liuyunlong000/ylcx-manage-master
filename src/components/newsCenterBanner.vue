<template>
  <div id="swiper1">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in news" :key="index">
          <div class="time">{{item.releaseTime}}</div>
          <h3 class="title">{{item.title}}</h3>
          <div class="img">
            <img :src="item.photo" alt="">
          </div>
          <p class="content">{{item.resume}}</p>
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import {news_list} from "@/api/wz/wzHome";
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
} from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation]);

// swiper-bundle.min.css 决定了小圆点和左右翻页标签，如果不需要可以不引用
import "swiper/swiper-bundle.css";
// swiper.less/sass/css 决定了基础的样式
import "swiper/swiper.min.css";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      news: []
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList(){
      news_list(12).then((response) => {
        if (response.code === 200) {
          this.news=response.data;
          setTimeout(function (){
            new Swiper("#swiper1 .swiper-container", {
              loop:true,
              slidesPerView: 4,
              slidesPerGroup : 4,
              spaceBetween : 80,
              autoplay: false,
              initialSlide: 0,
              pagination: {
                el: ".swiper-pagination",
                clickable:true
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }
            });
          },500);
        }
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.swiper-container{
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  .swiper-button-prev:after,.swiper-button-next:after{
    display: none;
  }
  &:hover{
    .swiper-button-prev:after{
      display: block;
      content: url("/images/arr_right.png");
      transform: rotate(180deg);
    }
    .swiper-button-next:after{
      display: block;
      content: url("/images/arr_right.png");
    }
  }
  .swiper-wrapper{
    display: flex;
  }
  .swiper-slide{
    width: 364.75px;
    cursor: pointer;
    box-sizing: border-box;
    .time{
      color:#fff;
      font-size: 0.96vw;
      line-height:2.5vw;
      font-weight: 700;
      background: linear-gradient(10deg,#5b6edb,#4fc4e5);
      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      margin-bottom: 1.01vw;
      display: inline-block;
      letter-spacing: 2px;
      padding: 0 1.3vw;
    }
    .title{
      font-size: 1vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin:0.2vw 0;
    }
    .img{
      overflow: hidden;
      margin-top: 1.01vw;
      border-radius: 5px;
      width: 100%;
      height:12vw;
      min-height: 10vw;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .img:hover img{
      transition: all 1s;
      transform: scale(1.2,1.2);
      transform-origin: 50% 50%;
    }
    .content{
      font-size: 0.8vw;
      margin:10px 0;
      -webkit-line-clamp: 3;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #555656;
    }
  }
}
.swiper-pagination{
  width: 88.5vw;
  height: 5vw;
  margin: 1vw auto;
  // display:flex;
  ::v-deep .swiper-pagination-bullet{
    // display: block;
    width: 0.8vw;
    height: 0.8vw;
    margin:0 20px;
  }
}
</style>