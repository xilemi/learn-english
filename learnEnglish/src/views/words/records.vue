<!-- @format -->

<template>
  <div style="padding: 20px">
    <div style="margin-bottom: 20px">
      <a-button type="primary" style="margin-right: 20px" @click="open = true"
        >新增</a-button
      >
    </div>
    <a-table
      :columns="columns"
      :row-key="(record) => record.uuid"
      :data-source="dataSource"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
    </a-table>
    <a-modal v-model:open="open" title="新增学习记录" @ok="handleOk">
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        autocomplete="off"
      >
        <a-form-item ref="name" label="学生姓名" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
      </a-form>
    </a-modal>
    <WordsItem :info="{ title: '12121' }" />
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import type { TableProps } from "ant-design-vue";
import { usePagination } from "vue-request";
import axios from "axios";
import WordsItem from "../../components/wordsItem.vue";
const formRef = ref();
const labelCol = { span: 5 };
const wrapperCol = { span: 13 };
let formState = reactive({
  name: "",
});
const columns = [
  {
    title: "学生姓名",
    dataIndex: "name",
    sorter: true,
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

type APIParams = {
  results: number;
  page?: number;
  sortField?: string;
  sortOrder?: number;
  [key: string]: any;
};
type APIResult = {
  results: {
    gender: "female" | "male";
    name: string;
    email: string;
  }[];
};

const queryData = (params: APIParams) => {
  //   return axios.get<APIResult>("https://randomuser.me/api?noinfo", { params });
  return [
    {
      gender: "female",
      name: "Tanya",
      email: "tanya@me.com",
      uuid: "12221",
    },
  ];
};

const {
  data: dataSource,
  run,
  loading,
  current,
  pageSize,
} = usePagination(queryData, {
  formatResult: (res) => res.data.results,
  pagination: {
    currentKey: "page",
    pageSizeKey: "results",
  },
});

const pagination = computed(() => ({
  total: 200,
  current: current.value,
  pageSize: pageSize.value,
}));

const handleTableChange: TableProps["onChange"] = (
  pag: { pageSize: number; current: number },
  filters: any,
  sorter: any
) => {
  run({
    results: pag.pageSize,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
};
const rules = {
  name: [{ required: true, message: "Please input your username!" }],
};
let open = ref(false);
const handleOk = () => {
  formRef.value.validate();

  open.value = false;
};
</script>
