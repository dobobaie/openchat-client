<template>
  <v-content v-bind:id="modalId" v-if="isActivated" class="main-modal">
    <v-dialog v-model="dialog" :persistent="modalOptions.persistent">
      <component
        :is="currentComponent"
        :mode="modalOptions.mode"
        :params="modalOptions.params"
        :events="modalOptions.events"
      ></component>
    </v-dialog>
  </v-content>
</template>

<script>
  import Loading from "@/handlers/utils/Loading";

  export default {
    name: 'Modal',
    props: {
      modalId: String
    },
    data: () => ({
      dialog: false,
      isActivated: true,
      componentLoaded: false,
      currentComponent: null,
      modalOptions: {},
      localEvents: {}
    }),
    methods: {
      on(key, cb) {
        this.localEvents[key] = this.localEvents[key] || [];
        this.localEvents[key].push(cb);
      },
      close() {
        if (this.dialog === false) return ;
        this.dialog = false;
      },
      reload(componentToRender, modalOptions) {
        this.componentLoaded = false;
        this.modalOptions = modalOptions;
        this.currentComponent = Loading;
        this.$nextTick(() => {
          this.currentComponent = componentToRender;
          this.componentLoaded = true;
        });
      },
      setParams(values) {
        this.modalOptions.params = this.modalOptions.params || {};
        this.modalOptions.params = Object.assign(
          this.modalOptions.params,
          values
        );
        
        const component = this.$children[0].$children[0].$children[0].$children[0]; // very bad to change
        if (component && component.updateParams) {
          component.updateParams(this.modalOptions.params);
        }
      }
    },
    watch: {
      dialog() {
        if (this.dialog === false) {
          this.modalOptions.events._closeModal();
          (this.localEvents.close || []).map(cb => cb());
        }
      },
      currentComponent() {
        this.dialog = true;
        this.$nextTick(() => {
          const component = this.$children[0].$children[0].$children[0].$children[0]; // very bad to change
          if (component && component.initModal) {
            component.initModal(this);
          }
        });
      }
    }
  };
</script>

<style scoped>
  /deep/ div.v-dialog {
    width: fit-content;
  }
</style>