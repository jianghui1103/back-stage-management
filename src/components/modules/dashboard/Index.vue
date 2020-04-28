<template>
<transition name="el-zoom-in-top">
    <div class="content-wrapper">
        <!-- <section class="content-header">
            <h1>Blank Page<small>It's all start from here <i class="ti-heart"></i><i class="ti-export"></i><i class="ti-printer"></i></small></h1>
            <ol class="breadcrumb">
                <li>
                    <router-link to="/"> <i class="ti-home"></i></router-link>
                </li>
                <li><a href="#">Apps</a></li>
                <li class="active">Blank Page</li>
            </ol>
        </section> -->
        <!-- Main content -->
        <section class="content">
            <div class="box">
                <div class="box-header">
                </div>
                <div class="box-body" style="min-height:400px;">
                    <div class="container-timeline">
                        <div class="header-timeline">
                            <div class="headerlogo">
                                <!-- <h1>FEILIKS</h1> -->
                                <img :src="imgUrl" width="100%" display="flex" align-items="center" />

                            </div>

                            <h3>货况查询</h3>
                        </div>
                        <!--货物查询-->
                        <div class="header">
                            <el-input :placeholder="placeholder" width="95%" v-model="search">
                                <el-select v-model="value" slot="prepend" placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-input type="text" placeholder="输入单号，将为您智能查询追踪" class="input-in"></el-input>

                            </el-input>
                            <el-button @click="btn()" class="el-button--primary">查询</el-button>

                        </div>
                        <!--查询结果显示-->
                        <div class="item-timeline">
                            <div id="timeline" v-for="(list,index) in searchData" :key="index">
                                <div>
                                    <section class="year">
                                        <h4>单号：{{list.depart}}</h4>
                                        <section>
                                            <ul>
                                                <li class="state-in-first">{{list.name}}</li>
                                                <li class="state-in-first">{{list.data}}</li>
                                                <li>{{list.title}}</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul>
                                                <li>{{list.name1}}</li>
                                                <li>{{list.data1}}</li>
                                                <li>{{list.title1}}</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul>
                                                <li>{{list.name2}}</li>
                                                <li>{{list.data2}}</li>
                                                <li>{{list.title2}}</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul>
                                                <li>{{list.name3}}</li>
                                                <li>{{list.data3}}</li>
                                                <li>{{list.title3}}</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul>
                                                <li>{{list.name4}}</li>
                                                <li>{{list.data4}}</li>
                                                <li>{{list.title4}}</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul>
                                                <li>{{list.name5}}</li>
                                                <li>{{list.data5}}</li>
                                                <li>{{list.title5}}</li>
                                                <li>{{list.title51}}</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul>
                                                <li>{{list.name6}}</li>
                                                <li>{{list.data6}}</li>
                                                <li>{{list.title6}}</li>

                                            </ul>
                                        </section>
                                        <section>
                                            <ul>
                                                <li>{{list.name7}}</li>
                                                <li>{{list.data7}}</li>
                                                <li>{{list.title7}}</li>
                                            </ul>
                                        </section>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- /.content -->
            <!--弹层-->

        </section>
        <!--v-if = isShow-->
        <!-- <el-dialog title="登录" :visible.sync="centerDialogVisible" width="30%" center>
            <el-form :model="form">
                <el-form-item label="账号" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.pass" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer" center>
                <el-button type="primary" style="width: 100px;float: inherit;" @click="showAlert">确 定</el-button>
            </span>
        </el-dialog> -->
        <el-button type="primary" icon="el-icon-top" id="to-top-btn" @click="scrol()" style="display:none;position:fixed;right:0;bottom:0">回到顶部</el-button>

    </div>

</transition>
</template>

<script>
// var placeholders = {
//     "singleSS": "请输入分单号",
//     "invioceSS": "请输入发票号",
// };
export default {
    name: 'dashboard-first',
    props: ['text'],
    data() {
        return {
            // isShow:false,
            // centerDialogVisible: true,
            // form: {
            //     name: '',
            //     pass: '',
            //     region: '',
            //     date1: '',
            //     date2: '',
            //     delivery: false,
            //     type: [],
            //     resource: '',
            //     desc: ''
            // },
            // formLabelWidth: '120px',

            // imgUrl: require("/模板/后台管理大模板24/full/static/img/logo-light.png"),
            // select: 'invioceSS', //搜索
            // keywords: '', //搜索框的关键字内容
            //placeholder: placeholders["invioceSS"],
            options: [{
                value: '选项1',
                label: '发票号'
            }, {
                value: '选项2',
                label: '分单号'
            }],
            value: '选项2',
            search: '',
            searchData: '',
            //假数据模拟
            products: [{
                name: "订单结案",
                data: '2019-11-21 17:50     周四',
                title: "订单已结束",
                depart: "14341324186",
                data1: '2019-11-21 17:50     周四',
                name1: "收货完成",
                title1: "您的包裹已经收货完成",

                data2: '2019-11-21 17:50     周四',
                name2: "签收完成",
                title2: "您的包裹正在派送中",

                data3: '2019-11-20 17:50     周三',
                name3: "已提货",
                title3: "您的包裹已由物流公司揽收",

                data4: '2019-11-19 17:50     周三',
                name4: "放行",
                title4: "您的包裹海关正在检查，准备放行",

                data5: '2019-11-19 17:50     周三',
                name5: "航班信息",
                title5: "起飞时间2018-11-01 08:00:05",
                title51: "降落时间2018-11-01 10:00:00",

                data6: '2019-11-18 17:50     周二',
                name6: "订舱完成",
                title6: "订舱已完成",

                data7: '2019-11-18 17:50     周二',
                name7: "订单录入",
                title7: "您的包裹已由物流公司揽收",

            }],
        }

    },
    methods: {
        //点击查询数据
        btn: function () {
            let search = this.search;
            if (search) {
                //筛选结果
                this.searchData = this.products.filter(function (product) {
                    //获取到data;
                    return Object.keys(product).some(function (key) {
                        return String(product[key]).toLowerCase().indexOf(search) > -1;
                    })

                })
            }

        },
        //     showAlert() {  //控制弹窗显示
        //     this.isShow = true;
        //     this.centerDialogVisible = false;
        // },
        scrol() {
            content.scrollIntoView()
        },
        scrollToTop(el) {
            let topBtn = document.getElementById('to-top-btn');
            //获取鼠标位置
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //获取内容位置
            let browserHeight = window.outerHeight;
            console.log(scrollTop)
            console.log(browserHeight)
            if (scrollTop < browserHeight) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        }

    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop);
    },

}
</script>

<style scoped>
.header {
    width: 55%;
    /* min-height: 80px; */
    margin:3% auto;
    text-align: center;
}

.el-select {
    /* width: 20%;
        float: left; */
    width: 150 px;

}

.el-input {
    width: 90%;
    float: left;
}

.el-button {
    width:10%;
    float:left;
    border-radius:0 px
}

.item-timeline {
    width: 100%;
    min-height:80%;
    /* border: 1px solid #d9d9d9; */
}

/* .el-dialog__body {
    padding-bottom: 50px;
} */

/* .el-dialog__footer {
    padding: 0px 121px 59px;
} */

#timeline h4 {
    position: relative;
    top: -2 rem;
    right: 21.5 rem;
    color: #333;

    margin: 0;

    font-size: 1.5em;

    /* font-weight: 600; */

}

.state-in-first {

    color: green;

}

.headerlogo {

    /* background-image:url('/static/img/logo-light.png')no-repeat center; */

    width: 150px;

    /* height:100px; */

    /* background:red; */

    margin: 0 auto;

}

ul li {

    list-style: none;

}
</style>
