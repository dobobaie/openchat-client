import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import ModalComponent from '@/components/services/modal/Modal.vue';
import ModalConfirmComponent from '@/components/services/modal/ModalConfirm.vue';
import ModalLoadingComponent from '@/components/services/modal/ModalLoading.vue';

export default class Modal {
  constructor(Vue) {
    this.Vue = Vue;
    this.modalsList = [];
  }

  initializeOptions(modalOptions) {
    const options = modalOptions || {};
    options.id = `modal-${Math.random().toString(36).substring(4)}`;
    options.events = options.events || {};
    options.events._closeModal = () => {
      const id = this.modalsList
        .map((item, index) =>
          item.id === options.id ? index : undefined
        )
        .filter(item => item !== undefined)
        .shift();

      if (this.modalsList[id] !== undefined) {
        this.modalsList[id].modal.close();
        this.modalsList.splice(id, 1);
      }
    };

    options.events._switchTo = (componentToRender, modalOptions) => {
      const id = this.modalsList
        .map((item, index) =>
          item.id === options.id ? index : undefined
        )
        .filter(item => item !== undefined)
        .shift();
  
      if (this.modalsList[id] !== undefined) {
        const opts = Object.assign({}, modalOptions || {}, options);
        this.modalsList[id].modal.reload(componentToRender, opts);
      }
    };

    return options;
  }

  pushModal(id, modal) {
    return this.modalsList.push({
      id,
      modal
    });
  }

  open(componentToRender, modalOptions) {
    const options = this.initializeOptions(modalOptions);
    
    const nDivModal = document.createElement("div");
    nDivModal.id = options.modalId;
    document.body.appendChild(nDivModal);

    const ModalCtrl = Vue.extend(ModalComponent)
    const imodal = new ModalCtrl({
      vuetify,
      propsData: {
        modalId: options.id
      }
    }).$mount(`#${nDivModal.id}`);
    imodal.reload(componentToRender, options);

    this.pushModal(options.id, imodal);
    return imodal;
  }

  async loading(promise) {
    const modal = this.open(ModalLoadingComponent, {
      persistent: true
    });
    const result = { value: null, error: null };
    await promise.then(ret => {
      result.value = ret;
    }).catch(ret => {
      result.error = ret;
    });
    modal.close();
    return result;
  }

  confirm(message, modalOptions) {
    const events = new (function () {
      const callbacks = {
        yes: [],
        no: []
      };
      this.chooseYes = () => {
        callbacks.yes.map(cb => cb());
        callbacks.yes = []; 
      };
      this.yes = cb => {
        callbacks.yes.push(cb);
        return { yes: this.yes, no: this.no };
      };
      this.chooseNo = () => {
        callbacks.no.map(cb => cb());
        callbacks.no = []; 
      };
      this.no = cb => {
        callbacks.no.push(cb);
        return { yes: this.yes, no: this.no };
      };
    })();

    const modal = this.open(ModalConfirmComponent, {
      params: Object.assign({
        message
      }, modalOptions && modalOptions.params),
      events: Object.assign({
        chooseYes: () => {
          events.chooseYes();
          modal.close();
         },
        chooseNo: () => {
          events.chooseNo();
          modal.close();
         },
      }, modalOptions && modalOptions.events)
    });

    return { yes: events.yes, no: events.no };
  }
}
