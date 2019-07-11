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
    <v-toolbar-title>{{webSiteTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        flat
      >Link One</v-btn>
      <v-btn
        flat
      >Link Two</v-btn>
      <v-btn
        flat
      >Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {eventBus} from "@/utils/eventBus";
  import LayoutEvent from "@/enums/LayoutEvent";

  @Component
  class LayoutHeader extends Vue {
    protected webSiteTitle: string = process.env.VUE_APP_TITLE;

    protected handleMainMenuToggle(): void {
      eventBus.$emit(LayoutEvent.TOGGLE_MAINMENU);
    }
  }

  export default LayoutHeader;
</script>
