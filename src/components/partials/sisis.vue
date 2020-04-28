<template>
<transition name="el-zoom-in-top">

            <!-- <div class="main-sidebar">
                <ul class="sidebar-menu">
                    <li class="treeview">
                        <a href="#">
                            <i class="ti-desktop"></i>
                            <span>接单管理</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <router-link to="/mail">
                                    <avatar username="Dashaboard One" :size="20" color="#fff"></avatar>机器人接单
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/mail">
                                    <avatar username="Dashaboard Two" :size="20" color="#fff"></avatar>客服接单
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/mail">
                                    <avatar username="dash" size="20"></avatar>操作枪单
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/mail">
                                    <avatar username="dash" size="20"></avatar>流通加工
                                </router-link>
                            </li>
                            <li>
                                <router-link to="mail">
                                    <avatar username="dash" size="20"></avatar>B2B
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/mail">
                            <i class="ti-email"></i>
                            <span>主数据管理</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="ti-location-pin"></i>
                            <span>产品主档</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <router-link to="/mail">
                                    <avatar username="GMaps API" :size="20" color="#fff"></avatar>料件主档
                                </router-link>
                            </li>
                            <li>
                                <router-link>
                                    <avatar username ="/mail"></avatar>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div> -->


    <!-- sidebar: style can be found in sidebar.less -->



</transition>
</template>

<script>
import avatar from 'vue-avatar'
export default {
    name: 'sisis'

}
</script>

<style scoped>
.sider-rig {
    position: fixed;
    top: 65px;
    padding-left: 0;
    padding-top: 0;
    min-height: 100%;
    width: 230px;
    z-index: 810;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    background: #fff;
}

.el-menu {
    background: #333333
}

.el-menu-item {
    color: white;
}

.el-menu-item.is-active {
    color: white;
}

.content-wrapper {
    margin-left: 230px;
}
.main-sidebar{
    padding-left:0;
}

</style>
