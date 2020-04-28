<template>
<div class="loginall">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">货况查询登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
        </el-form-item>
    </el-form>

</div>
</template>

<script>
import {
    requestLogin
} from '../api/api';
//import NProgress from 'nprogress'
export default {
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: '',
                checkPass: ''
            },
            rules2: {
                account: [{
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                }, ],
                checkPass: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }, ]
            },
            checked: true
        };
    },
    methods: {
        handleReset2() {
            this.$refs.ruleForm2.resetFields();
        },
        handleSubmit2(ev) {
            this.$router.push({
                                path: '/dash'
                            });
            var _this = this;
        //     this.$refs.ruleForm2.validate((valid) => {
        //         if (valid) {
        //             this.logining = true;
        //             var loginParams = {
        //                 UserName: this.ruleForm2.account,
        //                 Password: this.ruleForm2.checkPass
        //             };
        //             requestLogin(loginParams).then(data => {
        //                 this.logining = false;
        //                 this.$router.push({
        //                         path: '/dash'
        //                     });
        //                 if (data) {
        //                     //将数据储存在本地
        //                     // sessionStorage.setItem('user', JSON.stringify(user));
                            

        //                 }else{
        //                     alert("账号密码错误，请重新输入")
        //                 }

        //                 // let {
        //                 //     msg,
        //                 //     code,
        //                 //     user
        //                 // } = data;
        //                 // if (code !== 200) {
        //                 //     this.$message({
        //                 //         message: msg,
        //                 //         type: 'error'
        //                 //     });
        //                 // } else {

        //                 // }
        //             });
        //         } else {
        //             console.log('请求错误');
                    
        //             return false;
        //         }
        //     });
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 18% auto;
    width: 450px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .remember {
        margin: 0px 0px 35px 0px;
    }
}

.loginall {
    background: url(http://oa.feili.com/page/resource/userfile/image/login2019DJ01.jpg) center;
    background-size: 100% 100%;
    overflow: hidden;
    width: 100%;
    min-height: 100%;

}
</style>
