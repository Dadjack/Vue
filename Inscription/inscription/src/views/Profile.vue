<template>
    <div class="card">
        <h1 class="card__title">Espace perso</h1>
        <p class="card__subtitle">Voilà donc qui je suis....</p>
        <!-- <p>{{user.email}}</p> -->
        
        <div class="form-row">
            <button @click="logOut()" class="button">
                Déconnexion
            </button>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name:'Profile',
    mounted: function (){
        console.log(this.$store.state.user);
        if(this.$store.state.user.userId == -1){
            this.$router.push('/');
            return;
        }
        this.$store.dispatch('getUserInfos');
    },
    computed:{
        ...mapState({
            user: 'userInfos',
        })
    },
    methods:{
        logOut (){
            this.$store.commit('logout');
            this.$router.push('/');
        }
    }
}

</script>

<style scoped>

</style>