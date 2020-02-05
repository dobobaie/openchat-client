<template>
  <v-content class="services-modal-close">
    <v-btn fab small color="transparent" @click="click()">
      <v-icon dark>mdi-close</v-icon>
    </v-btn>
  </v-content>
</template>

<script>
  export default {
    name: 'ServicesModalClose',
    props: {
      click: Function
    }
  };
</script>

<style scoped>
  main.services-modal-close {
    margin-bottom: 40px;
  }
  main.services-modal-close button {
    box-shadow: none;
    position: absolute;
    top: -10px;
    left: -10px;
  }
</style>
