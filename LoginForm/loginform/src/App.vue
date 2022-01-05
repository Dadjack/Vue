<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';

export default {
    setup() {
      const router = useRouter();
      const route = useRoute();

      onBeforeMount(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
              router.replace('/login');
            }else if (route.path == "/login" 
            || route.path == "/register") {
              router.replace('/')
            }
        });
      })
    }
}
</script>

<style scoped>
body{
  background: #2c3e50;
  color: #FFF;
}
#app{
  text-align: center;
}
</style>
