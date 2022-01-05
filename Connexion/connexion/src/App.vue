<template>
<h1>app</h1>
    <div id="app">
      <nav class="navbar navbar-expand navbar-dark bg-primary">
        <router-link to="/accueil" class="navbar-brand">Accueil</router-link>
        <router-link to="/login" class="navbar-brand">Login</router-link>
        <div class="navbar-nav mr-auto">
              <router-link to="/inscription" class="navbar-brand">Inscription</router-link>
        </div>
      </nav>
    </div>
<router-view/>
</template>


<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
