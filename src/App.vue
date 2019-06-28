<template>
    <v-app light>
        <v-navigation-drawer
                fixed
                v-model="drawerRight"
                right
                clipped
                app
        ></v-navigation-drawer>
        <v-toolbar app></v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component<App>({
    // life cycle hooks
})
export default class App extends Vue {
    private isDrawerRight: boolean = false;

    protected get drawerRight(): boolean {
        return this.isDrawerRight;
    }

    protected set drawerRight(value: boolean) {
        this.isDrawerRight = value;
    }
}
</script>
