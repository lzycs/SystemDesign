"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      accountForm: {
        accountName: "",
        password: ""
      }
    };
  },
  onLoad() {
  },
  methods: {
    accountLogin() {
      if (this.accountForm.accountName && this.accountForm.password) {
        localStorage.setItem("token", 1);
        common_vendor.index.showToast({
          title: "登陆成功！",
          icon: "success"
        });
        common_vendor.index.switchTab({
          url: "/pages/my/my"
        });
      } else {
        common_vendor.index.showToast({
          title: "请输入账号或密码！",
          icon: "error"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uv_button2)();
}
const _easycom_uni_easyinput = () => "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uv_button = () => "../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.accountForm.accountName = $event),
    b: common_vendor.p({
      placeholder: "请输入账号",
      modelValue: $data.accountForm.accountName
    }),
    c: common_vendor.p({
      name: "accountName",
      label: "账号:"
    }),
    d: common_vendor.o(($event) => $data.accountForm.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      modelValue: $data.accountForm.password
    }),
    f: common_vendor.p({
      name: "password",
      label: "密码:"
    }),
    g: common_vendor.p({
      model: $data.accountForm
    }),
    h: common_vendor.o($options.accountLogin),
    i: common_vendor.p({
      type: "primary",
      text: "登陆"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e8ce220f"]]);
wx.createPage(MiniProgramPage);
