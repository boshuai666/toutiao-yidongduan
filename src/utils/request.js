/**
 * 封装 axios 请求模块
 */
import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn' // 接口的基准路径
  // baseURL: 'http://api-toutiao-web.itheima.net' // 接口的基准路径
  // 跟地址写了/,写请求地址的时候就不需要写/
  baseURL: 'http://toutiao.itheima.net' // 接口的基准路径
})

export default request
