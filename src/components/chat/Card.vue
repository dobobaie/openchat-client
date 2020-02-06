<template>
  <v-content class="chatCard">
    <v-card class="mx-auto">
      <v-toolbar dark>
        <v-toolbar-title>{{ $_('CHATBOX') }}</v-toolbar-title>
      </v-toolbar>
      <ChatThread :items="items"></ChatThread>
      <v-divider class="mt-3"></v-divider>
      <ChatActions></ChatActions>
    </v-card>
  </v-content>
</template>

<script>
  import ChatThread from '@/components/chat/Thread';
  import ChatActions from '@/components/chat/Actions';

  export default {
    name: 'ChatCard',
    components: {
      ChatThread,
      ChatActions
    },
    data: () => ({
      items: [],
    }),
    created() {
      this.$sSocket.on('OPENCHAT_MESSAGES', request => {
        this.items = request.list;
      });
      this.$sSocket.on('OPENCHAT_NEW_MESSAGE', request => {
        this.items.push(request.entry);
      });
    },
    watch: {
      items() {
        this.$nextTick(() => {
          const container = document.querySelector('.chatThread');
          container.scrollTop = container.scrollHeight;
        });
      }
    }
  };
</script>

<style scoped>
  /deep/ main.chatThread {
    max-height: 500px;
    overflow: auto;
  }
  /deep/ div.v-toolbar__content {
    background-color: #e36262 !important;
  }
</style>
