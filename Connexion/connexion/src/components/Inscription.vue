<template>
<form @submit.prevent="createContact">
        <input type="text" v-model="contact.email" id="email" placeholder="email"><br>
        <input type="text" v-model="contact.password" id="password" placeholder="mot de passe"><br>
        <button type="submit">créer</button>
</form>
</template>

    <script>
    import db from '../services/db';

    export default {
    data() {
        return {
        user: {
            email: '',
            password: '',
        },
        };
    },
    methods: {
        createUser() {
        db.create(this.user)
            .then((data) => {
            console.log(data);
            this.$emit('created', data.id);
            this.resetForm();
            })
            .catch(err => console.log(err));
        },
        resetForm() {
        this.user.email = '';
        this.user.password = '';
        },
    },
};
</script>

<style>
</style>