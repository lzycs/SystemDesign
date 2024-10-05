"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      multiArray: [
        ["卡片、证件类", "生活用品", "数码产品", "美妆护肤类", "衣服物品类", "饰品", "文娱", "其它"],
        ["身份证", "校园卡", "学生证", "水卡", "公交卡", "银行卡", "其它"]
      ],
      multiIndex: [0, 0],
      select: false,
      name: "",
      date: "",
      region: "",
      phone: "",
      desc: "",
      imgList: [],
      flag: 1
    };
  },
  onLoad() {
  },
  methods: {
    changeFlg(val) {
      this.flag = val;
    },
    async uploadImg() {
      const save_promises = [];
      common_vendor.index.chooseImage({
        count: 6 - this.imgList.length,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: async (chooseImageRes) => {
          const img_arr = chooseImageRes.tempFilePaths;
          img_arr.forEach((e) => {
            save_promises.push(new Promise((resolve, reject) => {
              common_vendor.index.saveFile({
                tempFilePath: e,
                success: (res) => {
                  resolve(res.savedFilePath);
                },
                fail: (err) => {
                  reject(err);
                }
              });
            }));
          });
          Promise.all(save_promises).then((savedFilePaths) => {
            console.log(savedFilePaths);
            this.imgList.push(...savedFilePaths);
          }).catch((error) => {
            console.error("保存文件时出错：", error);
          });
        },
        fail: (error) => {
          console.error("选择图片失败", error);
        }
      });
    },
    /**
     * 发布
     */
    pushNew() {
      console.log(this.$data);
      const flag = this.flag;
      const title = this.name;
      const time = this.date;
      const address = this.region;
      const phone = this.phone;
      const desc = this.desc;
      const type = this.multiArray[0][this.multiIndex[0]];
      const desc_type = this.multiArray[1][this.multiIndex[1]];
      const pics = this.imgList;
      const pic = this.imgList[0];
      if (title == "" || time == "" || address == "") {
        common_vendor.index.showToast({
          title: "请填写必选项",
          icon: "error"
        });
      }
      const data = {
        title,
        time,
        address,
        pic,
        phone,
        desc,
        type,
        desc_type,
        pics
      };
      const local_data = common_vendor.index.getStorageSync("datas");
      if (local_data != null && local_data != "") {
        const use_data = JSON.parse(local_data);
        if (flag == 2) {
          use_data["type1"].push(data);
        } else {
          use_data["type2"].push(data);
        }
        common_vendor.index.setStorageSync("datas", JSON.stringify(use_data));
      } else {
        const datas = {
          "type1": [flag == 1 ? data : ""],
          "type2": [flag == 2 ? data : ""]
        };
        common_vendor.index.setStorageSync("datas", JSON.stringify(datas));
      }
      this.multiIndex = [0, 0], this.select = false, this.name = "", this.date = "", this.region = "", this.phone = "", this.desc = "", this.imgList = [], this.flag = 1;
      common_vendor.index.switchTab({
        url: "/pages/index/index",
        success() {
          getCurrentPages().pop().onLoad();
        }
      });
    },
    deleteDesc() {
      this.desc = "";
    },
    getName(e) {
      this.name = e.detail.value;
    },
    getDate(e) {
      this.date = e.detail.value;
    },
    getRegion(e) {
      this.region = e.detail.value;
    },
    getPhone(e) {
      this.phone = e.detail.value;
    },
    getDesc(e) {
      this.desc = e.detail.value;
    },
    closeSelect() {
      this.select = false;
    },
    bindMultiPickerChange(e) {
      this.select = true;
    },
    bindMultiPickerColumnChange(e) {
      this.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (this.multiIndex[0]) {
            case 0:
              this.multiArray[1] = ["身份证", "校园卡", "学生证", "水卡", "公交卡", "银行卡", "其它"];
              break;
            case 1:
              this.multiArray[1] = ["水杯", "雨伞", "小风扇", "钥匙/钥匙扣", "其它"];
              break;
            case 2:
              this.multiArray[1] = [
                "手机",
                "相机",
                "U盘/硬盘",
                "充电宝",
                "平板电脑",
                "鼠标",
                "充电线",
                "耳机",
                "手写笔",
                "支架",
                "音箱",
                "MP3",
                "其它"
              ];
              break;
            case 3:
              this.multiArray[1] = ["口红", "粉底", "眉笔", "腮红", "眼影", "防晒", "喷雾", "香水", "其它"];
              break;
            case 4:
              this.multiArray[1] = ["男装", "女装", "男鞋", "女鞋", "包包", "其它"];
              break;
            case 5:
              this.multiArray[1] = ["手表", "项链", "手链", "戒指", "耳饰", "眼镜", "帽子", "发饰", "其它"];
              break;
            case 6:
              this.multiArray[1] = ["教材", "笔记", "文具", "球/球拍", "护具", "跳绳", "自行车", "棋牌", "其它"];
              break;
            case 7:
              this.multiArray[1] = ["药品", "零食", "周边", "其它"];
              break;
          }
          this.multiIndex.splice(1, 1, 0);
          this.multiIndex.splice(2, 1, 0);
          break;
      }
      this.$forceUpdate();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.pushNew && $options.pushNew(...args)),
    b: $data.flag == 1 ? 1 : "",
    c: common_vendor.o(($event) => $options.changeFlg(1)),
    d: $data.flag == 2 ? 1 : "",
    e: common_vendor.o(($event) => $options.changeFlg(2)),
    f: $data.select
  }, $data.select ? {
    g: common_vendor.t($data.multiArray[0][$data.multiIndex[0]]),
    h: common_vendor.t($data.multiArray[1][$data.multiIndex[1]]),
    i: common_vendor.o((...args) => $options.closeSelect && $options.closeSelect(...args)),
    j: common_assets._imports_0$3
  } : {
    k: common_assets._imports_1$2
  }, {
    l: common_vendor.o((...args) => $options.bindMultiPickerChange && $options.bindMultiPickerChange(...args)),
    m: common_vendor.o((...args) => $options.bindMultiPickerColumnChange && $options.bindMultiPickerColumnChange(...args)),
    n: $data.multiIndex,
    o: $data.multiArray,
    p: $data.name,
    q: common_vendor.o((...args) => $options.getName && $options.getName(...args)),
    r: $data.date,
    s: common_vendor.o((...args) => $options.getDate && $options.getDate(...args)),
    t: $data.region,
    v: common_vendor.o((...args) => $options.getRegion && $options.getRegion(...args)),
    w: $data.phone,
    x: common_vendor.o((...args) => $options.getPhone && $options.getPhone(...args)),
    y: $data.desc,
    z: common_vendor.o((...args) => $options.getDesc && $options.getDesc(...args)),
    A: $data.desc.length > 0
  }, $data.desc.length > 0 ? {
    B: common_assets._imports_0$3,
    C: common_vendor.o((...args) => $options.deleteDesc && $options.deleteDesc(...args))
  } : {}, {
    D: common_vendor.t(this.imgList.length),
    E: common_vendor.f($data.imgList, (fileID, index, i0) => {
      return {
        a: fileID,
        b: index
      };
    }),
    F: $data.imgList.length < 6
  }, $data.imgList.length < 6 ? {
    G: common_assets._imports_2,
    H: common_vendor.o((...args) => $options.uploadImg && $options.uploadImg(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
