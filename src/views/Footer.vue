<template>
  <div class="container">
    <div class="left"></div>
    <div class="right">
      <span
        >&copy;
        <a href="https://github.com/ma-tianxiang"> ma-tianxiang-2022. </a>
        All rights reserved.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 5px;
  box-sizing: border-box;

  .left {
    width: 70%;
  }
  .right {
    width: 30%;
    line-height: 50px;
    span {
      font-size: 16px;
      font-weight: 600;

      a{
        color: #007bff;
        font-weight: 600;
      }
    }
  }
}
</style>
