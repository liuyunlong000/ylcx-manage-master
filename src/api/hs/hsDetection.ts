import request from '/@/utils/request';

/**
 * 添加检测点
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/hsDetection/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑检测点
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/hsDetection/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除检测点
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/hsDetection/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除检测点
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/hsDetection/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询检测点
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/hsDetection/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取检测点列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/hsDetection/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取检测点列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/hsDetection/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用检测点
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/hsDetection/disable',
        method: 'get',
        params: data
    });
}
