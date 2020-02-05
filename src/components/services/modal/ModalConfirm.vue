<template>
  <v-content class="modalConfirm">  
    <v-card>
        <v-card-text>
          <h3 class="title">{{ params.message }}</h3>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div style="width: 50%;">
            <v-btn color="red" block dark tile v-on:click="events.chooseYes()">
              {{ $_("YES") }}
            </v-btn>
          </div>
          <div style="width: 50%;">
            <v-btn color="primary" block dark tile v-on:click="events.chooseNo()">
              {{ $_("NO") }}
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
  </v-content>
</template>

<script>
  export default {
    name: 'ModalConfirm',
    props: ["params", "events"],
    methods: {
      initModal(modal) {
        modal.$el.setAttribute('style', 'width: 100%;max-width: 500px;');
      }
    }
  };
</script>

<style scoped>
  h3.title {
    margin-bottom: 30px;
    font-size: 1.3rem;
    color: #000;
  }
</style>
