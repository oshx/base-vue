<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component<LayoutFrame>({
  })
  class LayoutFrame extends Vue {
  }

  export default LayoutFrame;
</script>

<template>
  <v-container fluid>
    <v-flex>
      <slot></slot>
    </v-flex>
  </v-container>
</template>
