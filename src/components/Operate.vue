<template>
  <div
    class="container"
    :style="{
      backgroundImage: 'url(' + require('../assets/image/02.jpg') + ')'
    }"
  >
    <div class="upload">
      <transition name="el-zoom-in-top">
        <el-card class="box-card" v-show="show" style="height: 100%">
          <template v-slot:header>
            <div class="clearfix" style="text-align: center">
              <span>上传图片(.jpg/png)</span>
            </div>
          </template>
          <div class="transition-box" style="display: flex; margin-top: 40px">
            <el-upload
              ref="upload"
              class="upload-demo"
              drag
              :action="uploadPath"
              multiple
              style="margin: auto"
              list-type="picture"
              limit="1"
              accept=".jpg, .jpeg, .png"
              :before-upload="beforeUpload"
              :on-exceed="exceed"
              :on-success="uploadSuccess"
              :on-error="uploadError"
              :on-remove="fileRemove"
              :file-list="imageList"
            >
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <template #tip>
                <div class="el-upload__tip" style="text-align: center">
                  文件上传速度跟当前环境有关，请耐心等待
                </div>
              </template>
            </el-upload>
          </div>

          <!--<form :action="imgpath" enctype="multipart/form-data" method="post" style="margin: auto">-->
          <!--<input type="file" name="upload" multiple="multiple"><br>-->
          <!--<input type="submit" value="Upload">-->
          <!--</form>-->
        </el-card>
      </transition>
      <el-button
        type="primary"
        size="big"
        style="float: right"
        v-show="!show"
        @click="show = !show"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        上传
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'

import useCurrentInstance from '@/utils/useCurrentInstance'

const { proxy } = useCurrentInstance()

// 上传路由
// const uploadPath = proxy.$basePath + '/api/upload'
const uploadPath = '/api/upload'
// 引用路径
let imgPath = ref(proxy.$basePath + '/file/') //然后动态绑定背景图片 :style = "{backgroundImage:imgPath}"

const show = ref(false)

const upload: any = ref(null)

// 上传图片超出数量限制时的钩子
const exceed = (files, fileList) => {
  proxy.$message.error('最多上传1张图片哦！')
}

// 文件上传前的钩子，数为上传的文件
const beforeUpload = (file: any) => {
  // 判断图片是否大于2M
  const isLt2M = file.size / 1024 / 1024 < 2
  // const fileType = file.name.substring(file.name.lastIndexOf('.')+1)
  // 判断图片的类型
  const isJpg =
    file.type == 'image/jpeg' ||
    file.type == 'image/jpg' ||
    file.type == 'image/png'
  if (!isJpg) {
    proxy.$message.error('只能上传jpg, jpeg, png格式的图片！')
    return false
  }
  if (!isLt2M) {
    proxy.$message.error('上传图片大小不能超过 2MB!')
    return false
  }
}

const uploadSuccess = (res: any, file: any, fileList: any) => {
  if (res.code !== 200) {
    return proxy.$message.error(res.msg)
  }
  // 返回图片的路径
  imgPath = res.data.imgPath
  alert('返回成功')
}

//  上传失败时的钩子
const uploadError = () => {
  return proxy.$message.error('上传失败，检查网络原因')
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  // background-image: url(../assets/image/02.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;

  .upload {
    height: 100%;
  }
}
</style>
