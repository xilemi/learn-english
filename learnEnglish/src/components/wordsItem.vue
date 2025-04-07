<!-- @format -->

<template>
  <div>
    <a-card :title="props.info.title" style="width: 600px" @click="onClick">
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
const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
const onClick = () => {
    // 点击选中  点击组个出现发音  外部传入函数?
  console.log("点击item");
};
const onAdd=()=>{
    console.log('点击新增')
}
</script>

<style scoped lang="less"></style>
