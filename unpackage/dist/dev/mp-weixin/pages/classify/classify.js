"use strict";
const common_vendor = require("../../common/vendor.js");
const Lines = () => "../../components/common/Lines.js";
const _sfc_main = {
  data() {
    return {
      clentHeight: 0,
      activeIndex: 1,
      leftItems: ["动画", "漫画", "游戏", "小说", "同人作品", "音乐", "文化活动", "周边商品"],
      rightContents: [
        // 添加右侧内容数组
        [{ name: "毛巾", img: "../../static/img/list1.jpg" }, { name: "毛巾", img: "../../static/img/list1.jpg" }]
        // 分类1的内容
        // 添加其他分类的内容
      ]
    };
  },
  //获取可视高度
  onReady() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.clentHeight = res.windowHeight - this.getClientHeight();
      }
    });
  },
  components: {
    Lines
  },
  methods: {
    handleNavigatorTap(idx) {
      const pageUrl = this.getPageUrl(idx);
      common_vendor.index.navigateTo({
        url: pageUrl,
        success: function(res) {
          console.log("页面跳转成功！");
        },
        fail: function(err) {
          console.log("页面跳转失败：", err);
        }
      });
    },
    // 获取每个分类项对应的页面路径
    getPageUrl(idx) {
      const pagePaths = [
        "/pages/index/index",
        // 第一个分类项对应的页面路径
        "/pages/page2.vue"
        // 第二个分类项对应的页面路径
        // 其他分类项的页面路径
      ];
      return pagePaths[idx];
    },
    // 其他方法...
    //获取可视区域高度【兼容】
    getClientHeight() {
      const res = common_vendor.index.getSystemInfoSync();
      res.platform;
      return 0;
    },
    changeLeftTab(index) {
      this.activeIndex = index;
      this.rightContents = [
        [
          { name: "动作", img: "../../static/logos/1.png" },
          { name: "冒险", img: "../../static/logos/2.png" },
          { name: "喜剧", img: "../../static/logos/3.png" },
          { name: "爱情", img: "../../static/logos/4.png" },
          { name: "科幻", img: "../../static/logos/5.png" },
          { name: "奇幻", img: "../../static/logos/6.png" }
        ],
        [
          { name: "少年漫画", img: "../../static/logos/7.png" },
          { name: "少女漫画", img: "../../static/logos/8.png" },
          { name: "青年漫画", img: "../../static/logos/9.png" },
          { name: "儿童漫画", img: "../../static/logos/10.png" }
        ],
        [
          { name: "角色扮演", img: "../../static/class/digital/bracket.png" },
          { name: "战略游戏", img: "../../static/class/digital/cable.png" },
          { name: "设计游戏", img: "../../static/class/digital/camera.png" },
          { name: "模拟游戏", img: "../../static/class/digital/earphone.png" },
          { name: "休闲游戏", img: "../../static/class/digital/flash.png" }
        ],
        [
          { name: "爱情", img: "../../static/logos/11.png" },
          { name: "科幻", img: "../../static/logos/12.png" },
          { name: "奇幻", img: "../../static/logos/13.png" },
          { name: "悬疑", img: "../../static/logos/14.png" },
          { name: "历史", img: "../../static/logos/15.png" },
          { name: "社会", img: "../../static/logos/16.png" }
        ],
        [
          { name: "同人小说", img: "../../static/logos/17.png" },
          { name: "同人漫画", img: "../../static/logos/18.png" },
          { name: "同人游戏", img: "../../static/logos/19.png" }
        ],
        [
          { name: "动漫歌曲", img: "../../static/logos/20.png" },
          { name: "偶像团体音乐", img: "../../static/logos/21.png" },
          { name: "游戏音乐", img: "../../static/logos/22.png" },
          { name: "Vocaloid", img: "../../static/logos/23.png" },
          { name: "音乐会", img: "../../static/logos/24.png" },
          { name: "演唱会", img: "../../static/logos/25.png" }
        ],
        [
          { name: "动漫展", img: "../../static/logos/26.png" },
          { name: "游戏展", img: "../../static/logos/27.png" },
          { name: "Cosplay活动", img: "../../static/logos/28.png" },
          { name: "角色扮演比赛", img: "../../static/logos/29.png" }
        ],
        [
          { name: "手办", img: "../../static/logos/30.png" },
          { name: "海报", img: "../../static/logos/32.png" },
          { name: "服饰", img: "../../static/logos/33.png" },
          { name: "玩具", img: "../../static/logos/34.png" },
          { name: "游戏道具", img: "../../static/logos/35.png" }
        ]
        // 添加其他分类的内容
      ];
    }
  }
};
if (!Array) {
  const _component_Lines = common_vendor.resolveComponent("Lines");
  _component_Lines();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.leftItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.activeIndex === index ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.changeLeftTab(index), index)
      };
    }),
    b: common_vendor.s("height:" + $data.clentHeight + "px;"),
    c: common_vendor.t($data.leftItems[$data.activeIndex]),
    d: common_vendor.f($data.rightContents[$data.activeIndex], (item, idx, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: idx,
        d: $options.getPageUrl(idx)
      };
    }),
    e: $options.handleNavigatorTap,
    f: common_vendor.s("height:" + $data.clentHeight + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
