// Import models
import AccountModel from './Account';
import UserModel from './User';

export default {
  install(Vue) {
    Vue.prototype.$sModels = {};
    Vue.prototype.$sModels.account = new AccountModel(Vue.prototype);
    Vue.prototype.$sModels.user = new UserModel(Vue.prototype);
  }
};
