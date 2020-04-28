<template>
<transition name="el-zoom-in-top">
    <div class="content-wrapper">
        <section class="content cont">
            <div class="box" style="padding-top:80px">
                <!--筛选栏-->
                <div class="filtercolumn">
                    <div>
                        <el-form :label-position="labelPosition" label-width="80px" width="400px" :model="filters" :inline="true" style="padding-top:10px;">
                            <el-form-item label="货主代码">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="业务类型">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="委托类型">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="申报方式">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="监管方式">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="总提单号">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="分单号">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="货运代理">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="成交条款">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="转回时间">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="毛重">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="净重">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="件数">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="总金额">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="包装种类">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <el-form-item label="包装种类">
                                <el-input v-model="filters.name"></el-input>
                            </el-form-item>
                            <!--加载更多内容-->
                            <div id="logingshow" v-if="show">
                                <el-form-item label="总单号" label-width="80px" width="400px">
                                    <el-input v-model="filters.name"></el-input>
                                </el-form-item>
                                <el-form-item label="启运国" label-width="80px" width="400px">
                                    <el-input v-model="filters.name"></el-input>
                                </el-form-item>
                                <el-form-item label="目的国" label-width="80px" width="400px">
                                    <el-input v-model="filters.name"></el-input>
                                </el-form-item>
                                <el-form-item label="进出口岸" label-width="80px" width="400px">
                                    <el-input v-model="filters.name"></el-input>
                                </el-form-item>
                                <el-form-item label="船名" label-width="80px" width="400px">
                                    <el-input v-model="filters.name"></el-input>
                                </el-form-item>
                                <el-form-item label="航次" label-width="80px" width="400px">
                                    <el-input v-model="filters.name"></el-input>
                                </el-form-item>
                                <!-- <el-form-item label="日期时间" label-width="100px" width="700px">
                                    <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                    </el-date-picker>

                                </el-form-item> -->

                            </div>

                        </el-form>
                    </div>
                </div>
                <!--工具栏-->
                <div class="toobar" :model="filters">
                    <el-button @click="handleAdd()" style="margin-left:2.5rem">新增</el-button>
                    <el-button @click="deleteRows(id)">
                        批量删除</el-button>

                    <el-button @click="showCont()" style="text-align:center">点击加载更多查询条件</el-button>
                    <el-button @click="getUsers()" type="primary">查询</el-button>
                </div>
                <!--大表单-->
                <div class="box-body">
                    <el-table :data="users" :loading="listLoading" @selection-change="selectionRowsChange" height="800" border style="width: 100%" ref="multipleTable" tooltip-effect="dark">
                        <!-- <el-table-column type="selection" width:="55"></el-table-column> -->
                        <el-table-column fixed prop="id" type="index" label="序号" width="60" sortable :rows-class-name="tableRowClassName">
                        </el-table-column>
                        <el-table-column fixed prop="name" label="姓名" width="70">
                        </el-table-column>
                        <el-table-column fixed prop="sex" label="性别" width="60" :formatter="formatSex">
                        </el-table-column>
                        <el-table-column fixed prop="age" label="年龄" width="90">
                        </el-table-column>
                        <el-table-column fixed prop="birthday" label="生日" width="120" :formatter="formatin">
                        </el-table-column>
                        <el-table-column fixed prop="address" label="地址" width="300">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" width="300">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" width="300">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" width="300">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" width="300">
                        </el-table-column>
                        <el-table-column fixed="right" prop="right" label="操作" width="180">
                            <template slot-scope="scope">
                                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="mini" type="danger" @click="removeUser(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                    <el-col :span="24" style="margin-top: 20px; text-align: left">
                        <!--页码-->
                        <el-pagination background layout="total, prev, pager, next, jumper" :total="total" :page-size="pageSize" @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page.sync="currentPage" style="float: right;"></el-pagination>
                    </el-col>

                    <!--新增页面-->
                    <el-dialog sex="新增" :visible.sync="dialogCreateVisible" style="text-align: left">
                        <el-form :rules="addFormRules" ref="addForm" :model="addForm" :label-width="addFormLabelWidth">
                            <el-form-item label="姓名" prop="name">
                                <el-input v-model="addForm.name" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" prop="sex">
                                <el-input v-model="addForm.sex" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄" prop="age">
                                <el-input v-model="addForm.age" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="地址" prop="address">
                                <el-input v-model="addForm.address" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="生日" prop="birthday">
                                <!--<el-input v-model="addForm.birthday"></el-input>-->
                                <el-date-picker v-model="addForm.birthday" type="date" placeholder="选择日期"></el-date-picker>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click.native="createSubmit" :loading="addLoading" type="primary">确定</el-button>
                        </div>
                    </el-dialog>

                    <!--编辑页面-->
                    <el-dialog sex="修改" :visible.sync="dialogUpdateVisible" :close-on-click-modal="false" style="text-align: left">
                        <el-form :model="updateForm" :rules="updateRules" ref="update" label-width="100px">
                            <el-form-item label="姓名" prop="name">
                                <el-input v-model="updateForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" prop="sex">
                                <el-input v-model="updateForm.sex"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄" prop="age">
                                <el-input v-model="updateForm.age"></el-input>
                            </el-form-item>
                            <el-form-item label="地址" prop="address">
                                <el-input v-model="updateForm.address"></el-input>
                            </el-form-item>
                            <el-form-item label="生日" prop="birthday">
                                <el-input v-model="updateForm.birthday"></el-input>
                                <!-- <el-date-picker type="date" placeholder="选择日期" v-model="updateForm.birthday"></el-date-picker> -->
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="editReset()">取消</el-button>
                            <el-button type="primary" :loading="updateLoading" @click.native="editSubmit">确定</el-button>
                        </div>
                    </el-dialog>

                </div>
            </div>

        </section>
    </div>
</transition>
</template>

<script>
export default {
    name: "SimpleTable",
    data() {
        return {
            show: false,
            users: [],
            filters: {
                name: '',
            },
            total: 0,
            pageSize: 0,
            currentPage: 1,
            listLoading: false,
            sels: [], // 选中的列
            searchName: '', //查找

            // 新增表单
            addForm: {
                name: '',
                sex: '',
                age: '',
                address: '',
                birthday: ''
            },
            addFormRules: {
                name: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                sex: [{
                    required: true,
                    message: '请输入性别',
                    trigger: 'blur'
                }],
                age: [{
                        required: true,
                        message: '请输入年龄 ',
                        trigger: 'blur'
                    },
                    {
                        pattern: /^\d+(\.\d{1,2})?$/,
                        message: '年龄必须为数字',
                        trigger: 'blur'
                    }
                ],
                address: [{
                    required: true,
                    message: '请输入地址名',
                    trigger: 'blur'
                }]
            },
            dialogCreateVisible: false,
            addFormLabelWidth: '80px',
            addLoading: false,

            // 编辑表单
            currentId: '',
            updateForm: {
                name: '',
                sex: '',
                age: '',
                address: '',
                birthday: ''
            },
            updateRules: {
                name: [{
                    message: '请输入姓名',
                    trigger: 'blur',
                }, {
                    min: 2,
                    max: 4,
                    message: '长度在2-4个字符'
                }],
                sex: [{
                    type: 'number',
                    message: '请输入性别0/1'
                }],
                age: [{
                    type: 'number',
                    // pattern: '',
                    message: ''
                }]
            },
            options: [{
                value: '0',
                label: '男',
            }, {
                value: '1',
                label: '女',
            }],
            value: '',
            updateLoading: false,
            dialogUpdateVisible: false // 编辑对话框的显示状态
        }
    },
    methods: {
        showCont() {
            //加载查询条件开关
            this.show = !this.show;
        },

        //年龄0/1的切换
        formatSex(rows, column) {
            return rows.sex == 0 ? '男' : rows.sex == 1 ? '女' : '未知'
        },
        ////获取的时间转换
        formatin(rows, column) {
            return rows.birthday = rows.birthday.substring(0, 10);
        },

        // 改变页码
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getUsers();
        },
        // 改变每页显示的数量
        handleSizeChange(val) {
            this.pageSize = val;
        },
        //  获取用户列表数据
        getUsers() {
            let para = {
                QueryData: {},
                pageSize: 14,
                pageIndex: 1,
            };
            //para.append("name", this.filters.name);
            this.listLoading = true;
            this.$https({
                method: 'post',
                url: 'http://172.20.37.59:8080/api/student/query',
                data: para,
            }).then(res => {
                //this.total = res.data.data.length;
                //显示总条数
                this.total = res.data.count;
                this.pageSize = 1000; // 每页展示的条目数  
                this.users = res.data.data; // 将后台传过来的数据填充到前端表单页面中
                console.log(this.users)
                this.listLoading = false;
                this.PageSizeAll = res.data.count;
            }).catch(err => {
                console.log(err);
            })
        },
        //查询信息
        getUserss() {
            let para = {
                QueryData: {}
            };
            this.$https({
                method: 'post',

            }).then().catch();

        },
        //  显示新增
        handleAdd() {
            this.dialogCreateVisible = true;
            this.addForm = {
                name: '',
                sex: '',
                age: '',
                address: '',
                birthday: ''
            };
        },

        //  新增页面重置
        // createReset() {
        //     this.dialogCreateVisible = true;
        //     this.$refs.addForm.resetFields();
        // },
        //  提交新增信息
        createSubmit() {
            this.$refs.addForm.validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.$confirm('确认提交？', '提示', {}).then(() => {
                        this.addLoading = true;
                        this.$https({
                            method: 'post',
                            url: 'http://172.20.37.59:8080/api/student/save',
                            data: {
                                Sex: 1,
                                Age: 20,
                                Name: this.addForm.name,
                                Address: this.addForm.address
                            }
                        }).then(res => {
                            this.addLoading = false
                            this.$message({
                                type: 'success',
                                message: '提交成功!'
                            });
                            this.dialogCreateVisible = false;
                            this.getUsers();
                        }).catch(err => {
                            console.log(err)
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消新增'
                        });
                    })
                } else {
                    console.log('error');
                    return false
                }
            })
        },
        //显示编辑
        handleEdit(index, row) {
            //页面弹出显示
            this.dialogUpdateVisible = true;

            //this.updateForm = Object.assign({}, row)
            // let updateParas = new URLSearchParams();
            // updateParas.append("id", row.id);
            this.$https({
                method: 'get',
                url: 'http://172.20.37.59:8080/api/student/get',
                params: {
                    id: row.id
                }
            }).then(res => {
                this.updateForm = res.data;
                console.log(this.updateForm)
            })
            this.getUsers();
        },

        //  提交编辑 更新信息
        editSubmit() {
            this.$refs.update.validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.$confirm('确认提交？', '提示', {}).then(() => {
                        this.updateForm
                        this.updateLoading = true;
                        this.$https({
                            method: 'put',
                            url: 'http://172.20.37.59:8080/api/student/save',
                            params: {
                                id: row.id
                            },
                            data: {
                                name: this.updateForm.name,
                                sex: 1,
                                age: 20,
                                address: this.updateForm.address,
                            },
                        }).then(res => {
                            console.log(res.data);
                            this.updateLoading = false;
                            this.$message({
                                type: 'success',
                                message: '提交成功!'
                            });
                            this.dialogUpdateVisible = false;
                            this.getUsers();
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消编辑'
                        });
                    })
                }
            })
        },
        // 单个删除信息
        removeUser(index, row) {
            this.$confirm('确定删除该记录吗？ ', '提示', {
                type: 'warning'
            }).then(() => {
                this.listLoading = true;
                //delete 中不能存放data参数请求，只能存放params,
                // let delParas = {
                //     Id:row.id
                // }
                //delParas.append("id", row.id); // 响应template中scope.row，实现向后台传送当前row的id
                this.$https({
                    method: 'delete',
                    url: 'http://172.20.37.59:8080/api/student/delete',
                    params: {
                        Id: row.id
                    }
                }).then(res => {
                    this.listLoading = false;
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.getUsers();
                });
            }).catch(() => {
                console.log('删除失败');
            })
        },
        //取消操作
        // editReset() {
        //     this.dialogUpdateVisible = true;
        //     this.$refs.updateForm.resetFields();    
        // },
        // 选择选中的行
        selectionRowsChange(sels) {
            // 将选中的行放进sels数组
            this.sels = sels;
        },
        //  批量删除
        batchesRemove() {
            // 将数组转化string类型 
            var idArray = this.sels.map(item => item.id).toString();
            this.$confirm('确认删除选中记录吗？', '提示', {
                type: 'warning',
            }).then(() => {
                let batchPara = new URLSearchParams();
                batchPara.append("idArray", idArray);
                this.$https({
                    method: 'post',
                    url: '',
                    data: batchPara
                }).then((res) => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.getUsers();
                })
            }).catch(() => {})

        },
    },
    // 加载用户数据
    mounted() {
        this.getUsers();
    },
    computed: {

    }
}
</script>

<style>
.toobar {
    width: 100%;
    height: min-content;
    background: #ddd;
    padding: 8px 0 8px 0;
}

.el-date-editor--datetimerange.el-input__inner {
    width: 512px;
}
</style>
