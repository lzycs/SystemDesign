"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      indicatorDots: true,
      // 是否显示面板指示点
      autoplay: true,
      // 是否自动切换
      interval: 5e3,
      // 自动切换时间间隔
      duration: 500,
      // 滑动动画时长
      indicatorColor: "#000000"
      // 修改为字符串形式的颜色值
    };
  },
  methods: {
    handleNavigatorTap() {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail",
        // 跳转到名为 detail 的页面
        success: function(res) {
          console.log("页面跳转成功！");
        },
        fail: function(err) {
          console.log("页面跳转失败：", err);
        }
      });
    },
    handleNavigatorTap0() {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail0/detail0",
        // 跳转到名为 detail 的页面
        success: function(res) {
          console.log("页面跳转成功！");
        },
        fail: function(err) {
          console.log("页面跳转失败：", err);
        }
      });
    },
    // 其他方法
    handleNavigatorTap1() {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail1/detail1",
        // 跳转到名为 detail 的页面
        success: function(res) {
          console.log("页面跳转成功！");
        },
        fail: function(err) {
          console.log("页面跳转失败：", err);
        }
      });
    },
    handleNavigatorTap2() {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail2/detail2",
        // 跳转到名为 detail 的页面
        success: function(res) {
          console.log("页面跳转成功！");
        },
        fail: function(err) {
          console.log("页面跳转失败：", err);
        }
      });
    }
  },
  onLoad() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: $data.indicatorDots,
    d: $data.autoplay,
    e: $data.interval,
    f: $data.duration,
    g: common_assets._imports_0$1,
    h: common_assets._imports_0,
    i: common_assets._imports_0$2,
    j: common_assets._imports_3
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
