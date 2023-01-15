import request from '/@/utils/request';

/**
 * 添加来（返）肥报备
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/hsReportPerson/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑来（返）肥报备
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/hsReportPerson/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除来（返）肥报备
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/hsReportPerson/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除来（返）肥报备
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/hsReportPerson/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询来（返）肥报备
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/hsReportPerson/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取来（返）肥报备列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/hsReportPerson/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取来（返）肥报备列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/hsReportPerson/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用来（返）肥报备
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/hsReportPerson/disable',
        method: 'get',
        params: data
    });
}
