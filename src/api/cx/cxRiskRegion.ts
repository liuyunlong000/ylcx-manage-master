import request from '/@/utils/request';

/**
 * 添加风险地区表
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/cxRiskRegion/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑风险地区表
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/cxRiskRegion/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除风险地区表
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/cxRiskRegion/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除风险地区表
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/cxRiskRegion/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询风险地区表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/cxRiskRegion/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取风险地区表列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/cxRiskRegion/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取风险地区表列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/cxRiskRegion/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用风险地区表
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/cxRiskRegion/disable',
        method: 'get',
        params: data
    });
}
