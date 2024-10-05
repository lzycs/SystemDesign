<template>
  <view class="chat-container">
    <view class="sidebar">
      <text class="sidebar-title">历史对话</text>
      <input v-model="searchQuery" placeholder="搜索历史..." class="search-bar"/>
      <view class="nav-buttons">
        <button v-for="(session, index) in historicalSessions" :key="index" @click="loadSession(session)">
          {{ session }}
        </button>
      </view>
      <button @click="clearAll" class="clear-button">清空所有</button>
    </view>
    <view class="chat-area">
      <scroll-view :scroll-y="true" class="messages" :style="{ height: `${messagesHeight}px` }">
        <view v-for="(message, index) in messages" :key="index" :class="['message', { 'my-message': message.from === 'me', 'assistant-message': message.from !== 'me' }]">
          <view class="message-wrapper" :style="{ flexDirection: message.from === 'me' ? 'row-reverse' : 'row' }">
            <image :src="message.from === 'me' ? 'my-avatar-url.jpg' : 'assistant-avatar-url.jpg'" class="avatar" />
            <view class="message-content">
              <view class="user-info">
                <text class="nickname">{{ message.from === 'me' ? '花开富贵' : '金融年报智能助手' }}</text>
              </view>
              <text>{{ message.text }}</text>
              <image v-if="message.image" :src="message.image" class="message-image" />
            </view>
          </view>
        </view>
      </scroll-view>
      <view class="options">
        <text>猜你想问：</text>
        <view class="option-buttons">
          <button @click="sendOption('方大特钢科技股份有限公司三年来财政状况如何？')">方大特钢科技股份有限公司三年来财政状况如何？</button>
          <button @click="sendOption('方大特钢科技股份有限公司的主要业务是什么？')">方大特钢科技股份有限公司的主要业务是什么？</button>
          <button @click="sendOption('方大特钢科技股份有限公司和其他公司对比有什么优势？')">方大特钢科技股份有限公司和其他公司对比有什么优势？</button>
        </view>
      </view>
      <view class="input-area">
        <input v-model="inputMessage" placeholder="输入您的消息..." />
        <button @click="sendMessage">发送</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      inputMessage: '',
      searchQuery: '',
      messages: [
        { from: 'me', text: '浙江夹袄环保科技股份有限公司的主要业务是什么？' },
        { from: 'assistant', text: '浙江嘉澳环保科技股份有限公司的主要业务是环保增塑剂及稳定剂、生物质能源的研发、生产和销售。', image: 'your-image-url.jpg' }
      ],
      messagesHeight: 400,
      historicalSessions: ['会话1', '会话2', '会话3'] // Example historical sessions
    };
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim()) {
        this.messages.push({ from: 'me', text: this.inputMessage });
        this.inputMessage = '';
        this.simulateAssistantResponse();
      }
    },
    simulateAssistantResponse() {
      setTimeout(() => {
        const response = { from: 'assistant', text: '这是助手的自动回复。' };
        this.messages.push(response);
      }, 1000);
    },
    sendOption(option) {
      this.messages.push({ from: 'me', text: option });
      this.simulateAssistantResponse();
    },
    loadSession(session) {
      // Load historical session logic
      console.log('Loading session:', session);
    },
    clearAll() {
      this.messages = [];
      console.log('All messages cleared');
    }
  }
};
</script>

<style>
.chat-container {
  display: flex;
  padding: 10px;
}
.sidebar {
  width: 200px;
  margin-right: 10px;
}
.sidebar-title {
  font-weight: bold;
}
.search-bar {
  margin: 10px 0;
  width: 100%;
}
.nav-buttons {
  margin: 10px 0;
}
.clear-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px;
}
.chat-area {
  flex: 1;
}
.messages {
  border: 1px solid #ccc;
  overflow: auto;
  
}
.message {
  margin: 10px 0;

}
.message-wrapper {
  display: flex;
  align-items: flex-start;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.message-content {
  max-width: 70%;
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 10px;
}
.my-message .message-content {
  background-color: #d1e7dd;
}
.assistant-message .message-content {
  background-color: #f8d7da;
}
.user-info {
  display: flex;
  align-items: center;
}
.nickname {
  font-weight: bold;
  margin-right: 5px;
}
.message-image {
  max-width: 100%;
  height: auto;
}
.options {
  margin-top: 20px;
}
.option-buttons {
  display: flex;
  flex-direction: column;
}
.input-area {
  display: flex;
  margin-top: 10px;
}
input {
  flex: 1;
  padding: 5px;
}
button {
  margin-left: 5px;
}
</style>
