import axios from 'axios'
const LoginUsers = [
    {   
        id:1,
        username:'admin',
        password:'123456'
    }
]
const users=[];
let _users = users;

//封装调用api

export default {
    bootstrap() {
        //获取列表
        axios.post('').reply(config => {
            let { name } = config.params;
            console.log(config)
            let ausers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        users: auser
                    }]);
                }, 1000);
            });
        });
        //

        //删除用户  
        axios.delete('/delete').reply(config => {
            let { id } = config.params;
            _Users = _Users.filter(u => u.id !== id);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '删除成功'
                    }]);
                }, 500);
            });
        });

        //获取用户列表（分页）
        axios.onGet('/user/listpage').reply(config => {
            let { page, name } = config.params;
            let ausers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            let total = ausers.length;
            ausers = ausers.filter((u, index) => index < 25 * page && index >= 20 * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        total: total,
                        users: ausers
                    }]);
                }, 1000);
            });
        });

        //批量删除用户
        mock.onGet('/user/batchremove').reply(config => {
            let { ids } = config.params;
            ids = ids.split(',');
            _Users = _Users.filter(u => !ids.includes(u.id));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '删除成功'
                    }]);
                }, 500);
            });
        });

        //编辑用户
        axios.updata('/updata').reply(config => {
            let { id, name, address, age, birthday, sex } = config.params;
            _Users.some(u => {
                if (u.id === id) {
                    u.name = name;
                    u.address = address;
                    u.age = age;
                    u.birthday = birthday;
                    u.sex = sex;
                    return true;
                }
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '编辑成功'
                    }]);
                }, 500);
            });
        });

        //新增用户
        axios.post('/insert').reply(config => {
            let { name, address, age, birthday, sex } = config.params;
            _Users.push({
                name: name,
                address: address,
                age: age,
                birthday: birthday,
                sex: sex
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '新增成功'
                    }]);
                }, 500);
            });
        });
    }


}