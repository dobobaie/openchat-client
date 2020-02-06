<template>
  <v-content class="chatActions">
    <v-card-text>
      <v-row>
        <v-col class="col_text">
          <FieldText @keyup.enter.native="sendMessage()" :model="message" :label="$_('TAPE_MESSAGE')" type="text"></FieldText>
        </v-col>
        <v-col class="col_btn">
          <v-btn text icon @click="sendMessage()">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-content>
</template>

<script>
  import FieldText from "@/handlers/field/Text";

  export default {
    name: 'ChatActions',
    components: {
      FieldText
    },
    data: () => ({
      message: { value: '' }
    }),
    methods: {
      async sendMessage() {
        const message = this.message.value;
        if (message === '') return ;
        this.message.value = '';
        this.$sModels.chat.newMessage({ message });
      }
    }
  };
</script>

<style scoped>
  /deep/ div.v-card__text {
    padding: 0 16px;
  }
  /deep/ div.col_text {
    padding-top: 0;
  }
  /deep/ div.col_btn {
    padding-top: 15px;
    max-width: 65px;
  }
  /deep/ button.v-btn {
    color: #e36262 !important;
  }
</style>
