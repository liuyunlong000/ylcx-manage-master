import request from '/@/utils/request';

/**
 * 添加行政区划
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/sysCommonXzqh/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑行政区划
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/sysCommonXzqh/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除行政区划
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/sysCommonXzqh/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除行政区划
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/sysCommonXzqh/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询行政区划
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/sysCommonXzqh/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取行政区划列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/sysCommonXzqh/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取行政区划列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/sysCommonXzqh/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用行政区划
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/sysCommonXzqh/disable',
        method: 'get',
        params: data
    });
}
