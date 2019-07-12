<template>
  <VFlex
    xs12
    sm8
    offset-sm-2
    md5
    offset-md-0
    xl4
    pa-2
    full-height
  >
    <VCard
      height="100%"
    >
      <VCardTitle>
        <VCard
          dark
          class="pa-3"
          :class="iconStyleColor">
          <VIcon
            xLarge
          >{{iconTypeString}}
          </VIcon>
        </VCard>
        <slot name="title"></slot>
      </VCardTitle>
      <VCardText>
        <slot></slot>
      </VCardText>
      <VCardActions>
        <slot name="actions"></slot>
      </VCardActions>
    </VCard>
  </VFlex>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  class CardBase extends Vue {
    @Prop()
    protected iconTypeString: string;

    @Prop()
    protected iconStyleColor: string;
  }

  export default CardBase;
</script>
