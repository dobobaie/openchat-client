import ErrorsMap from "./Errors/Map";

export default class Errors {
  constructor(Vue) {
    this.Vue = Vue;
  }

  gCode(err) {
    if (
      err &&
      err.response &&
      err.response.data &&
      err.response.data.errors &&
      err.response.data.errors[0] &&
      err.response.data.errors[0].code
    ) {
      return err.response.data.errors[0].code;
    }
    return null;
  }

  isErrorCode(err) {
    return !!this.gCode(err);
  }

  isInvalidToken(err) {
    return (
      this.isErrorCode(err) &&
      this.translate(err) === ErrorsMap.invalid_authorization_token
    );
  }

  translate(err) {
    if (this.isErrorCode(err)) {
      return ErrorsMap[this.gCode(err)] ? ErrorsMap[this.gCode(err)] : err;
    }
    return ErrorsMap[err] ? ErrorsMap[err] : err;
  }

  error(err) {
    const translate = this.translate(err);
    const nError = new Error(translate);
    nError.code = (this.gCode(err) && translate) || "internal_server_error";
    nError.status = (err && err.response && err.response.status) || 500;
    return nError;
  }
}
