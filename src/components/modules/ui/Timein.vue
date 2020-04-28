<template>
<transition name="el-zoom-in-top">
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>Blank Page<small>It's all start from here <i class="ti-heart"></i><i class="ti-export"></i><i class="ti-printer"></i></small></h1>
            <ol class="breadcrumb">
                <li>
                    <router-link to="/"> <i class="ti-home"></i></router-link>
                </li>
                <li><a href="#">Apps</a></li>
                <li class="active">Blank Page</li>
            </ol>
        </section>
        <!-- Main content -->
        <section class="content">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">货况跟踪演示</h3>
                    <div class="box-tools pull-right">
                        <button type="button" data-widget="collapse" data-toggle="tooltip" title="Collapse" class="btn btn-box-tool"><i class="ti-minus"></i></button>
                        <button type="button" data-widget="remove" data-toggle="tooltip" title="Remove" class="btn btn-box-tool"><i class="ti-close"></i></button>
                    </div>
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
                            <el-input :placeholder="placeholder" width="95%"  v-model="search">
                                <el-select v-model="select" slot="prepend">
                                    <el-option label="分单号" value="singleSS"></el-option>
                                    <el-option label="发单号" value="invioceSS"></el-option>
                                </el-select>
                                <el-input type="text" placeholder="输入单号，将为您智能查询追踪" class="input-in"></el-input>
                            </el-input>
                            <span></span>
                            <el-button @click="btn()">查询</el-button>
                            
                        </div>
                        <!--查询结果显示-->
                        <div class="item-timeline">
                            <div id="timeline" v-for="(list,index) in searchData" :key="index">
                                <div>
                                    <section class="year">
                                        <h4>{{list.depart}}</h4>
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
        </section>
        <!-- /.content -->
    </div>
</transition>
</template>

<script>
export default {
    name: 'BlackPage',
    data() {
        return {
            // imgUrl: require("/模板/后台管理大模板24/full/static/img/logo-light.png"),
            search: '',
            searchData: '',
           //假数据模拟
            products: [{
                name: "订单结案",
                data: '2019-11-21 17:50     周四',
                title: "订单已结束",
                depart:"14341324186",
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

                
            } ],
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
                    console.log(product);
                    return Object.keys(product).some(function (key) {
                        console.log(key);
                        return String(product[key]).toLowerCase().indexOf(search) > -1;
                        console.log(list.data)
                    })

                })
            }

        },
    },
}
</script>

<style scoped>
.header {
    width: 55%;
    min-height: 80px;
    margin: 3% auto;
    text-align: center;
}

.el-select {
    /* width: 20%;
    float: left; */
    width: 150px;

}

.el-input {
    width: 70%;
    float: left;
}

.el-button {
    width: 10%;
    float: left;
}

.item-timeline {
    width: 100%;
    min-height: min-content;
    /* border: 1px solid #d9d9d9; */
}

#timeline h4 {
    position: relative;
    top: -2rem;
    right: 21.5rem;
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
