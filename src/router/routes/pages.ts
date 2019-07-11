import {RouteConfig} from "vue-router";
import Home from "@/views/Main.vue";

export enum RouteName {
    HOME = "첫 화면",
    ABOUT = "정보 화면",
}

export const routeHome: RouteConfig = {
    path: "/",
    name: RouteName.HOME,
    component: Home,
};

export const routeAbout: RouteConfig = {
    path: "/about",
    name: RouteName.ABOUT,
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
};

export const routeList: RouteConfig[] = [
    routeHome,
    routeAbout,
];
