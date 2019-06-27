<template>
    <vLayout>
        <slot name="layoutHeader"></slot>
        <slot></slot>
        <slot name="layoutFooter"></slot>
    </vLayout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class LayoutFrame extends Vue {

}
</script>
