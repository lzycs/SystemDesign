"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      myData: 0,
      myFun: [{
        name: "我的信息",
        router: "/pages/my/myInfo"
      }, {
        name: "我的发布",
        router: "/pages/my/myIssue"
      }]
    };
  },
  onLoad() {
    this.myData = localStorage.getItem("token");
  },
  methods: {
    login() {
      common_vendor.index.reLaunch({
        url: "/pages/login"
      });
    },
    // 退出登陆
    logout() {
      localStorage.removeItem("token");
      this.myData = 0;
      common_vendor.index.showToast({
        title: "退出登陆成功",
        icon: "success"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _easycom_uv_list_item2 = common_vendor.resolveComponent("uv-list-item");
  const _easycom_uv_list2 = common_vendor.resolveComponent("uv-list");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_avatar2 + _easycom_uv_list_item2 + _easycom_uv_list2 + _easycom_uv_button2)();
}
const _easycom_uv_avatar = () => "../../uni_modules/uv-avatar/components/uv-avatar/uv-avatar.js";
const _easycom_uv_list_item = () => "../../uni_modules/uv-list/components/uv-list-item/uv-list-item.js";
const _easycom_uv_list = () => "../../uni_modules/uv-list/components/uv-list/uv-list.js";
const _easycom_uv_button = () => "../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_list_item + _easycom_uv_list + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      size: "90",
      src: $data.myData ? "../../static/pictures/profile.jpg" : ""
    }),
    b: $data.myData
  }, $data.myData ? {} : {}, {
    c: common_vendor.f($data.myFun, (item, index, i0) => {
      return {
        a: index,
        b: "0572885e-2-" + i0 + ",0572885e-1",
        c: common_vendor.p({
          title: item.name,
          to: item.router,
          ["show-arrow"]: true
        })
      };
    }),
    d: !$data.myData
  }, !$data.myData ? {
    e: common_vendor.o($options.login),
    f: common_vendor.p({
      type: "primary",
      text: "登陆"
    })
  } : {
    g: common_vendor.o($options.logout),
    h: common_vendor.p({
      type: "primary",
      text: "退出登陆"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
