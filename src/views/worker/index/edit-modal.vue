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
                <el-button v-if="type" size="mini" type="primary" @click.stop="handle_add">添加</el-button>
                <el-button v-else size="mini" type="primary" @click.stop="handle_modify">修改</el-button>
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
                tableData:[],
                formRules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                    ],
                    desc: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                    ],
                    token: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                    ]
                }
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
                        this.add().then(res => {
                            // this.show = false
                            for (const key in this.form) {
                               this.form[key] = ''
                            }
                            // this.form = {}
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
                        this.modify(res => {
                            return res
                        })
                    } else {
                        return false
                    }
                })
            },
            reset_form() {
                // this.form = { ...this.clear }
                this.$refs.addForm && this.$refs.addForm.resetFields()
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
            clear: {
                type: Object,
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
