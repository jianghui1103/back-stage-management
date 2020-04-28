
import axios from 'axios';
//定义设定公用接口
let base = 'http://172.20.37.59:8080/api/student';
export const requestLogin = params => { 
return axios.post(`${base}/authenticate`, params) //路径
    .then(res => res.data) //成功的在data里
};
export const getList = (authorization, path, params) => {
  return axios({
    method: 'POST',
    url: `${base}/${path}`,
    headers: {
    'accessToken_cookie' : authorization
    },
    data: params
  })
}
