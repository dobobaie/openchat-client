export default class Account {
  constructor(Vue) {
    this.Vue = Vue;
  }

  register(data) {
    return this.Vue.$sRequest
      .post(`/users/create`, data);
  }

  login(data) {
    return this.Vue.$sRequest
      .post(`/users/login`, data)
      .then(response => this.Vue.$fireflyio.authenticate(response.access_token))
      .then(response => response.data.authorization.split(' ').pop())
      .then(access_token => this.Vue.$sAuth.setToken(access_token));
  }

  logout() {
    return this.Vue.$sAuth.destroySession();
  }
}
