import request from '/@/utils/request';

/**
 * 添加重点关注人员信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data:any) {
    return request({
        url: '/yqPerson/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑重点关注人员信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data:any) {
    return request({
        url: '/yqPerson/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除重点关注人员信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data:any) {
    return request({
        url: '/yqPerson/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除重点关注人员信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data:any) {
    return request({
        url: '/yqPerson/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询重点关注人员信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data:any) {
    return request({
        url: '/yqPerson/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取重点关注人员信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data:any) {
    return request({
        url: '/yqPerson/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取重点关注人员信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data:any) {
    return request({
        url: '/yqPerson/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用重点关注人员信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data:any) {
    return request({
        url: '/yqPerson/disable',
        method: 'get',
        params: data
    });
}
