<template>
  <VFlex
    xs12
    sm8
    offset-sm-2
    md10
    offset-md-1
    xl8
    offset-xl-2
    pa-2
    class="apexcharts-area"
  >
    <VCard>
      <ApexChart
        type="area"
        :options="chartOptions"
        :series="series"
      />
    </VCard>
  </VFlex>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ApexCharts from "apexcharts";

@Component<LineColumnArea>({})
class LineColumnArea extends Vue {
  protected get chartOptions(): ApexCharts.ApexOptions {
    const categories: string[] = [];
    const data = (this.series[0].data as number[]);
    data.forEach((item,
                  index): void => {
      categories.push((index + 1) + "일차");
    });
    return {
      chart: {
        id: "vue-apexchart-odi-sameple",
        width: "100%",
      },
      xaxis: {
        categories,
      },
    };
  }

  protected get series(): ApexAxisChartSeries {
    return [{
      name: "이용 수",
      data: [
        1,
        0,
        15,
        30,
        40,
        35,
        50,
        49,
        60,
        70,
        814,
        172,
        322,
        91,
        12,
      ],
    }];
  }
}

export default LineColumnArea;
</script>
