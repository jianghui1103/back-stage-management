<template>
<transition name="el-zoom-in-top">
    <div class="content-wrapper">
        <section class="content">
            <!--内层菜单栏-->
            <div class="main-sidebar sider">
                <section class="sidebar">
                    <ul class="sidebar-menu">
                        <li class="header">假数据菜单</li>
                        <li class="treeview">
                            <a href="#">
                                <i class="ti-location-pin"></i>
                                <span>主数据管理</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>产品主档
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>料件主档
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>地址主档
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>报关规则
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>结算规则
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>操作规则
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>绩效规则
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="ti-location-pin"></i>
                                <span>接单管理</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li>
                                    <router-link to="/tables">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>机器人接单
                                    </router-link>
                                </li>
                                <li class="treeview">
                                    <!-- <router-link to="">
                                            <avatar username="GMaps API" :size="20" color="#fff"></avatar>客服接单
                                        </router-link> -->
                                    <a href="#">
                                        <!-- <i class="ti-location-pin"></i> -->
                                        <span>客服接单</span>
                                        <span class="pull-right-container">
                                            <i class="fa fa-angle-left pull-right"></i>
                                        </span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li>
                                            <router-link to="/simple-table">
                                                <avatar username="GMaps API" :size="20" color="#fff"></avatar>客服接单
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="">
                                                <avatar username="GMaps API" :size="20" color="#fff"></avatar>订单自动反馈配置
                                            </router-link>
                                        </li>
                                    </ul>

                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>操作抢单
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>流通加工
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="">
                                        <avatar username="GMaps API" :size="20" color="#fff"></avatar>B2B
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </section>
            </div>
            <!--最后内层入口-->
            <div class="box" :class="{'content-collapse':collapse}">
                <v-tags></v-tags>
                <div class="content">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                    <el-backtop target=".content"></el-backtop>
                </div>
            </div>

        </section>
    </div>
</transition>
</template>

<script>
import vTags from '../Tags.vue';
import Avatar from "vue-avatar";
import bus from '../bus';

export default {
    name: "mail",
    data() {
        return {
            tagsList:[],
            collapse: false,
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
    components:{
        vTags,
    },
    mounted: function () {
        //页面出现加载此项
    },
    components: {
        Avatar
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    },
    methods: {
                //点击登出
    },
};
</script>

<style scoped>
.sider {
    position: fixed;
    top: 65px;
    padding-left: 0;
    padding-top: 0;
    min-height: 100%;
    width: 230px;
    z-index: 810;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    /* background: #fff; */
    background: #333333 !important;
    border-right: 1px solid rgba(0, 0, 0, 0.05)
}
</style>

