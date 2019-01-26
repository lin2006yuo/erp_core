<template>
    <div class="login-wrap">
        <div class="login-inner">
            <div class="login-left fl"></div>
            <div class="login-right fr">
                <div class="control-bar"></div>
                <div class="login-box">
                    <div class="basic-input">
                        <input type="text"  placeholder="账号">
                    </div>
                    <div class="basic-input">
                        <input type="text"  placeholder="密码">
                    </div>
                    <div class="basic-input">
                        <input type="text"  placeholder="验证码">
                        <span class="vertication-img">
                            <!--<img src="" alt="">-->
                        </span>
                    </div>
                    <div class="login-submit pointer">登 录</div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style lang="stylus" scoped>
.login-wrap
    width 100%
    height 100%
    /*background-color #9CDAF8*/
    background linear-gradient(0deg,#9CDAF8,#0763C0 71.5%)
    position relative
    .login-inner
        width 662px
        height 406px
        background-color #fff
        border-radius 10px
        box-shadow 0 5px 15px rgba(0,89,165,0.3)
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        .login-left
            width 247px
            height 100%
            background url("../../assets/banner-left.png") no-repeat
            -webkit-background-size: cover
            background-size: cover
            border-top-left-radius 10px
            border-bottom-left-radius 10px
            position relative
            &:after{
                content ""
                display:block
                width 131px
                height 21px
                position absolute
                top 30px
                left 50%
                transform translateX(-50%)
                background url("../../assets/logo.png") no-repeat
            }
        .login-right
            width 415px
            height 100%
            border-top-right-radius 10px
            border-bottom-right-radius 10px
            .control-bar
                width 100%
                height 50px
            .login-box
                padding-left 50px
                padding-right 50px
                box-sizing border-box
                .basic-input
                    width 100%
                    margin-top 22px
                    border-bottom 1px solid #4aafe7
                    &>input
                        display inline-block
                        width 100%
                        height 38px
                        border none
                        outline none
                        padding-left 50px
                        box-sizing border-box
                        &::-webkit-input-placeholder {/* WebKit, Blink, Edge */
                            color #83cbf3
                            font-size 15px
                        }
                        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                            color #83cbf3
                            font-size 15px
                        }
                        &::-moz-placeholder { /* Mozilla Firefox 19+ */
                            color #83cbf3
                            font-size 15px
                        }
                        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                            color #83cbf3
                            font-size 15px
                        }
                    &:nth-of-type(1)
                        &>input
                            background url("../../assets/account.png") no-repeat
                            background-position 5px 50%
                    &:nth-of-type(2)
                        &>input
                            background url("../../assets/password.png") no-repeat
                            background-position 5px 50%
                    &:nth-of-type(3)
                        border:none
                        &>input
                            width 175px
                            border-bottom 1px solid #4aafe7
                            background url("../../assets/verification-code.png") no-repeat
                            background-position 5px 50%
                    .vertication-img
                        display inline-block
                        width 128px
                        height 44px
                        background #EBEBEB
                        vertical-align: bottom
                        margin-left 12px
                        &>img
                            width 100%
                            height 100%
                .login-submit
                    width 240px
                    height 48px
                    background-color #3d9ef9
                    border-radius 24px
                    line-height 48px
                    text-align: center
                    color #ffffff
                    font-size 18px
                    margin 60px auto
                    box-shadow 5px 5px 15px rgba(61,158,249,0.3)

</style>