import {loginByuserinfo} from '../api/login'
const login = {
    state:{
        id:'',
        username:'',
        password:'',
    },
    mutations:{
        SET_USERNAME:(state,username)=>{
            state.username = username
        },
        SET_PASSWORD:(state,password)=>{
            state.password = password 
        },
        SET_ID:(state,id)=>{
            state.id = id 
        }

    },
    actions:{
        login({commit},info){
            let data = {}
            //遍历登录信息数据
            loginByuserinfo.map(function(item){
                if(info.username === item.username & info.password === item.password){
                    commit('SET_USERNAME',item.username);
                    commit('SET_PASSWORD',item.password);
                    commit('SET_ID',item.id)

                }else{
                    alert("账号密码错误，请重新输入")
                }

                
            })




        }

    },



}
export default login;