<template>
    <el-row>
        <el-card class="mb-md">
            <div class="inline mr-sm">
                状态：
                <el-button v-for="item in btn_list"
                           size="mini" class="ml-sm"
                           :data-status = "item.status"
                           :type="currentStatus===item.status?'primary':''"
                           @click="btn_click(item)">
                    {{item.text}}</el-button>
            </div>
            <div class="inline ml-lg">
                搜索：
                <el-select v-model="value" placeholder="请选择" size="mini" class="ml-sm inline">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-row class="inline">
                    <el-input class="ml-sm inline "
                              size="mini">
                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-row>
            </div>
        </el-card>
        <el-row class="ml-md mb-md">
            <el-button type="primary" plain size="mini">进度</el-button>
            <el-button type="primary" plain size="mini">刷新</el-button>
            <el-button type="warning" size="mini">Reload 最后刷新时间：xxxxxx</el-button>
        </el-row>
    </el-row>
</template>
<script>
    export default {
        data(){
            return {
                currentStatus:1,
                btn_list:[
                    {status:1,text:"全部"},
                    {status:2,text:"未执行"},
                    {status:3,text:"等待执行"},
                    {status:4,text:"正在执行"},
                    {status:5,text:"任务管理"}
                ],
                options:[
                    {value:1,label:"任务名"},
                    {value:2,label:"任务类"},
                    {value:3,label:"任务描述"},
                    {value:4,label:"任务作者"}
                ],
                value:''
            }
        },
        methods:{
            btn_click(item){
                this.currentStatus = item.status;
            }
        },
        props:{
            searchData:{
                required:true,
                type:Object
            }
        }
    }

</script>
<style lang="stylus" scoped></style>