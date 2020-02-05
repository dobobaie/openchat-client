export default class Request {
  constructor(Vue) {
    this.Vue = Vue;
  }

  getHeaders() {
    return this.Vue.$sAuth.retrieveToken()
      ? {
          headers: {
            Authorization: `Bearer ${this.Vue.$sAuth.retrieveToken()}`
          }
        }
      : {};
  }

  get(route, headers) {
    return this.Vue.$sEvent.load(
      this.Vue.$fireflyio
        .get(route, Object.assign(this.getHeaders(), headers || {}))
        .then(res => res.data)
        .catch(err => {
          if (this.Vue.$sErrors.isInvalidToken(err)) {
            this.Vue.$sAuth.destroySession();
          }
          throw this.Vue.$sErrors.error(err);
        })
    );
  }

  put(route, payload, headers) {
    return this.Vue.$sEvent.load(
      this.Vue.$fireflyio
        .put(route, payload, Object.assign(this.getHeaders(), headers || {}))
        .then(res => res.data)
        .catch(err => {
          if (this.Vue.$sErrors.isInvalidToken(err)) {
            this.Vue.$sAuth.destroySession();
          }
          throw this.Vue.$sErrors.error(err);
        })
    );
  }

  post(route, payload, headers) {
    return this.Vue.$sEvent.load(
      this.Vue.$fireflyio
        .post(route, payload, Object.assign(this.getHeaders(), headers || {}))
        .then(res => res.data)
        .catch(err => {
          if (this.Vue.$sErrors.isInvalidToken(err)) {
            this.Vue.$sAuth.destroySession();
          }
          throw this.Vue.$sErrors.error(err);
        })
    );
  }

  delete(route, headers) {
    return this.Vue.$sEvent.load(
      this.Vue.$fireflyio
        .delete(route, Object.assign(this.getHeaders(), headers || {}))
        .then(res => res.data)
        .catch(err => {
          if (this.Vue.$sErrors.isInvalidToken(err)) {
            this.Vue.$sAuth.destroySession();
          }
          throw this.Vue.$sErrors.error(err);
        })
    );
  }
}
