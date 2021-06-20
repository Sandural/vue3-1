<!--
  @author:  chen ming
  @date:    2021-06-17
  @file:    vue3-1
  @description:
-->
<template>
  <div class="h-full w-full">
    <div class="bg-blue-200 h-[60px]">
      <MHeader />
    </div>
    <div class="w-full h-[calc(100%-60px)] flex">
      <div class="h-full w-[200px] bg-yellow-200">
        <!--<MSide />-->
      </div>
      <div class="h-full w-[calc(100%-200px)]">
        <Home />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import MSide from '@/components/Layout/MSide.vue';
import MHeader from '@/components/Layout/MHeader.vue';
import Home from './Home.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    MSide,
    MHeader,
    Home
  },
  setup() {
    const state = {
      collapsed: false
    }
    let refData = toRefs(state)

    function toggleCollapsed():void {
      state.collapsed = !state.collapsed
    }


    return {
      ...refData,
      toggleCollapsed
    }
  }
})
</script>

<style scoped lang="scss"></style>
