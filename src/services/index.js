// Import services
import LangsService from './Langs';
import RouterService from './Router';
import ErrorsService from './Errors';
import EventService from './Event';
import AuthService from './Auth';
import RequestService from './Request';
import ModalService from './Modal';

export default {
  install(Vue, { Router }) {
    Vue.prototype.$sLangs = new LangsService(Vue.prototype);
    Vue.prototype.$_ = (...args) => Vue.prototype.$sLangs._(...args);
    Vue.prototype.$sErrors = new ErrorsService(Vue.prototype);
    Vue.prototype.$sEvent = new EventService(Vue.prototype);
    Vue.prototype.$sAuth = new AuthService(Vue.prototype);
    Vue.prototype.$sRequest = new RequestService(Vue.prototype);
    Vue.prototype.$sModal = new ModalService(Vue.prototype);
    Vue.prototype.$sRouter = new RouterService(Vue.prototype, Router);
  }
};
