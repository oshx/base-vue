<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  class LayoutFrame extends Vue {
  }

  export default LayoutFrame;
</script>

<template>
  <v-container fluid>
    <slot name="layoutHeader"></slot>
    <v-flex>
      <slot></slot>
    </v-flex>
    <slot name="layoutFooter"></slot>
  </v-container>
</template>
