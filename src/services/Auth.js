export default class Auth {
  constructor(Vue) {
    this.Vue = Vue;
    this.token = this.Vue.$cookies.get('access_token');
    this.public_token_payload = this._decodeToken();
  }

  _decodeToken() {
    if (!this.token) return null;
    this.public_token_payload = this.Vue.$jwtDec.decode(this.token);
    return this.public_token_payload || null;
  }

  setToken(token) {
    this.token = token;
    this.Vue.$cookies.set('access_token', this.token);
    return this._decodeToken();
  }

  retrieveToken() {
    return this.token;
  }

  destroySession() {
    this.token = null;
    this.public_token_payload = null;
    this.Vue.$cookies.remove('access_token');
    window.location = '/';
  }
  
  isConnected() {
    return !!this.token;
  }

  isAdmin() {
    return this.public_token_payload && this.public_token_payload.is_admin;
  }

  retrieveNickname() {
    return this.public_token_payload && this.public_token_payload.nickname;
  }

  retrieveUserId() {
    return this.public_token_payload && this.public_token_payload.user_id;
  }
}
