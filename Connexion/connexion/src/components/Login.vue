<template>
<div class="card">
    <div class="form-group">
                <input
                type="text"
                name="email"
                class="form-control"
                id="email"
                required
                v-model="email"
                placeholder="Adresse mail"
                />
    </div>
    <div class="form-group">
                <input
                type="Password"
                name="password"
                class="form-control"
                id="password"
                required
                v-model="password"
                placeholder="Mot de passe"
                />
    </div>
    <div class="form-group">
        <button @click="login()" class="button">
            Connexion
        </button>
    </div>
</div>
</template>

<script>

export default {
            name: 'Login',
            props:['users'],
    data(){
        return{
            email:null,
            password:null,
        };
    },
    methods: {
        login(){
                if(this.input.email === this.email && this.input.password === this.password){
                    db.read(this.user)
            }
        }
    },
}
</script>

<style>
    
</style>