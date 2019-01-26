<template>
    <el-row>
        <search :searchData = "searchData"></search>
        <el-row>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop=""
                        align="center"
                        label="任务名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop=""
                        align="center"
                        label="任务作者"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop=""
                        align="center"
                        label="操作">
                </el-table-column>
                <el-table-column
                        align="center"
                        label="操作">
                    <template slot-scope="scope">
                        <span >启用</span><span>停用</span>|<span>新增</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop=""
                        align="center"
                        label="(ID)名称">
                </el-table-column>
                <el-table-column
                        prop=""
                        align="center"
                        label="时间参数">
                </el-table-column>
                <el-table-column
                        prop=""
                        align="center"
                        label="开始-结束(时间)">
                </el-table-column>
                <el-table-column
                        align="center"
                        label="启用状态">
                    <template slot-scope="scope"></template>
                </el-table-column>
                <el-table-column
                        prop=""
                        align="center"
                        label="运行状态">
                </el-table-column>
                <el-table-column
                        align="center"
                        label="操作">
                    <template slot-scope="scope">

                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <task-dialog v-model="taskDialogShow"
                     title="测试的标题">
        </task-dialog>
        <task-detail v-model="taskeDetailShow"
                     title = "测试的详情标题"

        ></task-detail>
    </el-row>
</template>
<script >
    export default{
        data(){
            return {
                flag:0,// 0 新建  1 编辑
                searchData:{

                },
                tableData:[],
                taskDialogShow:false,
                taskeDetailShow:true
            }
        },
        components:{
            "search":require("./search.vue").default,
            "task-dialog":require("./task-dialog.vue").default,
            "task-detail":require("./task-detail.vue").default
        }
    }
</script>
<style lang="stylus" scoped>

</style>