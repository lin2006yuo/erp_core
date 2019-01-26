<template>
    <div class="nav-side">
        <el-menu
                class="el-menu-vertical-demo"
                background-color="#2D353C"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router = "true">
            <el-submenu v-for="(item,index) in router_list" :key="index" :index="`${index}`">
                <template slot="title">
                    <span>{{item.router_title}}</span>
                </template>
                <el-menu-item v-for="item_sub in item.router_sub_list" :key="item_sub.path" :index="item_sub.path">{{item_sub.title}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                router_list:[
                    {
                        router_title:"任务管理",
                        router_sub_list:[
                            {
                                path: "/home/task-control/task-management",
                                title: '任务管理器'
                            },
                            {
                                path:"/home/task-control/queue-management",
                                title:"队列管理"
                            },
                            {
                                path:"/home/task-control/swoole",
                                title:"swool"
                            }
                        ]
                    },
                    {
                        router_title:"Worker管理",
                        router_sub_list:[
                            {
                                path: "/home/workers",
                                title: 'Worker'
                            },
                            {
                                path:"/home/worker/detail",
                                title:"Worker服务器"
                            },
                            {
                                path:"/home/task-control/swoole",
                                title:"swool"
                            }
                        ]
                    }
                ],

            }
        }
    }
</script>
<style lang="stylus" scoped>
    .nav-side
        width 100%
        height 100%
        .el-menu-vertical-demo
            width 100%
            height 100%
</style>
