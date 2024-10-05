"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      myData: 0
    };
  },
  onReady() {
    var qr = new common_vendor.UQRCode();
    qr.data = "姓名:小美  学号:17723117616  手机号:17723117616";
    qr.size = 100;
    qr.make();
    var canvasContext = common_vendor.index.createCanvasContext("qrcode", this);
    qr.canvasContext = canvasContext;
    qr.drawCanvas();
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
  methods: {
    scanQRCode() {
      common_vendor.index.scanCode({
        success: (res) => {
          console.log(res.result);
        },
        fail: (res) => {
          console.log(res);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_list_item2 = common_vendor.resolveComponent("uv-list-item");
  const _easycom_uv_list2 = common_vendor.resolveComponent("uv-list");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_list_item2 + _easycom_uv_list2 + _easycom_uv_button2)();
}
const _easycom_uv_list_item = () => "../../uni_modules/uv-list/components/uv-list-item/uv-list-item.js";
const _easycom_uv_list = () => "../../uni_modules/uv-list/components/uv-list/uv-list.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_list_item + _easycom_uv_list + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.myData
  }, $data.myData ? {
    b: common_vendor.p({
      title: "姓名:",
      ["right-text"]: "小美"
    }),
    c: common_vendor.p({
      title: "学号:",
      ["right-text"]: "17723117616"
    }),
    d: common_vendor.p({
      title: "手机号:",
      ["right-text"]: "17723117616"
    })
  } : {}, {
    e: $data.myData
  }, $data.myData ? {
    f: common_vendor.p({
      type: "primary",
      text: "保存"
    }),
    g: common_vendor.p({
      type: "primary",
      text: "打印"
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
