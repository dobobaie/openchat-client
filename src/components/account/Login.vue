<template>
  <v-content class="account-login">
    <v-card>
      <v-card-text>
        <v-alert text prominent type="error" v-if="error">{{ $_(error) }}</v-alert>
        <v-form ref="form">
          <FieldText :model="email" label="Email" type="email" />
          <FieldText :model="password" label="Password" type="password" />
          <div class="submit">
            <v-btn tile dark @click="() => validate()">Log In</v-btn>
          </div>
        </v-form>
      </v-card-text>
      <v-card-text>
        Not registered yet ? Then let <a @click="register()">register</a> to continue.
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import AccountRegister from '@/components/account/Register';
  import FieldText from "@/handlers/field/Text";
  
  export default {
    name: 'AccountLogin',
    components: {
      FieldText
    },
    props: {
      events: Object
    },
    data: () => ({
      email: { value: '' },
      password: { value: '' },
      error: null
    }),
    methods: {
      register() {
        this.events._switchTo(AccountRegister);
      },
      async validate() {
        const { error } = await this.$sModal.loading(
          this.$sModels.account.login({
            email: this.email.value,
            password: this.password.value
          })
        );
        this.error = error && error.code;
        if (!this.error) {
          this.events.loggedin
            ? this.events.loggedin()
            : this.events._closeModal();
        }
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
