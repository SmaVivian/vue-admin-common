import service from '@/utils/request'

// 登录
export function login(username, password) {
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username,
  //     password
  //   }
  // })
  return service.post('/user/login', {
    username,
    password
  })
}

// 获取用户信息
export function getInfo(token) {
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  return service.get('/user/info', {
    params: { token }
  })
}

// 登出
export function logout() {
  return service.post('/user/logout')
}
