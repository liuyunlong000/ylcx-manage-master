import request from '/@/utils/request';

/**
 * 添加行程关联出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/cxTripUser/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑行程关联出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/cxTripUser/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除行程关联出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/cxTripUser/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除行程关联出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/cxTripUser/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询行程关联出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/cxTripUser/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取行程关联出行人列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/cxTripUser/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取行程关联出行人列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/cxTripUser/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用行程关联出行人
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/cxTripUser/disable',
        method: 'get',
        params: data
    });
}
