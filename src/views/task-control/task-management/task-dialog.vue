<template>
    <el-dialog
        :title="title"
        :visible.sync="show"
        width="1100px"
        :before-close = "handle_close">
        <el-row>
            <el-col :span="18" :offset="3">
                <span>任务名：</span>
                <div class="inline" style="width:calc(100% - 60px)">
                    <el-input size="mini" placeholder="任务名长度不能小于6"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row class="mt-md mb-md">
            <el-col :span="8" :offset="8">
                <span>进程模式：</span>
                <el-radio-group v-model="value5">
                    <el-radio :label="1">永远</el-radio>
                    <el-radio :label="2">临时</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="8" >
                <span>任务状态：</span>
                <div class="inline">
                    <el-switch
                            v-model="value5"
                            :active-value="1"
                            :inactive-value="2">
                    </el-switch>
                </div>
            </el-col>
        </el-row>
        <el-row class="mb-md">时间设置</el-row>
        <el-card>
            <el-row >
                <el-col :span="10">
                    <div class="mb-md">
                        <span>开始时间：</span>
                        <div class="inline">
                            <el-date-picker
                                    v-model="value5"
                                    type="datetime"
                                    size="mini"
                                    placeholder="选择日期时间">
                            </el-date-picker>
                        </div>
                    </div>
                    <div>
                        <span>结束时间：</span>
                        <div class="inline">
                            <el-date-picker
                                    v-model="value5"
                                    type="datetime"
                                    size="mini"
                                    placeholder="选择日期时间">
                            </el-date-picker>
                        </div>
                    </div>

                </el-col>
                <el-col :span="14">
                    <div class="">
                        <div class="inline mr-md">
                            <span>循环类型：</span>
                            <div class="inline " style="width:85px">
                                <el-select v-model="value5"
                                           size="mini"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="inline mr-md">
                            <span>执行次数：</span>
                            <div class="inline">
                                <el-input-number v-model="num1"
                                                 @change="handleChange"
                                                 :min="1"
                                                 :max="10"
                                                 size="mini"
                                                 label="描述文字">
                                </el-input-number>
                            </div>
                        </div>
                        <div class="inline">
                            <span>循环参数：</span>
                            <div class="inline">
                                <el-input-number v-model="num1"
                                                 @change="handleChange"
                                                 :min="1"
                                                 :max="10"
                                                 size="mini"
                                                 label="描述文字">
                                </el-input-number>
                            </div>
                        </div>
                    </div>
                    <div class="mt-md">
                        <div class="inline mr-sm">
                            <span>循环次数：</span>
                            <div class="inline">
                                <span>周</span>
                                <div class="inline mr-sm">
                                    <el-input-number v-model="num1"
                                                     @change="handleChange"
                                                     :min="1"
                                                     :max="10"
                                                     size="mini"
                                                     label="描述文字">
                                    </el-input-number>
                                </div>
                                <div class="inline ">
                                    <el-input-number v-model="num1"
                                                     @change="handleChange"
                                                     :min="1"
                                                     :max="10"
                                                     size="mini"
                                                     label="描述文字">
                                    </el-input-number>
                                </div>
                                <span>点</span>
                                <div class="inline ml-sm">
                                    <el-input-number v-model="num1"
                                                     @change="handleChange"
                                                     :min="1"
                                                     :max="10"
                                                     size="mini"
                                                     label="描述文字">
                                    </el-input-number>
                                </div>
                                <span>分</span>
                            </div>
                        </div>

                    </div>
                </el-col>
            </el-row>

        </el-card>
        <el-row class="mt-md mb-md">参数设置</el-row>
        <el-card>

        </el-card>
        <span slot="footer">
            <el-button @click="dialog_close" size="mini"> 取消 </el-button>
            <el-button type="primary" @clisk="dialog_submit" size="mini"> 确认 </el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "task-dialog",
        data(){
            return {
                show:this.value,
                value5:"",
                num1:"",
                options:[]
            }
        },
        methods:{
            handle_close(){
                this.show = false;
            },
            dialog_close(){
                this.show = false;
            },
            dialog_submit(){

            },
            handleChange(){

            }

        },
        props:{
            title:{
                require:true,
                type:String
            },
            value:{
                require:true,
                type:Boolean
            },
            flag:{}
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