import { request } from '../utils'
import {postf} from '../utils/request'
export async function login (params) {
  console.log("login:",params)
 //return postf('/api/login',params,(data)=> data);
  return request('/api/login', {
    method: 'post',
    data: params
  })
}

export async function logout (params) {
  return request('/api/logout', {
    method: 'post',
    data: params
  })
}

export async function userInfo (params) {
  return request('/api/userInfo', {
    method: 'get',
    data: params
  })
}
