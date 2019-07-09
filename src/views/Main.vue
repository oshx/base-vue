<script lang="ts">
  import LayoutFrame from "@/components/LayoutFrame.vue";
  import {Component, Vue} from "vue-property-decorator";

  @Component<Main>({
    components: {
      LayoutFrame,
    },
  })
  class Main extends Vue {}

  export default Main;
</script>

<template>
  <LayoutFrame>시험시험!!</LayoutFrame>
</template>
