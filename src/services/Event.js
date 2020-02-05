export default class Event {
  constructor(Vue) {
    this.Vue = Vue;
    // this.toaster = null;
    this.totalEventLoading = 0;
  }

  async load(asyncFunc) {
    this.totalEventLoading = this.totalEventLoading + 1;
    if (this.totalEventLoading === 1) {
      // export to component ?
      // this.toaster = this.Vue.$toasted.info("<i class='fa fa-spinner fa-spin'></i> Loading...");
      // this.toaster.el.style.background = "#2DD393";
      // this.toaster.el.style.color = "#FFF";
      // this.toaster.el.style.fontSize = "1.2rem";
    }
    let errorRetuned = null;
    await asyncFunc.catch(err => {
      errorRetuned = err;
    });
    this.totalEventLoading = this.totalEventLoading - 1;
    // if (this.totalEventLoading === 0) this.toaster.remove();
    if (errorRetuned) throw errorRetuned;
    return asyncFunc;
  }
}
