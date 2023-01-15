import request from '/@/utils/request';

/**
 * 添加采集点
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/hsCabin/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑采集点
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/hsCabin/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除采集点
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/hsCabin/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除采集点
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/hsCabin/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询采集点
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/hsCabin/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取采集点列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/hsCabin/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取采集点列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/hsCabin/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用采集点
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/hsCabin/disable',
        method: 'get',
        params: data
    });
}
