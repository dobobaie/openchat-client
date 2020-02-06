export default class Socket {
  constructor(Vue) {
    this.Vue = Vue;
    
    const { socket } = this.Vue.$fireflyio;
    this.socket = socket;

    const token = this.Vue.$sAuth.retrieveToken();
    if (token) {
      this.Vue.$fireflyio.authenticate(token);
    }
  }

  on(event, callback) {
    return this.socket.on(event, callback);
  }
}
