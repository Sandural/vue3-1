<!--
 * @Description  :
 * @Author       : chen ming
 * @Date         : 2021-06-08 14:35:06
 * @LastEditors  : chen ming
 * @LastEditTime : 2021-06-20 17:05:34
 * @FilePath     : /vue3-1/src/views/Home.vue
-->
<template>
    <div class="w-full h-full">
      <div class="bg-blue-500 h-[60px] flex items-center px-3">
        <a-button type="danger" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-breadcrumb class="ml-4">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
      </div>

      <div class="h-[calc(100%-60px)]
        w-full
        bg-white
        overflow-scroll
        px-3"
        ref="mainContent">
          <span class="text-9xl text-transparent bg-gradient-to-r from-rose-300 to-rose-900 bg-clip-text">Gradients are Fantastic!</span>
      </div>
    </div>
</template>

<script lang="ts">
// import { getCurrentInstance, ref } from "vue";
import { reactive, toRefs, onMounted } from "vue";
import { TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
    components: {
      TransitionChild, TransitionRoot
    },
    setup() {

      const stateData: any = reactive({
        collapsed: false,
        mainContent: null,
        ingredients: ['avocados', 'toast', 'eggs', 'salt & pepper', 'lemon', 'baby spinach', 'olive oli', ''],
        isShow: true
      });

      // ctx 等同于 vue2.x 的 this
      // let ctx = getCurrentInstance()!.appContext.config.globalProperties.$mitter;
      // ctx.emit('isCollapse', stateData.collapsed)
      // console.log(ctx);
      const methods = {
        toggleCollapsed: () => {
          stateData.collapsed = !stateData.collapsed;
        },
      };

      onMounted(() => {
          console.log(stateData.mainContent);
      });

      const refData = toRefs(stateData);
      return {
        ...refData,
        ...methods
      }
    },
}
</script>
