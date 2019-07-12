<template>
  <CardBase
    iconTypeString="local_atm"
    iconStyleColor="green"
  >
    <VFlex
      class="text-xs-right"
      slot="title"
    >
      <span
        class="title">금액</span>
      <strong
        class="currency"
      >{{moneyAmountCurrency}}</strong>
      <span
        class="unit"
      >원</span>
    </VFlex>
    <VFlex>
      금액란은 숫자를 잘 정리해줍니다.
    </VFlex>
    <template
      slot="actions">
      <VIcon
        class="mr-1"
      >access_time
      </VIcon>
      {{registeredFormattedAt}}
    </template>
  </CardBase>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import CardBase from "@/components/cards/CardBase.vue";

  @Component<MoneyCard>({
    components: {
      CardBase,
    },
  })
  class MoneyCard extends Vue {
    @Prop()
    private moneyAmount: number;

    @Prop()
    private registeredAt: Date;

    protected get moneyAmountCurrency(): string {
      return Number(this.moneyAmount).toLocaleString();
    }

    protected get registeredFormattedAt(): string {
      return (this.registeredAt).toLocaleDateString();
    }
  }

  export default MoneyCard;
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
