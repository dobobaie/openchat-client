<template>
  <v-content class="account-register">
    <v-card>
      <v-card-text>
        <v-alert text prominent type="error" v-if="error">{{ $_(error) }}</v-alert>
        <v-alert text prominent type="success" v-if="success">{{ $_(success) }}</v-alert>
        <v-form ref="form" v-if="!success">
          <FieldText :model="nickname" label="Nickname" />
          <FieldText :model="email" label="Email" type="email" />
          <FieldText :model="password" label="Password" type="password" />
          <div class="submit">
            <v-btn tile dark @click="() => validate()">Register</v-btn>
          </div>
        </v-form>
      </v-card-text>
      <v-card-text>
        Already an account ? Then let <a @click="login()">Log in</a> to continue.
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import AccountLogin from '@/components/account/Login';
  import FieldText from "@/handlers/field/Text";
  
  export default {
    name: 'AccountRegister',
    components: {
      FieldText
    },
    props: {
      events: Object
    },
    data: () => ({
      nickname: { value: '' },
      email: { value: '' },
      password: { value: '' },
      error: null,
      success: null
    }),
    methods: {
      login() {
        this.events._switchTo(AccountLogin);
      },
      async validate() {
        const { error } = await this.$sModal.loading(
          this.$sModels.account.register({
            nickname: this.nickname.value,
            email: this.email.value,
            password: this.password.value,
          })
        );
        this.error = error && error.code;
        this.success = !this.error && 'SUCCESSFULL_REGISTERED';
      }
    }
  };
</script>

<style scoped>
  /deep/ div.v-card {
    max-width: 400px;
    width: 100%;
  }
  /deep/ div.v-card div.submit button {
    margin-top: 20px;
    background-color: #e36262 !important;
    padding: 15px 35px;
    height: auto;
  }
</style>
