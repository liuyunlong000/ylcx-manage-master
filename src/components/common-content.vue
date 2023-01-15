<template>
  <div class="wrap">
    <div class="wrapConent">
      <div class="index_position">
        <div class="leftConent">
          <div class="name">{{ title }}</div>
          <ul class="subnav-list">
            <li
              v-for="(item, index) in subnavList"
              :key="item.link"
              :class="activeIndex == index ? 'selected' : ''"
              @click="subnavChange(item, index)"
            >
              <a href="javascript:void(0);">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content_position">
        <router-view :item="item"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import Cookies from "js-cookie";
    export default {
        name: "CommonContent",
        props: {
            subnavList: {
                type: Array,
                default: () => [],
            },
            crumbsList: {
                type: Array,
                default: () => [],
            }
        },
        data() {
            let _index=0;
            this.subnavList.forEach(
                function (item,index){
                    if(item.link==Cookies.get('link')){
                        _index=index;
                    }
                }
            );
            Cookies.set('active','')
            Cookies.set('link','')
            return {
                activeIndex: _index,
                title:this.subnavList.length==0? "":this.subnavList[_index].name,
                item:this.subnavList.length ==0? {}:this.subnavList[_index]
            };
        },
        components: {},
        mounted() {
        },
        methods: {
            subnavChange(val, index) {
                this.$router.push(val.link);
                this.item=val;
                this.activeIndex = index;
                this.title = val.name;
            }
        },
    };
</script>
<style scoped lang='scss'>
.wrap {
  max-width: 95vw;
  min-height: 650px;
  padding-bottom: 80px;
  margin: 0 auto;
  .wrapConent {
    width: 100%;
    margin: 0 auto;
    .index_position {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f4f4f4;
      border-bottom: none;
      .leftConent {
        display: flex;
        .name {
          margin-top: 10px;
          line-height: 4vw;
          font-size: 1.9vw;
          font-weight: 700;
          color: #fff;
          text-align: center;
          padding: 0 2vw;
          background: url("/images/ti-bg.png") center center no-repeat;
          background-size: 100% 100%;
          white-space: nowrap;
          position: relative;
        }
        .subnav-list {
          display: flex;
          align-items: center;
          max-width: 40vw;
          box-sizing: border-box;
          margin-left: 1.5vw;
          overflow: hidden;
          overflow-x: auto;
          margin: 0;
          padding: 0 0.5vw;
          li {
            list-style-type: none;
            color: #666666;
            font-size: 14px;
            margin-right: 0.1vw !important;
            white-space: nowrap;
            margin-left: 0 !important;
            a {
              font-size: 1vw !important;
              color: #333 !important;
              font-weight: 700;
              transition: all 0.3s;
              position: relative;
              padding: 0 5px;
              white-space: nowrap;
              text-decoration: none;
              &::before {
                position: absolute;
                content: "";
                bottom: -10px;
                left: 0;
                width: 100%;
                height: 3px;
                background: #4758dd;
                opacity: 0;
              }
              &:hover {
                color: #99a8f6;
                background: -webkit-repeating-linear-gradient(
                  45deg,
                  #99a8f6,
                  #64d3f5
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                &::before {
                  opacity: 1;
                }
              }
            }
          }
          .selected {
            a {
              color: #99a8f6;
              background: -webkit-repeating-linear-gradient(
                45deg,
                #99a8f6,
                #64d3f5
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              &::before {
                opacity: 1;
              }
            }
          }
        }
      }
      .rightContent {
        margin-top: 8px;
        padding-right: 0.5vw;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        li {
          display: inline;
          list-style-type: none;
          color: #b0b0b0;
          white-space: nowrap;
          font-size: 14px;
          margin-left: 5px;
          img {
            margin-right: 5px;
            margin-top: -3px;
            border: none;
            vertical-align: middle;
            max-width: 100%;
          }
          a {
            color: #b0b0b0;
            white-space: nowrap;
            text-decoration: none;
          }
        }
        .on {
          a {
            color: #222 !important;
            font-weight: 700;
          }
        }
      }
    }
    .content_position {
      width: 100%;
      padding-top: 20px;
    }
  }
}
/* 修改滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  -webkit-box-shadow: inset 0 0 5px #006099;
  background: hsla(233, 75%, 64%, 0.7);
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: transparent;
}

::-webkit-scrollbar-track-piece {
  background: transparent;
}
</style>