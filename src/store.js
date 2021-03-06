import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// login 登陆状态管理
const state = {
  token: null
}


const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  REMOVE_TOKEN (state) {
    state.token = null
  }
}
export default new Vuex.Store({
  state,
  mutations
});


const store = new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = ''; 
      state.token = '';
    },
  },
  actions: {
    Login({commit}, user) {
      return new Promise((resolve, reject) => {
      commit('auth_request')
      // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
      axios.post('login', user)
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          // 每次请求接口时，需要在headers添加对应的Token验证
          axios.defaults.headers.common['Authorization'] = token
          // 更新token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get('Logout')
          .then(response => {
            removeIsLogin()
            localStorage.removeItem('loginUsername');
            // 移除之前在axios头部设置的token,现在将无法执行需要token的事务

            delete axios.defaults.headers.common['Authorization'];
     resolve(response)
           })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    // !!将state.token强制转换为布尔值，若state.token存在且不为空(已登录)则返回true，反之返回false
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});

// export default store;
