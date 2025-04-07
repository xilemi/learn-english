<!-- @format -->

<template>
  <div>
    <div class="header-title">{{ title }}</div>
    <div ref="chartRef" class="chart"></div>
    <div class="footer-btn">
      <a-button style="background-color: #ff9719;border: none;margin-right: 50px;width: 200px;">开始学习</a-button>
      <a-button type="primary" style="width: 200px;">继续复习</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
const route = useRoute();
let title = ref<string>("");
const chartRef = ref(null); // 用于获取 DOM 节点
const chartInstance = ref(null);
const initChart = () => {
  // 获取 DOM 节点
  const chartDom = chartRef.value;
  chartInstance.value = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "horizontal", // 水平排列
      left: "center", // 水平居中
      bottom: "0",
      data: ["今日识词", "今日待复习", "累计识词"],
      formatter: function (name) {
        // 根据name找到对应的value
        const data = option.series[0].data;
        const item = data.find((item) => item.name === name);
        return `${name}: ${item ? item.value : 0}`; // 显示格式：名称: 数量
      },
      itemGap: 30,
    },
    series: [
      {
        name: "学习情况",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 100, name: "今日识词" },
          { value: 20, name: "今日待复习" },
          { value: 80, name: "累计识词" },
        ],
        label: {
          show: true, // 显示标签
          position: "outside", // 标签显示在扇形外部
          formatter: "{b}: {c} ({d}%)", // 格式化显示：名称: 数值（百分比）
        },
      },
    ],
  };
  // 使用图表配置项
  chartInstance.value.setOption(option);
};

onMounted(() => {
  title.value = route.query.title;
  initChart();
});
</script>

<style scoped lang="less">
.header-title {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
}
.chart {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  margin-top: 150px;
}
.footer-btn {
  text-align: center;
  margin-top: 100px;
}
</style>
