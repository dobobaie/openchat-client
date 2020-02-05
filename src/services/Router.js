export default class Router {
  constructor(Vue, Router) {
    this.Vue = Vue;
    this.Router = Router;
  }

  navigate(event) {
    const closest = event.target.closest('a');
    const target = closest.attributes.href && closest.attributes.href.nodeValue;
    if (target[0] !== '/') {
      window.location = target;
      return ;
    }
    if (target === this.Router.currentRoute.path) {
      window.location.reload();
      return ;
    }
    this.Router.push(target);
    event.preventDefault();
  }
}
