<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" height="100%">
        <aside-page :isCollapse = isCollapse></aside-page>
      </el-aside>
      <el-container>
        <el-header style="padding:0px" >
          <header-page :isCollapse = isCollapse></header-page>
        </el-header>
        <el-main style="background-color:#eceef1">
          <main-page></main-page>
        </el-main>
        <el-footer style="padding:0px">
          <footer-page></footer-page>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import AsidePage from './Aside.vue'
import HeaderPage from './Header.vue'
import MainPage from './Main.vue'
import FooterPage from './Footer.vue'
import { defineComponent} from 'vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    AsidePage,
    HeaderPage,
    MainPage,
    FooterPage,
  },
  setup(){
    let isCollapse:Boolean = false

    return {
      isCollapse,
      }
  }
})
</script>

<style lang='scss' scoped>
  .common-layout{
    height: 100%;
  }
</style>