<template>
  <div class="container-fluid">
    <FormulateForm class="inputs" @submit="login">
      <h2 class="form-title">Log in</h2>
      <FormulateInput
        type="email"
        name="email"
        v-model="email"
        label="Email address"
        validation="required|email"
      />
      <FormulateInput
        type="password"
        name="password"
        v-model="password"
        label="Password"
        validation="required"
      />
      <FormulateInput label="Login" type="submit" />
    </FormulateForm>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() =>{
            this.$router.replace({name:"Currency"});
        })
        .catch(function (error) {
          console.log( "Unable to login: " + error.message)
        });
    },
  },
};
</script>

<style scoped>
</style>
