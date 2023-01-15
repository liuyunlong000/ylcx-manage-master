import request from '/@/utils/request';

/**
 * 添加行程登记信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/cxTrip/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑行程登记信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/cxTrip/update',
        method: 'put',
        data,
    });
}

/**
 * 行程审核
 * @param data
 * @returns {AxiosPromise}
 */
export function auth_opinion(data:any) {
    return request({
        url: '/cxTrip/authOpinion',
        method: 'put',
        data,
    });
}

/**
 * 按id删除行程登记信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/cxTrip/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除行程登记信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/cxTrip/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询行程登记信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/cxTrip/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取行程登记信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/cxTrip/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取行程登记信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/cxTrip/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用行程登记信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/cxTrip/disable',
        method: 'get',
        params: data
    });
}

/**
 * 根据手机号、车牌号、客货标识获取行程信息
 * @param data
 * @returns {AxiosPromise}
 */
 export function pass(data:any) {
    return request({
        url: '/cxTrip/pass',
        method: 'get',
        params: data
    });
}
