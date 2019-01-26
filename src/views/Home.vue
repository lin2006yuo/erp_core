<template>
  <div class="home">
    <el-row class="nav-header">
      <nav-header></nav-header>
    </el-row>
    <el-row class="container-wrap">
      <div class="nav-side">
        <nav-side></nav-side>
      </div>
      <div class="container">
        <router-view/>
      </div>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{}
  },
  components: {
      "nav-header":require("./nav-header.vue").default,
      "nav-side":require("./nav-side.vue").default
  }
}
</script>
<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  box-sizing border-box
  .nav-header
    width 100%
    min-width 1366px
    height 60px
  .container-wrap
    width 100%
    min-width 1366px
    height calc(100% - 60px)
    .nav-side
      display:inline-block
      width 200px
      min-width 200px
      height 100%
      float left
      .el-menu-vertical-demo
        width 100%
        height 100%
    .container
      display inline-block
      width calc(100% - 200px)
      min-width 1165px
      height 100%
      padding 15px
      box-sizing border-box
      float left
</style>
