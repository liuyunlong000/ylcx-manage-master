import request from '/@/utils/request';

/**
 * 添加摄像机
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/hsCamera/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑摄像机
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/hsCamera/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除摄像机
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/hsCamera/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除摄像机
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/hsCamera/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询摄像机
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/hsCamera/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取摄像机列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/hsCamera/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取摄像机列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/hsCamera/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用摄像机
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/hsCamera/disable',
        method: 'get',
        params: data
    });
}
