/** @format */

import { createRouter, createWebHashHistory } from "vue-router";
const layout = () => import("@/components/layout.vue");
const words = () => import("@/views/words/index.vue");
const learn = () => import("@/views/words/learn.vue");
const records = () => import("@/views/words/records.vue");
const selectWords = () => import("@/views/words/selectWords.vue");
const routes = [
  {
    path: "/",
    component: layout,
    redirect: "/records",
    children: [
      {
        path: "/records",
        name: "records",
        component: records,
      },
      {
        path: "/words",
        name: "words",
        component: words,
      },
      {
        path: "/learn",
        name: "learn",
        component: learn,
        meta: {
          title: "学习情况",
        },
      },
      {
        path: "/selectWords",
        name: "selectWords",
        component: selectWords,
        meta: {
          title: "选择词汇",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
