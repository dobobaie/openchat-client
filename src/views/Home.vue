<template>
  <v-content class="home">
    <v-container v-if="is_connected">
      <UserActionsTop></UserActionsTop>
      <ChatCard></ChatCard>
      <UserActionsBottom></UserActionsBottom>
    </v-container>
  </v-content>
</template>

<script>
  import AccountRegister from '@/components/account/Register';
  import UserActionsTop from '@/components/user/ActionsTop';
  import UserActionsBottom from '@/components/user/ActionsBottom';
  import ChatCard from "@/components/chat/Card";

  export default {
    name: 'Home',
    components: {
      UserActionsTop,
      UserActionsBottom,
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
</style>
