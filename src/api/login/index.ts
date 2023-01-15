import request from '/@/utils/request';

/**
 * 登录
 * @param data
 * @returns {AxiosPromise<any>}
 */
export async function login(data: object) {
    return request({
        url: '/oauth/token',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    });
}

/**
 * 用户注册
 * @param data
 * @returns {AxiosPromise}
 */
export function register(data: any) {
    return request({
        url: '/sysUser/register',
        method: 'post',
        data,
    });
}


/**
 * 退出系统
 */
export function logout() {
    return request({
        url: '/oauth/revoke',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    });
}
