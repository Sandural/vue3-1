<!--
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-06 04:32:48
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2021-06-08 22:46:35
 * @FilePath     : /vue3-1/src/components/Layout/MSide.vue
-->
<template>
<!--  <a-menu-->
<!--    class="h-full border-r-0 bg-blue-300"-->
<!--    mode="inline"-->
<!--    :default-selected-keys="selectKey"-->
<!--    :default-open-keys="openkey"-->
<!--  >-->
<!--    <template v-for="menu in menuData" :key="menu.name">-->
<!--      {{menu}}-->
<!--      <a-sub-menu v-if="menu.children.length">-->
<!--        <template v-slot:title>-->
<!--          {{ menu.name }}-->
<!--        </template>-->
<!--        <a-menu-item v-for="menuItem in menu.children" :key="menuItem.name">-->
<!--          {{ menuItem.item }}-->
<!--        </a-menu-item>-->
<!--      </a-sub-menu>-->
<!--      <a-menu-item v-else>-->
<!--        {{ menu.name }}-->
<!--      </a-menu-item>-->
<!--    </template>-->
<!--  </a-menu>-->
  hello world
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from "vue";
import { PieChartFilled, SlidersFilled } from "@ant-design/icons-vue";
// import Api from '@/api'

export default defineComponent({
  name: "Side",
  components: {
    PieChartFilled,
    SlidersFilled,
  },
  setup() {
    let state = reactive({
      current: "0",
      menuData: [
        {
          name: "用户列表",
          children: [
            {
              name: "用户列表",
              path: "/user",
            },
            {
              name: "用户区域分布",
              path: "/user/areas",
            },
          ],
        },
        {
          name: "用户详情",
          path: "/user/:id",
        },
      ],
      selectKey: [],
      openkey: []
    });

    const refData = toRefs(state);
    console.log('xxx', refData.menuData.value)
    return {
      ...refData,
    };
  },
});
</script>

<style scoped lang="scss"></style>
