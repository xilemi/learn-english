<!--
 * @LastEditors: wangrui
 * @Description: 
 * @Date: 2025-04-08 13:54:36
 * @LastEditTime: 2025-04-08 16:05:56
 * @FilePath: \learn-english\learnEnglish\src\views\words\selectWords.vue
-->
<!-- @format -->

<template>
  <div class="select-words">
    <div class="select-content">
      <div class="words-content">
        <wordsItem
          v-for="item in wordsList"
          :key="item.title"
          :info="item"
          :item-func="itemFunc(item)"
        />
      </div>
      <div class="select-info">已选:{{ totalWords }}</div>
    </div>
    <div class="footer-btn">
      <a-button
        style="
          background-color: #ff9719;
          border: none;
          margin-right: 50px;
          width: 200px;
        "
        >随机选择</a-button
      >
      <a-button type="primary" style="width: 200px">开始学习</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import wordsItem from "../../components/wordsItem.vue";
import { computed, reactive } from "vue";
let wordsList = reactive([
  {
    title: "name1",
    remarks: "名字",
    isSelect: true,
  },
  {
    title: "name2",
    remarks: "名字",
  },
  {
    title: "name3",
    remarks: "名字",
  },
  {
    title: "name4",
    remarks: "名字",
  },
  {
    title: "name5",
    remarks: "名字",
  },
  {
    title: "name6",
    remarks: "名字",
  },
  {
    title: "name7",
    remarks: "名字",
  },
  {
    title: "name8",
    remarks: "名字",
  },
  {
    title: "name9",
    remarks: "名字",
  },
  {
    title: "name10",
    remarks: "名字",
  },
  {
    title: "name11",
    remarks: "名字",
  },
  {
    title: "name12",
    remarks: "名字",
  },
  {
    title: "name13",
    remarks: "名字",
  },
  {
    title: "name14",
    remarks: "名字",
  },
  {
    title: "name15",
    remarks: "名字",
  },
  {
    title: "name16",
    remarks: "名字",
  },
  {
    title: "name17",
    remarks: "名字",
  },
]);
function itemFunc(item: any) {
  return () => {
    // 点击选中  点击组个出现发音  外部传入函数?
    const index = wordsList.findIndex((word) => word.title === item.title);
    if (index !== -1) {
      wordsList.splice(index, 1, {
        ...item,
        isSelect: !item.isSelect,
      });
    }
    console.log(wordsList);
  };
}

const totalWords = computed(() => {
  return wordsList.filter((item:any) => item?.isSelect).length;
});
</script>

<style lang="less" scoped>
.select-words {
  padding: 30px 80px 0;
  .select-content {
    display: flex;
    .words-content {
      height: 600px;
      overflow-y: auto;
    }
    .select-info {
      margin-left: 100px;
      font-size: 20px;
      color: #fff;
    }
    .words-content::-webkit-scrollbar {
      display: none; /* 隐藏滚动条 */
    }
  }
  .footer-btn {
    text-align: center;
    margin-top: 100px;
  }
}
</style>
