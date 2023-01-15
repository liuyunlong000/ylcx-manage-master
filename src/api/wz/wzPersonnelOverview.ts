import request from '/@/utils/request';

/**
 * 添加暂无信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/wzPersonnelOverview/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑暂无信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/wzPersonnelOverview/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除暂无信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/wzPersonnelOverview/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除暂无信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/wzPersonnelOverview/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询暂无信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/wzPersonnelOverview/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取暂无信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/wzPersonnelOverview/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取暂无信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/wzPersonnelOverview/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用暂无信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/wzPersonnelOverview/disable',
        method: 'get',
        params: data
    });
}
