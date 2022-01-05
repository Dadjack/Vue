import {createRouter,createWebHistory} from "vue-router";
//Ci dessous on va définir les routes dans un tableau d'objet
//Chaque objet = 1 route
const routes =[
    {
        name:"accueil",
        path:"/",
        component: () =>import("./components/Accueil"),
        meta: {
            title: 'Accueil',
        }
    },{
        name:"profile",
        path:"/profile",
        component: () =>import("./components/Profile"),
        meta: {
            title: 'Profile',
        }
    },{
        name:"login",
        path:"/login",
        component: () =>import("./components/Login"),
        props:true,
        meta: {
            title: 'Login',
        }
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