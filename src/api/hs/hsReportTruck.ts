import request from '/@/utils/request';

/**
 * 添加入肥货车司乘人员报备
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/hsReportTruck/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑入肥货车司乘人员报备
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/hsReportTruck/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除入肥货车司乘人员报备
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/hsReportTruck/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除入肥货车司乘人员报备
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/hsReportTruck/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询入肥货车司乘人员报备
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/hsReportTruck/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取入肥货车司乘人员报备列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/hsReportTruck/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取入肥货车司乘人员报备列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/hsReportTruck/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用入肥货车司乘人员报备
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/hsReportTruck/disable',
        method: 'get',
        params: data
    });
}
