"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      myData: 0
    };
  },
  onLoad() {
    this.myData = localStorage.getItem("token");
    if (!this.myData) {
      common_vendor.index.showModal({
        content: "请登陆",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.reLaunch({
              url: "/pages/login"
            });
          }
        }
      });
    }
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.myData
  }, $data.myData ? {
    b: common_assets._imports_0$1,
    c: common_assets._imports_0,
    d: common_assets._imports_0$2,
    e: common_assets._imports_3
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
