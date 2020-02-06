export default class User {
  constructor(Vue) {
    this.Vue = Vue;
  }

  retrieveUserStatus() {
    return this.Vue.$cookies.get('user_status');
  }

  setUserStatus(status) {
    if (!['online', 'offline'].includes(status)) return ;
    this.Vue.$cookies.set('user_status', status);
  }

  retrieveInfos() {
    const user_id = this.Vue.$sAuth.retrieveUserId();
    return this.Vue.$sRequest
      .get(`/users/${user_id}`);
  }
}
