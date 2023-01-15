import request from '/@/utils/request';

/**
 * 添加采样记录
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/hsSamplingRecord/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑采样记录
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/hsSamplingRecord/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除采样记录
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/hsSamplingRecord/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除采样记录
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/hsSamplingRecord/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询采样记录
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/hsSamplingRecord/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取采样记录列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/hsSamplingRecord/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取采样记录列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/hsSamplingRecord/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用采样记录
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/hsSamplingRecord/disable',
        method: 'get',
        params: data
    });
}
