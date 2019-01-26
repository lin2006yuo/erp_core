<template>
    <div class="nav-header">
        <el-row>
            <el-col :span="3">
                <div class="logo-image"></div>
            </el-col>
            <el-col :span="21">


            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
    }
</script>
<style lang="stylus" scoped>
.nav-header
    width 100%
    height 60px
    background-color #2D353C
    .logo-image
        width 118px
        height 18px
        margin-top 20px
        margin-left 35px
        margin-bottom 20px
        background url("../assets/logo.png") no-repeat
        background-size 100% 100%

</style>