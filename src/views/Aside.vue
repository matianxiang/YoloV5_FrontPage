<template>
  <div class="container">

    <header>
      <div>
        <el-icon style="vertical-align: middle">
          <platform />
        </el-icon>
        <span>实验操作面板</span>
      </div>
    </header>
    <main>
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        active-text-color="#ffd04b"
        text-color="#fff"
        router="true"
        default-active="3"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>项目引言</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/introduction">在线文档</el-menu-item>
            <el-menu-item index="/home/introduction">参考资料</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>体系架构</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/theory">原理支持</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <document />
            </el-icon>
            <span>实验测试</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/operate">实验环境和平台</el-menu-item>
            <el-menu-item index="/home/operate">图片模式</el-menu-item>
            <el-menu-item index="/home/operate">视频模式</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref,defineProps } from 'vue'
import {
  Menu as IconMenu,
  Setting,
  Document,
  Location,
  Platform,
} from '@element-plus/icons-vue'

const props = defineProps({
  isCollapse:{
    type: Boolean,
    required: true
  }
})


const isCollapse = ref(props.isCollapse)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: #545c64;
  display: felx;
  flex-direction: column;

  header {
    padding: 40px 10px 30px;

    div {
      color: rgb(238, 211, 5);
      font-size: 20px;

      span {
        padding-left: 5px;
        vertical-align: middle;
        letter-spacing: 1px;
      }
    }
  }

  :deep(main) {
    .el-sub-menu{
      width: 200px;
    }
    .el-menu-item {
      font-size: 14px;
    }
    .el-menu-item:hover {
      color: rgb(238, 211, 5);
    }

    .el-menu-item-group__title {
      padding: 0px;
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
