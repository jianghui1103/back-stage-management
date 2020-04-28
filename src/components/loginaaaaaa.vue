<template>
<div class="login">   
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h1>快递查询登录</h1>
            <el-form-item label="账号：" prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入您的账号"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-button type="primary" tag="el-button" class="button-on" id="btn" @click="login(ruleForm)">登录</el-button>
        </el-form>
</div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            ruleForm: {
                username: '',
                password: '',
            }
        }
    },
    methods:{
        //登录
        login:function(data){
            this.$store.dispatch('login',data).then(res=>{
                this.$router.push({path:'/dashboard'})

            }).catch((err)=>{
                alert("登陆失败")
            })
            
        },




    }
}
</script>

<style scoped>