"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/classify/classify.js";
  "./pages/test/test.js";
  "./pages/index/index.js";
  "./pages/my/myInfo.js";
  "./pages/detail/detail.js";
  "./pages/my/my.js";
  "./pages/demo1/demo1.js";
  "./pages/my/myIssue.js";
  "./pages/login.js";
  "./pages/detail/detail0/detail0.js";
  "./pages/detail/detail1/detail1.js";
  "./pages/detail/detail2/detail2.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    const local_datas = common_vendor.index.getStorageSync("datas");
    const datas = {
      "type1": [
        {
          title: "身份证",
          time: "2024.5.1",
          address: "行云食堂",
          pic: "/static/pictures/pic3.png"
        },
        {
          title: "钥匙串",
          time: "2024.5.2",
          address: "中门食堂",
          pic: "/static/pictures/pic4.jpg"
        },
        {
          title: "笔记本电脑",
          time: "2024.5.3",
          address: "图书馆四楼",
          pic: "/static/pictures/pic5.jpg"
        },
        {
          title: "鼠标",
          time: "2024.5.4",
          address: "信息楼114",
          pic: "/static/pictures/pic6.jpg"
        }
      ],
      "type2": [
        {
          title: "身份证",
          time: "2024.5.1",
          address: "行云食堂",
          pic: "/static/pictures/pic3.png"
        },
        {
          title: "钥匙串",
          time: "2024.5.2",
          address: "中门食堂",
          pic: "/static/pictures/pic4.jpg"
        },
        {
          title: "笔记本电脑",
          time: "2024.5.3",
          address: "图书馆四楼",
          pic: "/static/pictures/pic5.jpg"
        },
        {
          title: "鼠标",
          time: "2024.5.4",
          address: "信息楼114",
          pic: "/static/pictures/pic6.jpg"
        }
      ]
    };
    if (local_datas == "" || local_datas == null || local_datas == void 0) {
      const data_info = JSON.stringify(datas);
      common_vendor.index.setStorageSync("datas", data_info);
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
