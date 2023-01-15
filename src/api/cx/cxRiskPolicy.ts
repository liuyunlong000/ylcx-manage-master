import request from '/@/utils/request';

/**
 * 添加防疫政策表
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/cxRiskPolicy/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑防疫政策表
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/cxRiskPolicy/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除防疫政策表
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/cxRiskPolicy/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除防疫政策表
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/cxRiskPolicy/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询防疫政策表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/cxRiskPolicy/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取防疫政策表列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/cxRiskPolicy/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取防疫政策表列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/cxRiskPolicy/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用防疫政策表
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/cxRiskPolicy/disable',
        method: 'get',
        params: data
    });
}
