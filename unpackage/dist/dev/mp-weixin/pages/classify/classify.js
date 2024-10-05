"use strict";
const common_vendor = require("../../common/vendor.js");
const Lines = () => "../../components/common/Lines.js";
const _sfc_main = {
  data() {
    return {
      clentHeight: 0,
      activeIndex: 1,
      leftItems: ["证件、卡片", "生活用品", "数码产品", "美妆护肤", "衣服物品", "饰品", "文娱", "其它"],
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
          { name: "身份证", img: "../../static/class/card/id.png" },
          { name: "校园卡", img: "../../static/class/card/school.png" },
          { name: "学生证", img: "../../static/class/card/student.png" },
          { name: "水卡", img: "../../static/class/card/water.png" },
          { name: "公交卡", img: "../../static/class/card/bus.png" },
          { name: "银行卡", img: "../../static/class/card/bank.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
        ],
        [
          { name: "水杯", img: "../../static/class/lifeItem/water.png" },
          { name: "雨伞", img: "../../static/class/lifeItem/umbrella.png" },
          { name: "小风扇", img: "../../static/class/lifeItem/fan.png" },
          { name: "钥匙", img: "../../static/class/lifeItem/key.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
        ],
        [
          { name: "支架", img: "../../static/class/digital/bracket.png" },
          { name: "数据线", img: "../../static/class/digital/cable.png" },
          { name: "相机", img: "../../static/class/digital/camera.png" },
          { name: "耳机", img: "../../static/class/digital/earphone.png" },
          { name: "闪存盘", img: "../../static/class/digital/flash.png" },
          { name: "鼠标", img: "../../static/class/digital/mouse.png" },
          { name: "MP3", img: "../../static/class/digital/mp3.png" },
          { name: "平板电脑", img: "../../static/class/digital/pad.png" },
          { name: "笔", img: "../../static/class/digital/pen.png" },
          { name: "手机", img: "../../static/class/digital/phone.png" },
          { name: "充电宝", img: "../../static/class/digital/power.png" },
          { name: "收音机", img: "../../static/class/digital/radio.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
        ],
        [
          { name: "口红", img: "../../static/class/makeup/lipstick.png" },
          { name: "腮红", img: "../../static/class/makeup/blush.png" },
          { name: "喷雾", img: "../../static/class/makeup/spray.png" },
          { name: "粉底", img: "../../static/class/makeup/foundation.png" },
          { name: "眼影", img: "../../static/class/makeup/eyeshadow.png" },
          { name: "香水", img: "../../static/class/makeup/perfume.png" },
          { name: "眉笔", img: "../../static/class/makeup/eyebrow.png" },
          { name: "防晒", img: "../../static/class/makeup/sunscreen.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
        ],
        [
          { name: "包", img: "../../static/class/clothes/bag.png" },
          { name: "男装", img: "../../static/class/clothes/menclothing.png" },
          { name: "男鞋", img: "../../static/class/clothes/menshoes.png" },
          { name: "女装", img: "../../static/class/clothes/womenclothing.png" },
          { name: "女鞋", img: "../../static/class/clothes/womenshoes.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
        ],
        [
          { name: "手表", img: "../../static/class/jewelry/watch.png" },
          { name: "戒指", img: "../../static/class/jewelry/ring.png" },
          { name: "帽子", img: "../../static/class/jewelry/hat.png" },
          { name: "项链", img: "../../static/class/jewelry/necklace.png" },
          { name: "耳饰", img: "../../static/class/jewelry/earrings.png" },
          { name: "发饰", img: "../../static/class/jewelry/hair.png" },
          { name: "手链", img: "../../static/class/jewelry/bracelet.png" },
          { name: "眼镜", img: "../../static/class/jewelry/glasses.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
        ],
        [
          { name: "教材", img: "../../static/class/civic/textbook.png" },
          { name: "球/球拍", img: "../../static/class/civic/racket.png" },
          { name: "自行车", img: "../../static/class/civic/bicyle.png" },
          { name: "笔记", img: "../../static/class/civic/notebook.png" },
          { name: "护具", img: "../../static/class/civic/protective.png" },
          { name: "棋牌", img: "../../static/class/civic/chess.png" },
          { name: "文具", img: "../../static/class/civic/stationery.png" },
          { name: "跳绳", img: "../../static/class/civic/ropes.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
        ],
        [
          { name: "药品", img: "../../static/class/others/medicine.png" },
          { name: "零食", img: "../../static/class/others/snacks.png" },
          { name: "周边", img: "../../static/class/others/accessories.png" },
          { name: "其它", img: "../../static/class/public/other.png" }
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
