<template>
    <div id="app">
        <inscription @created="created"></inscription>
        <br>
        <login
        :users="users"
        @deleteUser="deleteUser"
        @saveEdit="saveEdit">
        </login>
        <router-view/>
    </div>
</template>

<script>
import Inscription from './Inscription.vue';
import Login from './Login.vue';
import db from '../services/db';

export default {
    name: 'app',
    components: {
        Inscription,
        Login,
    },
    data() {
        return {
        users: [],
        };
    },
    created() {
        this.getAllUsers();
    },
    methods: {
        created(id) {
        console.log(id);
        this.getAllUsers();
        },
        getAllUsers() {
        db.read().then((snapshot) => {
            this.users = snapshot.docs;
        });
        },
        deleteContact(user) {
        db.delete(user.id).then(() => {
            this.getAllUsers();
        });
        },
        saveEdit(editedUser) {
        db.update(editedUser).then(() => {
            this.getAllUsers();
        });
        },
    },
    watch: {
        contacts(newUsers) {
        console.log('newUsers', newUsers);
        this.users = newUsers;
        },
    },
};
</script>

<style>
</style>

