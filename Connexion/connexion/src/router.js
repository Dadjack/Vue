import {createRouter,createWebHistory} from "vue-router";

//Ci dessous on va définir les routes dans un tableau d'objet
//Chaque objet = 1 route
const routes =[
    {
        name: "Accueil",
        path: "/accueil",
        alias:"/accueil",
        component: () => import("./Views/Accueil")
    },{
        name: "Login",
        path: "/login",
        alias:"/login",
        component: () => import("./components/Login")
    },{
        name:"Inscription",
        path:"/",
        alias:"/inscription",
        component: () =>import("./components/Inscription")
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