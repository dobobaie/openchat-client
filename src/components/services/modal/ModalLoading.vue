<template>
  <v-content class="modalLoading">  
    <v-card>
        <v-card-text>
          <LoadingUtilsHandlers></LoadingUtilsHandlers>
        </v-card-text>
      </v-card>
  </v-content>
</template>

<script>
  import LoadingUtilsHandlers from '@/handlers/utils/Loading';

  export default {
    name: 'ModalLoading',
    props: ["params", "events"],
    components: {
      LoadingUtilsHandlers
    },
    methods: {
      initModal(modal) {
        modal.$el.setAttribute('style', 'width: 100%;max-width: 500px;');
      }
    }
  };
</script>

<style scoped></style>
