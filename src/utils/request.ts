import axios, { AxiosResponse } from 'axios';
import { Session } from '/@/utils/common/storage';
import { gp } from '/@/utils/common/messageBox';
import qs from 'qs';

// 配置新建一个 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL as any,
    timeout: 50000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        if (config.data && (<any>config.headers)['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
            config.data = qs.stringify(config.data);
        }
        // 在发送请求之前做些什么 token
        if (Session.get('token')) {
            (<any>config.headers).common['Authorization'] = `Bearer ${Session.get('token')}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
/**
 * @description axios响应拦截器
 */
service.interceptors.response.use(
    (response) => handleData(response),
    (error) => {
        // 对响应错误做点什么
        if (error.message.indexOf('timeout') != -1) {
            gp.$baseMessage('网络超时', 'error');
            return {};
        } else if (error.message == 'Network Error') {
            gp.$baseMessage('网络连接错误', 'error');
            return {};
        } else {
            if (error.response && error.response.data) {
                gp.$baseMessage(error.response.msg, 'error');
            } else if (error.response === undefined) {
                gp.$baseMessage('未可知错误，可能是因为后端接口地址不存在等问题引起', 'error');
                return {};
            }
            return handleData(error.response);
        }
    }
);
/**
 * axios响应拦截器
 * @param config 请求配置
 * @param data response数据
 * @param status HTTP status
 * @param statusText HTTP status text
 * @returns {Promise<*|*>}
 */
const handleData = async (response: AxiosResponse) => {
    const res = response.data;
    if (res.code) {
        if (res.code === 1007 || res.code === 1008 || res.code === 1011) {
            // `token` 过期或者无效
            Session.clear(); // 清除浏览器全部临时缓存
            window.location.href = '/'; // 去登录页
            gp.$baseAlert('你已被登出，请重新登录', '提示', {});
        }
        return response.data;
    } else {
        return Promise.reject(service.interceptors.response);
    }
};

// 导出 axios 实例
export default service;
