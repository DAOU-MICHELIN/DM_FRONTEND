import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../view/Home';
import LoginView from '../view/Login';
import SignUpView from '../view/SignUp';

const routes = [
    {
        path: '/',
        name: 'HOME PAGE',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'LOGIN PAGE',
        component: LoginView,
    },
    {
        path: '/account',
        name: 'SIGN UP PAGE',
        component: SignUpView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
