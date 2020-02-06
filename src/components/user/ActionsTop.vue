<template>
  <v-content class="userActionsTop">
    <div class="user-actions">
      <v-row>
        <v-col class="fit-content">
          <p class="user-statut-text">User status: </p>
        </v-col>
        <v-col>
          <FieldSelect :items="items" :model="model" />
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
  import FieldSelect from "@/handlers/field/Select";
  
  export default {
    name: 'UserActionsTop',
    components: {
      FieldSelect
    },
    data: () => ({
      items: [
        { id: 'online', name: 'Online '},
        { id: 'offline', name: 'Offline '}
      ],
      model: { value: null }
    }),
    async created() {
      this.model.value = await this.$sModels.user.retrieveUserStatus() || 'online';
    },
    watch: {
      model: {
        handler() {
          this.$sModels.user.setUserStatus(this.model.value);
        },
        deep: true,
        immediate: true,
      }
    }
  };
</script>

<style scoped>
  div.fit-content {
    max-width: max-content;
  }
  p.user-statut-text {
    margin-top: 40px;
  }
</style>
