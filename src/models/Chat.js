export default class Chat {
  constructor(Vue) {
    this.Vue = Vue;
  }

  newMessage(data) {
    return this.Vue.$sRequest
      .post(`/chat/message`, data);
  }
}
