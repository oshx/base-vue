<template>
  <CardBase
    iconTypeString="airport_shuttle"
    iconStyleColor="red"
  >
    <VFlex
      class="text-xs-right"
      slot="title"
    >
        <span
          class="title">오늘 이용</span>
      <strong
        class="currency"
      >{{seatFormattedCount}}</strong>
      <span
        class="unit"
      >건</span>
    </VFlex>
    <VFlex>
      버스면, 버스지. 택시겠느냐.
    </VFlex>
  </CardBase>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import CardBase from "@/components/cards/CardBase.vue";

  @Component<SeatCard>({
    components: {
      CardBase,
    },
  })
  class SeatCard extends Vue {
    @Prop()
    private seatCount: number;

    protected get seatFormattedCount(): string {
      return (Number(this.seatCount) + 0).toLocaleString();
    }
  }

  export default SeatCard;
</script>

<style lang="stylus"
       scoped>

  .title
    display block

  .currency
    font-size 2em
    font-weight bold

  .unit
    margin-left 4px
    font-size 1em
</style>
