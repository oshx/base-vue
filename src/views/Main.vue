<template>
    <LayoutFrame>
        시험시험!!
    </LayoutFrame>
</template>

<script lang="ts">
    import LayoutFrame from '@/components/LayoutFrame.vue';
    import {Component, Vue} from 'vue-property-decorator';

    @Component<Main>({
        components: {
            LayoutFrame,
        },
    })
    export default class Main extends Vue {

    }
</script>
