<template>
    <div class="container-fluid">
        <FormulateForm class="inputs" @submit="login" v-model="values">
            <h2 class="form-title">Log in</h2>
            <FormulateInput
            type="email"
            name="email"
            label="Email address"
            validation="required|email"
            />
            <FormulateInput
            type="password"
            name="password"
            label="Password"
            validation="required" 
            />
            <FormulateInput label="Login" type="submit" />
            <pre>{{ values }}</pre>
        </FormulateForm>
    </div>
  
</template>

<script>
export default {
  data: () => ({
      values: {}
  }),
  methods: {
    login() {
      console.log(this.values)
    }
  }
}
</script>

<style scoped>



</style>
