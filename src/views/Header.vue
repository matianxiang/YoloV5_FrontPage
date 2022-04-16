<template>
  <div class="container">
    <div class="icon">
      <el-icon style="vertical-align: middle">
        <expand />
      </el-icon>
    </div>
    <div class="title">
      <span>基于YOLOv5的无人机森林火灾监测平台</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Expand } from '@element-plus/icons-vue'
import { defineProps, ref } from 'vue'
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
})

 const isCollapse = ref(props.isCollapse)

</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  color: #7e7e7e;
  line-height: 40px;

  .icon {
    width: 5%;
    font-size: 20px;
  }

  .icon:hover {
    color: #646161;
  }

  .title {
    width: 90%;
    text-align: center;
    letter-spacing: 1px;
    color: #646161;
  }
}
</style>
