import request from '/@/utils/request';

/**
 * 按id删除操作日志
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data: any) {
    return request({
        url: '/sysCommonFilter/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除操作日志
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data: any) {
    return request({
        url: '/sysCommonFilter/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询操作日志
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data: any) {
    return request({
        url: '/sysCommonFilter/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取操作日志列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data: any) {
    return request({
        url: '/sysCommonFilter/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取操作日志列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data: any) {
    return request({
        url: '/sysCommonFilter/find_list_by_page',
        method: 'post',
        data,
    });
}
