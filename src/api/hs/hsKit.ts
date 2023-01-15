import request from '/@/utils/request';

/**
 * 添加采样试剂
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/hsKit/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑采样试剂
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/hsKit/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除采样试剂
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/hsKit/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除采样试剂
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/hsKit/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询采样试剂
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/hsKit/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取采样试剂列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/hsKit/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取采样试剂列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/hsKit/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用采样试剂
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/hsKit/disable',
        method: 'get',
        params: data
    });
}
