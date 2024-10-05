"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      inputMessage: "",
      searchQuery: "",
      messages: [
        { from: "me", text: "浙江夹袄环保科技股份有限公司的主要业务是什么？" },
        { from: "assistant", text: "浙江嘉澳环保科技股份有限公司的主要业务是环保增塑剂及稳定剂、生物质能源的研发、生产和销售。", image: "your-image-url.jpg" }
      ],
      messagesHeight: 400,
      historicalSessions: ["会话1", "会话2", "会话3"]
      // Example historical sessions
    };
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim()) {
        this.messages.push({ from: "me", text: this.inputMessage });
        this.inputMessage = "";
        this.simulateAssistantResponse();
      }
    },
    simulateAssistantResponse() {
      setTimeout(() => {
        const response = { from: "assistant", text: "这是助手的自动回复。" };
        this.messages.push(response);
      }, 1e3);
    },
    sendOption(option) {
      this.messages.push({ from: "me", text: option });
      this.simulateAssistantResponse();
    },
    loadSession(session) {
      console.log("Loading session:", session);
    },
    clearAll() {
      this.messages = [];
      console.log("All messages cleared");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.searchQuery,
    b: common_vendor.o(($event) => $data.searchQuery = $event.detail.value),
    c: common_vendor.f($data.historicalSessions, (session, index, i0) => {
      return {
        a: common_vendor.t(session),
        b: index,
        c: common_vendor.o(($event) => $options.loadSession(session), index)
      };
    }),
    d: common_vendor.o((...args) => $options.clearAll && $options.clearAll(...args)),
    e: common_vendor.f($data.messages, (message, index, i0) => {
      return common_vendor.e({
        a: message.from === "me" ? "my-avatar-url.jpg" : "assistant-avatar-url.jpg",
        b: common_vendor.t(message.from === "me" ? "花开富贵" : "金融年报智能助手"),
        c: common_vendor.t(message.text),
        d: message.image
      }, message.image ? {
        e: message.image
      } : {}, {
        f: message.from === "me" ? "row-reverse" : "row",
        g: index,
        h: common_vendor.n({
          "my-message": message.from === "me",
          "assistant-message": message.from !== "me"
        })
      });
    }),
    f: `${$data.messagesHeight}px`,
    g: common_vendor.o(($event) => $options.sendOption("方大特钢科技股份有限公司三年来财政状况如何？")),
    h: common_vendor.o(($event) => $options.sendOption("方大特钢科技股份有限公司的主要业务是什么？")),
    i: common_vendor.o(($event) => $options.sendOption("方大特钢科技股份有限公司和其他公司对比有什么优势？")),
    j: $data.inputMessage,
    k: common_vendor.o(($event) => $data.inputMessage = $event.detail.value),
    l: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
