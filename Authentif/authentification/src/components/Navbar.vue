<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand" style="align-items: center;">
        <img
            src="https://vuejs.org/images/logo.png"
            style="height: 50px; margin: 20px;"
        />
        <span class="has-text-weight-medium is-size-4">
            Vue.js + Veux + Firebase = ❤️!
        </span>
        </div>

        <div id="navbarBasicExample" class="navbar-menu is-active">
        <div class="navbar-end">
            <div class="navbar-item">
            <div class="buttons">
                <template v-if="!isUserAuth">
                <router-link
                    v-for="item of navItems"
                    :key="item.name"
                    :to="item.to"
                    class="button is-primary"
                >
                    <span class="icon">
                    <i :class="`fas fa-${item.icon}`"></i>
                    </span>
                    <strong>{{ item.name }}</strong>
                </router-link>
                </template>
                <template v-if="isUserAuth">
                <router-link @click="signOutAction" class="button is-primary">
                    <span class="icon">
                    <i class="fas fa-sign-out-alt"></i>
                    </span>
                    <strong>Logout</strong>
                </router-link>
                </template>
            </div>
            </div>
        </div>
        </div>
    </nav>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
        navItems: [
            { name: "Login", to: "/login", icon: "sign-in-alt" },
            { name: "Register", to: "/register", icon: "user-plus" }
        ]
        };
    },
    computed: {
        ...mapGetters(["getUser", "isUserAuth"])
    },
    methods: {
        ...mapActions(["signOutAction"]),
        signOut() {
        this.signOutAction();
        }
    }
};
</script>