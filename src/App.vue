<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        errorCaptured(err, vm, info) {
            console.error('error', err)
            console.error('错误组件', vm.$vnode.tag)
            console.error('错误信息', info)
            return false;
        },
    }
</script>
<style lang="stylus">
    html, body, #app
        width 100%
        height 100%
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
</style>
