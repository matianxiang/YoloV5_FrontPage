<template>
  <div class="container">
    <div class="uploadBox">
      <div class="upload">
        <el-collapse-transition>
          <el-card
            class="box-card"
            v-show="reactiveData.show"
            style="width: 100%"
          >
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
                :file-list="reactiveData.fileList"
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
          </el-card>
        </el-collapse-transition>
      </div>
    </div>
    <div class="top_button">
      <el-button
        type="primary"
        size="big"
        style=""
        v-show="!reactiveData.show"
        @click="reactiveData.show = !reactiveData.show"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        上传
      </el-button>
      <el-button
        type="primary"
        size="big"
        style=""
        v-show="reactiveData.show"
        @click="reactiveData.show = !reactiveData.show"
      >
        <el-icon class="el-icon--upload"><close /></el-icon>
        取消
      </el-button>
    </div>
    <div class="pictureBox">
      <h2>已处理的图片</h2>
      <hr />
      <div class="imgBox" v-if="reactiveData.imgShow">
        <div
          v-for="(item, index) in reactiveData.imgArr"
          :key="item.date"
          class="imgItem"
        >
          <img :src="item.imgPath" alt="" />
          <div class="date">上传时间：{{ item.date }}</div>
          <div class="index">序号：{{ index }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { UploadFilled, Close } from '@element-plus/icons-vue'

import useCurrentInstance from '@/utils/useCurrentInstance'

const { proxy } = useCurrentInstance()

// 上传路由
// const uploadPath = proxy.$basePath + '/api/upload'
const uploadPath = '/api/upload'

let reactiveData = reactive({
  show: false,
  imgArr:[],
  imgShow: false,
  fileList: []
})


const upload: any = ref(null)

//上传图片超出数量限制时的钩子
const exceed = () => {
  proxy.$message.error('最多同时上传1张图片哦！')
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
  console.log(res, 'res')
  if (Number(res.code) !== 200) {
    return proxy.$message.error('上传不成功,请检查网络')
  }
  // 返回图片的路径
  reactiveData.imgArr.unshift(res.data[0])
  reactiveData.imgShow = true
  setTimeout(() => {
    reactiveData.fileList = []
    reactiveData.show = false
  }, 1000)
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

  .pictureBox {
    h2 {
      text-align: center;
    }
    .imgBox {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    
      
      .imgItem {
        width: 30%;
        height: 30%;
        padding-bottom: 5px;

        img{
          height: 100%;
          width: 100%;
        }
        .date{
            color: rgb(159, 144, 144);
            font-size: 14px;
            text-align: center;
        }
        .index{
          color: rgb(158, 161, 164);
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }

  .uploadBox {
    width: 60%;
    margin: 0 auto;

    .upload {
      // height: 100%;
      width: 60%;
      position: absolute;
    }
  }

  .top_button {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
