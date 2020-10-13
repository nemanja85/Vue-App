<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/registration">Registration</router-link> |
      <router-link to="/formgenerator">Vue Form Generator</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app h1, #app h2, #app helloworld {
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
  color:#fff;
  padding: 1em;
}

#nav a.router-link-exact-active {
  text-decoration: none;
  color: crimson;
}

</style>

