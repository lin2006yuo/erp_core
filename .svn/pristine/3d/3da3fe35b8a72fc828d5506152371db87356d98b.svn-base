<template>
    <el-dialog
            :title="title"
            :visible.sync="show"
            width="1100px"
            :before-close = "handle_close">
            <div class="">
                <el-row class="mb-md">
                    <el-col :span="18">
                        执行时间在：2018-xx-xx
                    </el-col>
                    <el-col :span="6">
                        最近
                        <span class="inline mr-sm" style="width:75px">
                            <el-input size="mini"></el-input>
                        </span>
                        条
                        <el-button size="mini" type="primary">刷新</el-button>
                    </el-col>
                </el-row>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop=""
                            width="150px"
                            align="center"
                            label="时间">
                    </el-table-column>
                    <el-table-column
                            prop=""
                            width="150px"
                            align="center"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            prop=""
                            align="center"
                            label="备注">

                    </el-table-column>
                </el-table>
            </div>
            <span slot="footer">
                <el-button size="mini" @click="handle_close">关闭</el-button>
            </span>
    </el-dialog>
</template>
<script>
    export default {
        name: "task-detail",
        data(){
            return{
                show:this.value,
                tableData:[]

            }
        },
        methods:{
            handle_close(){
                this.show = false;
            }
        },
        props:{
            title:{
                type:String,
                require:true
            },
            value:{
                type:Boolean,
                require:true
            }
        },
        watch:{
            value(val){
                this.show = val;
            },
            show(val){
                this.$emit("input",val);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    >>>.el-dialog__body
        padding-top 10px
</style>