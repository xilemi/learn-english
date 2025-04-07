<!-- @format -->
<template>
  <div style="background-color: #ececec; padding: 20px; height: 100%">
    <a-row :gutter="16">
      <a-col
        :span="8"
        v-for="item in learnTypeList"
        :key="item.id"
        class="gutter-row"
      >
        <a-card
          :title="item.title"
          :bordered="false"
          class="card-item"
          @click="gotoPage(item)"
        >
          <p>{{ item.content }}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
const router=useRouter()
interface learnType {
  id: number | string;
  title: string;
  content?: string;
  url?:string
}
const learnTypeList: Array<learnType> = [
  {
    id: 1,
    title: "小学",
    content: "单词学习",
    url:"learn"
  },
  {
    id: "2",
    title: "初中",
    content: "单词学习",
  },
  {
    id: "3",
    title: "高中",
    content: "单词学习",
  },
  {
    id: "4",
    title: "4级",
    content: "单词学习",
  },
];
const gotoPage=(item:learnType)=>{
    router.push({
        path:`/${item.url}`,
        query:{
            title:item.title
        }
    })
}
</script>

<style scoped lang="less">
.gutter-row {
  margin-bottom: 20px;
  .card-item {
    cursor: pointer;
  }
}
</style>
