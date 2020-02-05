export default class User {
  constructor(Vue) {
    this.Vue = Vue;
  }

  retrieveInfos() {
    const user_id = this.Vue.$sAuth.retrieveUserId();
    return this.Vue.$sRequest
      .get(`/users/${user_id}`);
  }
}
