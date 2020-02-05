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
      .then(response => this.Vue.$sAuth.setToken(response.access_token));
  }

  logout() {
    return this.Vue.$sAuth.destroySession();
  }
}
