<template>
  <v-content class="field-select">
    <v-select
      v-model="localModel"
      :items="items"
      :prepend-icon="icon"
      item-text="name"
      item-value="id"
      solo
      hide-details
    ></v-select>
  </v-content>
</template>

<script>
  export default {
    name: 'FieldSelect',
    props: {
      items: Array,
      model: Object,
      icon: String
    },
    data: () => ({
      localModel: null
    }),
    created() {
      this.localModel = this.model.value;
    },
    watch: {
      localModel() {
        this.model.value = this.localModel;
      },
      $props: {
        handler() {
          this.localModel = this.model.value;
        },
        deep: true,
        immediate: true,
      },
    }
  };
</script>

<style>
  main.field-select div.v-input {
    margin-top: 25px;
  }
</style>
