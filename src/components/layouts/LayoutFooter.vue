<template>
  <v-footer
    app
    dark
    class="pa-3"
  >
    <address>
      &copy; {{copyRightMessage}}
    </address>
  </v-footer>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  class LayoutFooter extends Vue {
    protected copyRightMessage: string = process.env.VUE_APP_AUTHOR;
  }

  export default LayoutFooter;
</script>

<style lang="stylus"
       scoped>
  address
    display block
    text-align center
    font-style normal
    white-space nowrap
    flex 1
</style>
