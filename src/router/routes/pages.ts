import {RouteConfig} from "vue-router";
import Overview from "@/views/Overview.vue";

export enum RouteName {
    OVERVIEW = "개요",
    ABOUT = "정보 화면",
}

export const routeOverview: RouteConfig = {
    path: "/",
    name: RouteName.OVERVIEW,
    component: Overview,
};

export const routeAbout: RouteConfig = {
    path: "/about",
    name: RouteName.ABOUT,
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
};

export const routeList: RouteConfig[] = [
    routeOverview,
    routeAbout,
];
