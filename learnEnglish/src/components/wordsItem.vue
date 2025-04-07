<!-- @format -->

<template>
  <div style="margin-bottom: 10px" class="words-item">
    <a-card
      :title="props.info.title"
      style="width: 800px"
      @click="onClick"
      :bordered="false"
      :class="props.info.isSelect ? 'is-select' : ''"
    >
      <template #extra>
        <slot></slot>
      </template>
      <a-row class="word-content">
        <a-col :span="6">
          <p>翻译:card content</p>
        </a-col>
        <a-col :span="6">
          <p>音标:card content</p>
        </a-col>
        <a-col :span="6">
          <p>词性:card content</p>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch } from "vue";
const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
  itemFunc: {
    type: Function,
    default: () => {},
  },
});
const onClick = () => {
  props.itemFunc();
  console.log(props.info);
  // 点击选中  点击组个出现发音  外部传入函数?
};
const onAdd = () => {
  console.log("点击新增");
};
watch(
  () => props.info.isSelect,
  (newVal) => {
    console.log(newVal,'props.info.isSelect);');
  },
    {
        immediate: true,
        deep: true,
    }
);
</script>

<style scoped lang="less">
.words-item {
  margin-bottom: 20px;
  cursor: pointer;
  ::v-deep {
    .ant-card .ant-card-head {
      border: none;
    }
  }
  .is-select {
    background-color: #ff9719;
    color: #fff;
  }
}
</style>
