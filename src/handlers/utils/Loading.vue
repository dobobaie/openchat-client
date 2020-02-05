<template>
  <v-content class="loading">
    <v-progress-circular indeterminate color="blue-grey" class="progress-circular"></v-progress-circular>
    <p>{{ title }}</p>
  </v-content>
</template>

<script>
  export default {
    name: "Loading",
    props: {
      title: String
    },
    methods: {
      initModal() {
        const element = document.querySelector(`.v-dialog .loading`);
        if (element) {
          element.setAttribute('style', 'padding: 45px !important;background-color: #FFF;');
        }
      }
    }
  };
</script>

<style scoped>
  main.loading {
    position: relative;
    padding: 25px 0 !important;
    overflow: hidden;
  }
  /deep/ .progress-circular {
    position: initial;
  }
  main.loading p {
    position: absolute;
    text-align: center;  
    left: 0;
    right: 0;
    top: 35px;
  }
</style>
