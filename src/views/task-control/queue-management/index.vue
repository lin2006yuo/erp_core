<template>
    <el-row>
        <el-row>
            <el-col :span="18">
                <el-tabs>
                    <el-tab-pane v-for="(item,index) in tab_list" :key="index" :label="item.label">
                        <component :is="item.component"></component>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="6">
                <div class="right-content-wrap">
                    <div class="parameter-status">
                        <div class="parameter-status-title">参数/状态</div>
                        <div class="mt-md mb-md ml-lg"> Task：/ <el-button size="mini">更新</el-button><el-button size="mini">详情</el-button>    </div>
                        <div class="tabs-wrap">
                            <el-tabs>
                                <el-tab-pane label="当前队列">
                                    <el-table
                                            :data="tableData"
                                            border
                                            style="width: 100%">
                                        <el-table-column
                                                prop=""
                                                align="center"
                                                label="taskID">
                                        </el-table-column>
                                        <el-table-column
                                                prop=""
                                                align="center"
                                                label="worker">
                                        </el-table-column>
                                        <el-table-column
                                                prop=""
                                                align="center"
                                                label="update">
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="本次历史">
                                    <el-table
                                            :data="tableData"
                                            border
                                            style="width: 100%">
                                        <el-table-column
                                                prop=""
                                                align="center"
                                                label="时间">
                                        </el-table-column>
                                        <el-table-column
                                                prop=""
                                                align="center"
                                                label="队列">
                                        </el-table-column>
                                        <el-table-column
                                                prop=""
                                                align="center"
                                                label="元素">
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
    import {action} from './action.js'
    export default {
        data(){
            return {
                tab_list:action,
                tableData:[]

            }
        },
        methods:{

        }
    }
</script>
<style lang="stylus" scoped>
    .right-content-wrap
        margin-top 25px
        padding 10px
        box-sizing border-box
        .parameter-status
            width 100%
            border 1px solid #ebeef5
            border-radius 3px
            box-shadow 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04)
        .parameter-status-title
            width 100%
            height 32px
            background-color #6495ED
            font-size 12px
            color #333
            line-height 32px
            text-indent 8px
            border-top-left-radius 3px
            border-top-right-radius 3px
        .tabs-wrap
            padding 0 10px 10px 10px
            box-sizing border-box


</style>