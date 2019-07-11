<template>
  <v-app light>
    <LayoutHeader></LayoutHeader>
    <LayoutMainMenu></LayoutMainMenu>
    <v-content>
      <router-view/>
    </v-content>
    <LayoutFooter></LayoutFooter>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import LayoutHeader from "@/components/layouts/LayoutHeader.vue";
  import LayoutFooter from "@/components/layouts/LayoutFooter.vue";
  import LayoutMainMenu from "@/components/layouts/LayoutMainMenu.vue";

  @Component<App>({
    components: {
      LayoutHeader,
      LayoutMainMenu,
      LayoutFooter,
    },
  })
  class App extends Vue {
  }

  export default App;
</script>
