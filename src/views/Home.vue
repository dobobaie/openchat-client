<template>
  <v-content class="home">
    <v-container v-if="is_connected">
      <ChatCard></ChatCard>
      <div class="user-actions">
        <v-btn class="logout-btn" block @click="() => $sModels.account.logout()">
          <v-icon>mdi-logout</v-icon> <span v-if="$vuetify.breakpoint.smAndUp">{{ $_('LOGOUT') }}</span>
        </v-btn>
      </div>
    </v-container>
  </v-content>
</template>

<script>
  import AccountRegister from '@/components/account/Register';
  import ChatCard from "@/components/chat/Card";

  export default {
    name: 'Home',
    components: {
      ChatCard
    },
    data: () => ({
      is_connected: false
    }),
    async created() {
      this.is_connected = this.$sAuth.isConnected();
      if (!this.$sAuth.isConnected()) {
        const modal = this.$sModal.open(AccountRegister, {
          persistent: true,
          events: {
            loggedin: () => {
              this.is_connected = true;
              modal.close();
            }
          }
        });
      }
    }
  };
</script>

<style scoped>
  /deep/ div.container {
    max-width: 500px;
  }
  div.user-actions {
    margin: 25px auto;
  }
  button.logout-btn {
    background-color: #e36262 !important;
    padding: 25px 35px;
    color: #FFF;
  }
</style>
