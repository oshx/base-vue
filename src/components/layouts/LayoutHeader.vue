<template>
  <VToolbar
    dense
    fixed
    dark
    clipped-left
    app
  >
    <VToolbarSideIcon
      class="hidden-lg-and-up"
      @click="handleMainMenuToggle"
    ></VToolbarSideIcon>
    <VToolbarTitle
      tabindex="0"
      class="title-link"
      @click="goToHome"
    ><strong>{{webSiteTitle}}</strong>
    </VToolbarTitle>
    <VSpacer></VSpacer>
    <VToolbarItems class="hidden-sm-and-down">
      <VBtn
        flat
      >Link One
      </VBtn>
      <VBtn
        flat
      >Link Two
      </VBtn>
      <VBtn
        flat
      >Link Three
      </VBtn>
    </VToolbarItems>
  </VToolbar>
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
      return this.$router.push({name: RouteName.OVERVIEW});
    }
  }

  export default LayoutHeader;
</script>

<style lang="stylus"
       scoped>
  .title-link
    &, *
      cursor pointer
</style>
