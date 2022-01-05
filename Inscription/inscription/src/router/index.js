import {createRouter, createWebHistory} from "vue-router";
import Accueil from "@/views/Accueil.vue"
import Login from "@/views/Login.vue"
import Profile from "@/views/Profile.vue"

//Ci dessous on va définir les routes dans un tableau d'objet
//Chaque objet = 1 route
const routes =[
    {
        name: "accueil",
        path: "/accueil",
        alias:"/accueil",
        component: Accueil,
    },
    {
        name: "login",
        path: "/",
        component: Login,
        props: true
    },{
        name:"profile",
        path:"/profile",
        component: Profile,
    }
];
//Create router permet de créer le router
//La fonction createWebHistory va permettre à vue de garder un historique
//de votre navigation au sein de l'appli (de quelles "pages"/composant vous venez et sur quels composant vous etes)
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;