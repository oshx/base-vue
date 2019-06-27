import {RouteConfig} from 'vue-router';
import Home from '@/views/Main.vue';

export enum RouteName {
    Home = '첫 화면',
    ABOUT = '정보 화면',
}

export const routeHome: RouteConfig = {
    path: '/',
    name: RouteName.Home,
    component: Home,
};

export const routeAbout: RouteConfig = {
    path: '/about',
    name: RouteName.ABOUT,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
};

export const routeList: RouteConfig[] = [
    routeHome,
    routeAbout,
];
