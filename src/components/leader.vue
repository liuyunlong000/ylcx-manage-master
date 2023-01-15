<!--
 * @Author: vanC 418637966@qq.com
 * @Date: 2022-11-12 16:50:48
 * @LastEditors: vanC 418637966@qq.com?
 * @LastEditTime: 2022-11-13 20:28:31
 * @FilePath: \mars3d-vue2d:\IDATA\projects\idata-home\src\components\leader-card.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="talent" v-for="(item, index) in roleData" :key="index">
    <div class="line"><h2>{{item.post}}</h2></div>
    <ul>
      <li v-for="(_item, index) in item.list" :key="index" @click="detail(_item,active,link,path)">
        <div class="left">
          <img :src="_item.photo" alt="" />
        </div>
        <div class="right">
          <h2>
            <strong>{{ _item.name }}</strong
            ><em></em>
          </h2>
          <p class="p-over">
            {{ _item.resume }}
          </p>
          <img src="/images/more.png" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  props: {
    roleData: {
      type: Array,
      default: () => [],
    },
    path: {
      type: String,
      default: () => "",
    },
    active: {
      type: String,
      default: () => "",
    },
    link: {
      type: String,
      default: () => "",
    }
  },
  data() {
    return {
    };
  },
  components: {},
  mounted() {
  },
  methods: {
    detail(item,active,link,path){
      Cookies.set("active", active);
      Cookies.set("link", link);
      let infoUrl = this.$router.resolve({name: path, query: {id: item.nid}})
      window.open(infoUrl.href,'_blank');
    }
  },
};
</script>
<style scoped lang='scss'>
.talent {
  width: 100%;
  .line {
    font-size: 18px;
    color: #222;
    line-height: 60px;
    padding-left: 20px;
    background: #f4f4f4;
    margin-bottom: 20px;
  }
}
ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  li {
    width: 31%;
    height: 210px;
    margin: 20px 1%;
    display: flex;
    background: #f4f4f4;
    position: relative;
    box-sizing: border-box;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      .left {
        img {
          transform: scale(1.2);
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      right: -10px;
      bottom: -10px;
      background: #e0f5fd;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
    .left {
      width: 140px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
      }
    }
    .right {
      flex: 1;
      padding: 10px;
      h2 {
        font-size: 18px;
        color: #222;
        strong {
          font-size: 22px;
          color: #99a8f6;
          background: -webkit-repeating-linear-gradient(
            45deg,
            #99a8f6,
            #64d3f5
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        em {
          color: #222;
          font-size: 16px;
          margin-left: 1vw;
        }
      }
      .p-over {
        font-size: 14px;
        color: #666;
        line-clamp: 4;
        -webkit-line-clamp: 4;
        max-height: 90px;
        transition: all 0.3s;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
      }
      img {
        margin-right: 0;
        margin-left: auto;
        display: inherit;
        border: none;
        vertical-align: middle;
        max-width: 100%;
      }
    }
  }
}
</style>