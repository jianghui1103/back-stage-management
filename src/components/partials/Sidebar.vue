<template>
<aside class="main-sidebar">

    <div>
        <section class="sidebar">
            <div class="user-panel">
                <div class="image">
                    <img src="static/img/avatar2.png" class="img-circle" alt="User Image" />
                </div>
                <div class="info">
                    <p>
                    </p>
                    <div>
                        <a href="#">
                            <i class="ti-panel"></i>
                            <small>设置</small>
                        </a>
                        <a href="#">
                            <i class="ti-user"></i>
                            <small>配置文件</small>
                        </a>

                        <router-link tag="a" to="/login" >                           
                          <i class="ti-power-off"></i>
                          <small>
                            退出
                          </small>
                        </router-link>

                    </div>
                </div>
                <img class="bg-user" src="static/img/avatar-bg.png" alt="User Image" />
            </div>
            <ul class="sidebar-menu">
                <li class="header">菜单栏</li>
                <li class="treeview">
                    <a href="#">
                        <i class="ti-desktop"></i>
                        <span>主页</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link to="/dashboard">
                                <avatar username="Dashaboard One" :size="20" color="#fff" ></avatar>货况跟踪
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="/mail">
                        <i class="ti-email"></i>
                        <span>模仿oms入口</span>
                    </router-link>
                </li>
                <li class="header">PAGES</li>
                <li class="treeview">
                    <a href="#">
                        <i class="ti-location-pin"></i>
                        <span>Maps</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link to="/gmap">
                                <avatar username="GMaps API" :size="20" color="#fff"></avatar>GMaps API
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <br />
                    <br />
                    <br />
                </li>
            </ul>
                    
        </section>
        <!-- /.sidebar -->
    </div>
</aside>
</template>

<script>
import Avatar from "vue-avatar";
export default {
    name: "DashboardSidebar",
    data(){
        return{
            
            form: {
                name: '',
                pass: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
        }
    },
    mounted: function () {
        //页面出现加载此项
        $(document).ready(function ($) {
            $(".main-sidebar > div").slimScroll({
                width: "230px",
                position: "left",
                size: "5px",
                height: "95vh"
            });
        });
    },
    components: {
        Avatar
    },
    data(){

    },
    methods:{
        //点击登出

    },
};
</script>
