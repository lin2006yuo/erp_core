<template>
    <div class="worker-index">
       <el-row class="mb-md">
           <el-button
                size="mini"
                type="primary"
                @click="show_modal(1)"
                plain
           >添加</el-button>
       </el-row>
        <el-row>
            <el-table
                border
                :data="formData"
            >
               <el-table-column
                    prop="name"
                    label="名称"
               ></el-table-column>
                <el-table-column
                        prop="desc"
                        label="描述"
                ></el-table-column>
                <el-table-column
                        prop="token"
                        label="token"
                ></el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template slot-scope="scope">
                        <el-button type="danger" size="small" @click="delete_worker">删除</el-button>
                        <el-button size="small" @click="show_modal(0, scope.row)">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <add-modal
                v-model="isShowAddModal"
                :form="form"
                :clear="clear"
                :type="editType"
                :add="add_worker"
                :modify="modify_worker"
        ></add-modal>
    </div>
</template>

<script>
    const ADD = 1;
    const MODIFY = 0
    export default {
        name: "index",
        data() {
            return {
                isShowAddModal: false,
                form: {
                    name: '',
                    desc: '',
                    token: ''
                },
                clear: {
                    name: '',
                    desc: '',
                    token: ''
                },
                formData: [{ name: 'name', desc: 'desc', token: 'token' }],
                editType: 0
            }
        },
        methods: {
            show_modal(type, item) {
                // 1添加 0修改
                if(type) {
                    this.editType = type
                } else {
                    this.editType = type
                    this.form = { ...item }
                }
                this.isShowAddModal = true
            },


            add_worker() {
                // add ajax
                return new Promise((resolve) => {
                    console.log(111)
                    console.log(this.form)
                    setTimeout(() => {
                        resolve('添加成功')
                    }, 1000)
                }).then(res => {
                    console.log(res)
                })
            },
            delete_worker() {
                this.$confirm('确定要删除吗？')
                    .then(() => {
                        // delete ajax
                    })
                    .catch(() => {
                        return
                    })
            },
            modify_worker() {
                // modify ajax
                console.log('modify', this.form)
            }
        },
        components: {
            'add-modal': require("./index/edit-modal").default
        }
    }
</script>

<style scoped>

</style>
