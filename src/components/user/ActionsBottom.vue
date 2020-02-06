<template>
  <v-content class="userActionsBottom">
    <div class="user-actions">
      <v-btn class="logout-btn" block @click="() => $sModels.account.logout()">
        <v-icon>mdi-logout</v-icon> <span v-if="$vuetify.breakpoint.smAndUp">{{ $_('LOGOUT') }}</span>
      </v-btn>
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'UserActionsBottom'
  };
</script>

<style scoped>
  div.user-actions {
    margin: 25px auto;
  }
  button.logout-btn {
    background-color: #e36262 !important;
    padding: 25px 35px;
    color: #FFF;
  }
</style>
