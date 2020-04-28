<template>
<!--查询筛选-->
<transition name="el-zoom-in-top">
    <div class="content-wrapper">
        <section class="content cont">
            <!--最后内层入口-->
            <div class="box">
                <div class="tables" style="background:red">

                    <div class="safetyInfo">
                        <nut-searchbar placeText="请输入详细地址/门牌号/" v-model="search" @input="submitFun" ref='searchInput'></nut-searchbar>

                        <ul v-for="(list,index) in searchData" :key="index">
                            <li>
                                <span>{{list.phoneName}}</span>
                                <span>{{list.ascriptionPhone}}</span>
                                <p>{{list.provinceName+''+list.cityName+''+list.areaName}}</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    </div>
</transition>
</template>

<script>
export default {
    name: 'tables',
    data() {
        return {
            search: '',
            searchData: '',
            products: [
                //假数据
                {
                    'addressId': '6554536248428871691',
                    'address': 'e通世界南区',
                    'provinceCode': '310000',
                    'provinceName': '上海',
                    'cityCode': '310100',
                    'cityName': '上海市',
                    'areaCode': '310118',
                    'areaName': '青浦区',
                    'creater': 'system@yimidida',
                    'createTime': '2019-07-15T10:00:39Z',
                    'isDelete': 1,
                    'isDefault': 1,
                    'ascriptionPhone': '17000000000',
                    'phoneName': '张三',
                    'customerCode': 'WXKY11500216249',
                    'channelType': 1,
                    'modifier': 'system@yimidida',
                    'modifierTime': '2019-07-15T02:02:05Z',
                    'recordVersion': 0
                },
                {
                    'addressId': '6554536248428871691',
                    'address': 'e通世界南区',
                    'provinceCode': '310000',
                    'provinceName': '上海',
                    'cityCode': '310100',
                    'cityName': '上海市',
                    'areaCode': '310118',
                    'areaName': '青浦区',
                    'creater': 'system@yimidida',
                    'createTime': '2019-07-15T10:00:39Z',
                    'isDelete': 1,
                    'isDefault': 1,
                    'ascriptionPhone': '18000000000',
                    'phoneName': '李四',
                    'customerCode': 'WXKY11500216249',
                    'channelType': 1,
                    'modifier': 'system@yimidida',
                    'modifierTime': '2019-07-15T02:02:05Z',
                    'recordVersion': 0
                },
                {
                    'addressId': '6554536248428871691',
                    'address': 'e通世界南区',
                    'provinceCode': '310000',
                    'provinceName': '上海',
                    'cityCode': '310100',
                    'cityName': '上海市',
                    'areaCode': '310118',
                    'areaName': '青浦区',
                    'creater': 'system@yimidida',
                    'createTime': '2019-07-15T10:00:39Z',
                    'isDelete': 1,
                    'isDefault': 1,
                    'ascriptionPhone': '18000000000',
                    'phoneName': '王麻子',
                    'customerCode': 'WXKY11500216249',
                    'channelType': 1,
                    'modifier': 'system@yimidida',
                    'modifierTime': '2019-07-15T02:02:05Z',
                    'recordVersion': 0
                }
            ]
        };
    },
    created: function () {
        this.inintData();
    },
    methods: {
        inintData() {
            this.searchData = this.products;
        },
        submitFun() {
            let search = this.search;
            this.searchData = this.products.filter(function (product) {
                console.log('过滤', product);
                let searchField = {
                    phoneName: product.phoneName,
                    ascriptionPhone: product.ascriptionPhone
                };
                return Object.keys(searchField).some(function (key) {
                    console.log('key值', key);
                    return String(product[key]).toLowerCase().indexOf(search) > -1;
                });
            });
        }

    }

};
</script>

<style>
.cont{
    /* padding-top:20px; */
    

}

</style>
