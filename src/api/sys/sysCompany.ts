import request from '/@/utils/request';

/**
 * 添加公司信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/sysCompany/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑公司信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/sysCompany/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除公司信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/sysCompany/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除公司信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/sysCompany/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询公司信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/sysCompany/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取公司信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/sysCompany/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取公司信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/sysCompany/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用公司信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/sysCompany/disable',
        method: 'get',
        params: data
    });
}
