import VueRouter from 'vue-router'

import Front from "./pages/Front";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
// import Details from "./pages/Details";
import MyWallet from "./pages/MyWallet";
import Mint from "./pages/Mint";
import MyPunks from "./pages/MyPunks";



const routes = [{
    path: '/',
    name: 'front',
    component: Front,
    children: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/i/:id',
            name: 'invite_home',
            component: Home,
        },
        {
            path: '/mint',
            name: 'mint',
            component: Mint,
        },
        {
            path: '/myPunks',
            name: 'myPunks',
            component: MyPunks,
        },
        {
            path: '/marketplace',
            name: 'marketplace',
            component: Marketplace,
        },
        // {
        //     path: '/detail/Rpunks/:id',
        //     name: 'details',
        //     component: Details,
        // },
        {
            path: '/mywallet',
            name: 'mywallet',
            component: MyWallet,
        },
    ]
}];

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
    // base : '/testi/'
});

export default router