<template>
  <LayoutFrame>
    <VLayout
      wrap
      justify-center
    >
      <MoneyCard
        :moneyAmount="moneyAmount"
        :registeredAt="registeredAt"
      />
      <SeatCard
        seatCount="15"
      />
      <LineColumnArea
      />
    </VLayout>
  </LayoutFrame>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import LayoutFrame from "@/components/LayoutFrame.vue";
  import MoneyCard from "@/components/cards/MoneyCard.vue";
  import SeatCard from "@/components/cards/SeatCard.vue";

  @Component<Overview>({
    components: {
      LayoutFrame,
      MoneyCard,
      SeatCard,
      LineColumnArea: () => import("@/components/charts/LineColumnArea.vue"),
    },
  })
  class Overview extends Vue {
    protected get registeredAt(): Date {
      return new Date();
    }

    protected get moneyAmount(): number {
      return 150000000;
    }
  }

  export default Overview;
</script>
