<!--
  @author:  chen ming
  @date:    2021-06-06
  @file:    vue3-1
  @description:
-->
<template>
  <div>Header</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const state = reactive({});
    const refData = toRefs(state);
    return {
      ...refData
    };
  }
});
</script>

<style scoped lang="scss"></style>
