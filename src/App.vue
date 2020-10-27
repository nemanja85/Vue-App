<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/registration">Registration</router-link> |
      <router-link to="/login">Login</router-link> |
      <a href="#" @click="logout">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace({name: "login"});
      })
      .catch((err) =>{
        console.log(err)
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app h1,
#app h2,
#app #nav {
  text-align: center;
}

#nav {
  background-color: #2c3e50;
  color: #fff;
  padding: 30px;
  margin-bottom: 2em;
}

#nav a {
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  padding: 1em;
}

#nav a.router-link-exact-active {
  text-decoration: none;
  color: crimson;
}

.inputs {
  background-color: white;
  max-width: 20em;
  padding: 2em;
  margin: 6.5em auto 2em auto;
  border-radius: 0.25em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
}
pre {
  display: block;
  background-color: #e7f6ef;
  padding: 0.25em;
  border-radius: 0.25em;
}
</style>

