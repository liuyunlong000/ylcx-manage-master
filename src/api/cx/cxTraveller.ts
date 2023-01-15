import request from '/@/utils/request';

/**
 * 添加出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/cxTraveller/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/cxTraveller/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/cxTraveller/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/cxTraveller/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/cxTraveller/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取出行人列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/cxTraveller/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取出行人列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/cxTraveller/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/cxTraveller/disable',
        method: 'get',
        params: data
    });
}
