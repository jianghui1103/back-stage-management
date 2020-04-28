<template>
<div>
    <!--路由嵌套-->
    <app-sisis></app-sisis>
    <app-tags></app-tags>
    <!-- <app-sidebar></app-sidebar> -->
    <!--最后一层路由concent-->
    <router-view></router-view>
</div>

</template>
<script>
//import Sidebar from './Sidebar'
import sisis from './sisis'
import tags from '../tags.vue'

export default {
    name:'concent',
    components:{
         //'app-sidebar':Sidebar,
         'app-sisis':sisis,
         'app-tags':tags,
    }   
}
</script>
<style>

</style>