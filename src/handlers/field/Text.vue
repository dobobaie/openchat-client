<template>
  <v-content class="field-text">
    <v-text-field
      hide-details
      @click:clear="clearEvent()"
      :clearable="!!clearEvent"
      :prepend-icon="icon"
      :label="label"
      :type="_type"
      v-model="localModel"
      v-on="on"
    ></v-text-field>
  </v-content>
</template>

<script>
  export default {
    name: 'FieldText',
    props: {
      type: String,
      label: String,
      icon: String,
      model: Object,
      on: Object,
      clearEvent: Function
    },
    data: () => ({
      localModel: null,
      _type: null,
    }),
    created() {
      this._type = this.type || 'text';
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

</style>
