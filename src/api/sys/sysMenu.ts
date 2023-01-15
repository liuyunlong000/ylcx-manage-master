import request from '/@/utils/request';

/**
 * 添加菜单信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data: any) {
    return request({
        url: '/sysMenu/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑菜单信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data: any) {
    return request({
        url: '/sysMenu/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除菜单信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data: any) {
    return request({
        url: '/sysMenu/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除菜单信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data: any) {
    return request({
        url: '/sysMenu/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询菜单信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data: any) {
    return request({
        url: '/sysMenu/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取菜单信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data: any) {
    return request({
        url: '/sysMenu/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取菜单信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data: any) {
    return request({
        url: '/sysMenu/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用菜单信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data: any) {
    return request({
        url: '/sysMenu/disable',
        method: 'get',
        params: data,
    });
}

/**
 * 获取菜单树形列表
 * @param data
 * @returns {AxiosPromise}
 */
export function menu_tree_list(data: any) {
    return request({
        url: '/sysMenu/menu_tree_list',
        method: 'post',
        params: data,
    });
}
