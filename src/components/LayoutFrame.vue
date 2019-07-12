<template>
  <VContainer fluid>
    <slot></slot>
  </VContainer>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component<LayoutFrame>({
  })
  class LayoutFrame extends Vue {
  }

  export default LayoutFrame;
</script>
