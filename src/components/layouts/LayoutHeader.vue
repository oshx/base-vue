<template>
  <v-toolbar
    dense
    fixed
    dark
    clipped-left
    app
  >
    <v-toolbar-side-icon
      @click="handleMainMenuToggle"
    ></v-toolbar-side-icon>
    <v-toolbar-title>
      <v-btn
        @click="goToHome"
        flat
        class="text--accent-4"
      ><strong>{{webSiteTitle}}</strong>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        flat
      >Link One
      </v-btn>
      <v-btn
        flat
      >Link Two
      </v-btn>
      <v-btn
        flat
      >Link Three
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {eventBus} from "@/utils/eventBus";
  import LayoutEvent from "@/enums/LayoutEvent";
  import {RouteName} from "@/router/routes/pages";

  @Component
  class LayoutHeader extends Vue {
    protected webSiteTitle: string = process.env.VUE_APP_TITLE;

    protected handleMainMenuToggle(): void {
      eventBus.$emit(LayoutEvent.TOGGLE_MAINMENU);
    }

    protected goToHome(): void {
      return this.$router.push({name: RouteName.HOME});
    }
  }

  export default LayoutHeader;
</script>
