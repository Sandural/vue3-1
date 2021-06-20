<!--
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-03 21:39:17
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2021-06-08 14:36:54
 * @FilePath     : /vue3-1/src/App.vue
-->
<template>
  <div class="w-full h-[100vh] selection:bg-red-300">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from "@/views/Layout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name:'App',
  components: {Layout}
})
</script>
<style lang="scss"></style>
