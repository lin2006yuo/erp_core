<template>
    <el-dialog
            :title="`${title}Worker`"
            :visible.sync="show"
            :before-close = "handle_close">
        <div class="">
            <el-form
                    :model="form"
                    label-width="80px"
                    :rules="formRules"
                    ref="addForm"
            >
                <el-form-item label="名称：" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="描述：" prop="desc">
                    <el-input v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="token：" prop="token">
                    <el-input v-model="form.token"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer">
                <el-button v-if="type" size="mini" type="primary" @click.stop="handle_add" :loading="btnLoading">添加</el-button>
                <el-button v-else size="mini" type="primary" @click.stop="handle_modify" :loading="btnLoading">修改</el-button>
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
                formRules: {
                    name: [
                        { required: true, message: '请输入名称', trigger: 'blur' },
                    ],
                    desc: [
                        { required: true, message: '请输入描述', trigger: 'blur' },
                    ],
                    token: [
                        { required: true, message: '请输入token', trigger: 'blur' },
                    ]
                },
                btnLoading: false
            }
        },
        computed: {
            title() {
                return this.type ? '添加' : '修改'
            }
        },
        methods:{
            handle_close(){
                this.reset_form();
                this.show = false
            },


            handle_add() {
                this.$refs.addForm.validate(valid => {
                    if(valid) {
                        this.btnLoading = true
                        this.add().then(res => {
                            this.btnLoading = false
                            this.handle_close()
                            return res
                        })
                    } else {
                        return false
                    }
                })
            },
            handle_modify() {
                this.$refs.addForm.validate(valid => {
                    if(valid) {
                        this.btnLoading = true
                        this.modify().then(res => {
                            this.btnLoading = false
                            this.handle_close()
                            return res
                        })
                    } else {
                        return false
                    }
                })
            },
            reset_form() {
                for (const key in this.form) {
                    console.log(key)
                    this.form[key] = ''
                }
                this.$refs.addForm && this.$refs.addForm.clearValidate()
            }
        },
        props:{
            form: {
                type: Object,
                require: true
            },
            value:{
                type:Boolean,
                require:true
            },
            type: {   // 1添加 0修改
                type: Number,
                require: true
            },
            add: {
                type: Function
            },
            modify: {
                type: Function
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
