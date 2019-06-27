<template>
    <vApp>
        <RouterView/>
    </vApp>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component<App>({
    // life cycle hooks
})
export default class App extends Vue {

}
</script>
