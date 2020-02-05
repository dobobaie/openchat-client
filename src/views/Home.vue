<template>
  <v-content class="home">
    <div class="pa-2" v-if="$sAuth.isConnected()">
      <v-btn class="logout-btn" block @click="() => $sModels.account.logout()">
        <v-icon>mdi-logout</v-icon> <span v-if="$vuetify.breakpoint.smAndUp">{{ $_('LOGOUT') }}</span>
      </v-btn>
    </div>
    <p>Chat...</p>
  </v-content>
</template>

<script>
  import AccountRegister from '@/components/account/Register';

  export default {
    name: 'Home',
    created() {
      if (!this.$sAuth.isConnected()) {
        this.$sModal.open(AccountRegister, {
          persistent: true
        });
      }
    }
  };
</script>

<style scoped>
  button.logout-btn {
    background-color: #e36262 !important;
    padding: 25px 35px;
    color: #FFF;
  }
</style>
