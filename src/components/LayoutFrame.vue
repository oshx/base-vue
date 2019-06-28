<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class LayoutFrame extends Vue {}
</script>

<template>
  <v-container fluid>
    <slot name="layoutHeader"></slot>
    <slot></slot>
    <slot name="layoutFooter"></slot>
  </v-container>
</template>
