// Import models
import AccountModel from './Account';
import UserModel from './User';
import ChatModel from './Chat';

export default {
  install(Vue) {
    Vue.prototype.$sModels = {};
    Vue.prototype.$sModels.account = new AccountModel(Vue.prototype);
    Vue.prototype.$sModels.user = new UserModel(Vue.prototype);
    Vue.prototype.$sModels.chat = new ChatModel(Vue.prototype);
  }
};
