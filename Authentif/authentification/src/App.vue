<template>
  <div id="app">
    <navbar />
    <section v-if="isUserAuth" class="section">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          Welcome {{ getUser.email }}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container is-desktop">
        <router-view />
      </div>
    </section>
  </div>
</template>


<script>

import Navbar from './components/Navbar';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { Navbar },
  data() {
    return {
      kaas: true
    };
  },
  mounted() {
    this.authAction();
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  methods: {
    ...mapActions(["authAction"])
  }
};
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
