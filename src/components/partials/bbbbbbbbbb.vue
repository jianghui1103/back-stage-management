<template>
  <section>
      <!--查询-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0; text-align: left">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.author" placeholder="作者"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUsers">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--为了实现分页bookData.slice((currentPage-1)*pageSize,currentPage*pageSize)-->
    <el-col :span="24" style="background: #ff0">
      <el-table border
        :data="bookData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        :loading="listLoading"
        @selection-change="selectionRowsChange"
        style="width: 100%; text-align: left;">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" label="#" width="60"></el-table-column>
        <el-table-column prop="author" label="作者" width="200"></el-table-column>
        <el-table-column prop="title" label="书名" width="200"></el-table-column>
        <el-table-column prop="price" label="单价" width="120"></el-table-column>
        <el-table-column prop="publish" label="出版社" width="200"></el-table-column>
        <el-table-column prop="publishDate" label="出版日期"></el-table-column>
        <el-table-column label="操作" width="250">
          <template slot-scope="scope">
            <!--由elementui提供，scope.$index和scope.row是为了方便与后台进行数据交互，后面的删除函数中会用到-->
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger"
              @click="removeUser(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>

    <el-col :span="24" style="margin-top: 20px; text-align: left">
      <el-button type="danger" @click="batchesRemove">
        批量删除
      </el-button>
      <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        :total= "total"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page.sync="currentPage"
        style="float: right;"></el-pagination>
    </el-col>

    <!--增加书本内容-->
    <el-dialog
      title="新增书籍"
      :visible.sync="dialogCreateVisible"
      style="text-align: left">
      <el-form :rules="addFormRules" ref="addForm" :model="addForm" :label-width="addFormLabelWidth">
        <el-form-item label="作者" prop="author">
          <el-input v-model="addForm.author" name="author" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="书名" prop="title">
          <el-input v-model="addForm.title" name="title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="price">
          <el-input v-model="addForm.price" name="price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="publish">
          <el-input v-model="addForm.publish" name="publish" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版日期" prop="publishDate">
          <!--<el-input v-model="addForm.publishDate"></el-input>-->
          <el-date-picker v-model="addForm.publishDate" name="publishDate" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createReset">取消</el-button>
        <el-button @click.native="createSubmit" :loading="addLoading" type="primary">确定</el-button>
      </div>
    </el-dialog>

    <!--编辑书本信息-->
    <el-dialog
      title="修改书本信息"
      :visible.sync="dialogUpdateVisible"
      :close-on-click-modal="false"  style="text-align: left">
      <el-form :model="updateForm" :rules="updateRules" ref="update" label-width="100px">
        <el-form-item label="作者" prop="authorName">
          <el-input v-model="updateForm.authorName"></el-input>
        </el-form-item>
        <el-form-item label="书名" prop="title">
          <el-input v-model="updateForm.title"></el-input>
        </el-form-item>
        <el-form-item label="单价" prop="price">
          <el-input v-model="updateForm.price"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="publish">
          <el-input v-model="updateForm.publish"></el-input>
        </el-form-item>
        <el-form-item label="出版日期" prop="publishDate">
          <!--<el-input v-model="updateForm.publishDate"></el-input>-->
          <el-date-picker type="date" placeholder="选择日期" v-model="updateForm.publishDate"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editReset">取消</el-button>
        <el-button type="primary" :loading="updateLoading" @click.native="editSubmit">确定</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>

  export default {
    name: "add",
    data() {
      return {
        bookData: [],
        filters: {
          author: '',
        },
        total: 0,
        pageSize: 0,
        currentPage: 1,
        listLoading: false,
        sels: [],  // 选中的列

        // 新增表单
        addForm: {
          author: '',
          title: '',
          price: '',
          publish: '',
          publishDate: ''
        },
        addFormRules: {
          author: [
            { required: true, message: '请输入作者', trigger: 'blur'}
          ],
          title: [
            { required: true, message: '请输入书名', trigger: 'blur'}
          ],
          price: [
            { required: true, message: '请输入书本单价 ', trigger: 'blur' },
            { pattern: /^\d+(\.\d{1,2})?$/, message: '单价必须为数字，并且小数点后不超过两位', trigger: 'blur' }
          ],
          publish: [
            { required: true, message: '请输入出版社名', trigger: 'blur' }
          ]
        },
        dialogCreateVisible: false,
        addFormLabelWidth: '80px',
        addLoading: false,

        // 编辑表单
        updateForm: {
          authorName: '',
          title: '',
          price: '',
          publish: '',
          publishDate: ''
        },
        updateRules: {
          authorName: [{
            message: '请输入姓名',
            trigger: 'blur',
          }, {
            min: 3,
            max: 15,
            message: '长度在3-15个字符'
          }],
          title: [{
            message: '请输入书名'
          }],
          price: [{
            type: 'number',
            // pattern: '',
            message: '请输入最多两位小数的单价'
          }]
        },
        updateLoading: false,
        dialogUpdateVisible: false  // 编辑对话框的显示状态
      }
    },
    methods: {
      // 改变页码
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getUsers();
      },
      // 改变每页显示的数量
      handleSizeChange(val) {
        this.pageSize = val;
      },
      //  查询, 获取用户列表
      getUsers() { 
      
      // 使用URLSearchParams函数的原因：在与后台进行交互时，如果后台使用的字符编码格式与axios的编码格式不一致，会导致后端不能接收到前端传过去的参数，为了解决这一问题，
        let para = new URLSearchParams();
        para.append("author", this.filters.author);
        this.listLoading = true;
        this.$ajax({
          methods: 'post',
          url: 'http://xxx.xx.xxx.xxx:8099/InfoManage/bookList',
          data: para,
        }).then(res => {
        
          this.total = res.data.length;
          this.pageSize = 20;  // 每页展示的条目数
          this.author = res.data[0].author;  // 将后台传过来的数据填充到前端表单页面中
          this.bookData = res.data;
          this.listLoading = false;
       
        }).catch( err => {
          console.log(err);
        })
      },

    //  显示新增
      handleAdd () {
        this.dialogCreateVisible = true;
        this.addForm = {
          author: '',
          title: '',
          price: '',
          publish: '',
          publishDate: ''
        };
      },
      //  提交新增书籍信息
      createSubmit() {
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交？', '提示', {}).then(() => {
              this.addLoading = true;
           
              let addPara = new URLSearchParams();
              addPara.append("id", this.addForm.id);
              addPara.append("title", this.addForm.title);
              addPara.append("author", this.addForm.author);
              addPara.append("price", this.addForm.price);
              addPara.append("publish", this.addForm.publish);
              addPara.append("publishDate", this.addForm.publishDate);

              this.$ajax({
                method: 'post',
                url: 'http://xxx.xx.xxx.xxx:8099/InfoManage/addBook',
                data:addPara,
              }).then(res => {
                console.log(eval("("+res.data+")"));
                console.log(addPara);
                console.log(addPara.author);
                console.log(res.data);
                this.addLoading = false;
                this.$message({
                  type: 'success',
                  message: '提交成功!'
                });
                this.dialogCreateVisible = false;
                this.getUsers();
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消新增'
              });
            })
          }
          else {
            console.log('error');
            return false;
          }
        })
      },
      //  显示编辑页面
      handleEdit(index, row) {
        console.log('click success');
        this.dialogUpdateVisible = true;
        // this.updateForm = Object.assign({}, row)
        let updateParas = new URLSearchParams();
        updateParas.append("id", row.id);
        this.$ajax({
          method: 'post',
          url: 'http://xxx.xx.xxx.xxx:8099/InfoManage/loadBook',
          data: updateParas
        }).then(res => {
          this.updateForm = res.data;
        })
      },
      //  编辑页面重置
      createReset() {
        this.dialogCreateVisible = false;
        this.$refs.addForm.resetFields();
      },
      
      //  提交编辑后书籍信息
      editSubmit() {
        this.$refs.update.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交？', '提示', {}).then(() => {
              this.addLoading = true;
              let editParas = new URLSearchParams();
              editParas.append("id", this.updateForm.id);
              editParas.append("author", this.updateForm.author);
              editParas.append("title", this.updateForm.title);
              editParas.append("price", this.updateForm.price);
              editParas.append("publish", this.updateForm.publish);
              editParas.append("publishDate", this.updateForm.publishDate);

              this.$ajax({
                method: 'post',
                url: 'http://xxx.xx.xxx.xxx:8099/InfoManage/updateBook',
                data: editParas
              }).then(res => {
                console.log(res.data);
                // this.bookData = res.data;
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
      // 单个删除书籍信息
      removeUser(index, row) {
        this.$confirm('确定删除该记录吗？ ', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          let delParas = new URLSearchParams();
           delParas.append("id", row.id ); // 响应template中scope.row，实现向后台传送当前row的id

        //  向服务端请求删除
          this.$ajax({
            method: 'post',
            url: 'http://xxx.xx.xxx.xxx:8099/InfoManage/delectBook',
            data:delParas,
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
        // 选择选中的行
      selectionRowsChange(sels) {
        // 将选中的行放进sels数组
        this.sels = sels;
      },
      //  批量删除书籍
      batchesRemove() {
        // 将数组转化string类型 
        var idArray = this.sels.map(item => item.id).toString();
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning',
        }).then(() => {
          let batchPara = new URLSearchParams();
          batchPara.append("idArray", idArray);
          this.$ajax({
            method: 'post',
            url: 'http://xxx.xx.xxx.xxx:8099/InfoManage/batchDeleting',
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
    // mounted的作用就是保证在进入table.vue文件时就加载用户数据
    mounted() {
      this.getUsers();
    }
  }
</script>

<style scoped type="scss">
  .el-table td {
    text-align: left;
  }
</style>