import request from '/@/utils/request';

/**
 * 获取指定数据字典集合
 * @param data
 * @returns {AxiosPromise}
 */
export function find_map(data: any) {
    return request({
        url: '/sysCommonDict/find_map',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    });
}

/**
 * 添加数据字典
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data: any) {
    return request({
        url: '/sysCommonDict/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑数据字典
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data: any) {
    return request({
        url: '/sysCommonDict/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除数据字典
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data: any) {
    return request({
        url: '/sysCommonDict/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除数据字典
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data: any) {
    return request({
        url: '/sysCommonDict/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询数据字典
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data: any) {
    return request({
        url: '/sysCommonDict/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取数据字典列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data: any) {
    return request({
        url: '/sysCommonDict/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取数据字典列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data: any) {
    return request({
        url: '/sysCommonDict/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用数据字典
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data: any) {
    return request({
        url: '/sysCommonDict/disable',
        method: 'get',
        params: data,
    });
}
