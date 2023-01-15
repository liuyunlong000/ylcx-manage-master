import request from '/@/utils/request';

/**
 * 添加途径城市信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/cxTripCity/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑途径城市信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/cxTripCity/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除途径城市信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/cxTripCity/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除途径城市信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/cxTripCity/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询途径城市信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/cxTripCity/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取途径城市信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/cxTripCity/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取途径城市信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/cxTripCity/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用途径城市信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/cxTripCity/disable',
        method: 'get',
        params: data
    });
}
