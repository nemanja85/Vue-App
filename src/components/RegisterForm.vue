<template>
  <div class="container-fluid">
    <FormulateForm class="register-form" @submit="handleSubmit">
      <h2 class="form-title">Register</h2>
      <p>Testing Vue Formulate form plugin</p>
      <FormulateInput
        name="name"
        type="text"
        v-model="name"
        label="Your name"
        placeholder="Your name"
        validation="required"
      />
      <FormulateInput
        name="email"
        type="email"
        v-model="email"
        label="Email address"
        placeholder="Email address"
        validation="required|email"
      />
      <div class="double-wide">
        <FormulateInput
          name="password"
          type="password"
          v-model="password"
          label="Password"
          placeholder="Your password"
          validation="required"
        />
        <FormulateInput
          name="password_confirm"
          type="password"
          v-model="password_confirm"
          label="Confirm your password"
          placeholder="Confirm password"
          validation="required|confirm"
          validation-name="Confirmation"
        />
      </div>
      <FormulateInput type="submit" label="Register" />
    </FormulateForm>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  }),
  methods: {
    handleSubmit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) =>{
            console.log(user)
        })
        .catch(function (error) {
          console.log("Unable to register the user :" + error.message)
        });
    },
  },
};
</script>

<style scoped>
.register-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  max-width: 500px;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.register-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - 0.5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}
</style>